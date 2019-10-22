class AuthController < ApplicationController
  def signin
  end

  def verify
    # byebug
    # the username the teacher entered in the form
    @teacher = Teacher.find_by(username: params[:auth][:username])
    if @teacher
      session[:user_id] = @teacher.id
      redirect_to students_path
    else
      flash[:message] = "Incorrect Info, please try again."
      render :signin
    end
  end

  def logout
    session.clear
    redirect_to login_page_path
  end
end
