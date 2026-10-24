<?php
/**
 * FEDERAÇÃO PERNAMBUCANA DE FOOT TABLE (FPEFT)
 * Arquivo Central de Configuração, Segurança e Conexão Supabase
 * Versão PHP 8.x Portátil
 */

// Injeção do Pacote de Segurança e WAF Ativo
require_once __DIR__ . '/security.php';

// Iniciar buffer de saída para permitir envio seguro de cabeçalhos
if (!ob_get_level()) {
    ob_start();
}

// Configurações de Sessão Segura
if (session_status() === PHP_SESSION_NONE) {
    session_set_cookie_params([
        'lifetime' => 0,
        'path' => '/',
        'domain' => $_SERVER['HTTP_HOST'] ?? '',
        'secure' => isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on',
        'httponly' => true,
        'samesite' => 'Lax'
    ]);
    session_start();
}

// Cabeçalhos de Segurança Estritos (Defense-in-Depth)
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('Referrer-Policy: strict-origin-when-cross-origin');
header('X-XSS-Protection: 1; mode=block');

// Constantes do Supabase Oficial da Federação
define('SUPABASE_URL', 'https://qvnsahvdjhimlmtqrnif.supabase.co');
define('SUPABASE_ANON_KEY', 'sb_publishable_vvqh9vB0Dr0EqR9JGhy4kA_XnJ-9h0z');

/**
 * Função utilitária para comunicação REST com o Supabase via cURL
 */
function supabase_request($endpoint, $method = 'GET', $data = null) {
    $url = rtrim(SUPABASE_URL, '/') . '/rest/v1/' . ltrim($endpoint, '/');
    $ch = curl_init();

    $headers = [
        'apikey: ' . SUPABASE_ANON_KEY,
        'Authorization: Bearer ' . SUPABASE_ANON_KEY,
        'Content-Type: application/json',
        'Prefer: return=representation'
    ];

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);

    switch (strtoupper($method)) {
        case 'POST':
            curl_setopt($ch, CURLOPT_POST, true);
            if ($data !== null) {
                curl_setopt($ch, CURLOPT_POSTFIELDS, is_string($data) ? $data : json_encode($data));
            }
            break;
        case 'PATCH':
        case 'PUT':
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, strtoupper($method));
            if ($data !== null) {
                curl_setopt($ch, CURLOPT_POSTFIELDS, is_string($data) ? $data : json_encode($data));
            }
            break;
        case 'DELETE':
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');
            break;
        default:
            curl_setopt($ch, CURLOPT_HTTPGET, true);
            break;
    }

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);

    if ($error) {
        return ['success' => false, 'error' => $error, 'code' => 500];
    }

    $decoded = json_decode($response, true);
    return [
        'success' => ($httpCode >= 200 && $httpCode < 300),
        'code' => $httpCode,
        'data' => $decoded !== null ? $decoded : $response
    ];
}

/**
 * Sanitização básica de strings contra XSS e injeções
 */
function safe_html($str) {
    return htmlspecialchars((string)$str, ENT_QUOTES, 'UTF-8');
}

/**
 * Verificação de autenticação administrativa
 */
function is_admin_logged() {
    return !empty($_SESSION['fpeft_admin_logged']) && $_SESSION['fpeft_admin_logged'] === true;
}

/**
 * Exige autenticação de administrador ou redireciona
 */
function require_admin_auth() {
    if (!is_admin_logged()) {
        header('Location: login.php');
        exit;
    }
}
