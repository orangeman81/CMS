import { Component } from '@angular/core';
import { routes } from '../shared/utility/routes.utility';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  public readonly routes = routes;
  constructor() { }

}
