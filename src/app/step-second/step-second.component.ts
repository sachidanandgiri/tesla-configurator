import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { StepSecondService } from './step-second.service';
import { carConfig, carConfigs } from '../car.model';

@Component({
  selector: 'app-step-second',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './step-second.component.html',
  styleUrl: './step-second.component.scss'
})
export class StepSecondComponent implements OnInit {
  @ViewChild('config') config!: ElementRef;

  range: number = 0;
  speed: number = 0;
  cost: number = 0;
  towHitch: boolean = false;
  yoke: boolean = false;

  selectedConfig: boolean = false;

  carConfig!: carConfig[];

  constructor(private service: StepSecondService,
    private storageData: AppService) { }

  ngOnInit() {

    const model = localStorage.getItem('model') ?? '';
    this.service.getConfig(model).subscribe(data => {
      const configData = <carConfigs>data;
      this.carConfig = configData.configs;
      this.towHitch = configData.towHitch;
      this.yoke = configData.yoke;

      localStorage.setItem('towHitch', configData.towHitch.toString());
      localStorage.setItem('yoke', configData.yoke.toString());
      this.storageData.enableThirdStep(true);
    })
  }

  configChange() {

    const selConfig = this.config?.nativeElement?.value == 'Choose Config' ? '' : this.config.nativeElement?.value;

    const selectedConfig = this.carConfig.filter((e: carConfig) => e.id == selConfig);

    this.range = selectedConfig[0].range;
    this.speed = selectedConfig[0].speed;
    this.cost = selectedConfig[0].price;

    this.selectedConfig = selConfig ? true : false;

    localStorage.setItem('config', selectedConfig[0].description);
    localStorage.setItem('range', this.range.toString());
    localStorage.setItem('speed', this.speed.toString());
    localStorage.setItem('cost', this.cost.toString());

    this.storageData.enableThirdStep(false);
  }

  hitchChange(event: Event) {
    const hitch = event.target as HTMLInputElement;
    localStorage.setItem('towHitch', hitch.checked.toString());
  }

  yokeChange(event: Event) {

    const yoke = event.target as HTMLInputElement;
    localStorage.setItem('yoke', yoke.checked.toString());
  }
}
