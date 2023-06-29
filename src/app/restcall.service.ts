import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from './model';

@Injectable({
  providedIn: 'root'
})
export class RestcallService {

  constructor(private http:HttpClient) { }

  public submit(model: Model){
    return this.http.post("http://localhost:8080/submitSurvey", model);
  }  

  public fetch(){
    return this.http.get("http://localhost:8080/getAllSurveys");
  }
}
