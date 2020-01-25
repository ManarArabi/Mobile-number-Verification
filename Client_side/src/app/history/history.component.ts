import { Component, OnInit } from '@angular/core';
import { NumberService } from './../numbers.service';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history :any = null;
  constructor(private ns:NumberService, private appc:AppComponent) {
    appc.changeIntro("History")
    this.ns.getHistory().subscribe((data)=>{
      this.handlingHistory(data)
      this.history = data
    });
  }

  handlingHistory(data){
    data.forEach(i => {
      i[1]? i[1] = "Yes" : i[1] ="No";
    });
  }

  ngOnInit() {
    
  }

}
