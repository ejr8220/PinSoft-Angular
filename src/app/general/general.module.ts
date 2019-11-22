import { NgModule }                           from '@angular/core';
import { CommonModule }                        from '@angular/common';
import { ReadComponent }                       from 'src/app/general/components/Pais/read/read.component';
import { PaisFilterPipe }                      from 'src/app/general/pais-filter.pipe';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { CreateComponent } from 'src/app/general/components/Pais/create/create.component';
import { UpdateComponent } from 'src/app/general/components/Pais/update/update.component';
import { DeleteComponent } from 'src/app/general/components/Pais/delete/delete.component';

@NgModule({
  declarations: [ReadComponent,PaisFilterPipe,CreateComponent, UpdateComponent, DeleteComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
  ]
})
export class GeneralModule { }
