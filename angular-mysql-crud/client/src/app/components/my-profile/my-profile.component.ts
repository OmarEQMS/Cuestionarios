import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Usuario} from '../../models/index';
import {ManagerService} from '../../services';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  us: JSON;
  editando: boolean;
  nacimiento: Date;
  usuario: Usuario;
  constructor(public datepipe: DatePipe, private manager: ManagerService) {
    this.editando = false;
  }

  ngOnInit(): void {
    this.usuario = this.manager.usuario;

    //ESTO NO ME ESTA DANDO LA FECHA CORRECTA AIUDA!!!
    this.nacimiento = this.usuario.fechaNacimiento
    console.log('a   ' + this.nacimiento);
  }

  editar( editando: boolean) {
    this.editando = editando;
  }

  saveChanges(){
    this.editar(false);
  }

}
