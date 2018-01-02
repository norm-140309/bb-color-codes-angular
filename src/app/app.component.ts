import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { InteriorDisplayComponent } from './interior-display/interior-display.component';
import { ExteriorDisplayComponent } from './exterior-display/exterior-display.component';
import { CodesService } from './codes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allData: any[];
  interiorColor: any[];
  mode: string;
  dspData: any[];
  extData: object = { code: '', color_id: '', color_label: '' };
  intData: object = { interiorCode: '', interiorColor: '', modelID: '', trimColor: '', trimID: '' };

  hasProp(d, prop) {
    return _.filter(d, function(d){
      if (typeof d[prop] !== 'undefined') {
        return d[prop].length;
      }
      return false;
    });
  }

  sortInteriorColors(direction) {
    this.mode = 'interior';
    this.dspData = this.hasProp(this.allData, 'interiorColor');
    this.dspData = _.orderBy(this.dspData, ['modelID', 'trimID', 'trimColor'], [direction, direction, direction]);
  }

  sortExteriorColors(direction) {
    this.mode = 'exterior';
    this.dspData = this.hasProp(this.allData, 'color_label');
    this.dspData = _.orderBy(this.dspData, ['code'], [direction]);
  }

  sortVehicleCodes(direction) {
    this.mode = 'codes';
    this.dspData = this.hasProp(this.allData, 'year');
    this.dspData = _.orderBy(this.dspData, ['modelID', 'code'], [direction, direction]);
  }

  addExternalItem(obj) {
    console.log('Update Item:', obj);
    this.codesService.addExternalItem(obj);
    this.extData = { code: '', color_id: '', color_label: '' };
  }

  addInternalItem(obj) {
    console.log('Update Item:', obj);
    this.codesService.addInternalItem(obj);
    this.intData = { interiorCode: '', interiorColor: '', modelID: '', trimColor: '', trimID: '' };
  }

  constructor(db: AngularFireDatabase, private codesService: CodesService) {
    db.list('/color_code_key').valueChanges()
      .subscribe(codes => {
        this.allData = codes;
      });
  }
}
