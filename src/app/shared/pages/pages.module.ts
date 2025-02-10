import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ParaVoceComponent } from './para-voce/para-voce.component';
import { ParaEmpresaComponent } from './para-empresa/para-empresa.component';
import { AtendimentoComponent } from './atendimento/atendimento.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    HomeComponent,
    ParaVoceComponent,
    ParaEmpresaComponent,
    AtendimentoComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AngularSvgIconModule.forRoot(),
    ComponentsModule,
  ],
  exports: [HomeComponent],
})
export class PagesModule {}
