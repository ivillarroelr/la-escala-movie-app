import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, stagger, animate, style } from '@angular/animations';
import { take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

// Servicios
import { Subject, Subscription } from 'rxjs';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
