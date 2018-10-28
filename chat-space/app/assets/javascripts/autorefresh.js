$(function() {
  function buildHTMLupdate(message) {
    console.log(message);
    var user_name = message.name;
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
   }else {
     var message_id = 0;
   };
     $.ajax({
       url: location.href,
       type: "GET",
       data: {message: { id: message_id }},
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
     .always(function(data){
        console.log('interval always log');
      });
   };
  $(function(){
     setInterval(update, 5000);
   });
});
