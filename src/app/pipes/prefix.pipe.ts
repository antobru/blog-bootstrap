import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix'
})
export class PrefixPipe implements PipeTransform {
  
  transform(value: string, ...args: unknown[]): unknown {
    return `${args[0]}${value}`;
  }

}
