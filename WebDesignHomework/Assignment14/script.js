window.onload = function () {
  const canvas = document.getElementById("pawCanvas");
  const ctx = canvas.getContext("2d");

  
  function drawPaw(x, y) {
    ctx.fillStyle = "#f4976c"; 
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2, true); 
    ctx.fill();
    
    const pawOffsets = [-20, 20];
    pawOffsets.forEach(offset => {
      ctx.beginPath();
      ctx.arc(x + offset, y - 20, 10, 0, Math.PI * 2, true); 
      ctx.fill();
    });
    pawOffsets.forEach(offset => {
      ctx.beginPath();
      ctx.arc(x + offset, y + 20, 10, 0, Math.PI * 2, true); 
      ctx.fill();
    });
  }

  
  drawPaw(150, 150);
};
