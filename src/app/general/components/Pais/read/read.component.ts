import { Component, OnInit, Input }  from '@angular/core';
import { Router }             from '@angular/router';
import { PaisServiceService } from 'src/app/general/service/pais-service.service';
import { PaisModel }          from 'src/app/general/models/pais-model';
import { NgbModalOptions, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalSiNoComponent } from 'src/app/utilerias/modal-si-no/modal-si-no.component';
import { ModalOkComponent } from 'src/app/utilerias/modal-ok/modal-ok.component';
;




@Component({
  selector: 'app-read-pais',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],

})
export class ReadComponent implements OnInit {
  @Input() idPais;
  paises        : PaisModel[];
  textoBusqueda : string;
  modalOptions  : NgbModalOptions;
  closeResult   : string;
  constructor(private service: PaisServiceService, private router:Router, private modalService: NgbModal) {
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
   }
  ngOnInit() {
    this.getListPaises();
  }
  getListPaises(): void {
    this.service.getPaises().subscribe(
      (data) => {
        console.log(data['data']);
        this.paises = data['data'];
      }
    )
  }

  PaisAgregar(){
    this.router.navigate(["PaisAgregar"]);
  }

  PaisActualizar(idPais){
    console.log("pais " + idPais);
  }

  PaisEliminar(idPais){
    //this.router.navigate(["PaisEliminar", idPais]);
    this.service.deletePais(idPais).subscribe(
      (data) => {
        console.log(data['data']);
        this.openOk(data['data']['messageUser']);
        this.getListPaises();
      }
    )

  }

  openOk(mensaje: string){
    const modalRef = this.modalService.open(ModalOkComponent)
    modalRef.componentInstance.my_modal_title = '[Pin Soft] - Generales .::. Paises ';
    modalRef.componentInstance.my_modal_content = mensaje;
    modalRef.componentInstance.id = 0;
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      console.log(receivedEntry)
      if (receivedEntry !== 0){
        this.PaisEliminar(receivedEntry)
        console.log(receivedEntry);
      }
      modalRef.close();
      })

  }

  open(pais:PaisModel) {
    const modalRef = this.modalService.open(ModalSiNoComponent)
    modalRef.componentInstance.my_modal_title = '[Pin Soft] - Generales .::. Paises ';
    modalRef.componentInstance.my_modal_content = 'Seguro de querer eliminar Pais: ['  + pais.nombrePais +"]";
    modalRef.componentInstance.id = pais.id;
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      console.log(receivedEntry)
      if (receivedEntry !== 0){
        this.PaisEliminar(receivedEntry)
        console.log(receivedEntry);
      }
      modalRef.close();
      })
    
    
  }
 

}
