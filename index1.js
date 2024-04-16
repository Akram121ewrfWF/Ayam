onload = function(){

let body = document.querySelector('body');
let continear_dark = this.document.getElementById('continear-dark');
let header = this.document.querySelector('header');
let main_dark = document.getElementById('main-dark')
let gallary_dark = this.document.getElementById('gallary_dark');
let left_dark = document.getElementById('left_dark_white')
let right_Dark = document.getElementById('right_Dark');
let Dark_mode = this.document.getElementById('dark')
let icon_white = document.getElementById('color-white')
let Dark_section_one = this.document.getElementById('Dark_section_one')
let Dark_footer = document.getElementById('Dark_footer')
// gallary_dark.style.background = '#00';

Dark_mode.addEventListener('click', function(){
    
    header.classList.add('main_dark_background');
    header.classList.add('main_dark_color');
    main_dark.classList.add('main_dark_background')
    body.classList.add('main_dark_background')
    right_Dark.classList.add('main_dark_background');
    left_dark.classList.add('main_dark_color')
    gallary_dark.classList.add('main_dark_background');
    gallary_dark.classList.add('main_dark_color');
    icon_white.style.color ='#FFF';
    header.style.borderBottom ='thin solid #fff';
    // Dark_section_one.classList.add ('main_dark_background');
    // Dark_footer.classList.add('main_dark_background')

})
Dark_mode.addEventListener('dblclick', function(){
window.location.reload();
})



}