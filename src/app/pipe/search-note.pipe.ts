import { Pipe, PipeTransform } from '@angular/core';
import { elementAt } from 'rxjs';

@Pipe({
  name: 'searchNote'
})
export class SearchNotePipe implements PipeTransform {

  transform(value: any, keyword: string): any {
    if(!keyword) return value;
    
    keyword = keyword.toLowerCase();

    return value.filter((item:any) => {
      return item.title.toLowerCase().includes(keyword) || item.description.toLowerCase().includes(keyword);
    })
  }

}
