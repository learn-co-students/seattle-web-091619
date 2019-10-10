class ApplicationController < Sinatra::Base
  set :views, 'app/views'
  set :public_folder, File.dirname("public")
  set :method_override, true
end
