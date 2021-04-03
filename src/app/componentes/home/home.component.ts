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

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.columnDefs = [
      { headerName: 'Id', field: 'id' },
      { headerName: 'Institución', field: 'institucion', sortable: true },
      { headerName: 'Curso', field: 'curso', sortable: true },
      { headerName: 'Nivel', field: 'nivel', sortable: true }
    ];
    this.rowData = [
      { id: 1, institucion: 'Ipap', curso: 'Intro al giserio', nivel: 'Inicial' },
      { id: 2, institucion: 'Arba', curso: 'Intro al giserio', nivel: 'Inicial' },
      { id: 3, institucion: 'Ipap', curso: 'Avanzamos con todo', nivel: 'Avanzado' },
      { id: 4, institucion: 'Arba', curso: 'Avanzamos con todo', nivel: 'Avanzado' }
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
  }

  onClickIrAlCurso() {

    switch (this.destino) {
      case "1":
        this.router.navigate(['/alumnos1']);
        break;
      case "2":
        this.router.navigate(['/alumnos2']);
        break;
      case "3":
        this.router.navigate(['/alumnos3']);
        break;
      case "4":
        this.router.navigate(['/alumnos4']);
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
