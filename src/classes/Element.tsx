export class Element {
    public image: string;
    public name: string;

    constructor(name: string) {
        this.name = name;
        this.image = `/assets/elements/${this.name}.png`;
    }
}