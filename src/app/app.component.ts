import { Component} from '@angular/core';
import {DataService} from './data.service';
import {LogService} from './log.service';
        
@Component({
    selector: 'my-app',
    template: `<div class="panel">
        <div><input [(ngModel)]="newItem" placeholder = "Модель" />
            <button (click)="addItem(newItem)">Добавить</button>
        </div>
        <table>
            <tr *ngFor="let item of items">
                <td>{{item}}</td>
            </tr>
        </table>
    </div>`,
    providers: [DataService, LogService]
})
export class AppComponent{ 
      
    newItem: string = "";
    items: string[] = [];
    constructor(private dataService: DataService){}
      
    addItem(name: string){
          
        this.dataService.addData(name);
    }
    ngOnInit(){
        this.items = this.dataService.getData();
    }
}