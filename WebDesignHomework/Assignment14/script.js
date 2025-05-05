window.onload = function() {
    const canvas = document.getElementById('pawCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions
    canvas.width = 300;
    canvas.height = 300;

    // Draw the paw print
    function drawPaw() {
        // Clear canvas before drawing
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Main pad (center)
        ctx.beginPath();
        ctx.arc(150, 170, 60, 0, Math.PI * 2); // x, y, radius
        ctx.fillStyle = '#000000'; // Black color for the pad
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
