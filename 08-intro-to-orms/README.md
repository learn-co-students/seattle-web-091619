# Database:
- Persistence : Even after the life of your program we have data still existing.
- Quick to access.
- Preserves relationships between our data models.
- Sharing of data between users.
- Security : databases are more secure and storing in your program/computer/locally.
# Gemfile
- Requires all the gems that we are going to use in the program
- Binding -> Whatever we require we can include in the same place.
- List of whatever we need to run.

# ORMs - Organizing our data/models:
- Object Relational Mapping
- Connects Ruby to SQL to do stuff.
```Ruby
```

  - ORMS - Object Relationship/Relational Mapping

# CRUD REVIEW
  class Librarian

  end
 - Create
   ```SQL
    CREATE TABLE librarians(id INTEGER PRIMARY KEY, name TEXT, age INTEGER, fave_book TEXT);
   ```
   ```Ruby
    def librarian.new
      DB[:conn].execute("CREATE TABLE librarians(id INTEGER PRIMARY KEY, name TEXT, age INTEGER, fave_book TEXT)")
    end
   ```
   ```SQL
   ```
   ```Ruby
   ```
 - Read
  ```SQL
   ```
   ```Ruby
   ```
   ```SQL
   ```
   ```Ruby
   ```
 - Update
    ```SQL
    ```  
    ```Ruby
    ```
 - Delete
    ```SQL
    ```  
    ```Ruby
    ```

# Intro to ORMs (Object Relational Mappers)

## Reference
```ruby
#Connection string for a database )
DB = {
  conn: SQLite3::Database.new('db/library.db')
}
##
# module SQLite3
#   class Database
#   end
#
#   class Server
#   end
# end
DB[:conn].results_as_hash = true

#Gems to install
gem "sqlite3"
gem "pry"
```


Review Questions :
- In Ruby -> See some of the things that you can do do SQLite
- See the SQL Query Written out and see the commands run.


09/27/2019:
- SWBATs
- What the params thing means
- 
