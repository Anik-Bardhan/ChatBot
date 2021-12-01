$(function(){
    var arrow = $('.chat-head img');
    var textarea = $('.chat-text textarea');
  
    arrow.click(function(){
      var src = arrow.attr('src');
  
      $(".chat-body").slideToggle('fast');
      if(src == 'https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_down-16.png'){
        arrow.attr('src', 'https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_up-16.png');
      }
      else{
        arrow.attr('src', 'https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_down-16.png');
      }
    });
  
    textarea.keypress(function(event) {
      var $this = $(this);
  
      if(event.keyCode == 13){
        var msg = $this.val();
        
        $this.val('');
        $('.msg-insert').append("<div class='msg-send'><p>" + msg + "</p></div>");

        $.get('/bot/getResponse', {response:msg}).done(function(data){
            console.log(data);
            $('.msg-insert').append('<div class="msg-receive"><p>' + data + '</p></div>');

        });
        
        }
    });
  
});