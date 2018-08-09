require 'rails_helper'



RSpec.describe Message, type: :model do
  describe '#create' do

    #特定の条件でテストをグループわけしたい時にcontextを使う。
    context 'can save' do
      #保存できる場合の記述
      it 'is valid with content' do
        expect(build(:message, image: nil)).to be_valid
        #上書きできる。
      end

      it 'is valid with image' do
        expect(build(:message, content: nil)).to be_valid
      end

      it 'is valid with content and image' do
        expect(build(:message)).to be_valid
      end
    end


    context 'can not save' do
      #保存できない場合の記述
      it 'is invalid without content and image' do
        message = build(:message, content: nil, image: nil)
        #インスタンスを生成。
        message.valid?
        #valid?メソッドを使用。
        expect(message.errors[:content]).to include('を入力してください')
        #errorsメソッドを使用。エラーメッセージを返す。
      end

      it 'is invalid without group_id' do
        message = build(:message, group_id: nil)
        message.valid?
        expect(message.errors[:group]).to include('を入力してください')
      end

      it 'is invaid without user_id' do
        message = build(:message, user_id: nil)
        message.valid?
        expect(message.errors[:user]).to include('を入力してください')
      end

    end

  end
end
