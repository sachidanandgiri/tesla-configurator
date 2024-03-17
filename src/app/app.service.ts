import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  imgSource = new BehaviorSubject('');
  enableStepThird = new BehaviorSubject(true);

  constructor() { }

  renderImage(path: string){
    this.imgSource.next(path);
  }

  enableThirdStep(status: boolean){
    this.enableStepThird.next(status);
  }
}
