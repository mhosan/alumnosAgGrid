import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../servicios/datos.service';

@Component({
    selector: 'app-alumnos-ipap2',
    templateUrl: './alumnos-ipap2.component.html',
    styleUrls: ['./alumnos-ipap2.component.css'],
    standalone: false
})
export class AlumnosIpap2Component implements OnInit {
  public gridApi!: { getSelectedRows: () => any; };
  public gridColumnApi: any;
  public columnDefs!: { headerName: string; field: string; sortable: boolean; headerClass: string; }[];
  public rowData: any;
  public rowSelection!: { mode: 'singleRow' };

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.columnDefs = [
      { headerName: 'Nombre', field: 'firstname', sortable: true, headerClass: 'miClase' },
      { headerName: 'Apellido', field: 'lastname', sortable: true, headerClass: 'miClase' },
      { headerName: 'email', field: 'email', sortable: true, headerClass: 'miClase' }
    ];
    //this.rowData = [];
    this.rowSelection = { mode: 'singleRow' };
  }
  onSelectionChanged(parametro: any) {
    // let selectedNodes = this.gridApi.getSelectedNodes();
    // let selectedData = selectedNodes.map(node => node.data);
    // alert(`Nodo seleccionado:\n${JSON.stringify(selectedData)}`); 
    let selectedRows = this.gridApi.getSelectedRows();
    let seleccion = selectedRows[0].id;
    //alert(seleccion);
    //this.destino = seleccion.toString();
  }
  onGridReady(params: { api: any; columnApi: any; }) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    
    this.datosService.getDatosIpapAvanzado()
      .subscribe(respuestaJson => {
        this.rowData = respuestaJson[0];
      });
  }
}
