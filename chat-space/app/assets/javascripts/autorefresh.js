$(function() {
  function buildHTMLupdate(message) {
    var user_name = message.name, post_time = message.created_at, content_text = ``, content_image = ``, message_id = message.id;
    (message.text)? {content_text = `<p class="textArea__message">${message.text}</p>`:content_image = `<img href="message.image.url" class="textArea__image">`;
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
   ($('.textArea__message')[0]) ? var latestMessageId = $('.textArea__message:last').data('id'): var latestMessageId = 0;
     $.ajax({
       url: location.href,
       type: "GET",
       data: {message: { id: latestMessageId }},
       dataType: 'json',
     })
     .done(function(data){
       $.each(data, function(i, data){
         var html = buildHTMLupdate(data);
         $('.textArea').append(html);
         $('.textArea').animate({scrollTop: $('.textArea')[0].scrollHeight}, 'slow');
       });
     })
    .fail(function(XMLHttpRequest,textStatus,errorThrown){
      console.log(XMLHttpRequest.status);
      console.log(textStatus);
      console.log(errorThrown);
    })
     .always(function(data){console.log('interval always log');});
   };
  $(function(){setInterval(update, 5000);});
});
