# Rack provides a minimal interface between webservers that support Ruby and Ruby frameworks.
#
# To use Rack, provide an "app": an object that responds to the call method, taking the environment hash as a parameter, and returning an Array with three elements:
#
# The HTTP response code
# A Hash of headers
# The response body, which must respond to each

require 'rack'
require 'pry'
require 'shotgun'

class App
  def call(environment_hash)
    # binding.pry
    req = Rack::Request.new(environment_hash)
    response = Rack::Response.new
    if req.path == "/"
      response.write "Welcome to Flatiron School"
    elsif req.path == "/seattle"
      response.write "Welcome to Flatiron School Seattle"
    elsif req.path == '/denver'
      response.write "Welcome to Flatiron School Denver"
    else
      response.write "School does not exist"
    end
    response.finish
    # binding.pry
    # http_code = 200
    # headers = {"Content-Type" => "text/html"}
    # body = ["Hello World", "Anything"]
    # [http_code, headers, body]
  end
end

run App.new
