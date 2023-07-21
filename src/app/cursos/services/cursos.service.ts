import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Curso } from '../models/curso';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
 export class CursosService{

private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

   list(){

    return this.httpClient.get<Curso[]>(this.API).pipe(
      first(),
      delay(5000)
    );



    }
}

