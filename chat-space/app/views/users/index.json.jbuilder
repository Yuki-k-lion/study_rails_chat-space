json.users do
  json.id  @users.id
  json.name @users.name
end

# json.array! @users, :id, :name
