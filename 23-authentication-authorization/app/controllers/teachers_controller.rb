class TeachersController < ApplicationController
  def new
    @teacher = Teacher.new
  end

  def create
    # byebug
    Teacher.create(username: params[:teacher][:username])
    session[:user_id] = @teacher.id
    redirect_to students_path
  end
end
