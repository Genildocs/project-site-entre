import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsapIconComponent } from './whatsap-icon/whatsap-icon.component';
import { ButtonAssineComponent } from './button-assine/button-assine.component';
import { PrincipaisServicesComponent } from './principais-services/principais-services.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SocialMediaComponent } from './social-media/social-media.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    WhatsapIconComponent,
    ButtonAssineComponent,
    PrincipaisServicesComponent,
    SocialMediaComponent,
    CarouselComponent,
  ],
  imports: [CommonModule, AngularSvgIconModule.forRoot()],
  exports: [
    WhatsapIconComponent,
    ButtonAssineComponent,
    PrincipaisServicesComponent,
    SocialMediaComponent,
    CarouselComponent,
  ],
})
export class ComponentsModule {}
