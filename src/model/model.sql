CREATE DATABASE restaurans;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE catagories(
    catagory_id serial PRIMARY KEY,
    catagory_name varchar(64) not null
);

CREATE TABLE restaurans(
    restauran_id serial PRIMARY KEY,
    restauran_name varchar(128) not null,
    restauran_img text not null,
    catagory_id int not null,
    foreign key (catagory_id)
    references catagories(catagory_id)
    on delete cascade
);

CREATE TABLE foods(
    food_id serial PRIMARY KEY,
    food_name varchar(64) not null,
    food_price int not null,
    food_img text not null,
    restauran_id int not null,
    foreign key (restauran_id)
    references restaurans(restauran_id)
    on delete cascade
);

CREATE TABLE cart(
    cart_id serial PRIMARY KEY,
    food_name varchar(64) not null,
    food_price int not null,
    food_img text not null,
    count int default 1 not null
);

CREATE TABLE users(
    user_id serial PRIMARY KEY,
    user_name varchar(64) not null,
    address varchar(256) not null,
    user_email varchar(64) not null
);


CREATE UNIQUE INDEX ON users(user_email);
CREATE UNIQUE INDEX ON CART(food_name);

-- CREATE OR REPLACE PROCEDURE addCart(name varchar(64), price int, img text)
-- LANGUAGE plpgsql
-- AS
-- $$
-- declare 
-- BEGIN

--     if
        
--         (select food_name from cart where food_name like name||'%') = name

--     then
--         update cart set count = count + 1 where food_name = name;

--         raise info 'Added 1 more!';
--     else
--         INSERT INTO cart(food_name, food_price, food_img) VALUES (name, price, img);
--         raise exception 'Added to the cart!';
		
-- 	end if;
    
-- END;
-- $$;