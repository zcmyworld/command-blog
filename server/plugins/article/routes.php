<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app->get('/articles', function (Request $request, Response $response) {
    $rs = [
        [
            'title' => 'Vue腳手架搭建',
            'posted' => '2017.05.02',
            'summary' => '构建一个Vue工程最快捷的方法是莫过于使用Vue官方提供的命令行工具刷新，对代码进行压缩打包，支持ES6语法等等，实现这些功能使用了大量的npm模块和webpack插件，这对想要了解整个工程架构的初学者而言并不友好。本系列文章将从最基础的功能开始构建，逐步完成一个完整的工程项目（最终大概会和vue-cli生成的项目长的一样）。'
        ],
        [
            'title' => 'Vue腳手架搭建',
            'posted' => '2017.05.02',
            'summary' => '构建一个Vue工程最快捷的方法是莫过于使用Vue官方提供的命令行工具刷新，对代码进行压缩打包，支持ES6语法等等，实现这些功能使用了大量的npm模块和webpack插件，这对想要了解整个工程架构的初学者而言并不友好。本系列文章将从最基础的功能开始构建，逐步完成一个完整的工程项目（最终大概会和vue-cli生成的项目长的一样）。'
        ],
        [
            'title' => 'Vue腳手架搭建',
            'posted' => '2017.05.02',
            'summary' => '构建一个Vue工程最快捷的方法是莫过于使用Vue官方提供的命令行工具刷新，对代码进行压缩打包，支持ES6语法等等，实现这些功能使用了大量的npm模块和webpack插件，这对想要了解整个工程架构的初学者而言并不友好。本系列文章将从最基础的功能开始构建，逐步完成一个完整的工程项目（最终大概会和vue-cli生成的项目长的一样）。'
        ]
    ];
    $response = $response->withHeader('Access-Control-Allow-Origin', '*')->withJson($rs);
    return $response;
});

$app->get('/articles/{id}', function (Request $request, Response $response) {
    $rs = [
        'name' => 'article'
    ];
    $response = $response->withHeader('Access-Control-Allow-Origin', '*')->withJson($rs);
    return $response;
});

$app->put('/articles/', function (Request $request, Response $response) {
    $rs = [
        'name' => 'article'
    ];
    $response = $response->withHeader('Access-Control-Allow-Origin', '*')->withJson($rs);
    return $response;
});


$app->delete('/articles/{id}', function (Request $request, Response $response) {
    $rs = [
        'name' => 'article'
    ];
    $response = $response->withHeader('Access-Control-Allow-Origin', '*')->withJson($rs);
    return $response;
});

$app->patch('/articles/{id}', function (Request $request, Response $response) {
    $rs = [
        'name' => 'article'
    ];
    $response = $response->withHeader('Access-Control-Allow-Origin', '*')->withJson($rs);
    return $response;
});
