import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggin:boolean=false;
  isAdmin:boolean=false;

  constructor() { }

  cekLoginBiasa(nilai:boolean){
    this.isLoggin=nilai;
    this.isAdmin=false;
  }

  cekLoginAdmin(nilai:boolean){
    this.isLoggin=nilai;
    this.isAdmin=nilai;
  }
}
