class GroupsController < ApplicationController
  before_action :set_group, only:[:edit, :update]
  
  def index
    @group = current_user.groups
  end

  def new
    @group = Group.new
    @group.users << current_user
  end

  def create
   @group = Group.new(group_params)
   if @group.save
     redirect_to root_path, notice: "グループを作成しました"
   else
     flash.now[:alert] = "グループ名を入力してください"
     render :new
   end
 end

 def edit
 end

 def update
   if @group.update(group_params)
     redirect_to root_path(@group), notice: 'edit the group'
   else
     render :edit
   end
 end

 private
  def group_params
    params.require(:group).permit(:name, { :user_ids => [] })
  end

  def set_group
    @group = Group.find(params[:group_id])
  end

end
