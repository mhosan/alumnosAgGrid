import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../servicios/datos.service';

@Component({
  selector: 'app-alumnos-ipap2',
  templateUrl: './alumnos-ipap2.component.html',
  styleUrls: ['./alumnos-ipap2.component.css']
})
export class AlumnosIpap2Component implements OnInit {
  public gridApi;
  public gridColumnApi;
  public columnDefs;
  public rowData;
  public rowSelection;

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.columnDefs = [
      { headerName: 'Nombre', field: 'firstname', sortable: true },
      { headerName: 'Apellido', field: 'lastname', sortable: true },
      { headerName: 'email', field: 'email', sortable: true }
    ];
    //this.rowData = [];
    this.rowSelection = 'single';
  }
  onSelectionChanged(parametro) {
    // let selectedNodes = this.gridApi.getSelectedNodes();
    // let selectedData = selectedNodes.map(node => node.data);
    // alert(`Nodo seleccionado:\n${JSON.stringify(selectedData)}`); 
    let selectedRows = this.gridApi.getSelectedRows();
    let seleccion = selectedRows[0].id;
    //alert(seleccion);
    //this.destino = seleccion.toString();
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    
    this.datosService.getDatosIpapAvanzado()
      .subscribe(respuestaJson => {
        this.rowData = respuestaJson[0];
      });
  }
}
