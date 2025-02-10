import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar-desktop',
  templateUrl: './nav-bar-desktop.component.html',
  styleUrl: './nav-bar-desktop.component.css',
})
export class NavBarDesktopComponent {
  menuOptions = [
    { name: 'Home', link: '' },
    {
      name: 'Para você',
      icon: 'pi-angle-right',
    },
    { name: 'Para empresas', link: 'para-empresa' },
    { name: 'Sobre nós', icon: 'pi-angle-right' },
    { name: 'Atendimento' },
    { name: 'Ajuda' },
  ];
}
