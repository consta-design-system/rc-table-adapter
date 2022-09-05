import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

const groups = [
  {
    title: 'Компоненты',
    id: 'components',
  },
  {
    title: 'Адаптеры',
    id: 'adapters',
  },
  {
    title: 'Миксины',
    id: 'mixs',
  },
] as const;

export const { createStand } = createConfig({
  title: 'Consta rc-table-adapter',
  id: 'rc-table-adapter',
  groups,
  group: 'Адаптеры',
  image,
  description: 'Адаптер для таблицы rc-table.',
});
