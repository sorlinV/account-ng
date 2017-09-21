import { Component, OnInit } from '@angular/core';
import { Transfer } from '../../classes/transfer.classe';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  public transfers:Transfer[];
  public form = {
    date: "",
    desc: "",
    sum: 0,
    cath: ""  
  }
  public total:number = 0;

  constructor(private api:ApiService){}

  refresh(){
    this.api.getTransfer().then((data)=>{
      this.transfers = new Array();
      this.total = 0;
      for (let i in data) {
        this.transfers.push(new Transfer(data[i].date, data[i].desc, data[i].sum, data[i].cath, data[i].id));
        this.total += data[i].sum;
      }
    });
  }

  ngOnInit() {
    this.refresh();
  }

  submit() {
    this.api.addTransfer(new Transfer(
      this.form.date, this.form.desc, this.form.sum, this.form.cath)).then(()=>{
      this.refresh();      
    });
    this.form.date = "";
    this.form.desc = "";
    this.form.sum = 0;
    this.form.cath = "";
  }

  delete(id) {
    this.api.delTransfer(id).then(()=>{
      this.refresh();      
    });
  }
}
