CREATE archi;
USE archi;

CREATE TABLE user
(
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(20) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
);

INSERT INTO user VALUES ('1', 'firstmail@domain.com', 'password');
INSERT INTO user VALUES ('2', 'secondmail@domain.com', 'password');
