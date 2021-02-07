import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PortfolioData } from '../models/PortfolioData';


@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  constructor(private _httpClient:HttpClient) { }
  private getPortfolioDataURL:string="http://localhost:9191/api/PortfolioStock";

  getPortfolioList():Observable<PortfolioData[]>{
    return this._httpClient.get<PortfolioData[]>(this.getPortfolioDataURL).pipe
    (map(response=>response))
  }


  savePortfolioList(portfolio:PortfolioData):Observable<PortfolioData>{
    return this._httpClient.post<PortfolioData>(this.getPortfolioDataURL,portfolio);
  }
}
