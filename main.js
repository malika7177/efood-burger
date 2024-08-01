const foodList = document.getElementById("food-list");

document.querySelector("#burger-link").addEventListener("click", () => {
    event.preventDefault();
    showFoodList("burger");
});
document.querySelector("#pizza-link").addEventListener("click", () => {
    event.preventDefault();
    showFoodList("pizza");
});
document.querySelector("#sandwich-link").addEventListener("click", () => {
    event.preventDefault();
    showFoodList("sandwich");
});
document.querySelector("#asian-food-link").addEventListener("click", () => {
    event.preventDefault();
    showFoodList("asian-food");
});
document.querySelector("#set-menu-link").addEventListener("click", () => {
    event.preventDefault();
    showFoodList("set-menu");
});

function showFoodList(type) {
    foodList.innerHTML = "";
    let foodItems = [];
    switch (type) {
        case "burger":
            foodItems = [`
                <div class="food-item">
                <img src="img/item_01-480x480 1 (1).png" alt="" class="img">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <p>Black Gamburger</p>
                <span>$14.00</span>
                <button class="add">Add to cart</button>
            </div>
            <div class="food-item">
                <img src="img/item_01-480x480 1 (2).png" alt="" class="img">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <p>Royal CheeseBurger</p>
                <span>$16.00</span>
                <button class="add">Add to cart</button>
            </div>
            <div class="food-item">
                <img src="img/item_01-480x480 1.png" alt="" class="img">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <p>Chicken Gamburger</p>
                <span>$15.00</span>
                <button class="add">Add to cart</button>
            </div>
            <div class="food-item">
                <img src="img/item_01-480x480 1 (3).png" alt="" class="img">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <p>Gamburger with Salad</p>
                <span>$18.00</span>
                <button class="add">Add to cart</button>
            </div>
            <div class="food-item">
                <img src="img/Burger.png" alt="" class="img">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <p>Beef burger</p>
                <span>$15.00</span>
                <button class="add">Add to cart</button>
                </div>`
            ];
            break;
        case "pizza":
            foodItems = [
                `
                <div class="food-item">
                <img src="https://t3.ftcdn.net/jpg/06/27/23/56/360_F_627235669_iz0O2leKYRzjxAKdFP7odpp9eCOZREtN.jpg" class="img">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <p>Pizza</p>
                <span>$15.00</span>
                <button class="add">Add to cart</button>
                </div>
                <div class="food-item">
                <img src="https://w7.pngwing.com/pngs/280/611/png-transparent-pizza-hamburger-submarine-sandwich-restaurant-oven-pizza-food-cheese-recipe.png" class="img">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <p>Pizza</p>
                <span>$15.00</span>
                <button class="add">Add to cart</button>
                </div>
                <div class="food-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7YPN97qC4kjiqaYKPj9xq2-G8wi_HXbznCg&s" class="img">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <p>Pizza</p>
                <span>$15.00</span>
                <button class="add">Add to cart</button>
                </div>
                <div class="food-item">
                <img src="https://img.lovepik.com/free-png/20210919/lovepik-pizza-png-image_400594998_wh1200.png" class="img">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <p>Pizza</p>
                <span>$15.00</span>
                <button class="add">Add to cart</button>
                </div>
                <div class="food-item">
                <img src="https://llllline.com/images/thumbs/pizz/pizza-png-0000053793-800.jpeg" class="img">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <p>Pizza</p>
                <span>$15.00</span>
                <button class="add">Add to cart</button>
                </div>
                `
            ];
            break;
        case "sandwich":
            foodItems = [
                `<div class="food-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlEopi8o6y1JJI67uh5YoCP0ES6Np0wTlnw&s" class="img">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <p>Sandwich</p>
                <span>$15.00</span>
                <button class="add">Add to cart</button>
                </div>
                <div class="food-item">
                <img src="https://static.vecteezy.com/system/resources/previews/024/589/251/non_2x/sandwich-ham-cheese-with-ai-generated-free-png.png" class="img">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <p>Sandwich</p>
                <span>$15.00</span>
                <button class="add">Add to cart</button>
                </div>
                <div class="food-item">
                <img src="https://www.shutterstock.com/image-photo/sandwich-png-images-260nw-2368338079.jpg" class="img">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <p>Sandwich</p>
                <span>$15.00</span>
                <button class="add">Add to cart</button>
                </div>
                `
            ];
            break;
        case "asian-food":
            foodItems = [
                `<div class="food-item">
                <img src="https://e7.pngegg.com/pngimages/677/323/png-clipart-chinese-cuisine-char-siu-instant-noodle-food-char-siu-pork-soup-food.png" class="img">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <p>Asian Food</p>
                <span>$15.00</span>
                <button class="add">Add to cart</button>
                </div>

                <div class="food-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXEvoJh4aYH07hi1MqldRnn2XnsRHU8ReX8A&s" class="img">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <p>Asian Food</p>
                <span>$15.00</span>
                <button class="add">Add to cart</button>
                </div>
                `
            ];
            break;
        case "set-menu":
            foodItems = [
                `<div class="food-item">
                <img src="https://img.lovepik.com/free-png/20211123/lovepik-french-fries-set-meal-png-image_401085257_wh1200.png" class="img">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <p>Set Menu</p>
                <span>$15.00</span>
                <button class="add">Add to cart</button>
                </div>

                <div class="food-item">
                <img src="https://w7.pngwing.com/pngs/139/179/png-transparent-bento-makunouchi-ekiben-plate-lunch-side-dish-sapporo-food-recipe-cuisine-thumbnail.png" class="img">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <p>Set Menu</p>
                <span>$15.00</span>
                <button class="add">Add to cart</button>
                </div>

                <div class="food-item">
                <img src="https://img.lovepik.com/free-png/20211118/lovepik-box-lunch-png-image_400997745_wh1200.png" class="img">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <p>Set Menu</p>
                <span>$15.00</span>
                <button class="add">Add to cart</button>
                </div>

                <div class="food-item">
                <img src="https://banner2.cleanpng.com/20180928/qf/kisspng-full-breakfast-malaysian-cuisine-oldtown-white-cof-everyday-set-meals-oldtown-menu-promotions-5badef4b560901.6517171115381256433524.jpg" class="img">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <p>Set Menu</p>
                <span>$15.00</span>
                <button class="add">Add to cart</button>
                </div>
                `
            ];
            break;
            default:
                foodItems = [];
    }
    foodItems.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = item;
        foodList.appendChild(listItem);
    });
}
