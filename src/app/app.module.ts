import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStockCoreDataComponent } from './components/add-stock-core-data/add-stock-core-data.component';
import { ListStockCoreDataComponent } from './components/list-stock-core-data/list-stock-core-data.component';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddPortfolioDataComponent } from './components/add-portfolio-data/add-portfolio-data.component';
import { ListPortfolioDataComponent } from './components/list-portfolio-data/list-portfolio-data.component';


const routers:Routes=[
  
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'StockCoreData', component: ListStockCoreDataComponent},
{path: 'addStockCoreData', component: AddStockCoreDataComponent},
{path: 'editStockCoreData/:id', component: AddStockCoreDataComponent},
{path: 'addPortfolioData', component: AddPortfolioDataComponent},
{path: 'ListPortfolioData', component: ListPortfolioDataComponent},
{path: 'editPortfolioData/:id', component: AddPortfolioDataComponent}
];




@NgModule({
  declarations: [
    AppComponent,
    AddStockCoreDataComponent,
    ListStockCoreDataComponent,
    AddPortfolioDataComponent,
    ListPortfolioDataComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
