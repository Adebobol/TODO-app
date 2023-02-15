'use strict';
const writeTodo = document.querySelector(".write");
const screen = document.querySelector(".screen");
let  writeAll = document.querySelectorAll(".writeOne");
// const write = document.querySelector(".writeOne");
const cancel = document.querySelectorAll(".cancel");
const todoLeft = document.querySelector(".todo-left");




function bu() {

  // console.log(screen.value);
  // const wr = document.querySelector(".writeOne");
  console.log(writeAll.length);
  const html = `
  <hr>
  <div class="writeOne">
    <div class="written">
      <input type="checkbox" name="" id="" style="margin-right: 30px;">
      <h4>${screen.value}</h4>
    </div>
    <h1 class="cancel">&times;</h1>
  </div>
    `
  if (screen.value === "") {

    screen.value = '';
  }
  else {
    writeTodo.insertAdjacentHTML("beforeend", html);
    screen.value = '';
  }

}


