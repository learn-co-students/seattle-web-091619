class GalaxiesController < ApplicationController
  def show
    @galaxy = Galaxy.find(params[:id])
  end

  def new
    @galaxy = Galaxy.new
  end

  def create
    # byebug
    @galaxy = Galaxy.new(name: params[:galaxy][:name], size: params[:galaxy][:size], distance: params[:galaxy][:distance])
    if @galaxy.save
      redirect_to galaxies_path(@galaxy)
    else
      flash[:message] = "Please fix"
      render :new
      # byebug
    end
  end
end
