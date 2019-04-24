$(document).ready(function(){

var fontFamily = ["helevtica","verdana","airal","courier","georgia"]
var text = ["kerning","typography","glyph","tracking","x-height","ascender","decender","serif","sans serif","slab","caps height" ]
var color = ["red","orange","yellow","green","lightblue","blue","purple","cyan","grey","darkgrey"]

var randomText = Math.floor( Math.random()* text.length);
var randomFont = fontFamily[Math.floor( Math.random()* fontFamily.length)];
var randomColor = color[Math.floor( Math.random()* color.length)]
var randomSize = Math.random()* 100 + "px";
var randomSpace = Math.random()* 200 + "px";

$("#text").html(text[randomText])
$("#text").css("font-family",randomFont)
$("#text").css("font-size",randomSize)
$("#text").css("color",randomColor)
$("#text").css("letter-spacing",randomSpace)




})

