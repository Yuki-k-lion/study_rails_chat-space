json.set! :message do
    json.id @message.id
    json.user_id @message.user_id
    json.text @message.content
    json.created_at @message.created_at
    json.user(@message.user, :name)
  end
