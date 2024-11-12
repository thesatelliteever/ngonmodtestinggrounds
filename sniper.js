javascript:(function() {
    const e = {
        name: "sniper rifle",
        descriptionFunction() { return `placeholder desc`},
        ammo: 24,
        ammoPack: 3,
        defaultAmmoPack: 3,
        have: false,
        cycle: 0,
        wasSROn: false,
        isSROn: false,
        canSRFire: true,
	cooldown: 0
        SR() {
            if (this.canSRFire) {
                b.explosion(simulation.mouseInGame, 10);
		this.canSRFire = false;
	    };
        },
        fire() {
            this.SR();
	    if (!this.canSRFire) {
		this.cooldown++;
		if (this.cooldown > 60) {
		    this.cooldown = 0;
		    this.canSRFire = true;
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
