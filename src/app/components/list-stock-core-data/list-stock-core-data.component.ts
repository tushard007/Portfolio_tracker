import { Component, OnInit } from '@angular/core';
import { StockCoreData } from 'src/app/models/StockCoreData';
import { StockCoreDataService } from 'src/app/services/stock-core-data.service';

@Component({
  selector: 'app-list-stock-core-data',
  templateUrl: './list-stock-core-data.component.html',
  styleUrls: ['./list-stock-core-data.component.css']
})
export class ListStockCoreDataComponent implements OnInit {
  stockCoreData: StockCoreData[]=[];
  constructor(private _StockCoreService:StockCoreDataService) { }

  ngOnInit(): void {
    this.listStockCoreData();
  }
listStockCoreData(){
this._StockCoreService.getStockList().subscribe(
  data=>this.stockCoreData=data 

)
}
deleteExpense(id: number) {
  this._StockCoreService.deleteStock(id).subscribe(
    data => {
      console.log('deleted response', data);
      this.listStockCoreData();
    }
  )
}
}
