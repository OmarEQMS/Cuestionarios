import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Usuario} from '../../models/index';
import {ManagerService} from '../../services';
import * as moment from 'moment';


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
  datestring: string;
  constructor(public datepipe: DatePipe, private manager: ManagerService) {
    this.editando = false;
  }

  ngOnInit(): void {
   // this.usuario = this.manager.usuario;
   this.usuario = this.manager.usuario;
   this.nacimiento = this.usuario.fechaNacimiento;
   this.datestring = this.datepipe.transform(this.nacimiento, 'yyyy-MM-dd');

   
   console.log(this.usuario);
  }

  editar( editando: boolean) {
    this.editando = editando;
  }

  saveChanges(){
    this.editar(false);
  }

}
