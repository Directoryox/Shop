const mask = document.querySelector(".mask");

window.addEventListener("load", () => {
    mask.classList.add("hide");
   document.documentElement.style.overflow = "hidden";
    setTimeout(() => {
        mask.remove()
        document.documentElement.style.overflow = "";
    }, 600);
})