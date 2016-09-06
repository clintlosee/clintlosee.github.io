import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header',
    template: `
        <h1>This is the header</h1>
    `
})

export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}