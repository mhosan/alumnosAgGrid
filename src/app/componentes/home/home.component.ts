import { Component, OnInit } from '@angular/core';

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
  public destino:string = "...";

  constructor() { 
    
  }

  ngOnInit(): void {
    this.columnDefs = [
      { headerName: 'Id', field: 'id'},
      { headerName: 'Institución', field: 'institucion', sortable: true},
      { headerName: 'Curso', field: 'curso', sortable: true},
      { headerName: 'Nivel', field: 'nivel', sortable: true}
    ];
    this.rowData = [
      { id: 1, institucion: 'Ipap', curso: 'Intro al giserio', nivel: 'Inicial'},
      { id: 2, institucion: 'Arba', curso: 'Intro al giserio', nivel: 'Inicial'},
      { id: 3, institucion: 'Ipap', curso: 'Avanzamos con todo', nivel: 'Avanzado'},
      { id: 4, institucion: 'Arba', curso: 'Avanzamos con todo', nivel: 'Avanzado'}
    ];
    this.rowSelection = 'single';
  }

  onSelectionChanged(parametro){
    // let selectedNodes = this.gridApi.getSelectedNodes();
    // let selectedData = selectedNodes.map(node => node.data);
    // alert(`Nodo seleccionado:\n${JSON.stringify(selectedData)}`); 
    let selectedRows = this.gridApi.getSelectedRows();
    let seleccion = selectedRows[0].id;
    //alert(seleccion);
    this.destino = seleccion;
  }

  onGridReady(params){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.http
    // .get('https://www.ag-grid.com/example-assets/olympic-winners.json')
    // .subscribe((data) => {
    //   this.rowData = data;
    // });
  }
}
