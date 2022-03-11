import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }   from '@angular/forms';
import { DataComponent }   from './data.component';
@NgModule({
    imports:      [ BrowserModule, ReactiveFormsModule ],
    declarations: [ DataComponent],
    exports: [ DataComponent]       // экспортируем компонент
})
export class DataModule { }