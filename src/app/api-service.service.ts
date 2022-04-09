import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  getdata(){
   let url = 'https://jsonplaceholder.typicode.com/comments'
   return this.http.get(url)
  }
}
