<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

define('BASE_PATH', realpath('../') . '/');
define('PLUGIN_PATH', realpath('../plugins') . '/');
define('SYS_PATH', realpath('../system').'/');

$app = new \Slim\App;

require  SYS_PATH . 'routes.php';

$file = scandir(PLUGIN_PATH);
foreach ($file as $item => $pname) {
    if ($pname == '.' || $pname == '..') {
        continue;
    }
    if (is_file($path = __DIR__ . "/../plugins/" . $pname . "/routes.php")) {
        require $path;
    }
}

$app->run();
