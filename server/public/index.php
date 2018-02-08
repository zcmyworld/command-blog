<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

use \RedBeanPHP\R as R;

use \System\Session;
require '../vendor/autoload.php';

define('BASE_PATH', realpath('../') . '/');
define('PLUGIN_PATH', realpath('../plugins') . '/');
define('SYS_PATH', realpath('../system').'/');

$container = new \Slim\Container();
$app = new \Slim\App($container);

R::setup( 'mysql:host=120.24.60.7;dbname=itos', 'root', '648e31d7' );

require '../system/session/SessionMiddleware.php';
require '../system/session/Session.php';

$container = $app->getContainer();
$container['session'] = function ($c) {
    return new \System\Session\Session();
};

$app->add(new \System\Session\SessionMiddleware($container));


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
