<?php
    include 'settings.php';

    $time4enter = 40;

    if(isset($_POST['data'])) {
        $dtime = $_POST['dtime'];
        $point = $_POST['point'];

        # Конструируем запросы
        $date_up = "SELECT * FROM logs WHERE DEVHINT = '". $point ."' AND EMPHINT != 0 AND LOGTIME > '". $dtime ."' ORDER BY LOGTIME ASC LIMIT 1";
        $date_down = "SELECT * FROM logs WHERE DEVHINT = '". $point ."' AND EMPHINT != 0 AND LOGTIME < '". $dtime ."' ORDER BY LOGTIME DESC LIMIT 1";

        # Перезаписываем переменные декодированным запросом из базы
        $date_up = mysqli_fetch_assoc(mysqli_query($link_s_log, $date_up));
        $date_down = mysqli_fetch_assoc(mysqli_query($link_s_log, $date_down));

        $diff = strtotime($date_up['LOGTIME']) - strtotime($date_down['LOGTIME']);
        if ($diff > $time4enter) {
            echo 200;
        } else {
            echo 400;
        }

    }
?>