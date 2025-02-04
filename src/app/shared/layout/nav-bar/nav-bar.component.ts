import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  menuOptions = [
    { name: 'Home', link: '' },
    {
      name: 'Para você',
      icon: 'pi-angle-right',
    },
    { name: 'Para empresa', link: 'para-empresa' },
    { name: 'Sobre nós', icon: 'pi-angle-right' },
    { name: 'Atendimento' },
    { name: 'Ajuda' },
  ];

  isOpen: boolean = false;

  openModal() {
    this.isOpen = !this.isOpen;
  }

  closeModal() {
    this.isOpen = !this.isOpen;
  }
}
