window.onload = function() {
  const canvas = document.getElementById('pawCanvas');
  const ctx = canvas.getContext('2d');

  canvas.width = 300;
  canvas.height = 300;

  
  function drawPaw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    
    ctx.beginPath();
    ctx.arc(150, 180, 50, 0, Math.PI * 2); 
    ctx.fillStyle = '#4b4b4b'; 
    ctx.fill();
    ctx.closePath();

   
    const toeRadius = 20;

    
    ctx.beginPath();
    ctx.arc(110, 100, toeRadius, 0, Math.PI * 2); 
    ctx.fillStyle = '#4b4b4b';
    ctx.fill();
    ctx.closePath();

    
    ctx.beginPath();
    ctx.arc(190, 100, toeRadius, 0, Math.PI * 2); 
    ctx.fillStyle = '#4b4b4b';
    ctx.fill();
    ctx.closePath();

    
    ctx.beginPath();
    ctx.arc(80, 160, toeRadius, 0, Math.PI * 2); 
    ctx.fillStyle = '#4b4b4b';
    ctx.fill();
    ctx.closePath();

    
    ctx.beginPath();
    ctx.arc(220, 160, toeRadius, 0, Math.PI * 2); 
    ctx.fillStyle = '#4b4b4b';
    ctx.fill();
    ctx.closePath();
  }

 
  drawPaw();
};
