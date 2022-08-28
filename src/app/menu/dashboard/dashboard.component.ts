import { Component, ElementRef, OnInit, ViewChild,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public kendaraan:string;

  @ViewChild('serverAlamatInput', { static: true })
  serverAlamatInput2: ElementRef;
  constructor() { }


  ngOnInit(): void {
  }

  simpan(serverNameInput:HTMLInputElement){

    console.log(serverNameInput.value)


  }

  
  simpanAlamat(){

    console.log(this.serverAlamatInput2.nativeElement.value)


  }


  ubahKendaraan(){
    this.kendaraan='Sepeda'
  }

  ubahKendaraanMotor(){
    this.kendaraan='Motor'
  
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit',this.serverAlamatInput2.nativeElement.value)

  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked call')

  }

}
