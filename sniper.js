javascript:(function() {
    const e = {
        name: "sniper rifle",
        descriptionFunction() { return `placeholder desc`},
        ammo: 24,
        ammoPack: 3,
        defaultAmmoPack: 3,
        have: false,
        cycle: 0,
        lastAngle: 0,
        wasSROn: false,
        isSROn: false,
        canSRFire: true,
        SR() {
            if (this.cansRFire) {
                b.explosion(simulation.mouseInGame, 10);
		this.canSRFire = false
	    };
        },
        fire() {
            this.SR();
	    if (!this.canSRFire) {
		this.cycle++
		if (this.cycle > 60) {
		    this.cycle = 0
		    this.canSRFire = true
		};
	    };
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
