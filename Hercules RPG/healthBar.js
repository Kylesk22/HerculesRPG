class HealthBar {
    constructor(x, y, w, h, maxHealth, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.maxHealth = maxHealth;
        this.maxWidth = w;
        this.health = maxHealth;
        this.color = color;
    }

    show(context) {
        context.strokeStyle = "#000";
        context.lineWidth = 4;
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.w, this.h);
        context.strokeRect(this.x, this.y, this.maxWidth, this.h);
    }

    updateHealth(val) {
        if (val >= 0) {
        this.health = val;
        this.w = (this.health / this.maxHealth) * this.maxWidth;
        }
        if (val < 0) {
            this.health = 0;
            this.w = (this.health / this.maxHealth) * this.maxWidth;
        }
        
    }

    updateColor(val) {
        
        this.color = val;
        
    }
}