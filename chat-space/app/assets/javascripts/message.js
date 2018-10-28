$(function() {
      function buildHTML(message) {
        var user_name = message.user.name;
        var post_time = message.created_at;
        var content_text = ``;
        var content_image = ``;
        var message_id = message.id;
        if(message.text){
          content_text = `
          <p class="textArea__message">
            ${message.text}
          </p>`;
        };
        if(message.image){
          content_image = `<img href="message.image.url" class="textArea__image">`;
        };
        var html = `
          <div class="textArea_box">
            <div class="textArea__user">
              <h3 class="textArea__name">
                ${user_name}
                <span class="textArea__timestamp" data-id="${message_id}">
                  ${post_time}
                </span>
              </h3>
              ${content_text}
              ${content_image}
            </div>
          </div>`;
        return html;
      };
       function update(){
        if($('.textArea__message')[0]){
         var message_id = $('.textArea__message:last').data('id');
         //一番最後にある'.textArea__message'というクラスの'id'というデータ属性を取得し、'message_id'という変数に代入
       }else {
         var message_id = 0;
       }
         $.ajax({
           url: location.href,
           type: 'GET',
           data: {
             message: { id: message_id } //'id'には'message_id'を入れる
           },
           dataType: 'json'
         })
         .always(function(data){ //通信したら、成功しようがしまいが受け取ったデータ（@new_message)を引数にとって以下のことを行う
            $.each(data, function(i, data){ //'data'を'data'に代入してeachで回す
              buildHTML(data);
            });
          });
       };
 // setInterval(function() {
 //        // var formData = new FormData(this);
 //        $.ajax({
 //          url: $(this).attr('action'),
 //          type: "POST",
 //          data: formData,
 //          dataType: 'json',
 //          processData: false,
 //          contentType: false
 //        })
 //        .done(function(data){
 //          var html = buildHTML(data);
 //          $('.textArea').append(html);
 //          // $('.sendMessage__input-text').val('');
 //          // $('.sendMessage__input-btn').prop('disabled', false);
 //          $('.textArea').animate({scrollTop: $('.textArea')[0].scrollHeight}, 'fast');
 //          console.log('done');
 //        })
 //        .fail(function(XMLHttpRequest,textStatus,errorThrown){
 //          alert('error');
 //          console.log(XMLHttpRequest.status);
 //          console.log(textStatus);
 //          console.log(errorThrown);
 //        })
 //        .always(function(){
 //          console.log('interval always log');
 //        });
 //
 //      },5000);

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
          var html = buildHTML(data);
          $('.textArea').append(html);
          $('.sendMessage__input-text').val('');
          $('.sendMessage__input-btn').prop('disabled', false);
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

      //5000msごとにメッセージを最新のメッセージを自動的に取得更新
      $(function(){
         setInterval(update, 5000);
       });
});
