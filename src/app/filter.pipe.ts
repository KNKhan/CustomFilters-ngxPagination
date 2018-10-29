//Custom filter for table rows array
import { Pipe, PipeTransform } from '@angular/core';
import { ArrayType } from '@angular/compiler';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  //value array set in the pipe from the table rows (values) array as binded using '| filter:filterArgs' from the table.component.html
  //filter sting passed from the filterArgs using '| filter:filterArgs' from the table.component.html
  
  transform(value: any[], filter: String, rowcount: number): any {           

    console.log('filter', filter);

    //condition to return full value array if no search term
    if (!value || !filter) {
        return value;
    }
    
    //filter value array to return searchterm
    let searchResult = value.filter(function(term){
      return term.title.includes(filter);
    });

    console.log('searchResult', searchResult);

    rowcount = searchResult.length;
    console.log('Filtered rowcount', rowcount);

    //return pipe value i.e the objects having the search term included in title prop
    return searchResult;

  }

}
