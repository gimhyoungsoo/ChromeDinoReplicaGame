const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

let score;
let highscore;
let player;
let gravity;
let obstacles;
let gameSpeed;
let keys = [];

class player {
    constructor(x,y,w,h,c){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        
        this.dy = 0;
        this.jumpForce = 15;
        this.originalHeight = h;
    }
}