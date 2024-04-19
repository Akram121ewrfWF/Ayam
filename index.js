onload = function (){

    let continear_dark = document.getElementById('continear-dark');
    let main_dark = this.document.getElementById('main-dark');
    let Dark_section_one = document.getElementById('Dark_section_one');
    let Dark_Line_one = document.getElementById('Dark-Line-one')
    let dark_mode = this.document.getElementById('dark');
    let Dark_header = this.document.getElementById('Dark-header');
    let gallary_dark = this.document.getElementById('gallary_dark');
    let Dark_footer = document.getElementById('Dark_footer');
    let Dark_White1 = document.getElementById('Dark-White-1');
    let Dark_White2 = document.getElementById('Dark-White-2');
    let Dark_White3 = document.getElementById('Dark-White-3');
    let Dark_White4 = document.getElementById('Dark-White-4');
    let H2_dark = document.getElementsByClassName('H2-dark');
    let header_border_bottom = document.querySelector('header');
    let dark_white_header_right = this.document.getElementById('dark-white-header-right');
// wertytrewrg
let Dark_continue = document.getElementById('Dark-continue');

    dark_mode.addEventListener('click' , function(){
        Dark_Line_one.classList.add('main_dark_background')
        continear_dark.classList.add('main_dark_background');
        main_dark.classList.add('main_dark_background');
        Dark_section_one.classList.add('main_dark_background')
        Dark_header.classList.add('main_dark_background');
        gallary_dark.classList.add('main_dark_background');
        Dark_footer.classList.add('main_dark_background')
        Dark_White1.style.color ='#fff';
        Dark_White2.style.color ='#fff';
        Dark_White3.style.color ='#fff';
        Dark_White4.style.color ='#fff';
        dark_white_header_right.style.color ='#fff';
        H2_dark[0].style.color ='white';
        H2_dark[1].style.color ='white';
        H2_dark[2].style.color ='white';
        H2_dark[3].style.color ='white';
        H2_dark[4].style.color ='white';
        H2_dark[5].style.color ='white';
        H2_dark[6].style.color ='white';
        H2_dark[7].style.color ='white';
        header_border_bottom.style.borderBottom ='thin solid #fff';
    })
    dark_mode.addEventListener('dblclick', function(){window.location.reload();})



}
