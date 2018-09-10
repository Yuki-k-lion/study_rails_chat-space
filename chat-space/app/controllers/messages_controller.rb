class MessagesController < ApplicationController
  before_action :get_group

  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
    # binding.pry
  end

  def create
    @message = @group.messages.new(message_params)
    respond_to do |format|
      if @message.save
        format.html{
        redirect_to group_messages_path(@group), notice: 'メッセージが送信されました!'
        }
        format.json
      else
        @messages = @group.messages.includes(:user)
        flash.now[:alert] = 'メッセージを入力してください...'
        render :index
      end
       end
  end

  private
  def message_params
    params.require(:message).permit(:content, :image).merge(user_id: current_user.id, group_id: params[:group_id])
  end

  def get_group
    @group = Group.find(params[:group_id])
  end
end
