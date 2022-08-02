import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject } from "rxjs";

interface Distributor {
  name: string;
}


@Injectable({
  providedIn: "root",
})

export class DistributorService implements OnInit {
  _url = "http://localhost:3000";

  subject = new BehaviorSubject<any>([]);
 
  constructor(private http: HttpClient) {
    this.get().subscribe(response => this.subject.next(response))
  }

  create(user: Distributor): void {
     this.http.post(`${this._url}/distributor`,{
      name: user.name
    }).subscribe(res => console.log(res))
  }

  get(): Observable<any> {
    return this.http.get(`${this._url}/distributor`)
  }


  search(){
    this.get().subscribe(res => { this.subject.next(res) })
    }


    getDistirbutor(): Observable<any>{
      return this.subject.asObservable()
      }

  ngOnInit(): void {
    this.get()
  }
 
}