<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app->get('/itos/config', function (Request $request, Response $response) {
    $rs = [
        'plugins' => [
            [
                'name' => 'article',
                'commands' => ['edit', 'save', 'delte', 'quit', 'create']
            ],
            [

            ]
        ],
        'defaultPlugin' => 'install',
        'routes' => [
            [
                'path' => '/',
                'redirect' => '/install'
            ],
            [
                'path' => '/install',
                'component' => 'install/InstallContent'
            ],
            [
                'path' => '/article',
                'component' => 'article/view/article/MyContent'
            ],
            [
                'path' => '/article/:id/edit',
                'component' => 'article/view/article/ArticleEdit'
            ],
            [
                'path' => '/article/:id',
                'component' => 'article/view/article/MyPage'
            ]
        ]
    ];
    $response = $response->withHeader('Access-Control-Allow-Origin', '*')->withJson($rs);
    return $response;
});


$app->get('/itos/install', function (Request $request, Response $response) {

});