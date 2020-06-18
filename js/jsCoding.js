'use strict'

{   

    const images = [
        'url("./img/img01.jpg")',
        'url("./img/img02.jpg")',
        'url("./img/img03.jpg")',
    ];
    
    var current = 0;
    
    const mainVisual = document.getElementById('mainVisual');
    let btnL = document.getElementById('btn-L');
    let btnR = document.getElementById('btn-R');
   
    btnR.addEventListener('click',()=>{
        current += 1;
    
        if (current > images.length -1 ){
            current = 0;
        }
        mainVisual.style.backgroundImage = images[current];
        pageCount(current);
    });

    btnL.addEventListener('click',()=>{
        current -= 1;
    
        if (current < 0 ){
            current = images.length-1;
        }
        mainVisual.style.backgroundImage = images[current];
        pageCount(current);
    });

    function pageCount(current){
        let Now = document.getElementById('now');
        console.log('current'+current);
        if (current === 1){
            Now.textContent = '02';
        }else if (current === 2){
            Now.textContent = '03';
        }else {
            Now.textContent = '01';
        }
    }
    
}