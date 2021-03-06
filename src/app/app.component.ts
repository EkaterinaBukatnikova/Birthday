import { Component, OnInit} from '@angular/core';
import { HttpService} from './http.service';
import {User} from './user';
   
@Component({
    selector: 'my-app',
    template: `<ul>
                <li *ngFor="let user of users">
                <p>Имя пользователя: {{user?.name}}</p>
                <p>Возраст пользователя: {{user?.age}}</p>
                </li>
            </ul>`,
    providers: [HttpService]
})
export class AppComponent implements OnInit { 
   
    users: User[]=[];
     
    constructor(private httpService: HttpService){}
      
    ngOnInit(){
          
        this.httpService.getData().subscribe((data: any) => {
            console.log('before');
            this.users=data["userList"];
        console.log(this.users);
    });
    }
}