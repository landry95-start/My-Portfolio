//declaration des variables;

const tablinks = document.querySelectorAll('.tab-links');
const tabcontents = document.querySelectorAll('.tab-contents');

function opentab(tabname){
    for (const tablink of tablinks) {
        tablink.classList.remove('active');
    }

    for (const tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }

    event.currentTarget.classList.add('active');

    document.getElementById(tabname).classList.add('active-tab');
}

//nav-bar responsive;

const fermeture = document.getElementById('close');
const ouverture = document.getElementById('open');
const Navlink = document.querySelector('.nav-link');

fermeture.addEventListener('click',()=>{
    Navlink.classList.remove('reduice');
    ouverture.style.display='block';
});

ouverture.addEventListener('click',()=>{
    Navlink.classList.add('reduice');
    ouverture.style.display='none';
});
