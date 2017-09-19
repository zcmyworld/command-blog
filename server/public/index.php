<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

define('BASE_PATH', realpath('../') . '/');
define('PLUGIN_PATH', realpath('../plugins') . '/');
define('SYS_PATH', realpath('../system').'/');

$container = new \Slim\Container();
$app = new \Slim\App($container);

$app->add(new \Slim\Middleware\Session([
    'name' => 'dummy_session',
    'autorefresh' => true,
    'lifetime' => '1 hour'
]));

$container = $app->getContainer();
$container['session'] = function ($c) {
    return new \SlimSession\Helper;
};


require  SYS_PATH . 'routes.php';

$file = scandir(PLUGIN_PATH);
foreach ($file as $item => $pname) {
    if ($pname == '.' || $pname == '..') {
        continue;
    }
    if (is_file($path =  PLUGIN_PATH . $pname . "/routes.php")) {
        require $path;
    }
}

$app->run();
