# Intro to SQL
-> Structured Query Language

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data).
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below
5. References :
[SQLite Tutorial Link](https://www.sqlitetutorial.net/)

## Question :

## Challenges
1. Write the SQL to return all of the rows in the artists table?
Read
```SQL
SELECT * FROM artists
```

2. Write the SQL to select the artist with the name "Black Sabbath"
Read
```SQL
SELECT * FROM artists WHERE name == "Black Sabbath"
```

3. Write the SQL to create a table named 'fans' with an auto-incrementing ID that's a primary key and a name field of type text
Create
```sql
CREATE TABLE fans (Id TEXT PRIMARY KEY  ,name TEXT )
```

4. Write the SQL to alter the fans table to have a artist_id column type integer?
Update
```sql
ALTER TABLE fans ADD COLUMN artist_id INTEGER
```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**
Create
```sql
INSERT INTO fans (name, artist_id) VALUES("Soundarya", 169)
```

6. Write the SQL to return fans that are not fans of the black eyed peas.
Read
```sql
SELECT * FROM fans WHERE artist_id != 169
```

7. remove fans from our DB
Delete/Destroy
```sql
DROP TABLE fans
```

8. Write the SQL to display an artists name next to their album title
Read
```sql
SELECT artists.name AS artist_name, albums.title AS album_title
FROM artists
JOIN albums
ON artists.id == albums.artist_id
```

9. Write the SQL to display artist name, album name and number of tracks on that album
Read
```sql
SELECT album_id, artist_id, artist_name, album_title, COUNT(tracks.id) AS track_id
	FROM tracks
	INNER JOIN
	(SELECT artists.id AS artist_id,
			albums.id AS alb_id, artists.name AS artist_name, albums.title AS album_title
		FROM artists
		JOIN albums
		ON artists.id == albums.artist_id)
	ON tracks.album_id == alb_id
	GROUP BY alb_id
```

10. Write the SQL to return the name of all of the artists in the 'Pop' Genre
```sql
```

## BONUS (very hard)

11. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have more than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least
```sql
```
