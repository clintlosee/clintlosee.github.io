import { Component, Input, ViewEncapsulation } from '@angular/core';

import '../../assets/img/menu_home.svg';

@Component({
    selector: 'navigation-item',
    // template: `
        
    //     <a href="index.html">
    //         <div class="paradeiser_icon_canvas">
    //             <img src="../../assets/img/menu_home.svg" alt="Navigate to Home"/>
    //         </div>
    //         <span>Home</span>
    //     </a>
       
    // `
    templateUrl: 'navigation-item.component.html',
    styles: [`
        :host {
            display: flex;
            border: 1px solid red;
        }
        :host a {
            position: relative;
            z-index: 5;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -js-display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -webkit-flex-direction: column;
                -ms-flex-direction: column;
                    flex-direction: column;
            margin: 0;
            padding: 0;
            color: #9b9b9b;
            text-align: center;
            text-decoration: none;
            font-weight: 700;
            font-size: 10px;
            font-family: -apple-system, -apple-system-body, "Roboto", "Helvetica Neue", "Segoe UI", "Arial", sans-serif;
            cursor: pointer;
            -webkit-box-align: center;
            -webkit-align-items: center;
                -ms-flex-align: center;
                    align-items: center;
            -webkit-box-flex: 5;
            -webkit-flex-grow: 5;
                -ms-flex-positive: 5;
                    flex-grow: 5;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
                -ms-flex-pack: center;
                    justify-content: center;
        }
        // :host .paradeiser_icon_canvas {
        //     display: block;
        //     display: -webkit-box;
        //     display: -webkit-flex;
        //     display: -ms-flexbox;
        //     display: flex;
        //     margin: 0 auto;
        //     width: 100%;
        //     height: 20px;
        //     color: #000;
        //     text-align: center;
        //     -js-display: flex;
        //     -webkit-box-align: center;
        //     -webkit-align-items: center;
        //     -ms-flex-align: center;
        //     align-items: center;
        //     -webkit-box-pack: center;
        //     -webkit-justify-content: center;
        //     -ms-flex-pack: center;
        //     justify-content: center;
        // }
        // :host .paradeiser_icon_canvas img {
        //     display: block;
        //     margin: 0;
        //     max-width: 20px;
        //     width: 100%;
        //     height: auto;
        // }
        // :host span:not(.paradeiser-brand span) {
        //     margin-top: 5px;
        //     font-size: 10px;
        // }
    `]
})

export class NavigationItemComponent {
    @Input() hrefLink: String;
    @Input() linkIcon: String;
    @Input() linkAltText: String;
    @Input() linkTitle: String;

}