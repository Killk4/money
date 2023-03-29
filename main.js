$(document).ready(function () {

    $('body input:radio').prop('checked', false);
    $('body input:checkbox').prop('checked', false);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function generation_date(data) {

        /* Переменные */

        var h_in = data[0]+data[1];                             // Час входа
        var m_in = data[2]+data[3];                             // Минута входа
        var s_in = getRandomInt(60);                            // Получение случайных секунд на вход
        var d_in = data[4]+data[5];                             // День входа/выхода
        var M_in = data[6]+data[7];                             // Месяц

        var h_out = data[8]+data[9];                            // Час выхода
        var m_out = data[10]+data[11];                          // Минута выхода
        var s_out = getRandomInt(60);                           // Получение случайных секунд на выход

        var dt = new Date();

        var year  = dt.getFullYear();                           // Текущий год
        
        var array_date = new Array;

        /* Условия */

        if (m_in == '99') { m_in = getRandomInt(60); }          // Если количество минут = 99, то генерируем случайное значение
        if (m_out == '99' ) { m_out = getRandomInt(60); }       // Если количество минут = 99, то генерируем случайное значение 

        if (m_in < 10) { m_in = '0' + m_in}
        if (m_out < 10) { m_out = '0' + m_out}
        if (s_in < 10) { s_in = '0' + s_in; }
        if (s_out < 10) { s_out = '0' + s_out; }

        /* Сборка массива */

        array_date[0] = year+'-'+M_in+'-'+d_in+' '+h_in+':'+m_in+':'+s_in;
        array_date[1] = year+'-'+M_in+'-'+d_in+' '+h_out+':'+m_out+':'+s_out;

        return array_date;
    }

    $('#insert_mon').click(function() {

        let confirm_insert = confirm("Ты уверен?");

        if ( confirm_insert ) {
                    
            $('input:radio:checked').each(function(){
        
                var radio = $(this).val();
                $('input:checkbox:checked').each(function(){

                    var date_gen = generation_date($('#date_mon').val());
                    var hex_id   = $(this).attr('id');

                    qu_in  = "INSERT INTO `tc-db-log`.`logs` (`LOGTIME`, `AREA`, `LOGDATA`, `EMPHINT`, `DEVHINT`) VALUES ('"+date_gen[0]+"', '0', 0xFE060015020500000048"+hex_id+"FFFF, '"+$(this).val()+"', '"+radio+"')";
                    qu_out = "INSERT INTO `tc-db-log`.`logs` (`LOGTIME`, `AREA`, `LOGDATA`, `EMPHINT`, `DEVHINT`) VALUES ('"+date_gen[1]+"', '0', 0xFE060015010500000048"+hex_id+"FFFF, '"+$(this).val()+"', '"+radio+"')";

                    console.log(qu_in);
                    console.log(qu_out);

                    /*$.ajax({
                        type: "POST",
                        url: "./new_log.php",
                        data: {data_qu:qu_in},
                        success: function (data) {
                        }
                    });

                    $.ajax({
                        type: "POST",
                        url: "./new_log.php",
                        data: {data_qu:qu_out},
                        success: function (data) {
                        }
                    }); */
                
                });
            
            });

            alert('Успешно!')
        }

    });

});