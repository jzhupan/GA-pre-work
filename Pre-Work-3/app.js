function toggleOnClick(){
    let myClick = document.getElementById('toggleClick');

    let div = myClick.style.display;
    if (div === 'block') {
        myClick.style.display='none';
        toggleOnClick.innerHTML = 'show-description';
    }    else {
        myClick.style.display = 'block';
        toggleOnClick.innerHTML = 'show-description';
    }
}

// function toggle() {
//     let description = document.getElementById('toggleClick');
//     if (description.style.display === 'block') {
//         description.style.display = 'none';
//         document.getElementById('toggleClick').value = 'show-description';
//     } else {
//         description.style.display = 'block';
//         document.getElementById('toggleClick').value = 'show-description';
//     }
// }


// function toggleOnClick() {
//     let element = document.getElementById('toggleClick');
//     element.classList.toggle('show-description');
// }


// function toggleOnClick() {
//     let element = document.getElementById("toggleClick");
//     element.classList.toggle("first", "second", "dessert");
// }


// document.getElementById("toggleClick").onclick = function() {
//     'first second dessert'.split(' ').forEach(function(s) {
//         Element.classList.toggle(s);
//     });
// }

