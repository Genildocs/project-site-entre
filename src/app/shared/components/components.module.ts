import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsapIconComponent } from './whatsap-icon/whatsap-icon.component';
import { ButtonAssineComponent } from './button-assine/button-assine.component';

@NgModule({
  declarations: [WhatsapIconComponent, ButtonAssineComponent],
  imports: [CommonModule],
  exports: [WhatsapIconComponent, ButtonAssineComponent],
})
export class ComponentsModule {}
