let searchbar = document.querySelector(".search_bar");
let search_icon = document.querySelector(".icon")
let search_container = document.querySelector("#search_container")

search_container.addEventListener("mouseover", () => {
    searchbar.style.display = 'block';
})

search_container.addEventListener("mouseout", () => {
    if (document.activeElement === searchbar){
        return;
    }
    searchbar.style.display = 'none';
})

searchbar.addEventListener("focusout", () => {
    if (search_container.matches(':hover')){
        return;
    }
    searchbar.style.display = 'none';
})
