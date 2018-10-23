$(function () {
  var search_user_list = $("#user-search-result");
  function builtHTMLUser(user_list) {
    user_list.forEach(function(user) {
      var html = `<div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">${ user.name }</p>
                    <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">追加</a>
                  </div>`;
      search_user_list.append(html);
    });
  };
  function builtHTML_noUser() {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name"> NO USER IS HERE</p>
                </div>`;
    search_user_list.append(html);
  }

  $(document).on('keyup', '#user-search-field', function(e){
    e.preventDefault();
    var input = $.trim($(this).val());
    $.ajax({
     url: '/users',
     type: 'GET',
     data: ('keyword=' + input),
     processData: false,
     contentType: false,
     dataType: 'json'
   })
   .done(function(data){
    $('.chat-group-user').remove();
    if(data.length !== 0){
      builtHTMLUser(data);
      console.log('user list built done');
    }else{
      builtHTML_noUser();
      console.log('nouser built done');
    };
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
