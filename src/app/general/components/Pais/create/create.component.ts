import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';
import { PaisServiceService } from 'src/app/general/service/pais-service.service';
import { PaisModel } from 'src/app/general/models/pais-model';
import { FormControl, FormGroup } from '@angular/forms';
import { RequestModel } from 'src/app/general/models/request-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalOkComponent } from 'src/app/utilerias/modal-ok/modal-ok.component';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createFormGroup(){
    return new FormGroup({
      codigo     : new FormControl(''),
      iso2       : new FormControl(''),
      iso3       : new FormControl(''),
      nombrePais : new FormControl(''),
     });
  }

  createForm: FormGroup;
  request   : RequestModel;
  constructor(private router:Router, private service: PaisServiceService, private modalService: NgbModal ) { 
    this.createForm = this.createFormGroup();
  }
    ngOnInit() {


  }
  guardarPais(pais:PaisModel){
    this.request = new RequestModel;
    pais = new PaisModel;
    pais.codigo     = this.createForm.get('codigo').value;
    pais.iso2       = this.createForm.get('iso2').value;
    pais.iso3       = this.createForm.get('iso3').value;
    pais.nombrePais = this.createForm.get('nombrePais').value;
    pais.action     = 'create';
    pais.estado     = 'Activo';
    this.request.data = pais;
    this.request.op   = 'pais'
    console.log(this.request);
    this.service.createPais(this.request).subscribe(data => {
      console.log(data);
      this.openOk(data['data']['messageUser']);
      this.createForm.reset();
      //
    })
  }
  openOk(mensaje: string){
    const modalRef = this.modalService.open(ModalOkComponent)
    modalRef.componentInstance.my_modal_title = '[Pin Soft] - Generales .::. Agregar Pais';
    modalRef.componentInstance.my_modal_content = mensaje;
    modalRef.componentInstance.id = 0;
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      console.log(receivedEntry)
      if (receivedEntry !== 0){
        console.log(receivedEntry);
      }
      modalRef.close();
      })

  }


  getNavigate(ruta){
    this.router.navigate([ruta]);
  }

  onResetForm(){
    this.createForm.reset();
  }
}
