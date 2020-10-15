import { Component } from '@angular/core';
import {UserServises} from "../user.servises";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  searchStr: string = '';
  minLength: number = 3;
  isLoaded: boolean = false;
  user:any;

  constructor(private service: UserServises) { }

  handleChange(){
    if(this.minLength <= this.searchStr.length){
      this.service.getUser(this.searchStr).subscribe(user => {
        this.user = user;
        this.isLoaded = true;
      })
    }
  }
  ngOnInit(): void {
  }

}
