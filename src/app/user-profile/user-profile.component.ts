import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User = new User("Doe", "John", 25,'', 'https://randomuser.me/api/portraits/lego/2.jpg');

  showAge : boolean = false;
  buttonText: string = (this.showAge) ? "Masquer mon age" : "Afficher mon age";
  quote :string = '';

  constructor() { }

  toggleAge(){
    this.showAge = !this.showAge;
  }

  ngOnInit(): void {
  }
  
}
