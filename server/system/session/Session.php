<?php

namespace System\Session;


class Session
{

    private $session = [];

    public function __construct()
    {
        
    }
    
    public function exists() 
    {
        
    }

    public function load()
    {
        //解析header
    }

    public function save()
    {

    }
    
    public function __set($name, $value)
    {
        $this->session[$name] = $value;
    }
    
    public function __get($name)
    {
        return $this->session[$name];
    }
    
    public function delete() {
        
    }
    
    public static function random($length = 16, $type = 'alnum')
    {
        $value = '';

        $pool_length = strlen($pool = static::pool($type)) - 1;

        for ($i = 0; $i < $length; $i++)
        {
            $value .= $pool[mt_rand(0, $pool_length)];
        }

        return $value;
    }

    private static function pool($type = 'alnum')
    {
        switch ($type)
        {
            case 'alnum':
                return '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

            default:
                return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
    }


}
