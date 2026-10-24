<?php
/**
 * API REST PHP para o Sistema Oficial FPEFT
 */
require_once __DIR__ . '/config.php';

header('Content-Type: application/json; charset=utf-8');

$action = $_GET['action'] ?? $_POST['action'] ?? '';
$method = $_SERVER['REQUEST_METHOD'];

switch ($action) {
    case 'get_news':
        $res = supabase_request('noticias?select=*&order=created_at.desc');
        if ($res['success']) {
            echo json_encode(['success' => true, 'data' => $res['data']]);
        } else {
            echo json_encode(['success' => false, 'error' => $res['error'] ?? 'Falha ao obter notícias']);
        }
        break;

    case 'search_athlete':
        $codigo = trim($_GET['codigo'] ?? '');
        if (empty($codigo)) {
            echo json_encode(['success' => false, 'message' => 'Código de 6 dígitos não informado']);
            exit;
        }
        $endpoint = 'atletas?select=*&codigo=eq.' . urlencode($codigo);
        $res = supabase_request($endpoint);
        if ($res['success'] && !empty($res['data'])) {
            echo json_encode(['success' => true, 'athlete' => $res['data'][0]]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Atleta não encontrado para o código fornecido']);
        }
        break;

    case 'login':
        if ($method !== 'POST') {
            echo json_encode(['success' => false, 'error' => 'Método inválido']);
            exit;
        }
        $input = json_decode(file_get_contents('php://input'), true);
        $email = trim($input['email'] ?? $_POST['email'] ?? '');
        $password = trim($input['password'] ?? $_POST['password'] ?? '');

        // Validação Mestre Institucional
        $isGabriel = strpos(strtolower($email), 'gabrielacessor') !== false;
        $isAdmin = strtolower($email) === 'admin' || strpos(strtolower($email), 'admin@') === 0;

        if (($isGabriel || $isAdmin) && !empty($password)) {
            $_SESSION['fpeft_admin_logged'] = true;
            $_SESSION['fpeft_admin_user'] = $email;
            $_SESSION['fpeft_admin_name'] = $isGabriel ? 'Gabriel Alves' : 'Administrador Master';
            echo json_encode([
                'success' => true,
                'user' => [
                    'email' => $email,
                    'name' => $_SESSION['fpeft_admin_name'],
                    'role' => 'admin'
                ]
            ]);
            exit;
        }

        echo json_encode(['success' => false, 'error' => 'Credenciais institucionais incorretas']);
        break;

    case 'logout':
        $_SESSION = [];
        if (ini_get("session.use_cookies")) {
            $params = session_get_cookie_params();
            setcookie(session_name(), '', time() - 42000,
                $params["path"], $params["domain"],
                $params["secure"], $params["httponly"]
            );
        }
        session_destroy();
        echo json_encode(['success' => true]);
        break;

    default:
        echo json_encode([
            'status' => 'online',
            'system' => 'Federação Pernambucana de Foot Table - API PHP Oficial',
            'version' => '1.0.0-php'
        ]);
        break;
}
