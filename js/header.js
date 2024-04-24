/* ----------Note Note Note ----------- */

/* All the content inside this css file are copy right protectes under creative commons license 2024 NoteX Studios Inc. */

/* Use of this content for commercial purpose will lead to the violation of this license  */

/* CC-2024 NoteX Studios All Rights Preserved */

/* Developed and finalized by Dev.SC */


const hamBurgerIcon = document.querySelector('.bx-menu');
const navBar = document.querySelector('.navbar');

hamBurgerIcon.addEventListener('click', ()=>{
  hamBurgerIcon.classList.toggle('bx-x');
  navBar.classList.toggle('active');

} )