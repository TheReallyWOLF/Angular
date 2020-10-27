import { Component } from '@angular/core';
import { UserService } from "./user.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users:[] = [];
  searchStr:string = '';

  constructor(private userService: UserService) {
  }

  ngOnInit(){
    //this.users = this.userService.users
    this.userService.getUsers().subscribe(users => {
      console.log(users)
      this.users = users['results'].map(item => ({
        name: `${item.name.title} ${item.name.first} ${item.name.last}`,
        image: item.picture.large,
        geo: `${item.location.city} ${item.location.country} ${item.location.postcode} ${item.location.state}`
      }))
    })
  }
}
