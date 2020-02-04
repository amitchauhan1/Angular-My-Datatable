import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {
  /**
   * 
   * @param array its array of data
   * @param orderField name of field
   * @param orderType oreder type Asc or dec
   */
  transform(array: Array<any>, orderField: string, orderType: boolean): Array<string> {
    array.sort((a: any, b: any) => {
      const ae = a[orderField];
      const be = b[orderField];
      // tslint:disable-next-line: max-line-length
      return orderType ? (ae.toString().toLowerCase() > be.toString().toLowerCase() ? -1 : 1) : (be.toString().toLowerCase() > ae.toString().toLowerCase() ? -1 : 1);
    });
    return array;
  }
}
