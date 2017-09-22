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
        $this->start();
        $response = $next($request, $response);
        $this->end();
        return $response;
    }

    public function start() {
        //获取header
    }

    public function end() {
        //返回header
    }

}
