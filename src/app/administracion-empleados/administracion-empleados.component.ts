import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders,HttpEventType  } from '@angular/common/http';
import { catchError, skip, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-administracion-empleados',
  templateUrl: './administracion-empleados.component.html',
  styleUrls: ['./administracion-empleados.component.css']
})
export class AdministracionEmpleadosComponent implements OnInit {

  empleado:any = {};
  cargas: any = [];
  empleados:any = [];
  turno:any={};
  turnos:any = [];
  constructor(private http:HttpClient ) { }

  ngOnInit(): void {
    this.buscarEmpleados();


    //this.turnos.persona = this.empleados;


  }
  buscarEmpleados() {

    this.buscarEmpleadosServicio().subscribe(
      (reponse:any) => this.turnos = reponse,
    )



  }
  buscarEmpleadosServicio() {
    const support = this.http.get<any>("http://localhost:8080/listarempladodashboard")
    .pipe(
      catchError(e => "error"),
    )

    return  support;
  }


  modificarEmpleado(empleadoo:any){



  }

  eliminarEmpleado(turno:any){

    this.EliminarAnuncioServicio(turno).subscribe(
      (response:any) => this.actualizarEliminar(turno.idEmpleado)
    )

  }

  actualizarEliminar(response:any){
    alert("Usuario " + response+" despedido exitosamente");
    this.buscarEmpleados();
  }

  EliminarAnuncioServicio(turno:any){

    console.log(turno.idEmpleado);
    return this.http.delete<any>("http://localhost:8080/despedirEmpleado/"+turno.idEmpleado )
    .pipe(
      catchError(e => "error")
    );

  }

  alternarFormulario(){
    location.href="";
  }
}
