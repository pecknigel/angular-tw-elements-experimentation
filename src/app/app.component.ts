import { Component, AfterViewInit } from '@angular/core';
import { Select, Datepicker, Input, initTE } from "tw-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'test-tailwind-elements';

  ngAfterViewInit() {
    initTE({ Datepicker, Input, Select });
  }

  fruitsList: { name: string[] }[] = [
    {
      name: ['Mango', 'Papaya', 'Banana']
    },
    {
      name: ['Mango', 'Papaya', 'Banana']
    },
    {
      name: ['Mango', 'Papaya', 'Banana']
    }
  ]
}
