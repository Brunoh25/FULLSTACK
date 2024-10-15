let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");

let retangulo={
    x:0,
    y:150,
    largura:50,
    altura:50,
    cor_linha:"blue",
    cor_preenchimento:"red",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle=this.cor_preenchimento;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
}

let retangulo2={
    x:0,
    y:200,
    largura:50,
    altura:50,
    cor_linha:"yellow",
    cor_preenchimento:"green",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle=this.cor_preenchimento;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
}

let bola={
    x:10,
    y:10,
    raio:100,
    img:new Image(),
    desenha: function(){
        this.img.src = 'bola.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}

console.log(retangulo.largura);
console.log(retangulo.cor_preenchimento);
console.log(retangulo2.largura);
console.log(retangulo2.cor_preenchimento);

retangulo.desenha();
retangulo2.desenha();

function animacao(){
    /* ctx.clearRect(0,0,400,400) */
    /* retangulo.x = retangulo.x + 1;
    retangulo.y=retangulo.y+1; */
    retangulo.desenha();
    /* retangulo2.x = retangulo2.x + 1;
    retangulo2.y=retangulo2.y-1; */
    retangulo2.desenha();
    bola.desenha();
    /* if (retangulo.x>=150){
        retangulo.x = retangulo.x + 1;
        retangulo.y=retangulo.y-1;
        retangulo.desenha();
        retangulo2.x = retangulo2.x + 1;
        retangulo2.y=retangulo2.y+1;
        retangulo2.desenha();
    } */
    requestAnimationFrame(animacao);
}
animacao();

document.addEventListener("keydown",function(evento){
    let tecla=evento.key;
    console.log(tecla);
    let vel=5;
    if(tecla=="ArrowUp"){
        retangulo.y-=vel;
    }
    if(tecla=="ArrowDown"){
        retangulo.y+=vel;
    }
    if(tecla=="ArrowRight"){
        retangulo.x+=vel;
    }
    if(tecla=="ArrowLeft"){
        retangulo.x-=vel;
    }
})

document.addEventListener("mousemove",function(evento){
    rect=canvas.getBoundingClientRect();
    x_mouse=evento.clientX-rect.left,
    y_mouse=evento.clientY-rect.top;
    console.log(x_mouse,y_mouse);

    retangulo2.x=x_mouse-25;
    retangulo2.y=y_mouse-25;
})