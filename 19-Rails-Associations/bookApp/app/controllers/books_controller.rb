class BooksController < ApplicationController
  before_action :set_book, only: [:show, :edit, :update, :destroy]

  def index
    @books = Book.all
  end

  def new
    @authors = Author.all
    @book = Book.new
  end

  def create
    # byebug
    book = Book.create(book_params)
    redirect_to "/books/#{book.id}"
  end

  def update
    # byebug
    @book.update(book_params)
    redirect_to "/books/#{@book.id}"
  end

  def destroy
    @book.destroy
    redirect_to puppy_path
  end

  private
  def book_params
    params.require(:book).permit(:title, :author_id, :snippet)
  end

  def set_book
    @book = Book.find(params[:id])
  end
end
