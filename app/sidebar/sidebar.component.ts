import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  links: Array<string> = [
    'Home', 'Blog', 'Resources', 'About', 'Contact'
  ]

  linkSelected: string = undefined;
  isOpen = false;;

  toggleSidenav(): void {
    this.isOpen = !this.isOpen;
  }

  closeSidenav(): void {
    this.isOpen = false;
  }

  onLinkClick(link: string): void {
    this.linkSelected = link;
    this.closeSidenav();
  }
}