$(document).ready(function() {
/*  $('.button large').on('click', => {
    alert("The paragraph was clicked.");
  }
  */
/*
  $('.button large').on('click', event => {
    alert("The paragraph was clicked.");
    console.log('The paragraph was clicked.');
  })
  */

  $('.button').on({
    mouseenter: function(){
      $('.button').css("background-color", "lightgray");
    },
    mouseleave: function(){
       $('.button').css("background-color", "lightblue");
     },
     click: function(){
       $('.button').css("background-color", "lightgreen");
     }

  });


  $('.thumbnail').on({
    mouseenter: function(){
      $('.thumbnail').css("border", "lightgray");
    },
    mouseleave: function(){
       $('.thumbnail').css("border", "lightblue");
     },
     click: function(){
       $('.thumbnail').css("border", "lightgreen");
     }

  });



});
