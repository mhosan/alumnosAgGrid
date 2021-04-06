import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../servicios/datos.service';

@Component({
  selector: 'app-alumnos-arba1',
  templateUrl: './alumnos-arba1.component.html',
  styleUrls: ['./alumnos-arba1.component.css']
})
export class AlumnosArba1Component implements OnInit {
  public gridApi;
  public gridColumnApi;
  public columnDefs;
  public rowData;
  public rowSelection;

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.columnDefs = [
      { headerName: 'Nombre', field: 'firstname', sortable: true, width: 200, headerClass: 'miClase'},
      { headerName: 'Apellido', field: 'lastname', sortable: true, width: 180, headerClass: 'miClase' },
      { headerName: 'email', field: 'email', sortable: true, width: 350, headerClass: 'miClase' }
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
    
    this.datosService.getDatosArbaInicial()
      .subscribe(respuestaJson => {
        this.rowData = respuestaJson[0];
      });
  }
}
