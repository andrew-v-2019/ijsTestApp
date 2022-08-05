

export class MenuItemModel {
    text: string;
    color: string;
    icon: string;
    id: number;
    constructor(id: number,
        text: string,
        icon: string,
        color: string
    ) {
        this.id = id;
        this.text = text;
        this.color = color;
        this.icon = icon;
    }
}