import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // columnDefs = [
  //   { headerName: 'Make', field: 'make', 
  //      sortable: true, filter: true, checkboxSelection: true, pagination: true, editable: true},
  public gridApi;
  public gridColumnApi;
  public columnDefs;
  public rowData;
  public rowSelection;
  public destino: string = "(seleccionar)";
  public cartelBotonSeleccion: string = "(seleccionar)";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.columnDefs = [
      { headerName: 'Id', field: 'id', width: 20, hide: true },
      { headerName: 'Ente', field: 'ente', width: 80, sortable: true, headerClass: 'miClase' },
      { headerName: 'Curso', field: 'curso', width: 400, sortable: true, headerClass: 'miClase'},
      { headerName: 'Nivel', field: 'nivel', sortable: true, headerClass: 'miClase' }
    ];
    this.rowData = [
      { id: 1, ente: 'Ipap', curso: 'Introducción a los Sistemas de Información Geográfica', nivel: 'Inicial' },
      { id: 2, ente: 'Arba', curso: 'Introducción a los Sistemas de Información Geográfica', nivel: 'Inicial' },
      { id: 3, ente: 'Ipap', curso: 'SIG Avanzado', nivel: 'Avanzado' },
      { id: 4, ente: 'Arba', curso: 'SIG Avanzado con aplicaciones', nivel: 'Avanzado' }
    ];
    this.rowSelection = 'single';
    
  }
  
  onSelectionChanged(parametro) {
    // let selectedNodes = this.gridApi.getSelectedNodes();
    // let selectedData = selectedNodes.map(node => node.data);
    // alert(`Nodo seleccionado:\n${JSON.stringify(selectedData)}`); 
    let selectedRows = this.gridApi.getSelectedRows();
    let seleccion = selectedRows[0].id;
    //alert(seleccion);
    this.destino = seleccion.toString();
    this.cartelBotonSeleccion = selectedRows[0].institucion +', '+ selectedRows[0].curso;
  }

  onClickIrAlCurso() {

    switch (this.destino) {
      case "1":
        this.router.navigate(['alumnos1']);
        break;
      case "2":
        this.router.navigate(['alumnos2']);
        break;
      case "3":
        this.router.navigate(['alumnos3']);
        break;
      case "4":
        this.router.navigate(['alumnos4']);
        break;

      default:
        break;
    }
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.http
    // .get('https://www.ag-grid.com/example-assets/olympic-winners.json')
    // .subscribe((data) => {
    //   this.rowData = data;
    // });
  }
}
