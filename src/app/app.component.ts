import { Component, ViewEncapsulation } from '@angular/core';

import { HeaderComponent } from './shared/index';

@Component({
    selector: 'app-root',
    template: `
        <div class="wrapper">
            <header></header>
            <div id="content">
                <router-outlet></router-outlet>
            </div>  <!--  end content -->

            <div class="push"></div>
        </div>
        <footer></footer>
    `,
    styleUrls: ['./styles.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';
}
