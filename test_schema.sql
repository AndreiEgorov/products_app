DROP DATABASE IF EXISTS "galvanize_test";
CREATE DATABASE "galvanize_test";

-- connect to galvanize_test db;

CREATE TABLE view_counter (
    id BIGSERIAL PRIMARY KEY,
    count_value INTEGER DEFAULT 0 NOT NULL
);

CREATE TABLE product (
    product_id BIGSERIAL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    description VARCHAR(150),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    view_counter_id BIGINT NOT NULL REFERENCES view_counter(id),
    UNIQUE(view_counter_id)
);

WITH new_entry AS (INSERT INTO view_counter DEFAULT values RETURNING *), new_product AS (INSERT INTO product (name, price, description, view_counter_id) VALUES('Barrel', 25.39, 'for storage', (SELECT id FROM new_entry)) RETURNING *) SELECT product_id, name, price, description FROM new_product;
WITH new_entry AS (INSERT INTO view_counter DEFAULT values RETURNING *), new_product AS (INSERT INTO product (name, price, description, view_counter_id) VALUES('Rake', 15.99, 'do not step on it', (SELECT id FROM new_entry)) RETURNING *) SELECT product_id, name, price, description FROM new_product;
WITH new_entry AS (INSERT INTO view_counter DEFAULT values RETURNING *), new_product AS (INSERT INTO product (name, price, description, view_counter_id) VALUES('Shovel', 25.99, 'for digging', (SELECT id FROM new_entry)) RETURNING *) SELECT product_id, name, price, description FROM new_product;
WITH new_entry AS (INSERT INTO view_counter DEFAULT values RETURNING *), new_product AS (INSERT INTO product (name, price, description, view_counter_id) VALUES('Axe', 10.99, 'for chopping', (SELECT id FROM new_entry)) RETURNING *) SELECT product_id, name, price, description FROM new_product;
WITH new_entry AS (INSERT INTO view_counter DEFAULT values RETURNING *), new_product AS (INSERT INTO product (name, price, description, view_counter_id) VALUES('Hammer', 19.99, 'for hammering nails', (SELECT id FROM new_entry)) RETURNING *) SELECT product_id, name, price, description FROM new_product;
WITH new_entry AS (INSERT INTO view_counter DEFAULT values RETURNING *), new_product AS (INSERT INTO product (name, price, description, view_counter_id) VALUES('Gloves', 6.99, 'for hand protection', (SELECT id FROM new_entry)) RETURNING *) SELECT product_id, name, price, description FROM new_product;

-- set view counts to first five products 
UPDATE view_counter SET count_value = 8 where id = 1;
UPDATE view_counter SET count_value = 7 where id = 2;
UPDATE view_counter SET count_value = 4 where id = 3;
UPDATE view_counter SET count_value = 2 where id = 4;
UPDATE view_counter SET count_value = 1 where id = 5;