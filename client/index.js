//const express = require('express')
//const app = express()
//app.use(express.json())

const message = document.querySelector("#message");

function addPlayer(event){
    event.preventDefault();
    const inputField = document.querySelector('input');
    const player = document.createElement('li');
    // console.log(inputField.value)
    const playerName = document.createElement("span");
    playerName.textContent = inputField.value;
    playerName.addEventListener("click", crossOffPlayer);
    player.appendChild(playerName);
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.addEventListener("click", deletePlayer);
    player.appendChild(deleteBtn);

    const list = document.querySelector("ul");
    list.appendChild(player);
    inputField.value =``;
};

function deletePlayer(event){
    const name = event.target.parentNode.childNodes[0].textContent;
    message.textContent = `${name} removed`;
    event.target.parentNode.remove();
    inputField.value =``;
};

document.querySelector("form").addEventListener("submit", addPlayer);

function crossOffPlayer(event){
    event.target.classList.toggle("checked");
    if (event.target.classList.contains("checked") === true){
        message.textContent = `${event.target.textContent} is trash!`      
    } else {
        message.textContent = `${event.target.textContent} is good nevermind.` 
    };
};