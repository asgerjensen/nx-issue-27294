import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import WordArray from 'crypto-js/lib-typedarrays';
import { NxWelcomeComponent } from './nx-welcome.component';


@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nx-issue-27294';

  constructor() {
    const someVar = WordArray.random(40);
    this.title = 'i got this ' + someVar;
    console.log('what is someVar', someVar);  
  }
}
