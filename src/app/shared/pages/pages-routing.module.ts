import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParaEmpresaComponent } from './para-empresa/para-empresa.component';
import { AtendimentoComponent } from './atendimento/atendimento.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'para-empresa',
    component: ParaEmpresaComponent,
  },
  {
    path: 'atendimento',
    component: AtendimentoComponent,
  },
  {
    path: 'para-voce',
    component: ParaEmpresaComponent,
  },
  {
    path: 'atendimento',
    component: AtendimentoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
