import { Component, OnInit } from '@angular/core';

var Headroom = require('headroom.js');

@Component({
    selector: 'header-section',
    templateUrl: 'header.component.html',
    // template: `
    //     <h1>This is the header</h1>
    // `
})

export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        // Enable headroom on paradeiser menu
        var myElement = document.querySelector("nav.paradeiser");
        var headroom  = new Headroom(myElement, {
            tolerance : 5
        });
        headroom.init();
    }

}