# if @new_message.present?
#  json.array! @new_message
# end

# json.set! :message do
#     json.id @message.id
#     json.user_id @message.user_id
#     json.text @message.content
#     json.created_at @message.created_at
#     json.user(@message.user, :name)
#   end
if @new_message.present?
json.array! @new_message do |message|
  json.id            message.id
  json.name          message.user.name
  # json.user_id       message.user_id
  json.created_at    message.created_at
  json.text       message.content
  # json.image         message.image
end
end
