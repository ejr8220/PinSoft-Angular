import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table-scroll-y',
  templateUrl: './table-scroll-y.component.html',
  styleUrls: ['./table-scroll-y.component.scss']
})
export class TableScrollYComponent implements OnInit {


  elements: any = [];
  headElements = ['ID', 'First', 'Last', 'Handle'];

  ngOnInit() {
    for (let i = 1; i <= 15; i++) {
      this.elements.push({
        id: i, first: 'User ' + i, last: 'Name ' + i, handle:
          'Handle ' + i
      });
    }
  }

}
