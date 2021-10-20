//Canvas Area
    var canvas = document.getElementById("gameArea");
    var ctx = canvas.getContext("2d");

    //Sprite
    var sprite;
    var x;
    var y;

    // Interval & Score
    var time = 1500;
    var score = 0;

    var scoreDisplay = document.getElementById("score");
    var intervalDisplay = document.getElementById("interval");

    var interval = setInterval(draw, time);

    // Draw Sprite onto Canvas
    function drawSprite() {
        sprite = new Image(50,50);
        sprite.src = "./images/bug.png";
        ctx.drawImage(sprite, x, y);
    }

    // Update Sprite Position and Redraw
    function draw() {
        //Update Position
        x = xRandomPosition(0, canvas.width - 50);
        y = yRandomPosition(0, canvas.height - 50);

        //Redraw
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawSprite();
    }

    // Generate Random X Position
    function xRandomPosition(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1) + min);;
    }

    // Generate Random Y Position
    function yRandomPosition(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1) + min);;
    }

    // Reset Score
    function resetScore() {
        score = 0;
        scoreDisplay.innerHTML = score;
    }

    // Reset Speed
    function resetSpeed() {
        clearInterval(interval);
        time = 1500;
        interval = setInterval(draw, time);
    }

    //Event Listener for Square
    canvas.addEventListener('click', function (event) {
        var xVal = event.pageX - canvas.offsetLeft;
        var yVal = event.pageY - canvas.offsetTop;

        if (xVal >= x && xVal <= x + sprite.width && yVal >= y &&yVal <= y + sprite.height) {
            //Adds 100 to score & updates score
            score += 100;
            scoreDisplay.innerHTML = score;

            //Decreases interval time
            clearInterval(interval);
            time -= 100;
            interval = setInterval(draw, time);

            //Automatically redraws sprite
            draw();
        }
    });