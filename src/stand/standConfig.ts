import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

export const { createStand } = createConfig({
  title: 'Consta rc-table-adapter',
  id: 'rc-table-adapter',
  groups: [
    {
      title: 'Документация',
      id: 'docs',
      initialOpen: true,
    },
    {
      title: 'Компоненты',
      id: 'components',
      initialOpen: true,
    },
    {
      title: 'Адаптеры',
      id: 'adapters',
      view: 'card',
      initialOpen: true,
    },
    {
      title: 'Миксины',
      id: 'mixs',
      initialOpen: true,
    },
  ],
  group: 'Адаптеры',
  image,
  description: 'Адаптер для таблицы rc-table.',
});
