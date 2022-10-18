import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'the little world of Didier Branlini';

  isAdmin: boolean = true;

  buttonText: string = (this.isAdmin) ? "Click to become normal" : "Click to become admin";

  constructor() { }

  toggleIsAdmin(){
    this.isAdmin = !this.isAdmin;
    if(this.isAdmin){
      this.buttonText = "Click to become normal";
    } else {
      this.buttonText = "Click to become admin";
    }
  }

  ngOnInit(): void {
  }
  
}
