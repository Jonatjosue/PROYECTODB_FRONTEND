import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionEmpleadosComponent } from './administracion-empleados/administracion-empleados.component';
import { AdministracionProductoComponent } from './administracion-producto/administracion-producto.component';
import { ClienteCompraComponent } from './cliente-compra/cliente-compra.component';
import { ClienteMenuComponent } from './cliente-menu/cliente-menu.component';
import { LoginComponent } from './login/login.component';
import { MenuAdministradorComponent } from './menu-administrador/menu-administrador.component';
import { MenuGeneralComponent } from './menu-general/menu-general.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { VentasComponent } from './ventas/ventas.component';


const routes: Routes = [
{
 path:"/administracion_empleados", component:AdministracionEmpleadosComponent
},
{
  path:"/administracion_producto", component:AdministracionProductoComponent
 },
 {
  path:"/cliente_compra", component:ClienteCompraComponent
 },
 {
  path:"/cliente_menu", component:ClienteMenuComponent
 },
 {
  path:"/login", component:LoginComponent
 },
 {
  path:"/menu_administrador", component:MenuAdministradorComponent
 },
 {
  path:"/menu_general", component:MenuGeneralComponent
 },
 {
  path:"/proveedores", component:ProveedoresComponent
 },
 {
  path:"/ventas", component:VentasComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
