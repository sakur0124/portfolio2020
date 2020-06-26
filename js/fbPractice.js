'use strict';

{

$('.searchBar input').focus(function(){
    $('.searchBar').addClass('toFocus'); 
});

$('.searchBar input').focusout(function(){
    $('.searchBar').removeClass('toFocus'); 
});





}