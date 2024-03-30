import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-luna-components',
  templateUrl: './luna-components.component.html',
  styleUrls: ['./luna-components.component.css']
})
export class LunaComponentsComponent implements OnInit  {

  counter: number = 0;
  params: string[] = [];

  constructor(private route: ActivatedRoute) {}

  counter_add() {
    this.counter++;
  }

  ngOnInit() {

    const keys: string[] = this.route.snapshot.queryParamMap.keys;

    for (const key of keys)
      this.params.push(key, <string>this.route.snapshot.queryParamMap.get(key));

    console.log(this.params)
}

}
