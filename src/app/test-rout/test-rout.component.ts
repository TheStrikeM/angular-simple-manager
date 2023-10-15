import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-test-rout',
  templateUrl: './test-rout.component.html',
  styleUrls: ['./test-rout.component.css']
})
export class TestRoutComponent {
  id: number | undefined
  private subscription: Subscription
  constructor(private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id'])
  }
}
