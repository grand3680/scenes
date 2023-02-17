document.body.addEventListener("keydown", function(e) {
    console.log(e.key.toLowerCase());
    if (e.key.toLowerCase() == "a" || e.key.toLowerCase() == "ф") { config.flagMoveLeft = true}
    if (e.key.toLowerCase() == "w" || e.key.toLowerCase() == "ц") { config.flagMoveForward = true}
    if (e.key.toLowerCase() == "s" || e.key.toLowerCase() == "ы") { config.flagMoveBack = true}
    if (e.key.toLowerCase() == "d" || e.key.toLowerCase() == "в") { config.flagMoveRight = true}
    if (e.key.toLowerCase() == " ") {config.flagMoveUp = true}
    if (e.key.toLowerCase() == "shift") {config.flagMoveDown = true}
})

document.body.addEventListener("keyup", function(e) {
    if (e.key.toLowerCase() == "a" || e.key.toLowerCase() == "ф") { config.flagMoveLeft = false}
    if (e.key.toLowerCase() == "w" || e.key.toLowerCase() == "ц") { config.flagMoveForward = false}
    if (e.key.toLowerCase() == "s" || e.key.toLowerCase() == "ы") { config.flagMoveBack = false}
    if (e.key.toLowerCase() == "d" || e.key.toLowerCase() == "в") { config.flagMoveRight = false}
    if (e.key.toLowerCase() == " ") {config.flagMoveUp = false}
    if (e.key.toLowerCase() == "shift") {config.flagMoveDown = false}
})

var prefY = null;
var prefX = null;

document.body.addEventListener("mousemove", function(e) {
    if (prefX > e.clientX) {
        camera.position.x -= 0.15;
    }
    if (prefX < e.clientX) {
        camera.position.x += 0.15;
    }
    if (prefY > e.clientY) {
        camera.position.y += 0.12;
    }
    if (prefY < e.clientY) {
        camera.position.y -= 0.12;
    }
    prefX = e.clientX; 
    prefY = e.clientY;     
})