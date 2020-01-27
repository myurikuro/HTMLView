import { html1 } from "./html1.js";
import { html2 } from "./html2.js";

export class View {
    constructor(presenter) {
        this.app = document.getElementById('app');
        this.presenter = presenter;

        //Eventhandler für Document 
        const self = this;
        document.addEventListener('click', event => {
            switch (event.target.id) {
                case 'Button1':
                    self.presenter.button1Click();
                    break;

                case 'Button2':
                    self.presenter.button2Click();
                    break;
            }
        })
    }

    rederHTML1() {
        this.app.innerHTML = html1;
    }

    rederHTML2() {
        this.app.innerHTML = html2;
    }
}