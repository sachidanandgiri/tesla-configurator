import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepFirstService {

  constructor(private http: HttpClient) { }

  getCarModels (){
    return this.http.get('/models');
  }
}
