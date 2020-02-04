import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CoreRoutingModule } from './core-routing.module';
import { FilterPipe } from './pipe/filter.pipe';
import { SortingPipe } from './pipe/sorting.pipe';



@NgModule({
  declarations: [FilterPipe, SortingPipe],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule
  ],
  exports: [FilterPipe, SortingPipe]
})
export class CoreModule { }
