import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

  getDatosArbaInicial(): Observable<any> {
    let datos = this.http.get<any>("../assets/arbaInicial.json")
    return datos;
  }
}
