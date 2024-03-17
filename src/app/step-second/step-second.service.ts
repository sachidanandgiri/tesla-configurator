import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepSecondService {

  constructor(private http: HttpClient) { }

  getConfig(model: string) {
    return this.http.get(`/options/${model}`);
  }
}
