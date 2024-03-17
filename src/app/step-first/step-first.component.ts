import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { carColor, carModel } from '../car.model';
import { StepFirstService } from './step-first.service';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';

@Component({
  selector: 'step-first',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-first.component.html',
  styleUrl: './step-first.component.scss'
})
export class StepFirstComponent implements OnInit {

  carModels!: carModel[];
  carColors!: carColor[];
  @ViewChild('model') model!: ElementRef;
  @ViewChild('color') color!: ElementRef;
  imgPath:string = '';
  isVisibleColor: boolean = false;
  constructor(private carService: StepFirstService, private appService: AppService) {

  }

  ngOnInit() {
    this.carService.getCarModels().subscribe(data => {
      this.carModels = <carModel[]>data;
    })
  }

  changeModel() {
    const selectModel = this.model?.nativeElement?.value == 'Choose Model' ? '' : this.model?.nativeElement?.value;
    const selectedModel = this.carModels?.filter((e: carModel) => e.code == selectModel);
    this.carColors = selectedModel[0]?.colors;
    this.isVisibleColor = true;
  }

  changeColor(){
    const selectModel = this.model?.nativeElement?.value == 'Choose Model' ? '' : this.model?.nativeElement?.value;
    const selectColor = this.color?.nativeElement?.value == 'Choose Color' ? '' : this.color?.nativeElement?.value;
    const selectedColor = this.carColors?.filter((e: carColor)=> e.code == selectColor);
    const selectedColorCode = selectedColor[0]?.code ? selectedColor[0]?.code : '';
    if(selectModel && selectedColorCode){
      this.imgPath = `../assets/img/${selectModel}/${selectedColor[0]?.code}.jpg`;
    }
    localStorage.setItem('model', selectModel);
    localStorage.setItem('color', selectedColor[0]?.description);
    localStorage.setItem('colorPrice', selectedColor[0]?.price.toString());
    this.appService.renderImage(this.imgPath);
  }

  clearStorage(){
    localStorage.setItem('model', '');
    localStorage.setItem('color', '');
    localStorage.setItem('colorPrice', '');
  }
}