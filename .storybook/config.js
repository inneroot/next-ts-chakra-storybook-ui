import { configure } from '@storybook/react';
// automatically import all files ending in *.stories.tsx
configure(require.context('../components/stories', true, /\.stories\.tsx?$/), module);