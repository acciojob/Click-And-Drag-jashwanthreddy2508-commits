let grid = document.querySelectorAll(".item");
let container = document.querySelector(".container");

let selectedItem = null;

grid.forEach((item) => {

    item.addEventListener("mousedown", () => {
        selectedItem = item;
        item.style.position = "absolute";
    });

});

document.addEventListener("mousemove", (event) => {

    if (selectedItem) {

        let rect = container.getBoundingClientRect();

        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;

        // Keep inside container
        if (x < 0) x = 0;
        if (y < 0) y = 0;

        if (x > rect.width - 70) {
            x = rect.width - 70;
        }

        if (y > rect.height - 70) {
            y = rect.height - 70;
        }

        selectedItem.style.left = x + "px";
        selectedItem.style.top = y + "px";
    }

});

document.addEventListener("mouseup", () => {
    selectedItem = null;
});

