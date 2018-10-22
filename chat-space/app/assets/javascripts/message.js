$(function() {
      // function buildHTML(message) {
      //   // var html = "<%= render :partial => 'message' %>"
      //   // var html = "<h1>test</h1>"
      //   var html = ""
      //   return html;
      // };

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
          console.log($('.textArea')[0].scrollHeight);
          console.log('done1');
          // var html = buildHTML(data);
          var html = "<%= escape_javascript render (:partial => 'message') %>" ;
          console.log(html);
          // $('.messages').append(html)これは間違い。
          $('.textArea').append(html);
          // $('.textArea').append('<h2>test</h2>');部分テンプレートが読み込まれない…文字列として表示されてしまうが、これは文字列ではない。
          // $('.textArea').html(<%= j (render @messages) %>); 記法のエラーなのでこれ以降実行されないが、表示はうまくいく。
          // $('.textbox').val('')
          $('.sendMessage__input-text').val('');
          // $('.textbox').reset();
          $('.textArea').animate({scrollTop: $('.textArea')[0].scrollHeight}, 'fast');
          console.log('done');
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
