import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header-section',
    template: `
        <h1>This is the header</h1>
    `
})

export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}