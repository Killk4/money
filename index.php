<?php include 'settings.php'; ?>

<div style="float: left; border: black 1px solid; margin-right: 5px; padding: 5px;">

<?php

$qu = mysqli_query($link_s_main, "SELECT * FROM personal WHERE PARENT_ID = 675 OR NAME = 'Сергеев Максим Игоревич'");

while ($data = mysqli_fetch_assoc($qu) ) {
    
    $hex = mysqli_query($link_s_main_nu, "SELECT HEX(CODEKEY) FROM personal WHERE id = ". $data['ID']);
    while ($row = mysqli_fetch_assoc($hex) ) {
        if ($data['NAME'] == 'Сергеев Максим Игоревич') {
            echo '<b><u><input type="checkbox" id="'.$row['HEX(CODEKEY)'].'" value="'.$data['ID'].'" />' . $data['NAME'].'</u></b><br>';
        } else {
            echo '<input type="checkbox" id="'.$row['HEX(CODEKEY)'].'" value="'.$data['ID'].'" />' . $data['NAME'].'<br>';
        }
        
    }
}

?>

<br><input type="button" value="Найти другого" disabled="disabled" style="width: 100%;">

</div>

<div style="float: left; border: black 1px solid; margin-right: 5px; padding: 5px;">

<?php

$qu = mysqli_query($link_s_main, "SELECT * FROM devices");

while ($data = mysqli_fetch_assoc($qu) ) {
    echo '<input name="branch" type="radio" value="'.$data['ID'].'" />' . $data['NAME'] . '<br>';
}


?>

</div>

<div style="float: left; border: black 1px solid; margin-right: 5px; padding: 5px;">

<input type="text" id="date_mon" style='width: 300px;'> <br><br>

<input type="button" id="insert_mon" value="Готово" style="width: 150px;"> <input type="button" id="kd" value="Конструктор дат" disabled="disabled" style="width: 150px;"> <br><br>
    <!-- <div style="border: black 1px solid; padding: 5px;">
        <input type="checkbox" disabled="disabled"> Запланировать
        <p style="font-size: 10px;">Сработает через 3 секунды после запланированного времени</p>
    </div> -->
</div>



<script src="./jq.js"></script>
<script src="./main.js"></script>