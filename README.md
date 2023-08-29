# Restaurant_webservice
---
## Author  : Suttiporn Kaewsakunnee
---
## Frontend
## Code css
![image](https://github.com/SuttiGuy/Restaurant_webservice/assets/122422912/18d2b840-af33-49c7-aa38-50f25e40439d)
จะตกแต่งประมาณนี้

## HTML
![image](https://github.com/SuttiGuy/Restaurant_webservice/assets/122422912/227d3c46-a80f-40f8-b432-21f4b8b8d045)
ส่วนหน้าหลักก็จะใช้โค้ดแบบพื้นฐาน
ฃ
## Java Script
![image](https://github.com/SuttiGuy/Restaurant_webservice/assets/122422912/937959fc-d606-458d-83a3-d9655c7de95f)
ส่วนของ java Script จะเป็นส่วนของหน้าที่เราจะควยคุมการทำงานรับส่งค่าของข้อมูลที่เราทำไว้จากส่วนของ backend ที่เราทำไว้ โดยที่เรา จะใช้ ระบบของ CRUD เข้ามาในการใช้งาน

## หน้า index
-  ![image](https://github.com/SuttiGuy/Restaurant_webservice/assets/122422912/ad2c1984-412a-46ef-ba6a-67c2157ade57)
### จะมีปุ่ม Edit และ Delete 
สามารถลบอาหารในหน้า index ได้เลย โดยกดปุ่ม Delete

## หน้า Edit หรือ Update Restaurant
- ![image](https://github.com/SuttiGuy/Restaurant_webservice/assets/122422912/0f139f18-1c5d-4b98-b0fb-817c705b3a7f)
ก็จะมีบอก ชื่ออาหาร ประเภทอาหาร ลิ้งใส่รูปภาพ และสามารถแก้ชื่ออาหาร ประเภทอาหาร และลิ้งรูปภาพใหม่ได้ ถ้าไม่แก้ก็กด Cancle

## หน้า Add My Restaurant
- ![image](https://github.com/SuttiGuy/Restaurant_webservice/assets/122422912/4282c477-ec35-48b6-b62c-adf11730d200)
ใส่ชื่ออาหาร ประเภทอาหาร และลิ้งรูปภาพ เพื่อสร้างเมนูอาหารใหม่ ทำการกด Add Restaurant เพื่อสร้างเมนูอาหารใหม่  ถ้ากด Cancle จะเป็นการยกเลิก

## Backend

## open xampp 
![image](https://github.com/SuttiGuy/Restaurant_webservice/assets/122422912/be44132b-6e89-4298-85e0-19f15c0407e9)

เพื่อเป็นการเปิดเซิฟเวอร์ ของ restaurant

## config Database
![image](https://github.com/SuttiGuy/Restaurant_webservice/assets/122422912/40b10adb-8ed1-4cd2-93ae-99632cc83316)
โดย ใช้ phpMyadmin และมีฐานข้อมูลชื่อว่า restaurant

## Servive Packaeg
- Node.js
- Sequelize
- cors
- express
- mysql
- mysql2
- nodemon

## controller
controller แบ่งงออกเป็น 5 ส่วน คือ createRestaurant , getALL , getByID  , deletebyid , UpdateByID

## createRestaurant
- เพิ่มข้อมูลอาหาร

       Restaurant.createRestaurant = async(newRestaurant)=>{
        console.log("true");
        try {
            const  createRestaurant = await Restaurant.create(newRestaurant);
            console.log("created restaurants:", createRestaurant.toJSON());
            return createRestaurant.toJSON();
        } catch (error) {
            console.log("err", err);
            throw err;
        }
       }



## getAll
- การเรียกข้อมูลชื่ออาหารทั้งหมด

      Restaurant.getAll = async () =>{
          console.log("true");
          try {
              const restaurant = await Restaurant.findAll();
              return restaurant.map(restaurants => restaurants.toJSON());
          } catch (error) {
              console.log("error",error);
              throw error;
       }
      }

## getById
- การเรียกข้อมูลโดยใช้ ไอดีของอาหาร

        Restaurant.getById = async (restaurantId) => {
            try {
                const restaurant = await Restaurant.findByPk(restaurantId);
                if (restaurant) {
                    return restaurant.toJSON();
                } else {
                    throw { kind:"not_found" }
                }
            } catch (error) {
                console.log("error", error);
                throw error;
           }
          }

## deletebyid
- การลบอาหารออกไป

        Restaurant.deletebyid = async (restaurantId) => {
        try {
            const restaurant = await Restaurant.destroy({ where: { id: restaurantId } });
            return restaurant
        } catch (error) {
            console.log("err", error);
            throw error;
        }
      };


## restaurantupdateid
- การอัปเดตชื่ออาหาร

        Restaurant.restaurantupdateid = async (edit,restaurantId) => {
          try {
                const restaurant = await Restaurant.update(edit,({ where: { id: restaurantId } }))
                return restaurant
            } catch (error) {
          console.log("err", error);
          throw error;
          }
        };
- ทำการ expost

        module.exports = Restaurant;

- Routers
เป็นการกำหนดเส้นทางของแต่ละฟังชั่นของ Contoller ให้ทำงานแต่ละอันไม่ให้มาตีกัน เพื่อให้ระบบของฟังชั่น ทำให้เห็นการทำงานได้ง่ายมาขึ้นและไม่รวน ครับ

Thanks You {-_-}
