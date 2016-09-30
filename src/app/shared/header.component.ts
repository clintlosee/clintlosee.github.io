import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from './index';

var Headroom = require('headroom.js');

@Component({
    selector: 'header-section',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
    headerInfo = {
        brand: "CLINT <span>LOSEE</span> <br /><span>DIGITAL</span> PORTFOLIO",
        name: "CLINT LOSEE",
        title: "WEB DEVELOPER &amp; DIGITAL MEDIA PROFESSIONAL",
        resumeLink: "https://drive.google.com/open?id=0B6Oh19B81MAEX3ZIYW5mTktLNUk"
    }

    navInfo = [
        {
            hrefLink: "index.html",
            linkIcon: "./assets/img/menu_home.svg",
            linkAltText: "Navigate to Home",
            linkTitle: "Home"
        }

    ]

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