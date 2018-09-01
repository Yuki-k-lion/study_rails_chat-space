$(function() {
      function buildHTML(message) {
        var html = `<%= render :partial => "message" %>`
        return html;
      }

      // $(function(){
      // setInterval(update, 10000);
      // 10000ミリ秒ごとにupdateという関数を実行する
      // });

      $('#new_message').on('submit', function(e) {
        e.preventDefault();
        var formData = new FormData(this);
        $.ajax({
          url: url,
          type: "POST",
          data: formData,
          dataType: 'json',
          processData: false,
          contentType: false
        });

        done(function(data) {
          var html = buildHTML(data);
          $('.messages').append(html)
          // $('.textbox').val('')
          $('.textbox').reset();
        });
        fail(function(){
          alert('error');
        });

      });
});
