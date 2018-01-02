import { Component, OnInit, Input } from '@angular/core';
import { CodesService } from '../codes.service';

@Component({
  selector: 'app-exterior-display',
  templateUrl: './exterior-display.component.html',
  styleUrls: ['./exterior-display.component.css']
})
export class ExteriorDisplayComponent implements OnInit {
  @Input() myData: object;
  @Input() myID: number;
  edit: false;

  updateItem(obj) {
    console.log('Update Item:', obj);
    this.codesService.update(obj);
  }
  
  constructor(private codesService: CodesService) {

  }

  ngOnInit() {
    
  }

}
