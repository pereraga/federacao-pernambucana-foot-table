<?php
/**
 * ==============================================================================
 * FEDERAÇÃO PERNAMBUCANA DE FOOT TABLE (FPEFT)
 * PACOTE DE SEGURANÇA E BLINDAGEM INSTITUCIONAL (WAF & SECURITY ARMOR)
 * Proteção Ativa Contra Invasões, Injeções, RCE, LFI/RFI e Sequestro de Sessão
 * ==============================================================================
 */

class FPEFTSecurityArmor {

    // Lista negra de funções de execução remota de código (RCE)
    private static $rcePatterns = [
        '/\b(eval|assert|passthru|shell_exec|system|proc_open|popen|pcntl_exec)\s*\(/i',
        '/\b(base64_decode|gzinflate|str_rot13)\s*\(/i',
        '/\b(phpinfo|posix_getpwuid|posix_kill)\s*\(/i',
        '/\b(curl_exec|file_get_contents|readfile)\s*\(\s*["\'](http|ftp|php|data|phar)/i'
    ];

    // Padrões de Inclusão de Arquivos Local/Remota (LFI / RFI) e Stream Wrappers
    private static $inclusionPatterns = [
        '/\.\.[\/\\\\]/',                         // Directory traversal (../ ou ..\)
        '/php:\/\/(input|filter|memory|temp)/i',  // PHP Streams maliciosos
        '/(data|phar|zip|glob|expect):\/\//i',    // Protocol Wrappers
        '/\b(include|require)(_once)?\s*[\'"][^\'"]*(\.\.|\/\/)/i'
    ];

    // Padrões de SQL Injection (SQLi)
    private static $sqliPatterns = [
        '/\b(union(\s+all)?\s+select)\b/i',
        '/\b(information_schema|sys\.tables|sys\.databases)\b/i',
        '/\b(select\s+.*?\s+from\s+.*?where)\b/i',
        '/\b(benchmark|sleep)\s*\(\s*\d+\s*\)/i',
        '/[\'"]\s*(or|and)\s*[\'"]?1[\'"]?\s*=\s*[\'"]?1/i',
        '/(--|#|\/\*).*?$/'
    ];

    // Padrões de Cross-Site Scripting (XSS)
    private static $xssPatterns = [
        '/<script\b[^>]*>(.*?)<\/script>/is',
        '/<iframe\b[^>]*>(.*?)<\/iframe>/is',
        '/javascript\s*:\s*[^\s"\']+/i',
        '/on(load|error|click|mouseover|submit|focus|blur)\s*=\s*[\'"][^\'"]*[\'"]/i',
        '/document\.(cookie|location|write)/i'
    ];

    /**
     * Inicializa todas as barreiras de proteção do sistema
     */
    public static function init() {
        self::enforceHeaders();
        self::sanitizeSuperglobals();
        self::inspectIncomingRequest();
        self::enforceSecureSession();
    }

    /**
     * Aplica cabeçalhos HTTP de segurança estritos (Defense-in-Depth)
     */
    public static function enforceHeaders() {
        if (headers_sent()) return;

        // Ocultação de tecnologias
        @ini_set('expose_php', 'Off');
        if (function_exists('header_remove')) {
            header_remove('X-Powered-By');
            header_remove('Server');
        }

        header('X-Content-Type-Options: nosniff');
        header('X-Frame-Options: DENY');
        header('Referrer-Policy: strict-origin-when-cross-origin');
        header('X-XSS-Protection: 1; mode=block');
        header('Permissions-Policy: camera=(), microphone=(), geolocation=()');

        if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') {
            header('Strict-Transport-Security: max-age=63072000; includeSubDomains; preload');
        }

