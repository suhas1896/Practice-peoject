import { Component } from '@angular/core';
//import {HttpClient} from '@angular/common/http'
import {ApiServiceService} from '../app/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practice-peoject';
  constructor(private service:ApiServiceService){}
  myData:any = ''
  term:any;


  ngOnInit(){
    console.log("hello Suhas")
    this.service.getdata().subscribe((data =>{
      this.myData = data;
    }))
    /* let url = ('https://jsonplaceholder.typicode.com/comments');
    this.http.get(url).subscribe((data)=>{ */
      //console.log(this.service.getdata.)
      //this.myData = data
  }
  search(){
    console.log("myname")
  }
}
