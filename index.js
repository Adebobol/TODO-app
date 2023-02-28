'use strict';

const screen = document.querySelector(".screen");
const write = document.querySelector(".write");
const written = document.querySelectorAll(".writeOne");
const check = document.querySelectorAll(".check");
const rule = document.querySelectorAll(".rule");
const cancel = document.querySelectorAll(".cancel");
const todoLeft = document.querySelector(".todo-left");



todoLeft.textContent = written.length

function bu() {


    const html = `
    
        <div class="writeOne">
          <div class="written">
            <input type="checkbox" name="" class="check" style="margin-right: 30px;">
            <h4 class="rule">${screen.value}</h4>
          </div>
          <h1 class="cancel">&times;</h1>
        </div>
    `

    if (screen.value === "") {

        screen.value = '';
    }
    else {
        write.insertAdjacentHTML('afterbegin', html);
        const written = document.querySelectorAll(".writeOne");
        todoLeft.textContent = written.length
        const check = document.querySelectorAll(".check");
        const rule = document.querySelectorAll(".rule");
        const cancel = document.querySelectorAll(".cancel");
        for (const [i, ch] of check.entries()) {
            ch.addEventListener('click', () => {
                console.log("workin")
                rule[i].classList.add("ruleOver")
            })
        }

        for (const [i, can] of cancel.entries()) {
            can.addEventListener("click", () => {
                written[i].innerHTML = '';
                written[i].classList.remove("writeOne");
            })
        }
        screen.value = '';
    }

}

function ty() {
    // console.log("Typing")
    screen.placeholder = 'Currently typing';
}

function remove() {
    for (const [i, can] of cancel.entries()) {
        can.addEventListener("click", () => {
            written[i].innerHTML = '';
            written[i].classList.remove("writeOne");
        })
    }
}
remove();