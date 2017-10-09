<?php

namespace System\Session;


class SessionMiddleware
{
    private $container;

    public function __construct($container)
    {
        $this->container = $container;
    }

    public function __invoke($request, $response, callable $next)
    {
        $this->start($request);
        $response = $next($request, $response);
        $response = $this->end($response);
        return $response;
    }

    public function start($request) {
        $sessionKey = $request->getHeader('sessionkey');
        $session = $this->container->session;
        $session->load($sessionKey);
    }

    public function end($response) {
        $session = $this->container->session;
        $session->save();
        return $response;
    }

}
