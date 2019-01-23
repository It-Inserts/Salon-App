import {Injectable} from '@angular/core';
import {httpService} from './customHttpService';

@Injectable()
export class authenticationService {

    constructor(private http: httpService) {

    }

    login(username: string, password: string) {
        let url = 'login';
        var headers = new Headers();
        let formData = new FormData();
        formData.append('email', username);
        formData.append('password', password);
        return this.http.post(url, formData, {headers: headers});
    }


}
