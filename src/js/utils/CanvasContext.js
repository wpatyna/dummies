class CanvasContext {
    constructor() {

    }

    fillOval(ctx, cx, cy, w, h) {
        this.drawEllipse(ctx, cx, cy, w, h);
    }
    drawEllipse(ctx, x, y, w, h) {
        const kappa = .5522848,
            ox = (w / 2) * kappa, // control point offset horizontal
            oy = (h / 2) * kappa, // control point offset vertical
            xe = x + w,           // x-end
            ye = y + h,           // y-end
            xm = x + w / 2,       // x-middle
            ym = y + h / 2;       // y-middle

        ctx.beginPath();
        ctx.moveTo(x, ym);
        ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
        ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
        ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
        ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
        //ctx.closePath(); // not used correctly, see comments (use to close off open path)
        ctx.fill();
    }

    drawLine(ctx, start_x, start_y, finish_x, finish_y, lineWidth = 3) {
        ctx.beginPath();
        ctx.lineWidth = lineWidth; // Start a new path
        ctx.moveTo(start_x, start_y);   // Move the pen to coords
        ctx.lineTo(finish_x, finish_y);  // Draw a line to coords
        ctx.stroke();                   // Render the path
    }

    setColor(ctx, color) {
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
    }
}

export default CanvasContext;