$(function() {
      function buildHTML(message) {
        var html = `<%= render :partial => "message" %>`
        return html;
      };

      // $(function(){
      // setInterval(update, 10000);
      // 10000ミリ秒ごとにupdateという関数を実行する
      // });

      $('#new_message').on('submit', function(e) {
        e.preventDefault();
        var formData = new FormData(this);
        $.ajax({
          url: $(this).attr('action'),
          type: "POST",
          data: formData,
          dataType: 'json',
          processData: false,
          contentType: false
        })
        .done(function(data){
          console.log($('.textArea')[0].scrollHeight)
          console.log('done')
          var html = buildHTML(data);
          $('.messages').append(html)
          // $('.textbox').val('')
          $('.textbox').reset();
          $('.textArea').animate({scrollTop: $('.textArea')[0].scrollHeight}, 'fast');
        })
        .fail(function(XMLHttpRequest,textStatus,errorThrown){
          alert('error');
          console.log(XMLHttpRequest.status);
          console.log(textStatus);
          console.log(errorThrown);
        })
        .always(function(){
          console.log('always log');
        });

      });
});
