import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kppn',
  templateUrl: './kppn.component.html',
  styleUrls: ['./kppn.component.css']
})
export class KppnComponent implements OnInit {

  constructor() { }

  public daftarNama=[
    {
      nama:'andi'
    },
    {
      nama:'lili'
    },
    {
      nama:'sasa'
    },
    
  ]

  ngOnInit(): void {
  }

}
