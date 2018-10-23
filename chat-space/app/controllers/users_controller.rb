class UsersController < ApplicationController
  def index
    #   書き方１
    # @users = User.where('name LIKE(?) and id !=(?)',"%#{params[:keyword]}%",current_user.id)
    # respond_to do |format|
    #   format.html
    #   format.json
    # end
    # 書き方２
    # @users = User.where('name LIKE(?)', "%#{params[:keyword]}%") #paramsとして送られてきたkeyword（入力された語句）で、Userモデルのnameカラムを検索し、その結果を@usersに代入する
    # respond_to do |format|
    #   format.json { render 'index', json: @users } #json形式のデータを受け取ったら、@usersをデータとして返す そしてindexをrenderで表示する
    # end
    # 書き方３。一番スッキリしているのでこれ
    @users = User.where('name LIKE(?)', "%#{params[:keyword]}%")
    render json: @users
  end

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private
  def user_params
    params.requre(:user).permit(:name,:email)
  end
end
