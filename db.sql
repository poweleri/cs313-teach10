CREATE TABLE person(
   person_id SERIAL PRIMARY KEY,
   first_name VARCHAR(50),
   last_name  VARCHAR(50),
   dob        VARCHAR(20) NOT NULL
);

CREATE TABLE relationship(
   relationship_id SERIAL PRIMARY KEY,
   parent_id INT REFERENCES person(person_id),
   child_id INT REFERENCES person(person_id)
);


INSERT INTO person(first_name, last_name, dob)
   VALUES ('John', 'Jacob-jingle-heimer-schmitt', 'January 20th, 1980');
INSERT INTO person(first_name, last_name, dob)
   VALUES ('Smitty', 'Werber-jaagerman-jensen', 'June 13th, 1978');
INSERT INTO person(first_name, last_name, dob)
   VALUES ('John', 'Doe', 'December 2nd, 1999'); 
   
INSERT INTO relationship(parent_id, child_id)
   VALUES (1, 3);