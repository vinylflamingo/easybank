import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-service-highlights',
  templateUrl: './service-highlights.component.html',
  styleUrls: ['./service-highlights.component.css']
})
export class ServiceHighlightsComponent implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
    console.log('ServiceHighlights component initialized with component data', this.rendering);
  }
}
