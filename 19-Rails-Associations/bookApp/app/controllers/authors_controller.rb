class AuthorsController < ApplicationController

  def index
    byebug
    @authors = Author.all
  end

  def show
    # byebug
    # @name = Author
    @author = Author.find(params[:id])
    @name = @author.name
    @book_count = @author.books.count
  end
end
