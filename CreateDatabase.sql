# Create database
CREATE DATABASE TodoList;

# Use database
USE TodoList;

# Create with PRIVILEGES new user
GRANT USAGE ON *.* TO 'user'@'%' IDENTIFIED BY 'user';
GRANT ALL PRIVILEGES ON archi_db.* TO 'user'@'%';
FLUSH PRIVILEGES;

# Create table
CREATE TABLE Messages (
  id SERIAL PRIMARY KEY NOT NULL,
  author VARCHAR(256) NOT NULL,
  message VARCHAR(1024) NOT NULL,
  date TIMESTAMP NOT NULL
);

INSERT INTO Messages VALUES ('1', 'Louis', 'Hola! Qué tal ?', NOW());
INSERT INTO Messages VALUES ('2', 'Guillaume', 'Bonjour! Comment vas-tu ?', NOW());
