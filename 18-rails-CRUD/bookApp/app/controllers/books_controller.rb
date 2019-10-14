class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def show
    # byebug
    @book = Book.find(params[:id])
  end

  def new
    @book = Book.new
  end

  def create
    # byebug
    book = Book.create(author: params[:book][:author], title: params[:book][:title], snippet: params[:book][:snippet])
    redirect_to "/books/#{book.id}"
  end

  def edit
    @book = Book.find(params[:id])
  end

  def update
    # byebug
    book = Book.find(params[:id])
    book.update(author: params[:book][:author], title: params[:book][:title], snippet: params[:book][:snippet])
    redirect_to "/books/#{book.id}"
  end


end
