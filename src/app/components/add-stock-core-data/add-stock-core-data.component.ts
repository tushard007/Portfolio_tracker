import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockCoreData } from 'src/app/models/StockCoreData';
import { StockCoreDataService } from 'src/app/services/stock-core-data.service';

@Component({
  selector: 'app-add-stock-core-data',
  templateUrl: './add-stock-core-data.component.html',
  styleUrls: ['./add-stock-core-data.component.css']
})
export class AddStockCoreDataComponent implements OnInit {

  stockCoreData: StockCoreData = new StockCoreData();
  constructor(private _stockCoreDataService: StockCoreDataService,
    private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
    if (isIdPresent) {
        const id = +this._activatedRoute.snapshot.paramMap.get('id');
        this._stockCoreDataService.getStock(id).subscribe(
          data => this.stockCoreData = data 
        )
    }
  }

  saveStockList() {
    this._stockCoreDataService.saveStockList(this.stockCoreData).subscribe(
      data => {
        console.log('response', data)
        this._router.navigateByUrl("/StockCoreData");
      }

    )
  }

  deleteStock(id: number) {
    this._stockCoreDataService.deleteStock(id).subscribe(
      data => {
        console.log('deleted response', data);
        this._router.navigateByUrl('/StockCoreData');
      }
    )
  }

}
