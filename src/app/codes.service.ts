import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class CodesService {

  constructor(private db: AngularFireDatabase) { }

  update(data: any) {
    const codesRef = firebase.database().ref('color_code_key');
    const match = codesRef.orderByChild('_id').equalTo(data._id).on('child_added', function(qData) {
      // console.log('key for ' + data._id, qData.key);
      const updateRef = firebase.database().ref('color_code_key/' + qData.key);
      updateRef.update({
        code: data.code,
        color_id: data.color_id,
        color_label: data.color_label
      });
    });
  }

  randomID() {
    return new Array(24).join().replace(/(.|$)/g, function(){return ((Math.random()*36)|0).toString(36);})
  }

  addExternalItem(data: any) {
    const codesRef = firebase.database().ref('color_code_key');
    codesRef.push({
      _id: this.randomID(),
      code: data.code,
      color_id: data.color_id,
      color_label: data.color_label
    });
  }

}