window.onload = function() {
    const canvas = document.getElementById('pawCanvas');
    const ctx = canvas.getContext('2d');

    
    canvas.width = 300;
    canvas.height = 300;

    
    function drawPaw() {
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        
        ctx.beginPath();
        ctx.arc(150, 170, 60, 0, Math.PI * 2); 
        ctx.fillStyle = '#000000'; 
        ctx.fill();
        ctx.closePath();

       
        ctx.beginPath();
        ctx.arc(90, 120, 30, 0, Math.PI * 2);
        ctx.fillStyle = '#000000';
        ctx.fill();
        ctx.closePath();

        
        ctx.beginPath();
        ctx.arc(210, 120, 30, 0, Math.PI * 2);
        ctx.fillStyle = '#000000';
        ctx.fill();
        ctx.closePath();

        
        ctx.beginPath();
        ctx.arc(70, 200, 30, 0, Math.PI * 2);
        ctx.fillStyle = '#000000';
        ctx.fill();
        ctx.closePath();

        
        ctx.beginPath();
        ctx.arc(230, 200, 30, 0, Math.PI * 2);
        ctx.fillStyle = '#000000';
        ctx.fill();
        ctx.closePath();
    }

    
    drawPaw();
}
