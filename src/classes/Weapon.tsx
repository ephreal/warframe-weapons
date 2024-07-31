class Weapon {
    public isChecked: boolean;
    public weaponName: string;
    public weaponImage: string;

    constructor(name: string) {
        this.isChecked = false;
        this.weaponName = name;
        this.weaponImage = `/assets/weapons/${this.weaponName}.png`
    }

    toggleAvailability() {
        this.isChecked = !this.isChecked;
    }
}

export default Weapon;