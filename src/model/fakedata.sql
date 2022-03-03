INSERT INTO catagories(catagory_name) VALUES ('Milliy Taomlar');
INSERT INTO catagories(catagory_name) VALUES ('Fast Food');


INSERT INTO restaurans(restauran_name, restauran_img, catagory_id) VALUES ('Rayhon', 'http://storage.kun.uz/source/uploads/2017-0506/Azzo/lmlrh4.jpg', 1);
INSERT INTO restaurans(restauran_name, restauran_img, catagory_id) VALUES ('Anjir', 'https://avatars.mds.yandex.net/get-altay/4336412/2a00000177fdf45603aff750916c144ac921/XXL', 1);
INSERT INTO restaurans(restauran_name, restauran_img, catagory_id) VALUES ('Max-Way', 'https://avatars.mds.yandex.net/get-altay/4804646/2a000001791cf37a0f4b97eacabc70fad00c/XXL', 2);
INSERT INTO restaurans(restauran_name, restauran_img, catagory_id) VALUES ('Evos', 'https://avatars.mds.yandex.net/get-altay/3986639/2a000001775a6b0413568baf30c4ed9fcead/XXL', 2);


INSERT INTO foods(food_name, food_price, food_img, restauran_id) VALUES ('Palov', 30000, 'https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/4-0-0-0-0-1583312859.png', 1); 
INSERT INTO foods(food_name, food_price, food_img, restauran_id) VALUES ('Lag`mon', 25000, 'https://zira.uz/wp-content/uploads/2018/06/uygurskiy-lagman-4.jpg', 1); 
INSERT INTO foods(food_name, food_price, food_img, restauran_id) VALUES ('Qazon kabob', 40000, 'https://upload.wikimedia.org/wikipedia/commons/1/11/Qozon_kabob_%28Uzbek_national_cuisine%29.jpg', 2); 
INSERT INTO foods(food_name, food_price, food_img, restauran_id) VALUES ('Norin', 35000, 'https://thumbs.dreamstime.com/z/uzbek-national-food-norin-traditional-fabric-adras-uzbekistan-most-tasty-central-asia-42176654.jpg', 2); 
INSERT INTO foods(food_name, food_price, food_img, restauran_id) VALUES ('Gamburger', 30000, 'https://cdna.artstation.com/p/assets/images/images/036/472/004/large/hasan-physcamera0010000-post-lightmix-interactive-ps2.jpg?1617767968', 3); 
INSERT INTO foods(food_name, food_price, food_img, restauran_id) VALUES ('Haggy', 30000, 'https://www.restoran-shafran.uz/image/cache/catalog/product/haggi-2-750x500.jpg', 3); 
INSERT INTO foods(food_name, food_price, food_img, restauran_id) VALUES ('Sandvich', 35000, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-200511-seo-club-sandwich-h-14383-eb-1590780714.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*', 4); 
INSERT INTO foods(food_name, food_price, food_img, restauran_id) VALUES ('Hot-Dog', 20000, 'https://media.istockphoto.com/photos/hot-dog-on-white-picture-id1130731707?k=20&m=1130731707&s=612x612&w=0&h=7NJFU6IqoSzun76MA3f4osiRc_EZuAQJ4Wfahxzf9Wk=', 4); 



INSERT into cart(food_name, food_price, food_img) select food_name, food_price, food_img from foods where food_id = 1;