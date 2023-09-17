function setup() {
    createCanvas(750, 750)
    background (227,221,195)
}

function draw() {
    fill("black")
    triangle(0, 0, 200, 0, 0, 375)
    rect(0, 375, 180, 375)
    triangle(180, 375, 375, 375, 180, 750)
    rect(180, 200, 122, 175)
    triangle(302, 200, 302, 375, 375, 375)
    
    translate(750, 750)
    triangle(0, 0, -200, 0, 0, -375)
    rect(0, -375, -180, -375)
    triangle(-180, -375, -375, -375, -180, -750)
    rect(-180, -200, -122, -175)
    triangle(-302, -200, -302, -375, -375, -375)

}
