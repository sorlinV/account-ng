import { Component, OnInit } from '@angular/core';
import { Transfer } from '../../classes/transfer.classe';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  public transfers:Transfer[] = [];
  public date:string;
  public desc:string;
  public sum:number;
  public cath:string;
  ngOnInit() {
  }

  submit() {
    this.transfers.push(new Transfer(this.date, this.desc, this.sum, this.cath));
    console.log(this.transfers);
  }
}
