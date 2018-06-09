# CS_DB設計

~Example~

## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## Userテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null:false|
|name|text|none|
|image|text|none|

### Association
- has_many :group
- has_many :message


## Groupテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null:false|
|groupe_name|text|none|
|message_id|integer|none|

### Association
- has_many :user
- has_many :message


## Messageテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null:false|
|body|text|none|
|user_id|integer|none|
|groupe_id|integer|none|

### Association
- belongs_to :group
- belongs_to :user
