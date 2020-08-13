import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private router: Router ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // tslint:disable-next-line:max-line-length
      let token = 'Bearer eyJhangular observables examplebGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTBjYTcyYzZkZDgyYTgwNzdmNzU1NDkzNDRhYmEyYyIsInN1YiI6IjVmMmM5ZGQ1MTdjNDQzMDAzNDMwODhjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vDbHIekfM_nnhurzwY_WAZAH2rIkwSvo0Au_SYwQcL0';
      req = req.clone({
        setHeaders: {
          Authorization: `${token}`
        }
      });

      return next.handle(req).pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log(event);
          }
        }, (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/auth']);
            }
          }
        })
      );
    }
}
