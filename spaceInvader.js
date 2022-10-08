"use strict";

ractangles();

function ractangles() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

    context.beginPath();
    context.rect(0,0,300,300);
    context.fillRect(0,0,300,300)
    context.stroke();

    context.beginPath();
    context.fillStyle = 'lime';
    context.fillRect(25,25,50,100);
    context.stroke();

    context.beginPath();
    context.fillStyle = 'lime';
    context.fillRect(25,225,50,50);
    context.stroke();

    context.beginPath();
    context.fillStyle = 'lime';
    context.fillRect(225,25,50,100);
    context.moveTo(225,225);
    context.fillRect(225,225,50,50);
    context.moveTo(125,175);
    context.fillRect(125,175,50,50);
    context.stroke();

}
