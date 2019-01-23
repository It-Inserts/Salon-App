import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Headers} from '@angular/http';
import {NativeStorage} from '@ionic-native/native-storage';

@Injectable()

export class httpService {
    [x: string]: any;
    private baseUrl = 'http://coder12895.com/saloon/admin/api/';
    private token: string = '';
    private headers = new Headers({'Content-Type': 'application/json'});
    private fbToken;
    private categary_ID;

    constructor(private http: Http, private nativeStorage: NativeStorage) {
    }

    setFbToken(fbToken) {
        this.fbToken = fbToken;
    }

    getFbToken() {
        return this.fbToken;
    }

    signUp(data) {
        let url = 'registration';
        url = this.baseUrl + url;
        return this.http.post(url, data).map((data) => data.json());

    }

    setToken(token) {
        if (token == null) {
            this.token = null;
        } else {
            this.token = token;
        }
        this.nativeStorage.setItem('token', this.token)
            .then(
                () => console.log('Stored item!'),
                error => console.error('Error storing item', error)
            );
        this.nativeStorage.getItem('token')
            .then(
                data => console.log(data),
                error => console.error(error)
            );
    }

    getToken() {
        return this.token;
    }

    getServiceList() {
        let url = 'service';
        let data = "no data";
        url = this.baseUrl + url;
        var headers = new Headers();
        headers.append('authorization', this.token);
        return new Promise((resolve, reject) => {
            this.http.post(url, data, {headers: headers}).subscribe((response: any) => {
                response = response.json();
                resolve(response.data);
                if (response.code == 200) {
                } else {
                    reject(response);
                }
            }), (error) => {
                reject(error);
            };
        })
    }

    getCategaryList() {
        let url = 'category';
        let data = "no data";
        url = this.baseUrl + url;
        var headers = new Headers();
        headers.append('authorization', this.token);
        return new Promise((resolve, reject) => {
            this.http.post(url, data, {headers: headers}).subscribe((response: any) => {
                response = response.json();
                resolve(response.data);
                if (response.code == 200) {
                } else {
                    reject(response);
                }
            }), (error) => {
                reject(error);
            };
        })
    }

    getUserData() {
        let url = 'userdata';
        let data = "no data";
        url = this.baseUrl + url;

        var headers = new Headers();
        headers.append('authorization', this.token);
        return new Promise((resolve, reject) => {
            this.http.post(url, data, {headers: headers}).subscribe((response: any) => {
                response = response.json();
                resolve(response.data);
                if (response.code == 200) {
                } else {
                    reject(response);
                }
            }), (error) => {
                reject(error);
            };
        })
    }

    facebookUserData(userdata, imgurl) {
        let url = 'facebook';
        url = this.baseUrl + url;
        let formData = new FormData();
        var headers = new Headers();
        formData.append('profile_image', imgurl);
        formData.append('email', userdata.email);
        formData.append('fname', userdata.first_name);
        formData.append('lname', userdata.last_name);
        formData.append('gender', userdata.gender);
        return new Promise((resolve, reject) => {
            this.http.post(url, formData, {headers: headers})
                .subscribe((response: any) => {
                    if (response.status == 200) {
                        response = response.json();
                        this.setToken(response.token);
                        resolve(response.data);
                    } else {
                        alert("try again some error ouccors");
                    }
                }), (error) => {
                reject(error);
            };
        })
    }

    changePassword(oldpsw, newpsw) {
        let url = 'changepassword';
        url = this.baseUrl + url;
        let formData = new FormData();
        var headers = new Headers();
        formData.append("oldpass", oldpsw);
        formData.append("newpass", newpsw);
        headers.append('authorization', this.token);
        return new Promise((resolve, reject) => {
            this.http.post(url, formData, {headers: headers}).subscribe((response: any) => {
                response = response.json();
                resolve(response.data);
                if (response.code == 200) {
                } else {
                    reject(response);
                }
            }), (error) => {
                reject(error);
            };
        })
    }

    getUserPoint() {
        let url = 'userpoint';
        let data = "no data";
        url = this.baseUrl + url;
        var headers = new Headers();
        headers.append('authorization', this.token);
        return new Promise((resolve, reject) => {
            this.http.post(url, data, {headers: headers}).subscribe((response: any) => {
                response = response.json();
                resolve(response.data);
                if (response.code == 200) {
                } else {
                    reject(response);
                }
            }), (error) => {
                reject(error);
            };
        })
    }

