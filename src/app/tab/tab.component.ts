import { Component, OnInit } from '@angular/core';
import { Transfer } from '../../classes/transfer.classe';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  public transfers:Transfer[] = [];
  public date:string = "";
  public desc:string = "";
  public sum:number = 0;
  public cath:string = "";
  public total:number = 0;
  ngOnInit() {
  }

  submit() {
    if (this.date !== "" && this.desc !== "" && this.sum !== 0 && this.cath !== "") {
      this.transfers.push(new Transfer(this.date, this.desc, this.sum, this.cath));
    }
    this.total += this.sum;
    this.date = "";
    this.desc = "";
    this.sum = 0;
    this.cath = "";
    console.log(this.transfers);
  }
}
