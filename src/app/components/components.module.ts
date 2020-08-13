import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { ComponentsRoutingModule } from './components-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent,
    MovieDetailsComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule
  ]
})
export class ComponentsModule { }
