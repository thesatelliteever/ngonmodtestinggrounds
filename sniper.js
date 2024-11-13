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
	SRLength: 60,
	SRRadius: 50,
	SRPower: 10,
        fire() {
	    this.ammo++;
            if (this.canSRFire) {
		this.ammo--;
                for (let index = 0; index < this.SRPower; index++) {
    			b.explosion(simulation.mouseInGame, this.SRRadius);
		};
		this.canSRFire = false;
	    };
        },
	do() {
                if (!this.canSRFire) {
		    this.cooldown++;
		    if (this.cooldown > this.SRLength) {
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
    const t = [
		{
			name: "argon scope",
			descriptionFunction() {
				return `<strong>+100%</strong> sniper rifle fire rate, but  <strong>-50%</strong> sniper rifle damage`
			},
			isGunTech: true,
			maxCount: 3,
			count: 0,
			frequency: 2,
			frequencyDefault: 2,
			allowed() {
				return tech.haveGunCheck("sniper rifle")
			},
			requires: "sniper rifle",
			effect() {
				b.SRLength *= 0.5;
				b.SRRadius *= 0.5;
			},
			remove() {
				b.SRLength *= 2;
				b.SRRadius *= 2;
			}
		},
		{
			name: "placeholder name",
			descriptionFunction() {
				return `<strong>+100%</strong> sniper rifle damage, but  <strong>-50%</strong> sniper rifle fire rate`
			},
			isGunTech: true,
			maxCount: 3,
			count: 0,
			frequency: 2,
			frequencyDefault: 2,
			allowed() {
				return tech.haveGunCheck("sniper rifle")
			},
			requires: "sniper rifle",
			effect() {
				b.SRLength *= 2;
				b.SRPower *= 2;
			},
			remove() {
				b.SRLength *= 0.5;
				b.SRPower *= 0.5;
			}
		},
    ];
    const techArray = tech.tech.filter(
        (obj, index, self) =>
    	    index === self.findIndex((item) => item.name === obj.name)
    );
    b.guns = gunArray;
    tech.tech = techArray;
    console.log("%cSniper mod successfully installed", "color: gray");
})();
