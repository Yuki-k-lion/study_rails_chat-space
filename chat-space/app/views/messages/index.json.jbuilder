if @new_message.present?
  json.array! @new_message do |message|
    json.id            message.id
    json.name          message.user.name
    json.created_at    message.created_at
    json.text       message.content
  end
end
