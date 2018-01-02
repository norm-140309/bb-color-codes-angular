import { Component, OnInit, Input } from '@angular/core';
import { CodesService } from '../codes.service';

@Component({
  selector: 'app-interior-display',
  templateUrl: './interior-display.component.html',
  styleUrls: ['./interior-display.component.css']
})
export class InteriorDisplayComponent implements OnInit {
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
