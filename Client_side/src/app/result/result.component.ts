import { Component, OnInit } from '@angular/core';
import { NumberService, NumberDetails } from './../numbers.service';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  numberDetails: NumberDetails;
  valid : string;

  constructor(private ns:NumberService, private appc:AppComponent) { 
    this.appc.changeIntro("Mobile Number Verfication");
  }
  ngOnInit() {
    this.numberDetails = this.ns.getNumberDetails();

    this.numberDetails.valid ? this.valid = "Yes" : this.valid = "No";

    if (!this.numberDetails.location) this.numberDetails.location = "-"
  }

  isValid(){
    return this.numberDetails.valid
  }

}
