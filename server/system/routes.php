<?php

use \RedBeanPHP\R as R;

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
        ->withHeader('Access-Control-Allow-Origin', '*')
        ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization, Sessionkey')
        ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
});

$app->get('/itos/config', function ($request, $response) {
    $rs = [
        'plugins' => [
            [
                'name' => 'article',
                'commands' => ['edit', 'save', 'delte', 'quit', 'create']
            ],
            [

            ]
        ],
        'defaultPlugin' => 'article',
        'routes' => [
            [
                'path' => '/',
                'redirect' => '/article'
            ],
            [
                'path' => '/install',
                'component' => 'install/InstallContent'
            ],
            [
                'path' => '/article',
                'component' => 'article/MyContent'
            ],
            [
                'path' => '/article/:id/edit',
                'component' => 'article/ArticleEdit'
            ],
            [
                'path' => '/article/:id',
                'component' => 'article/MyPage'
            ],
            [
            'path' => '/article/create/create',
            'component' => 'article/ArticleCreate'
            ]
        ]
    ];
    $response = $response->withHeader('Access-Control-Allow-Origin', '*')->withJson($rs);
    return $response;
});


$app->get('/itos/install', function ($request, $response) {

});

$app->get('/user/logout', function ($request, $response) {
    $this->session->forget();

    $response = $response->withJson([
        "error" => 0,
        "msg" => "Byebye",
        "data" => [
        ]
    ]);
    return $response;
});

$app->get('/user/islogin', function ($request, $response) {
    $session = $this->session;
//    $exists = $session->exists('uname');
//    $session->hello = 'world';
    $exists = true;
    
    if ($exists) {
        $response = $response->withJson([
            "error" => 0,
            "data" => [
                "isLogin" => true
            ]
        ]);
        return $response;
    }
    $response = $response->withJson([
        "error" => 0,
        "data" => [
            "isLogin" => false
        ]
    ]);
    return $response;
});

$app->post('/user/login', function ($request, $response) {
    $session = $this->session;
    $parsedBody = $request->getParsedBody();
    $uname = $parsedBody['uname'];
    $pwd = $parsedBody['pwd'];
    $user  = R::findOne( 'users', 'uname=?', [$uname]);
    if (empty($user)) {
        $response = $response->withJson([
            "error" => -1,
            "msg" => "Account or password error"
        ]);
        return $response;
    }
    if ($user->pwd == $pwd) {
        $session->uname = $uname;
        $response = $response->withJson([
            "error" => 0,
            "msg" => "login success",
            "data" => [
                "sessionkey" => $session->id
            ]
        ]);
        return $response;
    } else {
        $response = $response->withJson([
            "error" => -1,
            "msg" => "Account or password error"
        ]);
        return $response;
    }
});