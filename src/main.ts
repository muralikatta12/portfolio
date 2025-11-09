import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app';
import { appConfig } from './app/app.config';
import { LucideAngularModule, Github, Linkedin, Mail } from 'lucide-angular';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    importProvidersFrom(
      LucideAngularModule.pick({ Github, Linkedin, Mail })
    ),
  ],
}).catch((err) => console.error(err));
