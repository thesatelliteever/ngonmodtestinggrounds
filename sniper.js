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
	}
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
