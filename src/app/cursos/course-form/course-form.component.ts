import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriaPipe } from '../../shared/pipes/categoria.pipe';
import { CursosService } from '../services/cursos.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private service: CursosService,
    private snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      nome: [null],
      categoria: [null]

    });


    }

 ngOnInit(): void {
  }

  onSubmit(){
    this.service.save(this.form.value).subscribe
    (result => console.log(result), error => this.onError());
    ;

  }

  onCancel(){

  }
 private onError(){
  this.snackBar.open('Erro ao salvar o curso.','', {duration: 5000});
}
}
