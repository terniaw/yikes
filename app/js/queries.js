window.queries = [
	//Drop tables
   "DROP TABLE IF EXISTS Users;",
	//Create tables
	"CREATE TABLE Users (IdUser integer primary key autoincrement, Name text not null);",
	//Insert Users
	"INSERT INTO 'Users' ('Name') VALUES ('Monty Skooly Datta');",
	"INSERT INTO 'Users' ('Name') VALUES ('Playboi Jimmy Carti');",
	"INSERT INTO 'Users' ('Name') VALUES ('Nakala Ady Mahal');"

];