window.onload = () => {
    initializeButtonList();
}

function initializeButtonList() {
    var toggleButtonList = document.querySelectorAll('.toggle-button');



    if (toggleButtonList.length === 0) { return; }

    for (let button of toggleButtonList) {
        let content = button.nextElementSibling;

        button.addEventListener('click',function (event) {
      	     content.classList.toggle('is-visible');
    	});
    }
}
