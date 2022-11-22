/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // purge pages from apps
    'apps/ims/src/pages/**/*.{js,jsx,ts,tsx}',

    // purge components from apps
    'apps/ims/src/components/**/*.{js,jsx,ts,tsx}',

    // purge ims-ui components from libs
    'libs/ims-ui/src/**/!(*.stories|*.spec).{ts,tsx,jsx,js,html}',

    // purge shred-ui components from libs
    'libs/shared-ui/src/**/!(*.stories|*.spec).{ts,tsx,jsx,js,html}',

    // purge heroicons-v2 components from libs
    'libs/heroicons-v2/src/**/!(*.stories|*.spec).{ts,tsx,jsx,js,html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // tailwind plugin for pre-configured form elements
    require('@tailwindcss/forms'),

    // tailwind plugin for pre-configured typography
    require('@tailwindcss/typography'),
  ],
};
