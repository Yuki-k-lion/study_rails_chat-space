# CS_DB設計
#programming/tech-camp

## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|index:true, null:false, unique:true|
|email|string|null:false, index:true|

### Association
- has_many :members
- has_many :groups, through: :members
- has_many :messages


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null:false, unique:true|

### Association
- has_many :messages
- has_many :members
- has_many :users, through: :members


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|string||
|image|string||
|user_id|references|null:false|
|group_id|references|null:false|


### Association
- belongs_to :group
- belongs_to :user

# 仕様について

## Viewファイルの作り方
- Hamlを使って、マークアップ
- クラスの命名はBEMの命名基礎に従う
- Sassを使ってスタイルを書く

## Hamlの書き方
https://qiita.com/watak676/items/525ad3d8a1297e3244e3

# Github Flowのメモ
参照：https://qiita.com/tbpgr/items/4ff76ef35c4ff0ec8314

## 基本原則
- masterブランチは 常時デプロイ可能 である
- 機能追加、バグフィックスなどは 説明的な名前のブランチ をmasterから作成する
  - 機能追加の例： add_user_notice (ユーザーの通知機能追加)
  - バグフィックスの例： fix_user_login_validation_error (ユーザーのログイン認証のVlidation修正)
- 作成したブランチでローカル開発。小さい単位でこまめにコミットし、リモートにもこまめにPush
- フィードバックや助言が欲しい時、ブランチをマージしてもよいと思ったときは、 Pull Request を作成する
  - フィードバックや助言が欲しい時に作成する Pull Request を WIP Pull Request という
  - WIP = Work In Progress
  - WIP Pull Request を行う場合は、Pull Request 名の頭に [WIP] をつけるのが慣習
- レビューOKになったら、masterへマージ
- masterへpushしたら、即デプロイをする

# Github markDownの書き方
https://qiita.com/tbpgr/items/989c6badefff69377da7

# fontawesome icon一覧
https://fontawesome.com/icons?d=gallery
