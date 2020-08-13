import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// SERVICIOS
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass']
})
export class MovieDetailsComponent implements OnInit {

  public movie = null;


  constructor(
    public location: Location,
    private router: ActivatedRoute,
    public movieService: MovieService
  ) { }

  ngOnInit() {
    this.router.params.subscribe(routeParams => {
      this.getMovieDetail(routeParams.movie);
    });
  }

  public getMovieDetail(movieId: string) {
    this.movieService.getMovieById(movieId)
      .pipe(
        take(1)
      )
      .subscribe(
        res => {
          this.movie = res;
          console.log(this.movie);
        },
        err => {
          console.log(err);
        },
        () => {
          // peticion finalizada
        }
      );
  }

}
