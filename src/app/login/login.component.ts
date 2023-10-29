import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 usuario:any = {};


 mostrarFormularioRegistro = false;
 mostrarlogin = true;

  constructor() { }


  ngOnInit(): void {
  }

  inicarSesion(){

    location.href = "administracionempleados";
  }


  registrarUsuario(){


    location.href = "login";

  }


  alternarFormulario() {
    this.mostrarFormularioRegistro = !this.mostrarFormularioRegistro;
    this.mostrarlogin = !this.mostrarlogin;
  }

}
