function setup() {
    initializeFields();
    createCanvas(500, 500);
    background(color(0xFF, 0xFF, 0xF2));
    stroke(255, 0, 0);
}

function draw() {
    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function keyPressed() {
    {
        if (key == '1')
            stroke(0, 255, 0);
        if (key == '2')
            stroke(0, 0, 255);
    }
}

function initializeFields() {
}
