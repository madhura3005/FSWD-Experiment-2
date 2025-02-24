function changeBackgroundColor() {
    const randomR = Math.floor(Math.random() * 256); // Random number between 0 and 255 for Red
    const randomG = Math.floor(Math.random() * 256); // Random number between 0 and 255 for Green
    const randomB = Math.floor(Math.random() * 256); // Random number between 0 and 255 for Blue
  
    const randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`; // Construct the rgb color string
  
    document.body.style.backgroundColor = randomColor;
  }
  
  setInterval(changeBackgroundColor, 5000);