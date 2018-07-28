class Group < ApplicationRecord
  has_many :messages
  has_many :members
  has_many :users, through: :members

  def show_latest_message
    if (last_message = messages.last).present?
      last_message.content? ? last_message.content : 'sent image'
    else
      'no message'
    end
  end
end

# 三項演算子
# 条件式 ? trueの時の値 : falseの時の値
# if last_message.content?
#  last_message.content
# else
#   '画像'
# end
