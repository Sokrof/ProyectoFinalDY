import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  //se añade el provideHttpClient para poder usar el cliente http en el servicio
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient()]
};
