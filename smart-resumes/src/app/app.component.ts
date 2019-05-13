import { Component } from '@angular/core';
import {enableProdMode} from '@angular/core';
import * as $ from 'jquery';

enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smart-resumes';
  teste = 'dd';
}