$(function () {
  var group_member_list = $("#chat-group-users");
   function buildHTMLGroup(user_id, user_name) {
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-${ user_id }'>
                  <input name='group[user_ids][]' type='hidden' value='${ user_id }'>
                  <p class='chat-group-user__name'>${ user_name }</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                </div>`
    group_member_list.append(html)
  }
  $("#user-search-result").on("click", ".user-search-add", function(){
    console.log('onclick');
      var user_name = $(this).attr("data-user-name");
      var user_id = $(this).attr("data-user-id");
      buildHTMLGroup(user_id, user_name);
      $(this).parent().remove();
    });
  $("#chat-group-users").on("click", ".user-search-remove", function(){
    console.log('delete');
    $(this).parent().remove();
  });
});
