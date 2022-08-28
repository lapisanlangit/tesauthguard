import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { AnaksatkerService } from './anaksatker/anaksatker.service';

@Component({
  selector: 'app-satker',
  templateUrl: './satker.component.html',
  styleUrls: ['./satker.component.css']
})
export class SatkerComponent implements OnInit,OnDestroy {

  strAlert:string="";
  jikaBenar:boolean=false;
  message: string;
  subscription: Subscription;

  constructor(public anaksatkerservice:AnaksatkerService) { }

  ngOnInit(): void {
    this.subscription = this.anaksatkerservice.message.subscribe(
      (message) => {
        this.message = message;
      }
    );
  }




  ubahTrue(){
    this.jikaBenar=true;
    if(this.jikaBenar){
      this.strAlert="isian ini adalah true"
    } 
  }

  ubahFalse(){
    this.jikaBenar=false;
   
  }

  getColor(){
 
    return this.jikaBenar ? 'green' : 'red';
  }

  behaviorSubjectContoh(){
    let bSubject = new BehaviorSubject("a"); 

    bSubject.subscribe(value => {
      console.log("Subscription a got", value); 
    });


    bSubject.next("b");

    bSubject.subscribe(value => {
      console.log("Subscription b got", value); // Subscription got b, 
                                              // ^ This would not happen 
                                              // for a generic observable 
                                              // or generic subject by default
    });

    // bSubject.next("c"); // Subscription got c
    // bSubject.next("d"); // Subscription got d
  }

  regularSubject(){
    // Regular Subject

    let subject = new Subject(); 

    subject.next("b");

    subject.subscribe(value => {
      console.log("Subscription b got", value); // Subscription won't get 
                                              // anything at this point
    });

    subject.next("c");
    subject.subscribe(value => {
      console.log("Subscription c got", value); //got c
    });
    // subject.next("d"); // Subscription got d
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
