const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal")
const cards = document.querySelectorAll(".card");

for(let card of cards) {
    card.addEventListener("click", function(){
        const blogId = card.getAttribute("id");
        modalOverlay.classList.add("active");
        modalOverlay.querySelector("iframe").src = `https://blog.rocketseat.com.br/${blogId}`
    });
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})

document.querySelector(".maximize-modal").addEventListener("click", function(){
    if (modal.classList.contains("maximized")) {
        modal.classList.remove("maximized");
    } else {
        modal.classList.add("maximized");
    }
});