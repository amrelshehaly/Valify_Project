import { Pipe, PipeTransform } from '@angular/core';
import { Candidate } from './candidates'

import * as _ from 'lodash';


@Pipe({
  name: 'ascending'
})
export class AscendingPipe implements PipeTransform {

  transform(value : Candidate[],column: string) {
    if (!value || !column || column === '') { return value; } // no array
    if (value.length <= 1) { return value; } // array with only one item
    console.log(value.sort((a,b) => a.name.localeCompare(b.name)))
    if(column === 'name'){
      return value.sort((a,b) => a.name.localeCompare(b.name));
    }
    // console.log(value.sort((val1, val2)=> {return (val1.dateCreation).getDate() -  
    //   (val2.dateCreation).getDate()}));
    // return value.sort((val1, val2)=> {return (val1.dateCreation).getDate() -  
    //   (val2.dateCreation).getDate()});

    return value.sort((a, b) => {
      let aLC: Number = a.dateCreation.getTime();
      let bLC: Number = b.dateCreation.getTime();
      return aLC < bLC ? -1 : (aLC > bLC ? 1 : 0);
  });
  }

}
