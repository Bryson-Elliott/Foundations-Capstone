const express = require('express')
const app = express()
app.use(express.json())

const input = document.querySelector("#input")

function addPlayer(event){
    event.preventDefault();
    const inputField = document.querySelector('#input');
    const player = document.createElement('li');
   
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
}

function deletePlayer(event){
    message.textContent = `${input}, removed`
    event.target.parentNode.remove();
}

document.querySelector("form").addEventListener("submit", addPlayer)

function crossOffPlayer(event){
    event.target.classList.toggle("checked")
    if (event.target.classList.contains("checked") === true){
        message.textContent = `${input} is trash!`      
    } else {
        message.textContent = `${input} I take it back they are good.` 
    }
}