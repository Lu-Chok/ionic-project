import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamPageRoutingModule } from './exam-routing.module';

import { ExamPage } from './exam.page';
import { CustomHeaderComponent } from "../custom-header/custom-header.component";
import { InputFormComponent } from "../input-form/input-form.component";

import { FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ExamPage, CustomHeaderComponent, InputFormComponent]
})
export class ExamPageModule {}
