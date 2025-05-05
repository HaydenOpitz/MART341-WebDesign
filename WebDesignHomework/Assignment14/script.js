window.onload = function() {
  const canvas = document.getElementById('pawCanvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  
  
  img.onload = function() {
    ctx.drawImage(img, 50, 50, 100, 100);
  };
  
  img.src = 'images/paw-print.png'; 
};
