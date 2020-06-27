class UsersController < ApplicationController

  def update
    binding.pry
    permitted_params =  params.permit(:status, :type)
    type = User.USER_TYPE.reverse

  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :type, :status)
  end

end
