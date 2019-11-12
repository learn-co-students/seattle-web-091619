class TrainersController < ApplicationController
  def index
    render :json => Trainer.all
  end 

  def show
    @trainer = Trainer.find(params[:id])
    render :json => @trainer
  end
end
