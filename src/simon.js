import blueOff from './img/blueoff.jpg';
import blueOn from './img/blueon.jpg';
import redOff from './img/redoff.jpg';
import redOn from './img/redon.jpg';
import yellowOff from './img/yellowoff.jpg';
import yellowOn from './img/yellowon.jpg';
import greenOff from './img/greenoff.jpg';
import greenOn from './img/greenon.jpg';
export function Simon() {
  this.arrayOfColors= [];

}
Simon.prototype.addTurn = function(){
  var color = Math.floor(Math.random()*4);
  if (color==0) {
    this.arrayOfColors.push("red");
  } else if (color==1) {
    this.arrayOfColors.push("blue");
  } else if (color==2) {
    this.arrayOfColors.push("yellow");
  } else {
    this.arrayOfColors.push("green");
  }
}
Simon.prototype.resetTurn = function(){
  this.arrayOfColors= [];
}
Simon.prototype.setOff = function(){
  $("img#blue").attr("src",blueOff);
  $("img#red").attr("src",redOff);
  $("img#yellow").attr("src",yellowOff);
  $("img#green").attr("src",greenOff);
}
Simon.prototype.blueLightOn = function(){
  $("img#blue").attr("src",blueOn);
  }
  Simon.prototype.greenLightOn = function(){
    $("img#green").attr("src",greenOn);
    }
    Simon.prototype.yellowLightOn = function(){
      $("img#yellow").attr("src",yellowOn);
      }
      Simon.prototype.redLightOn = function(){
        $("img#red").attr("src",redOn);
        }
