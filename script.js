
//MADE BY: @PauloTheDev
//DATE: July 5, 2022

//CAPTURES
const lightZone = document.querySelector('#light-mode');
    const icons = document.querySelectorAll('.icon');

const body = document.querySelector('body');
const header = document.querySelector('header');
const h1 = document.querySelectorAll('h1');
const paragraph = document.querySelectorAll('p');


//DARK MODE FUNCTION
lightZone.addEventListener('click', ()=>{
    
    //Change the icon
    icons[0].classList.toggle('invisible');
    icons[1].classList.toggle('invisible');
    
    //Make the insert class in all elements of array
    function setMode(tag,HTMLclass){
        tag.forEach((elem, pos)=>{
            tag[pos].classList.toggle(HTMLclass)
        })
    }

    //Make the changes
    body.classList.toggle('background-dark');
    header.classList.toggle('header-dark')
    setMode(h1,'text-dark')
    setMode(paragraph, 'text-dark')


})
