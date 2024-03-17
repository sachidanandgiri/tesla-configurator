import { Routes } from '@angular/router';
import { StepFirstComponent } from './step-first/step-first.component';
import { StepSecondComponent } from './step-second/step-second.component';
import { StepThirdComponent } from './step-third/step-third.component';

export const routes: Routes = [
    { path: '', redirectTo: 'step1', pathMatch: 'full' },
    { path: 'step1', component: StepFirstComponent },
    { path: 'step2', component: StepSecondComponent },
    { path: 'step3', component: StepThirdComponent },
    { path: '**', component: StepFirstComponent },
];
