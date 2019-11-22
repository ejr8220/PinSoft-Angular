import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html',
  styleUrls: ['./seguridad.component.scss']
})
export class SeguridadComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  UsuariosListar() {
    this.router.navigate(["UsuariosListar"]);
  }

}
