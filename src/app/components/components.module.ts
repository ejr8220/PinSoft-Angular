import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { GeneralComponent } from './menus/general/general.component';
import { SeguridadModule } from '../seguridad/seguridad.module';
import { InventariosComponent } from './menus/inventarios/inventarios.component';


@NgModule({
  imports: [CommonModule, RouterModule, NgbModule, SeguridadModule],
  declarations: [FooterComponent, NavbarComponent, SidebarComponent, GeneralComponent, InventariosComponent],
  exports: [FooterComponent, NavbarComponent, SidebarComponent]
})
export class ComponentsModule {}
