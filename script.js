"use strict";

const button = document.querySelector(".btn");
const dog = document.querySelector(".dog-photo");
const result = document.querySelector(".result");

const fortunes = ["大吉", "中吉", "小吉", "吉", "末吉", "凶"];

button.addEventListener("click", () => {
  // アニメーション中の連打防止
  button.disabled = true;

  // アニメーションをリセットして再実行
  dog.classList.remove("jump");
  void dog.offsetWidth;
  dog.classList.add("jump");

  result.textContent = "・・・";

  const randomIndex = Math.floor(Math.random() * fortunes.length);
  
  setTimeout(() => {
    result.textContent = fortunes[randomIndex];
    button.disabled = false;
  }, 1500);
});