import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { VentasComponent } from './ventas/ventas.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { AdministracionEmpleadosComponent } from './administracion-empleados/administracion-empleados.component';
import { MenuAdministradorComponent } from './menu-administrador/menu-administrador.component';
import { AdministracionProductoComponent } from './administracion-producto/administracion-producto.component';
import { ClienteCompraComponent } from './cliente-compra/cliente-compra.component';
import { ClienteMenuComponent } from './cliente-menu/cliente-menu.component';
import { MenuGeneralComponent } from './menu-general/menu-general.component';
import { LoginComponent } from './login/login.component';

/*podria necesitarse el forms module y el httpclientmodule */
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VentasComponent,
    ProveedoresComponent,
    AdministracionEmpleadosComponent,
    MenuAdministradorComponent,
    AdministracionProductoComponent,
    ClienteCompraComponent,
    ClienteMenuComponent,
    MenuGeneralComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
