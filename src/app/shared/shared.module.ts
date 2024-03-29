import { NgModule, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from '../share/app-material/app-material.module';
import { CategoriaPipe } from './pipes/categoria.pipe';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoriaPipe,

  ],
  imports: [
    CommonModule,
     AppMaterialModule
  ],
  exports:[
    ErrorDialogComponent,
    CategoriaPipe
]
})
export class SharedModule { }
