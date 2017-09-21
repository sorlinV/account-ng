
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transfer } from '../../classes/transfer.classe';

@Injectable()
export class ApiService {
  results: string[];
  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {}
  getTransfer<Promise> () {
    return new Promise( (resolve, reject)=> {
      this.http.get('http://localhost:3000/transfer', {}).subscribe(data => {
        resolve(data);
      });
    });
  }
  addTransfer<Promise>(transfer:Transfer){
    return new Promise((resolve, reject)=>{
      const body = {
        date: transfer.date,
        desc: transfer.desc,
        sum: transfer.sum,
        cath: transfer.cath
      }
      this.http.post('http://localhost:3000/transfer', body).subscribe((data) => {
        resolve(data);
      });
    });
  }
  delTransfer<Promise>(id:number){
    return new Promise( (resolve, reject)=> {
      this.http.delete('http://localhost:3000/transfer/'+id, {}).subscribe((data) => {
        resolve(data);
      });
    });
  }
}