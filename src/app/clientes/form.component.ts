import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private cliente: Cliente = new Cliente();
  private titulo: String = "Crear Cliente"

  constructor() { }

  ngOnInit() {
  }

  public create(): void{
    console.log("cliched!")
    console.log(this.cliente)
  }

}
