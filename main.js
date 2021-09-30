function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
{
    image(video, 160, 120, 330, 250);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);
    
    circle(50, 430, 80);
    
    circle(590, 50, 80);

    circle(590, 430, 80);

    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect(90, 40, 460, 20);

    rect(90, 420, 460, 20);

    rect(40, 90, 20, 300);

    rect(580, 90, 20, 300);
}

function take_snapshot()
{
    save('my_photo.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}