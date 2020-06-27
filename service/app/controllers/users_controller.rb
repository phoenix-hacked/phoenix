class UsersController < ApplicationController
  before_action :find_user

  def show
    render json: @user, status: :ok
  end

  def update
    permitted_params =  user_params
    all_types = User::USER_TYPE.invert
    permitted_params['user_type'] = all_types[permitted_params['user_type']]
    puts permitted_params
    @user.update!(permitted_params)
    render json: @user.reload, status: :ok
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :user_type, :id)
  end

  def find_user
    @user = User.find_by(id: params[:id])
    api_error(404, 'user not found') unless @user
  end

end
