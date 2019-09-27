require 'bundler'
Bundler.require

require_all 'app/models'


DB = {
  conn: SQLite3::Database.new('restaurantSandwiches.db')
}

# module SQLite3
#   class Database
#   end
#
#   class Server
#
#   end
#
#   class Entry
#   end
# end

DB[:conn].results_as_hash = true
#
