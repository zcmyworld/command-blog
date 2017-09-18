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
            'path' => '/article/create',
            'component' => 'article/AtricleCreate'
        ]
        ]
    ];
    $response = $response->withHeader('Access-Control-Allow-Origin', '*')->withJson($rs);
    return $response;
});


$app->get('/itos/install', function (Request $request, Response $response) {

});