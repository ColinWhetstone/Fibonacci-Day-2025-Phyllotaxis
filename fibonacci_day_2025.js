let n = 0;
const c = 4;
const goldenAngle = Math.PI * (3 - Math.sqrt(5));

function setup() {
    createCanvas(600, 600);
    background(0);
    noStroke();
    fill(255);
}

function draw() {
    for (let i = 0; i < 8; i++) {
        let a = n * goldenAngle;
        let r = c * Math.sqrt(n);
        let x = r * Math.cos(a) + width / 2;
        let y = r * Math.sin(a) + height / 2;
        ellipse(x, y, 6, 6);
        n++;
    }
}
