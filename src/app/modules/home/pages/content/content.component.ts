import { Component } from '@angular/core';
import { dataFakeStore } from 'src/app/data/dataFakeStore';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  items = dataFakeStore;
}
