var CANVAS=document.getElementById("canvas");
ctx=CANVAS.getContext("2d");
//espaciator
var CH=100;
var CW=75;
//hello
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
//alguien exploto
var CX=5;
var CY=225;
//no
function add() {
ES=new Image();
ES.onload=uploadBackground;
ES.src=background_image;
karro=new Image();
karro.onload=uploadgreencar;
karro.src=greencar_image;}
//bruh
function uploadBackground() {
ctx.drawImage(ES,0,0,canvas.width,canvas.height);

};

function uploadgreencar() {
ctx.drawImage(karro,CX,CY,CW,CH);


	
};


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		};
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		};
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		};
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		};
		
		
}

function up(){
	if(CY>=0){
		CY=CY-10;
	uploadBackground();
	uploadgreencar();
	};
	};
	
	function down(){
	if(CY<=500){
	CY=CY+10;
	uploadBackground();
	uploadgreencar();
	};
	};
		
	function left(){
		if(CX>=0){
			CX=CX-10;
		uploadBackground();
	uploadgreencar();
		};
		};
	
		function right(){
			if(CX<=700){
				CX=CX+10;
			uploadBackground();
	uploadgreencar();
			};
			};