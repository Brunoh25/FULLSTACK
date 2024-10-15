let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");

let bola={
    x:10,
    y:10,
    raio:30,
    img:new Image(),
    desenha: function(){
        this.img.src = 'bola.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}

function animacao(){
    ctx.clearRect(0,0,400,400)
    bola.desenha();
    requestAnimationFrame(animacao);
}
animacao();

document.addEventListener("mousemove",function(evento){
    rect=canvas.getBoundingClientRect();
    x_mouse=evento.clientX-rect.left,
    y_mouse=evento.clientY-rect.top;
    console.log(x_mouse,y_mouse);
    if(x_mouse<0){
        bola.x=0;
    }
    else if(x_mouse>340){
        bola.x=340;
    }
    else{
        bola.x=x_mouse-25;
    }
    if(y_mouse<0){
        bola.y=0;
    }
    else if(y_mouse>340){
        bola.y=340;
    }
    else{
        bola.y=y_mouse-25;
    }
})