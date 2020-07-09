{
    const welcome = () => {
        console.log("Witajcie");

        welcome();
    };

    const toggleBackground = () => {
        const change = document.querySelector("body");
        const background = document.querySelector(".js-changeBackground");
        change.classList.toggle("js-changeBackground");

    };

    const switchImage = () => {
        const button = document.querySelector(".headerEnd__button");
        const galleryPhoto = document.querySelector(".js-galleryPhoto");

        switch (button.innerHTML) {
            case "Pokaż zdjęcie":
                galleryPhoto.innerHTML = '<img width="100%" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt="zdjęcie fitness1">';
                button.innerText = "Pokaż kolejne";
                break;
            case "Pokaż kolejne":
                galleryPhoto.innerHTML = '<img width="100%" src="https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt="zdjęcie fitness2">';
                button.innerText = "Następne";
                break;
            case "Następne":
                galleryPhoto.innerHTML = '<img width="100%"  src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt="zdjęcie fitness3">';
                button.innerText = "Jeszcze takie";
                break;
            case "Jeszcze takie":
                galleryPhoto.innerHTML = '<img width="100%"  src="https://images.unsplash.com/photo-1518644961665-ed172691aaa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="zdjęcie fitness4">';
                button.innerText = "I takie";
                break;
            case "I takie":
                galleryPhoto.innerHTML = '';
                button.innerText = "Jeszcze raz?";
                break;
            case "Jeszcze raz?":
                button.innerText = "Pokaż zdjęcie";
                break;
        }
    };
    switchImage();

    const init = () => {
        const ChangeBackground = document.querySelector(".headerEnd__button--ChangeBackground");
        ChangeBackground.addEventListener("click", toggleBackground);
        button.addEventListener("click", switchImage, );
    };

    init();
    toggleBackground();

}