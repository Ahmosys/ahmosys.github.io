// Bloque F3 + F
window.addEventListener("keydown", function(e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
        e.preventDefault();
    }
})
// Bloque F3 + J
window.addEventListener("keydown", function(e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 74)) {
        e.preventDefault();
    }
})
// Bloque F3 + CTRL
window.addEventListener("keydown", function(e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 17)) {
        e.preventDefault();
    }
})
// Bloque CTRL + SHIFT + I
window.addEventListener("keydown", function(e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 16)) {
        e.preventDefault();
    }
})
// Bloque CTRL + S
window.addEventListener("keydown", function(e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 83)) {
        e.preventDefault();
    }
})
// Bloque CTRL + U
window.addEventListener("keydown", function(e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 85)) {
        e.preventDefault();
    }
})
// Bloque F12
window.addEventListener("keydown", function(e) {
    if (e.keyCode === 123 || (e.ctrlKey && e.keyCode === 123)) {
        e.preventDefault();
    }
})
// Bloque F12 + I
window.addEventListener("keydown", function(e) {
    if (e.keyCode === 123 || (e.ctrlKey && e.keyCode === 73)) {
        e.preventDefault();
    }
})

// Bloque le clic DROIT
function bloc(){alert("Le clic droit de la souris n'est pas autorisé"); return false;}
