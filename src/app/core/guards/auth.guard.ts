import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

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
  if (storage.isLoggedIn() && user?.userType === 'ADMIN') return true;
  router.navigate(['/auth/login']);
  return false;
};

export const clientGuard: CanActivateFn = () => {
  const storage = inject(StorageService);
  const router = inject(Router);
  const user = storage.getCurrentUser();
  if (storage.isLoggedIn() && user?.userType === 'CLIENT') return true;
  router.navigate(['/auth/login']);
  return false;
};

export const guestGuard: CanActivateFn = () => {
  const storage = inject(StorageService);
  const router = inject(Router);
  if (!storage.isLoggedIn()) return true;
  router.navigate(['/']);
  return false;
};
