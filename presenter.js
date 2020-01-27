import { View } from "./view.js";

export class Presenter {
    constructor() {
        this.view = new View(this);
        this.view.rederHTML1();
    }

    button1Click() {
        this.view.rederHTML2();
    }

    button2Click() {
        this.view.rederHTML1();
    }
}