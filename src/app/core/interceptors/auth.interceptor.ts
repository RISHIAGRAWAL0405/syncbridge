import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const storage = inject(StorageService);
  const router = inject(Router);
  const authService = inject(AuthService);

  const token = storage.getAccessToken();
  const authReq = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 && storage.getRefreshToken()) {
        return authService.refreshToken().pipe(
          switchMap(res => {
            if (res.statusCode === 200 && res.data) {
              const retryReq = req.clone({ setHeaders: { Authorization: `Bearer ${res.data.accessToken}` } });
              return next(retryReq);
            }
            storage.clear();
            router.navigate(['/auth/login']);
            return throwError(() => error);
          }),
          catchError(err => {
            storage.clear();
            router.navigate(['/auth/login']);
            return throwError(() => err);
          })
        );
      }
      return throwError(() => error);
    })
  );
};
