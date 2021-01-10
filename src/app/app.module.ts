import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStockCoreDataComponent } from './components/add-stock-core-data/add-stock-core-data.component';
import { ListStockCoreDataComponent } from './components/list-stock-core-data/list-stock-core-data.component';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routers:Routes=[ 
  {path: 'StockCoreData', component: ListStockCoreDataComponent},
{path: 'addStockCoreData', component: AddStockCoreDataComponent},
{path: 'editStockCoreData/:id', component: AddStockCoreDataComponent},
{path: '', redirectTo: '/StockCoreData', pathMatch: 'full'}];




@NgModule({
  declarations: [
    AppComponent,
    AddStockCoreDataComponent,
    ListStockCoreDataComponent
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
