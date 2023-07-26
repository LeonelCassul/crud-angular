import { Component, OnInit } from '@angular/core';
import { Curso } from '../models/curso';
import { CursosService } from '../services/cursos.service';
import { Observable, catchError , of} from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

cursos$: Observable<Curso[]>;
displayedColumns = ['nome', 'categoria','actions']

constructor(
  private cursosService: CursosService,
  public dialog: MatDialog,
  private router: Router,
  //private route: ActivatedRoute

  ) {
  this.cursos$ = this.cursosService.list()
  .pipe(
    catchError(error => {
      this.oneError('Erro ao carregar os cursos disponíveis.');
      return of([])
    })
  );


}
oneError(errorMsg: string) {
  this.dialog.open(ErrorDialogComponent, {
    data: errorMsg
  });
}

ngOnInit(): void {

}

onAdd(){
this.router.navigate(['cursos/new']);
//this.router.navigate(['new'], {relativeTo: this.route});
}

}
