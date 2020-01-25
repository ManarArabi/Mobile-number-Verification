import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NumberService, NumberDetails } from './../numbers.service';
import { Router } from '@angular/router';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  numberDetails: NumberDetails;

  validationForm = new FormGroup({
    number : new FormControl('', Validators.pattern('[0-9]+')),
    country_code : new FormControl('', Validators.required)
  });
  
  constructor(private ns:NumberService, private router: Router, private appc:AppComponent) { 
    this.appc.changeIntro("Mobile Number Verfication");
  }

  ngOnInit() {
  }

  validate() {
    this.ns.verifyNumber(this.validationForm.value.number.substring(1,), this.validationForm.value.country_code)
    .subscribe((data) =>{
      this.numberDetails = data.body
      this.ns.setNumberDetails(this.numberDetails)
      if (!this.numberDetails.valid)
        this.numberDetails.international_format = this.numberDetails.number;
      this.ns.saveNumber(this.numberDetails.international_format, this.numberDetails.valid).subscribe((response)=>{
        this.router.navigateByUrl('/result');
      })
    });
  }
}
