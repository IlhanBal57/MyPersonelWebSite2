$(document).ready(function(){
    $('.btn').click(function(){
      $('.items').toggleClass("show");
      $('ul li').toggleClass("hide");
    });
  });

window.addEventListener("scroll",function(){
var nav = document.querySelector("nav");
nav.classList.toggle("sticky",window.scrollY > 0)
})