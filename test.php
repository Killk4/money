<html>
<head>
<!-- Include Required Prerequisites -->
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery/1/jquery.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/bootstrap/3/css/bootstrap.css" />
 
<!-- Include Date Range Picker -->
<script type="text/javascript" src="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.js"></script>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.css" />


<link href="https://cdn.rawgit.com/dubrox/Multiple-Dates-Picker-for-jQuery-UI/master/jquery-ui.multidatespicker.css" rel="stylesheet"/>
<link href="https://code.jquery.com/ui/1.12.1/themes/pepper-grinder/jquery-ui.css" rel="stylesheet"/>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
<script src="https://cdn.rawgit.com/dubrox/Multiple-Dates-Picker-for-jQuery-UI/master/jquery-ui.multidatespicker.js"></script>
</head>
<body>
    <div id="mdp-demo"></div>
    <input type="button" value="go" id=''dt>
  <input class="pull-right" type="text" name="daterange" value="01/15/2020 - 02/15/2010">
</body>

<script>$(function() {
    $('input[name="daterange"]').daterangepicker();
    $('input[name="daterange"]').change(function(){
      $(this).val();
      console.log($(this).val());
    });
});</script>
</html>



<script>
$('#mdp-demo').multiDatesPicker();
$('#dt').click(function() {
console.log($('#mdp-demo').val());
console.log('---------------------');
});
</script>