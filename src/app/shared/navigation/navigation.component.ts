import { Component, OnInit, Input } from '@angular/core';
import { NavigationItemComponent } from './navigation-item.component';

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.component.html'
})

export class NavigationComponent implements OnInit {
    @Input() brand = "";
    
    constructor() {
    }

    ngOnInit() {

    }
}