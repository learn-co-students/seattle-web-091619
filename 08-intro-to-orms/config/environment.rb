require 'bundler'
Bundler.require

require_all 'app/models'


DB = {
  conn: SQLite3::Database.new('library.db')
}

DB[:conn].results_as_hash = true
