import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioData } from 'src/app/models/PortfolioData';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { StockCoreDataService } from 'src/app/services/stock-core-data.service';
import { StockCoreData } from 'src/app/models/StockCoreData';

@Component({
  selector: 'app-add-portfolio-data',
  templateUrl: './add-portfolio-data.component.html',
  styleUrls: ['./add-portfolio-data.component.css']
})
export class AddPortfolioDataComponent implements OnInit {
  portfolioData:PortfolioData=new PortfolioData();
  stockCoreData: StockCoreData[]=[];
  constructor(private _PortfolioDataService: PortfolioDataService,
    private _StockCoreService:StockCoreDataService,
    private _router: Router, private _activatedRoute: ActivatedRoute) { }
   @Input()  broker : string[]=["Zerodha","Upstox","Paytm"];
  
  ngOnInit(): void {
    this.listStockCoreData();
   
  }
  listStockCoreData(){
    this._StockCoreService.getStockList().subscribe(
      data=>this.stockCoreData=data  )
     
    }

  onChange(deviceValue) {
  this.portfolioData.broker=deviceValue;
   
}
onChange2(deviceValue) {
 
  const result = this.stockCoreData.find( ({ company_name }) => company_name === deviceValue );
  this.portfolioData.stock_id=result.id;
  console.log(result);
}
  savePortfolioList() {
    this._PortfolioDataService.savePortfolioList(this.portfolioData).subscribe(
      data => {
        console.log('response', data);
       // this._router.navigateByUrl("/StockCoreData");
      }

      )
    }
  
    
  }
