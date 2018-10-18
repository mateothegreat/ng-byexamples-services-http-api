import {Component} from '@angular/core';
import {FormsService} from './forms.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public constructor(private formsService: FormsService) {

        formsService.getFormSchema().subscribe((results: any) => {


        });

    }

}
