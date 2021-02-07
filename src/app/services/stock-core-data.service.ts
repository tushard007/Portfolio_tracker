import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StockCoreData } from '../models/StockCoreData';
@Injectable({
  providedIn: 'root'
})
export class StockCoreDataService {
private getStockCoreDataURL:string="http://localhost:9191/api/StockCoreData";
  constructor(private _httpClient:HttpClient ) { }

getStockList():Observable<StockCoreData[]>{
  return this._httpClient.get<StockCoreData[]>(this.getStockCoreDataURL).pipe
  (map(response=>response))
}

saveStockList(stockCoreData:StockCoreData):Observable<StockCoreData>{
  return this._httpClient.post<StockCoreData>(this.getStockCoreDataURL,stockCoreData);
}

getStock(id:number): Observable<StockCoreData> {
  return this._httpClient.get<StockCoreData>(`${this.getStockCoreDataURL}/${id}`).pipe(
    map(response => response)
  )
}
deleteStock(id: number): Observable<any> {
  return this._httpClient.delete(`${this.getStockCoreDataURL}/${id}`, {responseType: 'text'});
}

}
