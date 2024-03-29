import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Curso } from '../models/curso';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
 export class CursosService{

private readonly API = '/assets/cursos.json';
//'api/courses';

  constructor(private httpClient: HttpClient) { }

   list(){

    return this.httpClient.get<Curso[]>(this.API).pipe(
      first(),
      delay(5000)
    );
    }
    save(record: Curso){
      return this.httpClient.post<Curso>(this.API, record).pipe(first());

    }
}

