import { Component } from '@angular/core';
import { HeroesComponent } from './heroes.component';

@Component({
    selector:"my-app",
    template:
    `<h1>{{title}}</h1>
    <nav>
     <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
     <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
   </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls:['./css/app.component.css']

})
export class AppComponent{
    title="Welcome to AngularJS2 Learning!!";
}