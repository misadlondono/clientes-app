import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  listaCurso: String[] = ['TypeScript', 'JavaScript', 'Java SE', 'C#', 'PHP'];

  habilitar: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  setHabilitar() {
      this.habilitar =(this.habilitar == true)? false: true;
   
  }

}
