import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practice-peoject';
  constructor(private http:HttpClient){}

  ngOnInit(){
    console.log("hello Suhas")
    let url = ('https://jsonplaceholder.typicode.com/todos/1');
    this.http.get(url).subscribe((data)=>{
      console.log(data)
    })
  }
}
