import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavBarDesktopComponent } from './nav-bar-desktop/nav-bar-desktop.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    NavBarDesktopComponent,
  ],
  imports: [CommonModule, RouterLink, RouterLinkActive, ComponentsModule],
  exports: [HeaderComponent, FooterComponent, NavBarComponent],
})
export class LayoutModule {}
