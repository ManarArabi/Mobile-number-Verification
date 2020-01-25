import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface NumberDetails {
    valid: boolean,
    number: string,
    local_format: string,
    international_format: string,
    country_prefix: string,
    country_code: string,
    country_name: string,
    location: string,
    carrier: string,
    line_type: string
};

export interface ValidationResult {
    valid: boolean,
    number: string
}

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'text/plain' })
};

@Injectable({ providedIn: 'root' })
export class NumberService {
    apiUrl = "http://apilayer.net/api/validate";
    serverUrl = "http://localhost:5000";
    accessKey = "8da4b91ff47bfe10e5b5a50867f1bfd4";
    number = "";
    country_code = "";
    validationResult = {
        number: "",
        valid: ""
    };
    numberDetails: NumberDetails = null;
    
    constructor(private http: HttpClient) { }
    public verifyNumber(num, code){
        this.number = num;
        this.country_code = code;
        return this.http.get<any>(this.apiUrl+"?access_key="+this.accessKey+"&number="+this.number+"&country_code="+this.country_code+"&format=1",
        { observe: 'response' });
    }

    public saveNumber(num, valid){
        this.validationResult.number = num;
        this.validationResult.valid = valid;
        JSON.stringify(this.validationResult);
        console.log(this.validationResult);
        return this.http.post<any>(this.serverUrl+'/numbers/add', this.validationResult, httpOptions);
    }

    public setNumberDetails(nd: NumberDetails){
        this.numberDetails = nd;
    }

    public getNumberDetails(){
        if(this.numberDetails) return this.numberDetails;
    }

    public getHistory(){
        console.log(this.serverUrl+"/numbers")
        return this.http.get<any>(this.serverUrl+"/numbers");
    }

}

