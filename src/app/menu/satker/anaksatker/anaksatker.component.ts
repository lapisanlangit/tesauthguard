import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AnaksatkerService } from './anaksatker.service';
interface Directory {
  name: string;
  id: string;
}
@Component({
  selector: 'app-anaksatker',
  templateUrl: './anaksatker.component.html',
  styleUrls: ['./anaksatker.component.css']
})
export class AnaksatkerComponent implements OnInit {
  name: string;
  id: string;
  directories: BehaviorSubject<Directory[]> = new BehaviorSubject<Directory[]>(null);


  constructor(public anaksatkerservice:AnaksatkerService,
    ) { 

      this.directories.next([
      ]);
    }

  ngOnInit(): void {
  }
  setMessage(event:any) {
    console.log(event.value);
    this.anaksatkerservice.setMessage(event.value);
  }



  add() {
    const currentItems = this.directories.getValue();
    currentItems.push({ name: this.name, id: this.id });
  }
  delete() {
    const currentItems = this.directories.getValue();
    const itemsWithoutDeleted = currentItems.filter(d => d.id !== this.id);
    this.directories.next(itemsWithoutDeleted);
  }
}
