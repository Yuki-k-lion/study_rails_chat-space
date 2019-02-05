$(function() {
      function buildHTML(message) {
        var user_name = message.message.user.name;
        var post_time = message.message.created_at;
        var content_text = ``, content_image = ``;
        var message_id = message.message.id;
        (message.message.text)? content_text = `<p class="textArea__message">${message.message.text}</p>`:content_image = `<img href="message.image.url" class="textArea__image">`;
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
        .always(function(){console.log('always log');});
      });
});
