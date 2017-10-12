<?php

namespace System\Session\Driver;

class File {

    static $TMP_PATH  = SYS_PATH . 'session/tmp/';
    /**
     * Load a session by ID.
     *
     * @param  string  $id
     * @return array
     */
    public static function load($id)
    {
        if (file_exists($path = self::$TMP_PATH.$id))
        {
            return unserialize(file_get_contents($path));
        }
    }

    /**
     * Save a session.
     *
     * @param  array  $session
     * @return void
     */
    public static function save($session)
    {
        file_put_contents(self::$TMP_PATH.$session['id'], serialize($session), LOCK_EX);
    }

    /**
     * Delete a session by ID.
     *
     * @param  string  $id
     * @return void
     */
    public static function delete($session)
    {
        @unlink(self::$TMP_PATH . $session['id']);
    }

    /**
     * Delete all expired sessions.
     *
     * @param  int   $expiration
     * @return void
     */
    public function sweep($expiration)
    {
        foreach (glob(APP_PATH.'storage/sessions/*') as $file)
        {
            if (filetype($file) == 'file' and filemtime($file) < $expiration)
            {
                @unlink($file);
            }
        }
    }

}