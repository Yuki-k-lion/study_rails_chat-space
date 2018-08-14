$(function() {
      function buildHTML(message) {
        var html = `<%= render :partial => "message" %>`
        return html;
      }

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

        .done(function(data) {
          var html = buildHTML(data);
          $('.messages').append(html)
          $('.textbox').val('')
        });
        .fail(function(){
          alert('error');
        });

      })
