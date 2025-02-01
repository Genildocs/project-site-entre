import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  menuOptions: String[] = [
    'Home',
    'Internet Premium',
    'Tv e Straming',
    'Escolha seu pacote',
    'Para Empresas',
    'Sobre nós',
    'Indique e ganhe',
    'Omni wifi',
    'Atendimento',
    'Área do cliente',
  ];

  isOpen: boolean = false;

  openModal() {
    this.isOpen = !this.isOpen;
  }
}
