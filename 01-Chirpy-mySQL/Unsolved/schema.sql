CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE chirps (

  	id int NOT NULL AUTO_INCREMENT,
  	author VARCHAR(45) NULL,
  	chirp VARCHAR(200) NULL,
  	timecreated DATETIME NULL,
  	PRIMARY KEY ('id')
);

INSERT INTO chirps(author, chirp, timecreated)
VALUES(William, )

SELECT * FROM chirps;