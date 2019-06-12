import { Pipe, PipeTransform } from '@angular/core';
import { Candidate } from './candidates'

import * as _ from 'lodash';


@Pipe({
  name: 'ascending'
})
export class AscendingPipe implements PipeTransform {

  transform(value : Candidate[],column: string, order = '') {
    if (!value || !column || column === '' || order === '') { return value; } // no array
    if (value.length <= 1) { return value; } // array with only one item
    return _.orderBy(value, [column], [order]);
  }

}
