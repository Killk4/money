<?php

$host_sigur    = '192.168.50.21';   // Адрес БД Sigur
$user_sigur    = 'root';            // Пользователь
$pass_sigur    = 'Rjvgfc123';       // Пароль
$db_sigur_log  = 'tc-db-log';       // База с фактами проходов
$db_sigur_main = 'tc-db-main';      // База с пользователями и филиалами
$port_db_sigur = '3305';            // Порт БД Sigur

$host_local = 'localhost';          // Адрес локальной БД для скрипта
$user_local = 'root';               // Пользователь
$pass_local = '';                   // Пароль
$db_local   = 'name';               // Имя БАЗЫ

$link_s_log     = mysqli_connect($host_sigur, $user_sigur, $pass_sigur, $db_sigur_log, $port_db_sigur);    // Подключение к БД проходов Sigur
$link_s_main    = mysqli_connect($host_sigur, $user_sigur, $pass_sigur, $db_sigur_main, $port_db_sigur);   // Подключение к основной БД Sigur
$link_s_main_nu = mysqli_connect($host_sigur, $user_sigur, $pass_sigur, $db_sigur_main, $port_db_sigur);   // Подключение к основной БД Sigur без декодирования в UTF-8
//$link_local  = mysqli_connect($host_local, $user_local, $pass_local, $db_local);                         // Подключение к локально БД

// Установка кодировки UTF-8 для всех подключений
mysqli_set_charset($link_s_log, "utf8mb4");
mysqli_set_charset($link_s_main, "utf8mb4");
// mysqli_set_charset($link_local, "utf8mb4");

?>