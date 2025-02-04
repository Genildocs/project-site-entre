import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  menuOptions = [
    { name: 'Home', link: '' },
    {
      name: 'Atendimento',
    },
    { name: 'Contratos' },
    { name: 'Na Mídia' },
  ];
}
