import { Component, OnInit } from '@angular/core';
import { PortfolioData } from 'src/app/models/PortfolioData';
import { StockCoreData } from 'src/app/models/StockCoreData';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { StockCoreDataService } from 'src/app/services/stock-core-data.service';

@Component({
  selector: 'app-list-portfolio-data',
  templateUrl: './list-portfolio-data.component.html',
  styleUrls: ['./list-portfolio-data.component.css']
})
export class ListPortfolioDataComponent implements OnInit {
  portfolioData:PortfolioData[]=[];
  stockCoreData: StockCoreData[]=[];
  portfolio:PortfolioData=new PortfolioData();
  constructor(private _PortfolioDataService: PortfolioDataService , private _StockCoreService:StockCoreDataService){ }

  ngOnInit(): void {
    this.listStockCoreData();
   
  }
  listStockCoreData(){
    this._PortfolioDataService.getPortfolioList().subscribe(
      data=>
      
      
      {
       
        this.portfolioData=data;
        
        console.log(data);
      }  )
     
    }
    onChange(deviceValue) {
      console.log("Value"+deviceValue);
      const result = this.stockCoreData.find( ({ company_name }) => company_name === deviceValue );
      this.portfolio.stock_id=result.id;
      console.log(result);
    }
}
