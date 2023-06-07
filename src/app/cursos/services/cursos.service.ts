import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Curso } from '../models/curso';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
 export class CursosService{

private readonly API = '/assets/cursos.json';

  constructor(private httpClient: HttpClient) { }

   list(){

    return this.httpClient.get<Curso[]>(this.API).pipe(
      first(),
    );



    }
}

