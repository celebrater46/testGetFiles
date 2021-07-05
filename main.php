<?php

// Could not display file names in sub folders. Only file names in parent folder

//$result = glob('./img/*'); // test1, test2...
$result1 = glob('./img/test1/*');
$result2 = glob('./img/test2/*');
var_dump($result1);
var_dump($result2);
