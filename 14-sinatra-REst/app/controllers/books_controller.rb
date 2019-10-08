class BooksController < Sinatra::Base
  set :views, 'app/views'
  set :public_folder, File.dirname("public")
  set :method_override, true

  get '/' do
    "Hello World"
  end

  get '/books' do
    # byebug
    @books = Book.all
    erb :index
  end

  get '/books/new' do
    erb :new
  end

  post '/books' do
    # byebug
    Book.create(params)
    redirect "/books"
  end

  get '/books/:id' do
    # byebug
    @book = Book.find_by(id: params[:id])
    erb :show
  end

  get '/books/:id/edit' do
    @book = Book.find_by(id: params[:id])
    erb :edit
  end

  patch '/books/:id' do
    # byebug
    @book = Book.find(params[:id])
    @book.update(title: params[:title], author: params[:author], snippet: params[:snippet])
    redirect "/books/#{@book.id}"
  end

  delete '/books/:id' do
    # byebug
    @book = Book.find(params[:id])
    @book.delete
    redirect "/books"
  end

end
