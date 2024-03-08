----Для представления о струкруте

CREATE TABLE heroes_to_images (
id serial PRIMARY KEY,
image VARCHAR(255),
superheroy_id int,
FOREIGN KEY (superheroy_id) REFERENCES superheroes(id)
);

CREATE TABLE powers (
id serial PRIMARY KEY,
name VARCHAR(255),
description VARCHAR(1000)
);

CREATE TABLE heroy_to_powers (
superheroy_id int,
powers_id int,
FOREIGN KEY(superheroy_id) REFERENCES superheroes(id),
FOREIGN KEY(powers_id) REFERENCES powers(id)
);

CREATE TABLE powers_to_images (
id serial PRIMARY KEY,
image VARCHAR(255),
powers_id int,
FOREIGN KEY (powers_id) REFERENCES powers(id)
);
DROP TABLE powers;

