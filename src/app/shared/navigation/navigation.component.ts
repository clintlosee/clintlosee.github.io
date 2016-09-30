import { Component, OnInit, Input } from '@angular/core';
import { NavigationItemComponent } from './navigation-item.component';

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.component.html'
})

export class NavigationComponent implements OnInit {
    @Input() brand = "";
    hrefLink: String;
    linkIcon: String;
    linkAltText: String;
    linkTitle: String;
    @Input() nav:any;


    icons = {
        home: "../../assets/img/menu_home.svg",
        about: "../../assets/img/menu_user.svg",
        work: "../../assets/img/menu_screen.svg",
        skills: "../../assets/img/menu_inspiration.svg",
        blog: "../../assets/img/menu_blog.svg"
    }
    
    constructor() {
        this.hrefLink = "";
    }

    ngOnInit() {

    }
}