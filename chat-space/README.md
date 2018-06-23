# CS_DB設計
#programming/tech-camp

~Example~

## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## Usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|index:true,null:false,unique:true|
|image|string|none|
|email|string|null:false,index:true|

### Association
- has_many :groups, through :members
- has_many :messages


## Groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groupe_name|string|null:false,unique:ture,index:true|
|message_id|references|unique:ture|

### Association
- has_many :users, through :members
- has_many :messages


## Messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|string|index:true|
|user_id|references|null:false|
|groupe_id|references|null:false|

### Association
- belongs_to :group
- belongs_to :user
