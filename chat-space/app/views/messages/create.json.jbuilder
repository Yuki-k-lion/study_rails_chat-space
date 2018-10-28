# if @new_message.present?
#  json.array! @new_message
# else
#   json.set! :message do
#     json.id @message.id
#     json.user_id @message.user_id
#     json.text @message.content
#     json.created_at @message.created_at
#     json.user(@message.user, :name)
#   end
# end

json.set! do
  json.id @message.id
  json.user_id @message.user_id
  json.text @message.content
  json.created_at @message.created_at
  json.user(@message.user, :name)
end

if @new_message.present?
 json.array! @new_message
end
