import { AbstractControl } from '@angular/forms';

export function noValidator(control: AbstractControl): {[key: string]: boolean} | null{

    if(isNaN(control.value)){
        return {'no': true};
    }
    return null;
}

