import { Component, Input, OnInit,OnChanges, SimpleChanges,DoCheck,AfterContentInit,AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-grafik',
  templateUrl: './grafik.component.html',
  styleUrls: ['./grafik.component.css']
})
export class GrafikComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {

  @Input() kendaraan:string;
  constructor() { }

  //deteksi perubahan kendaraan
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  //jalan setelah ngOnChanges
  ngDoCheck(): void {
    console.log('ngDocheck fire')
    
  }
  ngOnInit(): void {
    console.log('ngoninit fire')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit fire')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked fire')
  }

  ngAfterViewInit(): void {
    
  }
  ngAfterViewChecked(): void {
    
  }
} 
