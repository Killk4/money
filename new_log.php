<?php

include 'settings.php';

$query = mysqli_query($link_s_log, $_POST['data_qu']);

echo 'Успешно!';

?>