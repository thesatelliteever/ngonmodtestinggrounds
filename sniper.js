javascript:(function() {
    const e = {
        name: "sniper rifle",
        descriptionFunction() { return `placeholder desc`},
        ammo: 24,
        ammoPack: 3,
        defaultAmmoPack: 3,
        have: false,
        cycle: 0,
        canSRFire: true,
	cooldown: 0,
        fire() {
            if (this.canSRFire) {
                b.explosion(simulation.mouseInGame, 10);
		this.canSRFire = false;
	    } else {
		this.cooldown++;
		if (this.cooldown > 60) {
		    this.cooldown = 0;
		    this.canSRFire = true;
		};
	    };
        },
	do() {
                //fade cross hairs



                // draw loop around player head
                // const left = m.fireCDcycle !== Infinity ? 0.05 * Math.max(m.fireCDcycle - m.cycle, 0) : 0
                // if (left > 0) {
                //     ctx.beginPath();
                //     // ctx.arc(simulation.mouseInGame.x, simulation.mouseInGame.y, 30, 0, left);
                //     ctx.arc(m.pos.x, m.pos.y, 28, m.angle - left, m.angle);
                //     // ctx.fillStyle = "rgba(0,0,0,0.3)" //"#333"
                //     // ctx.fill();
                //     ctx.strokeStyle = "#333";
                //     ctx.lineWidth = 2;
                //     ctx.stroke();
                // }


                //draw hip circle
                // ctx.beginPath();
                // ctx.arc(m.pos.x + m.hip.x, m.pos.y + m.hip.y, 11, 0, 2 * Math.PI);
                // ctx.fillStyle = "rgba(0,0,0,0.3)" //"#333"
                // ctx.fill();
        },
    };       
	b.guns.push(e);
	const gunArray = b.guns.filter(
	(obj, index, self) =>
		index === self.findIndex((item) => item.name === obj.name)
	);
	b.guns = gunArray;
	tech.tech = techArray;
	console.log("%cSniper mod successfully installed", "color: gray");
})();
