export class Progenitor {
    public name: string;
    public element: string;
    public image: string;
    public elementImage;

    constructor(name: string, element: string) {
        this.name = name;
        this.element = element;
        this.image = `/assets/warframes/${this.name}.png`;
        this.elementImage = `/assets/elements/${this.element}.png`;
    }
}