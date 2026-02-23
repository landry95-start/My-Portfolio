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
