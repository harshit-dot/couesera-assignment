function specials(){
	var myimages= new Array();
	
	myimages[1]="photoes/photo5.jpg"
	myimages[2]="photoes/photo6.jpg"
	myimages[3]="photoes/photo7.jpg"
	myimages[4]="photoes/photo8.jpg"
	myimages[5]="photoes/photo9.jpg"
	myimages[6]="photoes/photo10.jpg"
	myimages[7]="photoes/photo11.jpg"
myimages[8]="photoes/photo12.jpg"
myimages[9]="photoes/photo13.jpg"
myimages[10]="photoes/photo14.jpg"
myimages[11]="photoes/photo15.jpg"
myimages[12]="photoes/photo1.jppg"
myimages[13]="photoes/photo2.jpg"
var names=new Array();
names[1]="BEEF"
names[2]="HIMA-SHU"
names[3]="EGG-CHIMA"
names[4]="NU-DE-SA"
names[5]="CHI-MU"
names[6]="VEG NU-DI-SA"
names[7]="CHECKEN-PASA"
names[8]="HA-FI-KA"
names[9]="EGG-DISH"
names[10]="SPECIAL-EGG-DISH"
names[11]="VEG-PASTA"
names[12]="CHI-KI-MA"
names[13]="KI-SU-NA"


var rnd=Math.floor(Math.random()*myimages.length);
if(rnd==0){
	rnd=1;
}
document.write('<img src="'+myimages[rnd]+'" border="0" width="350px" height="350px" padding="10px" margin="30px">' +names[rnd])

}