        header("Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tailwindcss.com https://cdnjs.cloudflare.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' data: https://fonts.gstatic.com https://cdnjs.cloudflare.com; img-src 'self' data: blob: https:; connect-src 'self' https://*.supabase.co wss://*.supabase.co; frame-ancestors 'none';");
    }

    /**
     * Inspeciona a requisição atual procurando por qualquer vetor de ataque
     */
    public static function inspectIncomingRequest() {
        $uri = $_SERVER['REQUEST_URI'] ?? '';
        $query = $_SERVER['QUERY_STRING'] ?? '';
        $rawInput = @file_get_contents('php://input') ?? '';

        $targets = [$uri, $query, $rawInput];

        foreach ($targets as $target) {
            if (empty($target)) continue;

            // 1. Verificação de RCE
            foreach (self::$rcePatterns as $pattern) {
                if (preg_match($pattern, $target)) {
                    self::blockAttack('Tentativa de Execução Remota de Código (RCE)', $pattern);
                }
            }

            // 2. Verificação de LFI / RFI / Stream Wrappers
            foreach (self::$inclusionPatterns as $pattern) {
                if (preg_match($pattern, $target)) {
                    self::blockAttack('Tentativa de Inclusão de Arquivos / Traversal (LFI/RFI)', $pattern);
                }
            }

            // 3. Verificação de SQLi
            foreach (self::$sqliPatterns as $pattern) {
                if (preg_match($pattern, $target)) {
                    self::blockAttack('Tentativa de Injeção de SQL (SQLi)', $pattern);
                }
            }

            // 4. Verificação de XSS
            foreach (self::$xssPatterns as $pattern) {
                if (preg_match($pattern, $target)) {
                    self::blockAttack('Tentativa de Cross-Site Scripting (XSS)', $pattern);
                }
            }
        }
    }

    /**
     * Sanitiza recursivamente os arrays superglobais de entrada
     */
    public static function sanitizeSuperglobals() {
        $_GET = self::cleanData($_GET);
        $_POST = self::cleanData($_POST);
        $_COOKIE = self::cleanData($_COOKIE);
    }

    private static function cleanData($data) {
        if (is_array($data)) {
            foreach ($data as $key => $value) {
                $cleanKey = preg_replace('/[^\w\-]/', '', $key);
                $data[$cleanKey] = self::cleanData($value);
            }
            return $data;
        }
        if (is_string($data)) {
            // Remove caracteres nulos (%00) e caracteres de controle invisíveis
            $data = str_replace(chr(0), '', $data);
            return trim($data);
        }
        return $data;
    }

    /**
     * Blindagem e validação rigorosa de uploads
     */
    public static function validateUpload($file, array $allowedExtensions = ['jpg', 'jpeg', 'png', 'pdf'], $maxBytes = 5242880) {
        if (!isset($file['error']) || is_array($file['error'])) {
            return ['valid' => false, 'error' => 'Arquivo inválido ou corrompido'];
        }

        if ($file['error'] !== UPLOAD_ERR_OK) {
            return ['valid' => false, 'error' => 'Erro no upload do arquivo (código: ' . $file['error'] . ')'];
        }

        if ($file['size'] > $maxBytes) {
            return ['valid' => false, 'error' => 'Tamanho máximo permitido é de 5MB'];
        }

        // Extensão permitida
        $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
        if (!in_array($ext, $allowedExtensions)) {
            return ['valid' => false, 'error' => 'Extensão não permitida: .' . $ext];
        }

        // Bloqueio rigoroso de extensões perigosas ou duplas (.php.jpg)
        $dangerous = ['php', 'phtml', 'php3', 'php4', 'php5', 'php7', 'phps', 'phar', 'inc', 'sh', 'pl', 'cgi', 'exe', 'bat', 'htaccess'];
        $nameParts = explode('.', strtolower($file['name']));
        foreach ($nameParts as $part) {
            if (in_array($part, $dangerous)) {
                self::blockAttack('Tentativa de Upload de Arquivo Executável / Malicioso', $file['name']);
            }
        }

        // Validação de MIME Type via finfo
        if (function_exists('finfo_open')) {
            $finfo = finfo_open(FILEINFO_MIME_TYPE);
            $mime = finfo_file($finfo, $file['tmp_name']);
            finfo_close($finfo);

            $allowedMimes = [
                'jpg' => 'image/jpeg',
                'jpeg' => 'image/jpeg',
                'png' => 'image/png',
                'pdf' => 'application/pdf'
            ];

            if (!isset($allowedMimes[$ext]) || $mime !== $allowedMimes[$ext]) {
                return ['valid' => false, 'error' => 'O conteúdo do arquivo não corresponde à sua extensão'];
            }
        }

        // Gera nome seguro sem caracteres especiais
        $safeName = bin2hex(random_bytes(16)) . '.' . $ext;

        return [
            'valid' => true,
            'safe_name' => $safeName,
            'extension' => $ext,
            'size' => $file['size']
        ];
    }

    /**
     * Controle de Sessão Anti-Sequestro e Anti-Fixação
     */
    public static function enforceSecureSession() {
        if (session_status() !== PHP_SESSION_ACTIVE) return;

        // Impede Session Fixation e Hijacking validando User-Agent
        $currentUserAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';
        $currentIpPrefix = substr($_SERVER['REMOTE_ADDR'] ?? '127.0.0.1', 0, 7);

        if (!isset($_SESSION['_armor_fingerprint'])) {
            $_SESSION['_armor_fingerprint'] = hash('sha256', $currentUserAgent . $currentIpPrefix);
            $_SESSION['_armor_created_at'] = time();
        } else {
            $checkFingerprint = hash('sha256', $currentUserAgent . $currentIpPrefix);
            if (!hash_equals($_SESSION['_armor_fingerprint'], $checkFingerprint)) {
                // Tentativa de roubo de sessão detectada: destrói imediatamente
                $_SESSION = [];
                session_destroy();
                self::blockAttack('Sequestro de Sessão Detectado (Fingerprint Divergente)', $currentUserAgent);
            }
        }

        // Rotação periódica de Session ID (a cada 15 minutos)
        if (isset($_SESSION['_armor_created_at']) && (time() - $_SESSION['_armor_created_at'] > 900)) {
            session_regenerate_id(true);
            $_SESSION['_armor_created_at'] = time();
        }
    }

    /**
     * Rate Limiting simples para conter ataques de força bruta
     */
    public static function checkRateLimit($action = 'general', $maxAttempts = 30, $periodSeconds = 60) {
        $ip = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
        $tempDir = sys_get_temp_dir();
        $cacheFile = $tempDir . '/fpeft_ratelimit_' . md5($ip . '_' . $action) . '.json';

        $now = time();
        $data = ['attempts' => 0, 'first_attempt' => $now];

        if (file_exists($cacheFile)) {
            $json = @file_get_contents($cacheFile);
            if ($json) {
                $parsed = json_decode($json, true);
                if (is_array($parsed)) {
                    $data = $parsed;
                }
            }
        }

        // Se o período expirou, reseta o contador
        if ($now - $data['first_attempt'] > $periodSeconds) {
            $data = ['attempts' => 1, 'first_attempt' => $now];
        } else {
            $data['attempts']++;
        }

        @file_put_contents($cacheFile, json_encode($data), LOCK_EX);

        if ($data['attempts'] > $maxAttempts) {
            http_response_code(429);
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode([
                'error' => 'Muitas requisições (Rate Limit Excedido)',
                'retry_after' => ($data['first_attempt'] + $periodSeconds) - $now
            ]);
            exit;
        }
    }

    /**
     * Interrompe a requisição e emite bloqueio 403 Forbidden
     */
    private static function blockAttack($reason, $details = '') {
        http_response_code(403);
        header('Content-Type: application/json; charset=utf-8');

        // Log de incidente de segurança no servidor
        @error_log(sprintf(
            '[FPEFT SECURITY SHIELD] IP: %s | Motivo: %s | Detalhes: %s | URI: %s',
            $_SERVER['REMOTE_ADDR'] ?? 'UNKNOWN',
            $reason,
            substr($details, 0, 100),
            $_SERVER['REQUEST_URI'] ?? ''
        ));

        echo json_encode([
            'status' => 'bloqueado',
            'code' => 403,
            'alerta' => 'Acesso negado pelo Sistema de Segurança da Federação Pernambucana de Foot Table (FPEFT Armor).',
            'incidente' => $reason
        ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        exit;
    }
}

// Inicia imediatamente a blindagem ativa
FPEFTSecurityArmor::init();