    getTimeSlot(service_id, date) {
        let url = 'timeslot';
        url = this.baseUrl + url;
        let formData = new FormData();
        var headers = new Headers();
        headers.append('authorization', this.token);
        formData.append('appointment_date', date);
        formData.append('service_id', service_id);
        return new Promise((resolve, reject) => {
            this.http.post(url, formData, {headers: headers}).subscribe((response: any) => {
                if (response.status == 200) {
                    response = response.json();
                    resolve(response.data);
                } else {
                    reject(response);
                }
            }), (error) => {
                reject(error);
            };
        })
    }

    post(url, data: FormData, {headers: headers}): Promise<any> {
        if (this.token) {
            this.headers.append('authorization', this.token);
        }
        url = this.baseUrl + url;

        return new Promise((resolve, reject) => {
            this.http.post(url, data, {headers: this.Headers}).subscribe((response: any) => {
                response = response.json();
                resolve(response);
                if (response.code == 200) {
                } else {
                    reject(response);
                }
            }, (error) => {
                reject(error);
            });
        });

    }

    setCategaryId(id) {
        this.categary_ID = id;
    }

    getCategaryID() {
        return this.categary_ID;
    }

    serviceByCategary(id) {
        let url = 'category_service';
        url = this.baseUrl + url;
        let formData = new FormData();
        var headers = new Headers();
        headers.append('authorization', this.token);
        formData.append('id', id);
        return new Promise((resolve, reject) => {
            this.http.post(url, formData, {headers: headers}).subscribe((response: any) => {
                response = response.json();
                resolve(response.data);
                if (response.code == 200) {
                } else {
                    reject(response);
                }
            }), (error) => {
                reject(error);
            };
        })
    }

    bookAppoinment(service_id, appointment_date, appointment_time, payment_status) {
        let url = 'appointment';
        url = this.baseUrl + url;
        let formData = new FormData();
        var headers = new Headers();

        headers.append('authorization', this.token);
        formData.append('service_id', service_id);
        formData.append('payment_status', payment_status);
        formData.append('appointment_date', appointment_date);
        formData.append('appointment_time', appointment_time);

        return new Promise((resolve, reject) => {
            this.http.post(url, formData, {headers: headers})
                .subscribe((response: any) => {
                    if (response.status == 200) {
                        response = response.json();
                        resolve(response.data);
                    } else {
                        response = response.json();
                        reject(response)
                    }
                }), (error) => {
                error = error.json();
                reject(error);
            };
        })
    }

    forgottpassword(email) {
        let url = 'forgotpassword';
        url = this.baseUrl + url;
        let formData = new FormData();
        var headers = new Headers();
        formData.append("email", email);
        return new Promise((resolve, reject) => {
            this.http.post(url, formData, {headers: headers})
                .subscribe((response: any) => {
                    response = response.json();
                    resolve(response);
                }, (error) => {
                    error = error.json();
                    alert(error.msg)
                    reject(error);
                });
        })
    }

    setLocalToken(Token) {
        this.token = Token;
    }

    getGallary() {
        let url = 'gallary';
        let data = "no data";
        url = this.baseUrl + url;
        var headers = new Headers();
        headers.append('authorization', this.token);
        return new Promise((resolve, reject) => {
            this.http.post(url, data, {headers: headers}).subscribe((response: any) => {
                response = response.json();
                resolve(response.gallary);
            }), (error) => {
                reject(error);
            };
        })
    }

    beforeAfter() {
        let url = 'before_after';
        let data = "no data";
        url = this.baseUrl + url;
        var headers = new Headers();
        headers.append('authorization', this.token);
        return new Promise((resolve, reject) => {
            this.http.post(url, data, {headers: headers})
                .subscribe((response: any) => {
                    response = response.json();
                    resolve(response);
                }), (error) => {
                reject(error);
            }
        });
    }

    getSetting(){
        let url = 'setting_wp';
        let data = "no data";
        url = this.baseUrl + url;
        var headers = new Headers();
        headers.append('authorization', this.token);
        return new Promise((resolve, reject) => {
            this.http.post(url, data, {headers: headers})
                .subscribe((response: any) => {
                    console.log();
                    response = response.json();
                    resolve(response);
                }), (error) => {
                reject(error);
            }
        });
    }
}
