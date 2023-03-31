$(document).ready(function () {

    var check_enter = 0;

    var logotype = '                                                                               \n'+
    'For                                                                            \n'+
    ' .oooooo..o oooo    oooo oooooooooooo ooooo      ooo oooo    oooo   .oooooo.   \n'+
    'd8P\'    `Y8 `888   .8P\'  `888\'     `8 `888b.     `8\' `888   .8P\'   d8P\'  `Y8b  \n'+
    'Y88bo.       888  d8\'     888          8 `88b.    8   888  d8\'    888          \n'+
    ' `"Y8888o.   88888[       888oooo8     8   `88b.  8   88888[      888          \n'+
    '     `"Y88b  888`88b.     888    "     8     `88b.8   888`88b.    888          \n'+
    'oo     .d8P  888  `88b.   888          8       `888   888  `88b.  `88b    ooo  \n'+
    '8""88888P\'  o888o  o888o o888o        o8o        `8  o888o  o888o  `Y8bood8P\'  \n'+
    '                                                                               \n'+
    'with Love <3                                                                   ';

    console.log(logotype);
    setTimeout(() => {  console.clear(); }, 10000);

    // $('body input:radio').prop('checked', false);
    // $('body input:checkbox').prop('checked', false);

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

        var year  = data[12]+data[13]+data[14]+data[15];        // Год
        
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

    $('#in_time').on('propertychange change paste input', function() {
        $('#out_time').attr('min', $('#in_time').val());
    });

    $('#insert_mon').click(function() {

        let confirm_insert = confirm("Ты уверен?");

        if ( confirm_insert ) {
                    
            $('input:radio:checked').each(function(){
        
                var radio = $(this).val();
                $('input:checkbox:checked').each(function(){

                    var in_time = $('#in_time').val();
                    var out_time = $('#out_time').val();
                    var event_date = $('#event_day').val();

                    in_time = in_time.replace(':', '');
                    out_time = out_time.replace(':', '');
                    event_date = event_date.split('-');

                    var date_mon = in_time + event_date[2] + event_date[1] + out_time + event_date[0];

                    var date_gen = generation_date(date_mon);
                    var hex_id   = $(this).attr('id');

                    $.ajax({
                        type: "POST",
                        url: "./check_time.php",
                        data: {'data':1, 'dtime':date_gen[0], 'point':radio},
                        async: false,
                        success: function(data){
                            if(data == 200) {
                                console.log('Отличное время для входа');
                                check_enter = check_enter + 1;
                            }else{
                                alert('Пересечение времени на вход!');
                            }
                        }
                    });

                    $.ajax({
                        type: "POST",
                        url: "./check_time.php",
                        data: {'data':1, 'dtime':date_gen[1], 'point':radio},
                        async: false,
                        success: function(data){
                            if(data == 200) {
                                console.log('Отличное время для выхода');
                                check_enter = check_enter + 1;
                            }else{
                                alert('Пересечение времени на выход!');
                            }
                        }
                    });

                    if(check_enter < 2){
                        console.error('Попробуй использовать другое время');
                        console.error(check_enter);
                    }else{

                        qu_in  = "INSERT INTO `tc-db-log`.`logs` (`LOGTIME`, `AREA`, `LOGDATA`, `EMPHINT`, `DEVHINT`) VALUES ('"+date_gen[0]+"', '0', 0xFE060015020500000048"+hex_id+"FFFF, '"+$(this).val()+"', '"+radio+"')";
                        qu_out = "INSERT INTO `tc-db-log`.`logs` (`LOGTIME`, `AREA`, `LOGDATA`, `EMPHINT`, `DEVHINT`) VALUES ('"+date_gen[1]+"', '0', 0xFE060015010500000048"+hex_id+"FFFF, '"+$(this).val()+"', '"+radio+"')";

                        console.log(qu_in);
                        console.log(qu_out);

                        var tdb = $('#to_base').val();

                        if (tdb == '1') {
                            
                            $.ajax({
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
                            });

                            }
                
                    }

                });
            
            });

        }

    });

});