import { Injectable } from '@angular/core';
import {Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";


@Injectable()
export class DataService {

  constructor(private http: Http) { }

  gettodoItems(){
  	return this.http.get('http://localhost:3000/items/')
  	.map(res=>res.json());
  }

  addTodoItem(newItem){
  	let headers = new Headers();
  	headers.append("Content-Type","application/json");
  	return this.http.post('http://localhost:3000/item/', newItem, {headers:headers})
  	.map(res=>res.json());
  }

  updatetodoItem(newItem){
  	let headers = new Headers();
  	headers.append("Content-Type","application/json");
  	return this.http.put("http://localhost:3000/item/"+newItem._id, newItem, {headers:headers})
  	.map(res=>res.json());
  }

  deletetodoItem(id){
  	return this.http.delete("http://localhost:3000/item/"+id)
  	.map(res=>res.json());
  }

}
