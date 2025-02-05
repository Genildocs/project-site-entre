import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  body!: HTMLElement;
  constructor(private _renderer: Renderer2) {
    this.body = this._renderer.selectRootElement('body', true);
  }

  menuOptions = [
    { name: 'Home', link: '' },
    {
      name: 'Para você',
      icon: 'pi-angle-right',
    },
    { name: 'Para empresa', link: 'para-empresa' },
    { name: 'Sobre nós', icon: 'pi-angle-right' },
  ];

  isOpen: boolean = false;

  openModal() {
    if (!this.isOpen) {
      this._renderer.addClass(this.body, 'overflow-hidden');
    } else {
      this._renderer.removeClass(this.body, 'overflow-hidden');
    }
    this.isOpen = !this.isOpen;
  }
}
