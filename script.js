const checkBoxes = document.querySelectorAll(".check-box");

checkBoxes.forEach(box => {
    box.addEventListener("click", () => {
        box.classList.toggle("active");
    });
});
