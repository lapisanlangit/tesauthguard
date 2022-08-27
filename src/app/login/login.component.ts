import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:LoginService,private route:Router) { }

  ngOnInit(): void {
  }

  loginBiasa(){

    this.loginservice.cekLoginBiasa(true);
    this.route.navigate(['menu/dashboard']);

    console.log('tombol login',this.loginservice.isLoggin)
    
  }

  loginAdmin(){

    this.loginservice.cekLoginAdmin(true);
    this.route.navigate(['menu/dashboard']);

    console.log('tombol login',this.loginservice.isLoggin)
    
  }
}
