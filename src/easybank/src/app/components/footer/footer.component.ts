import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';
import { Item } from '@sitecore-jss/sitecore-jss/layout';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor() { }

  chunk(arr: Item[], size: number): Item[][] {
    if (!arr.length) {
      return [];
    }
  
    const head = arr.slice(0, size);
    const tail = arr.slice(size);
  
    return [head, ...this.chunk(tail, size)];
  }
  
  get linkGroups(): Item[][] {
    return this.chunk(this.rendering.fields.links as Item[], 3);
  }
  


  ngOnInit() {
    // remove this after implementation is done
    console.log('Footer component initialized with component data', this.rendering);
  }
}
