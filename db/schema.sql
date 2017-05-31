### Schema

CREATE DATABASE bucket_db;
USE bucket_db;

CREATE TABLE bucket_list
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	done BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
