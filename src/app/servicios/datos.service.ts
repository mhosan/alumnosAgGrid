import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

  getDatos(archivo: string): Observable<any> {
    return this.http.get<any>(`assets/${archivo}.json`);
  }

  getGridConfig(): { columnDefs: any[]; rowSelection: any } {
    return {
      columnDefs: [
        { headerName: 'Nombre', field: 'firstname', sortable: true, headerClass: 'miClase' },
        { headerName: 'Apellido', field: 'lastname', sortable: true, headerClass: 'miClase' },
        { headerName: 'email', field: 'email', sortable: true, headerClass: 'miClase' }
      ],
      rowSelection: { mode: 'singleRow' }
    };
  }
}
