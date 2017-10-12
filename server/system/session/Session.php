<?php

namespace System\Session;

require SYS_PATH . 'session/driver/file.php';

use System\Session\Driver\File;



class Session
{

    private $session = [];

    public function __construct()
    {
        
    }
    
    public function exists() 
    {
        
    }

    public function load($sessionKey)
    {
        if (empty($sessionKey)) {
            return $this->session;
        }
        $rs = File::load($sessionKey[0]);
        
        if (!empty($rs)) {
            $this->session = $rs;     
        }
        
        return $this->session;

    }
    
    public function forget() {
        if (!empty($this->session)) {
            File::delete($this->session);
            $this->session = [];
            return [];
        }
    }

    public function save()
    {
        if (!empty($this->session)) {
            File::save($this->session);
            return $this->session;
        }
    }
    
    public function __set($name, $value)
    {
        empty($this->session['id']) && $this->session['id'] = self::random();
        $this->session[$name] = $value;
    }
    
    public function __get($name)
    {
        if (isset($this->session[$name])) {
            return $this->session[$name];
        }
        return null;
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
