import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { getAuthUserType } from '../models/api.models';

export const authGuard: CanActivateFn = () => {
  const storage = inject(StorageService);
  const router = inject(Router);
  if (storage.isLoggedIn()) return true;
  router.navigate(['/auth/login']);
  return false;
};

export const adminGuard: CanActivateFn = () => {
  const storage = inject(StorageService);
  const router = inject(Router);
  const user = storage.getCurrentUser();
  if (storage.isLoggedIn() && getAuthUserType(user) === 'ADMIN') return true;
  return router.parseUrl('/auth/login');
};

export const clientGuard: CanActivateFn = () => {
  const storage = inject(StorageService);
  const router = inject(Router);
  const user = storage.getCurrentUser();
  if (storage.isLoggedIn() && getAuthUserType(user) === 'CLIENT') return true;
  return router.parseUrl('/auth/login');
};

export const guestGuard: CanActivateFn = () => {
  const storage = inject(StorageService);
  const router = inject(Router);
  if (!storage.isLoggedIn()) return true;
  const userType = getAuthUserType(storage.getCurrentUser());
  if (userType === 'ADMIN') return router.parseUrl('/admin/dashboard');
  if (userType === 'CLIENT') return router.parseUrl('/client/dashboard');
  return router.parseUrl('/');
};
