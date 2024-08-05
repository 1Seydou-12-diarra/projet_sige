import { Component } from '@angular/core';

// primeng importation
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  items!: MenuItem[];
  activeItem!: MenuItem;

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/home' },


      {
        label: 'Eleve',
        icon: 'pi pi-fw pi-users',
        routerLink: '/Eleve',
      }
    ];

    this.activeItem = this.items[0];
  }
}
