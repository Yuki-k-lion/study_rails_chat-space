# CS_DB設計
#programming/tech-camp

~Example~

## membersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null:false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## Usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null:false|
|name|string|index:true,null:false,unique:true|
|image|string|none|
|email|string|null:false,index:true|

### Association
- has_many :groups, through :members
- has_many :messages


## Groupsテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null:false|
|groupe_name|string|null:false,unique:ture,index:true|
|message_id|integer|unique:ture|

### Association
- has_many :users, through :members
- has_many :messages


## Messagesテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null:false|
|body|string|index:true|
|user_id|integer|null:false|
|groupe_id|integer|null:false|

### Association
- belongs_to :group
- belongs_to :user
