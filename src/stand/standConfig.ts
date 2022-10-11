import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

export const { createStand } = createConfig({
  title: 'Consta rc-table-adapter',
  id: 'rc-table-adapter',
  groups: [
    {
      title: 'Компоненты',
      id: 'components',
    },
    {
      title: 'Адаптеры',
      id: 'adapters',
      view: 'card',
    },
    {
      title: 'Миксины',
      id: 'mixs',
    },
  ],
  group: 'Адаптеры',
  image,
  description: 'Адаптер для таблицы rc-table.',
});
