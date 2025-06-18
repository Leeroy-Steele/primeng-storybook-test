
import { inject, provideAppInitializer } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { applicationConfig, Preview } from '@storybook/angular';
import { PrimeNG } from 'primeng/config';
import Aura from "@primeng/themes/aura";
import "primeicons/primeicons.css";
// import '../src/styles.scss'; // Make sure this file contains @tailwind
import '../src/tailwind.output.css';


function provideTheme(): void {
  const config = inject(PrimeNG);
  config.theme.set({
    preset: Aura,
    options: {
      darkModeSelector: false,
    },
    tokens: {
      button: {
        labelFontWeight: '700' // <-- Make label bold
      }
    },
  });
}

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        provideAppInitializer(provideTheme),
      ],
    }),
  ],
};

export default preview;