SELECT version();
CREATE TABLE cars(
	brand VARCHAR(255),
	model VARCHAR(255),
	year INT
);
SELECT * from cars
INSERT into cars (brand, model, year)
VALUES ('markx', 'Corolla', 2021);
UPDATE cars
SET year = '2020'
WHERE brand = 'Toyota'
DELETE FROM cars
WHERE brand = 'Toyota' AND model = 'Corolla';
ALTER TABLE cars
ADD  COLOR varchar(225);
UPDATE cars
SET color = 'red'
ALTER TABLE cars
ALTER COLUMN year TYPE VARCHAR(4);
ALTER TABLE cars 
DROP COLUMN year
DROP TABLE cars;
