<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

use \RedBeanPHP\R as R;

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
        ->withHeader('Access-Control-Allow-Origin', '*')
        ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization, Sessionkey')
        ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
});

$checkPermission = function ($request, $response, $next) {
    $session = $this->session;
    $uname = $session->uname;
    if (empty($uname)) {
        $response = $response->withJson([
            "error" => -1,
            "msg" => 'Login in first'
        ]);
        return $response;
    }
    if ($session->uname != 'itgo') {
        $response = $response->withJson([
            "error" => -1,
            "msg" => 'Permission defined'
        ]);
        return $response;
    }
    $response = $next($request, $response);
    return $response;
};



$app->get('/articles', function (Request $request, Response $response) {
    $articles = R::findAll('articles', 'ORDER BY id DESC');
    foreach ($articles as &$article) {
        $article['posted'] = date("Y.m.d", time($article['createdAt']));
    }
    $articles = R::exportAll($articles);
    $response = $response->withJson([
        "error" => 0,
        "articles" => $articles
    ]);
    return $response;
});


$app->get('/articles/{id}', function (Request $request, Response $response) {
    $route = $request->getAttribute('route');
    $id = $route->getArgument('id');
    $article = R::load('articles', $id);
    $article['posted'] = date("Y.m.d", time($article['createdAt']));
    $response = $response->withJson([
        "error" => 0,
        "article" => $article
    ]);
    return $response;
});

$app->post('/articles', function (Request $request, Response $response) {
    $parsedBody = $request->getParsedBody();
    $article = R::dispense( 'articles' );
    $article->title = $parsedBody['title'];
    $article->summary = $parsedBody['summary'];
    $article->content = $parsedBody['content'];
    $article->mdcontent = $parsedBody['mdcontent'];
    $article->mdsummary = $parsedBody['mdsummary'];
    $article->createdAt = time();
    $article->modifiedAt = time();
    $id = R::store($article);
    $response = $response->withJson([
        'code' => 0,
        'msg' => 'post success',
        'data' => [
            'insertid'=> $id
        ]
    ]);
    return $response;
})->add($checkPermission);


$app->delete('/articles/{id}', function (Request $request, Response $response) {
    $route = $request->getAttribute('route');
    $id = $route->getArgument('id');
    $article = R::load('articles', $id);
    R::trash($article);
    $response = $response->withJson([
        'error' => 0
    ]);
    return $response;
})->add($checkPermission);

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

    if (isset($parsedBody['mdsummary'])) {
        $article->mdsummary = $parsedBody['mdsummary'];
    }

    if (isset($parsedBody['mdcontent'])) {
        $article->mdcontent = $parsedBody['mdcontent'];
    }

    $article->modifiedAt = time();

    $id = R::store($article);

    $response = $response->withJson([
        'code' => 0,
        'msg' => 'save success',
        'data' => [
            'insertid'=> $id
        ]
    ]);
    return $response;
})->add($checkPermission);
