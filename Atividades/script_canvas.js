let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");
let canvas2=document.getElementById("canvas2");
let ctx2=canvas2.getContext("2d");

function desenhar_retângulo(x, y,tam_x,tam_y,cor,canv){
canv.beginPath();
canv.lineWidth = 0;
canv.strokeStyle = 'transparent';
canv.fillStyle = cor;
canv.strokeRect(x,y,tam_x,tam_y);
canv.fillRect(x,y,tam_x,tam_y);
canv.closePath();
}

function desenhar_linha(x1,y1,x2,y2,cor,canv){
canv.beginPath();
canv.lineWidth = 2;
canv.strokeStyle = cor;
canv.moveTo(x1,y1);
canv.lineTo(x2,y2);
canv.stroke();
canv.closePath();
}

function desenhar_arco(x, y ,r, ang1, ang2, cor_int,cor_ext,canv){
canv.beginPath();
canv.lineWidth = 10;
canv.strokeStyle = cor_ext;
canv.fillStyle = cor_int;
canv.arc(x, y ,r, ang1, ang2);
canv.stroke();
canv.fill();
canv.closePath();
}

function escrever(x, y, texto, cor_int,cor_ext,canv){
canv.beginPath();
canv.lineWidth = 10;
canv.strokeStyle = cor_ext;
canv.fillStyle = cor_int;
canv.font = "25px Arial";
canv.strokeText(texto,x,y);
canv.fillText(texto,x,y);
canv.closePath();
}

function desenhar_triângulo(x1,y1,x2,y2,x3,y3,cor_int,cor_ext,canv){
canv.beginPath();
canv.lineWidth = 2;
canv.strokeStyle = cor_ext;
canv.fillStyle = cor_int;
canv.moveTo(x1,y1);
canv.lineTo(x2,y2);
canv.lineTo(x3,y3);
canv.lineTo(x1,y1);
canv.fill();
canv.stroke();
canv.closePath();
}
/////////////////////////////////
desenhar_retângulo(0,0,60,60,'blue',ctx);
desenhar_retângulo(340,0,60,60,'red',ctx);
desenhar_retângulo(0,340,30,60,'yellow',ctx);
desenhar_retângulo(0,370,60,30,'yellow',ctx);
desenhar_retângulo(370,340,30,60,'black',ctx);
desenhar_retângulo(340,370,60,30,'black',ctx);
desenhar_retângulo(200,200,-60,60,'red',ctx);
desenhar_linha(200,200,200,400,'black',ctx);
desenhar_linha(0,200,400,200,'green',ctx);
desenhar_linha(0,0,200,200,'blue',ctx);
desenhar_linha(400,0,200,200,'red',ctx);

/////////////////////////////////
desenhar_retângulo(0,300,400,100,'grey',ctx2);
desenhar_retângulo(150,190,100,110,'brown',ctx2);
desenhar_retângulo(50,240,25,60,'brown',ctx2);
desenhar_retângulo(340,290,25,60,'brown',ctx2);
desenhar_arco(62.5,220,40,0,2*Math.PI,'green','transparent',ctx2);
desenhar_arco(352.5,270,40,0,2*Math.PI,'green','transparent',ctx2);
desenhar_arco(310,90,45,0,2*Math.PI,'yellow','transparent',ctx2);
desenhar_retângulo(0,300,50,100,'dodgerblue',ctx2);
desenhar_retângulo(0,350,150,50,'dodgerblue',ctx2);
desenhar_arco(0,300,50,0,2*Math.PI,'dodgerblue','transparent',ctx2);
desenhar_arco(150,400,50,0,2*Math.PI,'dodgerblue','transparent',ctx2);
desenhar_retângulo(160,220,30,30,'lightblue',ctx2);
desenhar_retângulo(210,220,30,30,'lightblue',ctx2);
desenhar_retângulo(190,250,20,50,'maroon',ctx2);
desenhar_linha(150,190,200,140,'salmon',ctx2)
desenhar_linha(200,140,250,190,'salmon',ctx2)
desenhar_linha(250,190,150,190,'salmon',ctx2)
desenhar_triângulo(150,190,200,140,250,190,'salmon','transparent',ctx2)