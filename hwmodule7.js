// !_____________________________________ ЗАДАНИЕ 1 _________________________________________

// const listOfCategories = document.querySelectorAll(".item");
// console.log(`В списке ${listOfCategories.length} категории.`);
// listOfCategories.forEach((item) => console.log(item));
// listOfCategories.forEach((item) =>
//   console.log(
//     `Категория: ${
//       item.querySelector("h2").textContent
//     }, Количество элементов: ${item.querySelectorAll("li").length} `
//   )
// );

// !_____________________________________ ЗАДАНИЕ 2 _________________________________________
// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы",
// ];

// const ingredientsList = ingredients.map((ingredient) => {
//   let li = document.createElement(`li`);
//   li.textContent = ingredient;
//   return li;
// });
// let ul = document.querySelector("#ingredients");
// ul.append(...ingredientsList);

// !_____________________________________ ЗАДАНИЕ 3 _________________________________________
// const images = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const imagesGallery = (image) => {
//   const li = document.createElement(`li`);
//   li.classList.add("gallery__item");
//   const img = document.createElement(`img`);
//   img.setAttribute(`src`, image.url);
//   img.setAttribute(`alt`, image.alt);
//   li.append(img);
//   console.log(li);
//   return li;
// };
// const createGallery = images.map((image) => imagesGallery(image));
// document.querySelector("#gallery").append(...createGallery);

// !_____________________________________ ЗАДАНИЕ 4 _________________________________________

// !_____________________________________ ЗАДАНИЕ 5 _________________________________________

// !_____________________________________ ЗАДАНИЕ 6 _________________________________________

// !_____________________________________ ЗАДАНИЕ 7 _________________________________________

// !_____________________________________ ЗАДАНИЕ 8 _________________________________________