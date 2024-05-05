<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Computer Graphics Animation</title>
<style>
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
  }

  .card {
    width: 100px;
    height: 150px;
    background-color: blue;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }

  .card1 { left: calc(50% - 120px); }
  .card2 { left: 50%; }
  .card3 { left: calc(50% + 120px); }
</style>
</head>
<body>
<div class="card card1"></div>
<div class="card card2"></div>
<div class="card card3"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script>
  anime({
    targets: '.card',
    translateY: [
      { value: '-=50', duration: 500 },
      { value: 0, duration: 800 }
    ],
    scaleX: [
      { value: 0, duration: 0 },
      { value: 1, duration: 500 },
    ],
    easing: 'easeInOutQuad',
    delay: anime.stagger(200)
  });
</script>
</body>
</html>

     
