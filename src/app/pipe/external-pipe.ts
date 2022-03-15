import { transformAll } from "@angular/compiler/src/render3/r3_ast";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'sorting'})
export class ExternalPipe implements PipeTransform{
  
  // Your sort logic is in here
  transform(input:Array<number>,para1:number, para2:number) {
    return input.sort((a, b) => a - b)
  }
}
