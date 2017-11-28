# Create database
CREATE DATABASE TodoList;
# Use database
USE TodoList;
# Create table
CREATE TABLE Messages (
  id SERIAL PRIMARY KEY NOT NULL,
  author VARCHAR(256) NOT NULL,
  message VARCHAR(1024) NOT NULL,
  date TIMESTAMP NOT NULL
);
