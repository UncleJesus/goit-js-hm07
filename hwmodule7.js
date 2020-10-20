// !_____________________________________ ЗАДАНИЕ 1 _________________________________________

// const listOfCategories = document.querySelectorAll(".item");
// console.log(`В списке ${listOfCategories.length} категории.`);
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
// let ul = document.querySelector("#ingredients");
// ingredients.forEach((ingredient) => {
//   let li = document.createElement(`li`);
//   li.textContent = ingredient;
//   ul.append(li);
// });

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
// const gallery = document.querySelector("#gallery");
// images.forEach((img) => {
//   gallery.insertAdjacentHTML(
//     "beforeend",
//     `<li><img src=${img.url} alt=${img.alt}></li>`
//   );
// });

// !_____________________________________ ЗАДАНИЕ 4 _________________________________________
// const decrement = function () {
//   span.textContent -= 1;
// };
// const increment = function () {
//   span.textContent = Number(span.textContent) + 1;
// };
// const dcBtn = document.querySelector(`[data-action="decrement"]`);
// const incBtn = document.querySelector(`[data-action="increment"]`);
// const span = document.querySelector("#value");
// dcBtn.addEventListener("click", decrement);
// incBtn.addEventListener("click", increment);

// !_____________________________________ ЗАДАНИЕ 5 _________________________________________
// const input = document.querySelector("#name-input");
// const span = document.querySelector("#name-output");
// input.addEventListener(`input`, changeName);
// function changeName(element) {
//   if (element.target.value === "") {
//     span.textContent = `незнакомец`;
//   } else {
//     span.textContent = element.target.value;
//   }
// }
// !_____________________________________ ЗАДАНИЕ 6 _________________________________________
// const input = document.querySelector("#validation-input");

// input.addEventListener(`blur`, checkInputLenght);
// function checkInputLenght(event) {
//   if (event.target.value.length >= input.getAttribute("data-length")) {
//     input.classList.add("valid");
//     input.classList.remove("invalid");
//   } else {
//     input.classList.add("invalid");
//     input.classList.remove("valid");
//   }
// }
// !_____________________________________ ЗАДАНИЕ 7 _________________________________________
// const inputSizeRef = document.querySelector("#font-size-control");
// const spanSizeRef = document.querySelector("#text-size");
// inputSizeRef.addEventListener("input", (event) => {
//     spanSizeRef.style.fontSize = event.target.value + "px";
// });
