import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(route: Router) {

    if (window.hasOwnProperty("_get_entry_point")) {

      const entry_point : string = (<any>window)._get_entry_point();
      const entry_point_params : { [key:string]: string } = (<any>window)._get_entry_point_params();

      route.navigate([entry_point], { queryParams: entry_point_params });
    }

  }


}
