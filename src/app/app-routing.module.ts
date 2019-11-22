import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ReadComponent } from './general/components/Pais/read/read.component';
import { CreateComponent } from './general/components/Pais/create/create.component';
import { DeleteComponent } from './general/components/Pais/delete/delete.component';

const routes: Routes = [
  {
    path: "",
    component: AdminLayoutComponent,
    children: [{
      path: "PaisAgregar",
      component: CreateComponent
    }
    ]
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [{
      path: "PaisEliminar/:idPais",
      component: DeleteComponent
    }
    ]
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [{
      path: "PaisListar",
      component: ReadComponent
    }
    ]
  },

  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
