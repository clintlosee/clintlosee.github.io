import { Component, OnInit } from '@angular/core';
import { SocialBarComponent } from '../social/index';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styles: [require('./main.component.scss')]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
