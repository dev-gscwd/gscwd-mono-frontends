/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'apps/ims/src/pages/**/*.{js,jsx,ts,tsx}',
    'apps/ims/src/components/**/*.{js,jsx,ts,tsx}',
    'libs/shared-ui/src/**/!(*.stories|*.spec).{ts,tsx,jsx,js,html}',
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
