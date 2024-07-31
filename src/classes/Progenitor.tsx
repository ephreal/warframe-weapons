export class Progenitor {
    public name: string;
    public element: string;
    public image: string;
    public elementImage;

    constructor(name: string, element: string) {
        this.name = name;
        this.element = element;
        this.image = `/src/assets/warframes/${this.name}.png`;
        this.elementImage = `/src/assets/elements/${this.element}.png`;
    }
}