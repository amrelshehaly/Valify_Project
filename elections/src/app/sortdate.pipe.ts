import { Pipe, PipeTransform } from '@angular/core';
import { Candidate } from './candidates'

@Pipe({
  name: 'sortdate'
})
export class SortdatePipe implements PipeTransform {

  transform(value: Candidate[],column :String): any {

    console.log("sorting the date")

    return value.sort((val1, val2)=> {return (val1.dateCreation).getDate() -  
      (val2.dateCreation).getDate()});
  }

}
