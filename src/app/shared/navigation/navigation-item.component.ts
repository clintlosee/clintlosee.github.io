import { Component, Input } from '@angular/core';

@Component({
    selector: 'navigation-item',
    template: `
        <a href="{{ hrefLink }}">
            <div class="paradeiser_icon_canvas">
                <img [src]="linkIcon" alt="{{ linkAltText }}"/>
            </div>
            <span>{{ linkTitle }}</span>
        </a>
    `
    // templateUrl: 'navigation-item.component.html'
})

export class NavigationItemComponent {
    @Input() hrefLink: String;
    @Input() linkIcon: String;
    @Input() linkAltText: String;
    @Input() linkTitle: String;

}