import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriaPipe } from '../../shared/pipes/categoria.pipe';
import { CursosService } from '../services/cursos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private service: CursosService,
    private snackBar: MatSnackBar, private location: Location) {
    this.form = this.formBuilder.group({
      nome: [null],
      categoria: [null]

    });


    }

 ngOnInit(): void {
  }

  onSubmit(){
    this.service.save(this.form.value).subscribe
    (result => this.onSucess(), error => this.onError());
    ;

  }

  onCancel(){
    this.location.back();

  }

  private onSucess(){
    this.snackBar.open('Curso salvo com Sucesso!','', {duration: 5000});
    this.onCancel();
  }
  private onError(){
  this.snackBar.open('Erro ao salvar o curso.','', {duration: 5000});
}
}
