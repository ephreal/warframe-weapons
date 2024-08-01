class Weapon {
    public isAvailable: boolean;
    public weaponName: string;
    public weaponImage: string;

    constructor(name: string) {
        this.isAvailable = true;
        this.weaponName = name;
        this.weaponImage = `/assets/weapons/${this.weaponName}.png`
    }

    toggleAvailability() {
        this.isAvailable = !this.isAvailable;
    }
}

export default Weapon;