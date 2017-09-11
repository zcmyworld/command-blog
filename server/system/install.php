<?php

use Alchemy\Zippy\Zippy;


require '../vendor/autoload.php';
$curl = new Curl\Curl();
$curl->get('http://127.0.0.1:3005/article.tar.gz');

$target_file = '../tmp/tmp.tar.gz';

//$file_handle = fopen($target_file, 'w+');
//$curl->setOpt(CURLOPT_FILE, $file_handle);
//$curl->get('http://127.0.0.1:3005/article.tar.gz');
//$curl->setOpt(CURLOPT_FILE, null);
//fclose($file_handle);

$zippy = Zippy::load();

// Open an archive
$archive = $zippy->open($target_file);

// Extract archive contents to `/tmp`
$archive->extract('../tmp');


