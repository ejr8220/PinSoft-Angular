import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-si-no',
  templateUrl: './modal-si-no.component.html',
  styleUrls: ['./modal-si-no.component.scss']
})
export class ModalSiNoComponent implements OnInit {

  @Input() my_modal_title;
  @Input() my_modal_content;
  @Input() id;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  modalOptions:NgbModalOptions;

  constructor() {
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
   }

  ngOnInit() {
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }  
  passBack(idPais:number) {
    
    this.passEntry.emit(idPais);
    this.getDismissReason('Cross click');
    
    }
}
