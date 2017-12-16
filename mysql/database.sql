CREATE DATABASE archi_db;
USE archi_db;

GRANT USAGE ON *.* TO 'user'@'%' IDENTIFIED BY 'user';
GRANT ALL PRIVILEGES ON archi_db.* TO 'user'@'%';
FLUSH PRIVILEGES;

CREATE TABLE user
(
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(30) NOT NULL
);

INSERT INTO user VALUES ('1', 'firstmail@domain.com', 'password');
INSERT INTO user VALUES ('2', 'secondmail@domain.com', 'password');
