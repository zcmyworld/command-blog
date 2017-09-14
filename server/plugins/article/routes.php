<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

use \RedBeanPHP\R as R;

R::setup( 'mysql:host=localhost;dbname=itos', 'root', 'root' );

$app->get('/articles', function (Request $request, Response $response) {
    $articles = R::find('articles');
    $response = $response->withHeader('Access-Control-Allow-Origin', '*')->withJson($articles);
    return $response;
});

$app->get('/articles/{id}', function (Request $request, Response $response) {
    $route = $request->getAttribute('route');
    $id = $route->getArgument('id');
    $article = R::load('articles', $id);
    $response = $response->withHeader('Access-Control-Allow-Origin', '*')->withJson($article);
    return $response;
});

$app->post('/articles', function (Request $request, Response $response) {
    $parsedBody = $request->getParsedBody();
    $article = R::dispense( 'articles' );
    $article->title = $parsedBody['title'];
    $article->summary = $parsedBody['summary'];
    $article->content = $parsedBody['content'];
    $article->createdAt = time();
    $article->modifiedAt = time();
    $id = R::store($article);
    $response = $response->withHeader('Access-Control-Allow-Origin', '*')->withJson([
        'insertid'=> $id
    ]);
    return $response;
});


$app->delete('/articles/{id}', function (Request $request, Response $response) {
    $route = $request->getAttribute('route');
    $id = $route->getArgument('id');
    $article = R::load('articles', $id);
    R::trash($article);
    $response = $response->withHeader('Access-Control-Allow-Origin', '*')->withJson([]);
    return $response;
});

$app->patch('/articles/{id}', function (Request $request, Response $response) {

    $route = $request->getAttribute('route');
    $id = $route->getArgument('id');

    $article = R::load('articles', $id);

    $parsedBody = $request->getParsedBody();

    if (isset($parsedBody['title'])) {
        $article->title = $parsedBody['title'];
    }

    if (isset($parsedBody['summary'])) {
        $article->summary = $parsedBody['summary'];
    }

    if (isset($parsedBody['content'])) {
        $article->content = $parsedBody['content'];
    }

    $article->modifiedAt = time();

    $id = R::store($article);

    $response = $response->withHeader('Access-Control-Allow-Origin', '*')->withJson([
        'insertid' => $id
    ]);
    return $response;
});
