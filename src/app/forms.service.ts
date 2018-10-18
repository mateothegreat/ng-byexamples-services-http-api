import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FormsService {

    public constructor(private httpClient: HttpClient) {


    }

    public getFormSchema(): Observable<any> {

        let subject: Subject<any> = new Subject<any>();

        this.httpClient.get('assets/form-schema.json').subscribe((results: any) => {

            console.log(results);

            subject.next(results);

        });

        return subject;

    }

}
