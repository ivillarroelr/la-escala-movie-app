import { Component, OnInit } from '@angular/core';

// Services
import { MovieService } from '../../../services/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  public searchData = null;
  public subscriptionSearchData: Subscription;

  constructor(
    private movieservice: MovieService
  ) {
    this.subscriptionSearchData = this.movieservice.observableSearchData$
      .subscribe(
        dataSearch => {
          this.searchData = dataSearch;
        });
  }

  ngOnInit() {
  }

  public getMovieSearch() {
    if (this.searchData) {
      this.movieservice.nextData(this.searchData);
    }
  }
}
