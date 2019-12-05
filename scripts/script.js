$(function(){
   //initializes the "console" with a starting message
  $('#console-box').append('console is ready...');
  
    //displays the attributes and contents of the month entered by user
  $('input[type=text]').click(function(){
    $('#console-box').append('<br>class:'+$(this).attr("class")+'|value:'+$(this).text());
    $(this).toggleClass('selected').siblings().removeClass('selected');
  });
    
    //displays the attributes and contents of the year input by the user
  $('input[type=text]').blur(function(){
    $('#console-box').append('<br>class:'+$(this).attr("class")+'|value:'+$(this).val());
    $(this).toggleClass('selected').siblings().removeClass('selected');
  });
});