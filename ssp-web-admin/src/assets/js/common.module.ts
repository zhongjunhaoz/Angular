import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'change' })

export class changePipe implements PipeTransform {
    transform(value) : string {
        if (value == 'A'){
            return '后台用户'
        } else if (value == 'B') {
            return '微信'
        } else if (value == 'C') {
            return '钉钉'
        }
    }
}
