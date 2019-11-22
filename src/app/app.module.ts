import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { GeneralModule } from './general/general.module';
import { TableScrollYComponent } from './utilerias/table-scroll-y/table-scroll-y.component';
import { ModalSiNoComponent } from './utilerias/modal-si-no/modal-si-no.component';
import { ModalOkComponent } from './utilerias/modal-ok/modal-ok.component';
import { SeguridadModule } from './seguridad/seguridad.module';
//import { PaisFilterPipe } from './pais-filter.pipe';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    GeneralModule,
    SeguridadModule,
    ReactiveFormsModule
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, TableScrollYComponent, ModalSiNoComponent, ModalOkComponent, /*PaisFilterPipe*/],
  entryComponents:[
    ModalSiNoComponent, ModalOkComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
