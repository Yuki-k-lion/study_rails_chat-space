json.id @message.id
json.user_id @message.user_id
json.text @message.content
# json.user.name @message.user.name
json.created_at @message.created_at

# use_name = User.find(@message.user_id)

json.user(@message.user, :name)
