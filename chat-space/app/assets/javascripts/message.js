$(function() {
      function buildHTML(message) {
        // var html = `<%= render :partial => 'message' %>`;
        // var html = "<h1>test</h1>"
        console.log(message);
        console.log(message.message.user);
        console.log(message.message.user.name);
        console.log(message.message.created_at);
        console.log(message.message.text);
        console.log(message.message.image);
        console.log(message.message);
        var user_name = message.message.user.name;
        var post_time = message.message.created_at;
        var content_text = ``;
        var content_image = ``;
        if(message.message.text){
          content_text = `
          <p class="textArea__message">
            ${message.message.text}
          </p>
          `;
        }

        if(message.message.image){
          content_image = `<img href="message.image.url" class="textArea__image">`;
        }

        var html = `
          <div class="textArea_box">
            <div class="textArea__user">
              <h3 class="textArea__name">
                ${user_name}
                <span class="textArea__timestamp">
                  ${post_time}
                </span>
              </h3>
              ${content_text}
              ${content_image}
            </div>
          </div>`
        ;
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
          console.log($('.textArea')[0].scrollHeight);
          console.log('done1');
          // console.log(data.message);
          // console.log(@message);
          var html = buildHTML(data);
          // var html = `<%= escape_javascript render :partial => "message", locals:{message: ${data.message}} %>`;
          //部分テンプレートを使用して簡略化しようと思ったが、なぜかうまくいかない…
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
