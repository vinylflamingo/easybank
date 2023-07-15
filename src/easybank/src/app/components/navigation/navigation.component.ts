import { Component, OnInit, Input, HostListener  } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() rendering: ComponentRendering;
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // if the scroll is more than 50px, add the shadow class
    const scrollOffset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollOffset > 50) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
    console.log('navigation component initialized with component data', this.rendering);
  }
}
