import {Component, OnDestroy, OnInit} from '@angular/core';
import {AsyncPipe, CommonModule, JsonPipe} from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  isDisabledStep2 = true;
  isDisabledStep3 = true;
  imgPath:string = '';
  subscription1! : Subscription;
  subscription2! : Subscription;

  constructor(private appService: AppService){

  }

  ngOnInit(): void {
    this.subscription1 = this.appService.imgSource.subscribe(src=>{
      this.isDisabledStep2 = src!=''? false: true;
      this.imgPath =  src;
    });
    this.subscription2 = this.appService.enableStepThird.subscribe(status => this.isDisabledStep3 = status);
  }
  
  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
