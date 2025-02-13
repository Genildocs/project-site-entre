import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsapIconComponent } from './whatsap-icon/whatsap-icon.component';
import { ButtonAssineComponent } from './button-assine/button-assine.component';
import { PrincipaisServicesComponent } from './principais-services/principais-services.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SocialMediaComponent } from './social-media/social-media.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RouterLink } from '@angular/router';
import { CarouselMainComponent } from './carousel-main/carousel-main.component';
import { CardsComboComponent } from './cards-combo/cards-combo.component';
@NgModule({
  declarations: [
    WhatsapIconComponent,
    ButtonAssineComponent,
    PrincipaisServicesComponent,
    SocialMediaComponent,
    CarouselComponent,
    CarouselMainComponent,
    CardsComboComponent,
  ],
  imports: [CommonModule, AngularSvgIconModule.forRoot(), RouterLink],
  exports: [
    WhatsapIconComponent,
    ButtonAssineComponent,
    PrincipaisServicesComponent,
    SocialMediaComponent,
    CarouselComponent,
    CarouselMainComponent,
    CardsComboComponent,
  ],
})
export class ComponentsModule {}
