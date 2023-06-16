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
  repositoryUrl: 'https://github.com/consta-design-system/rc-table-adapter',
  figmaUrl:
    'https://www.figma.com/file/3RsiLTgTuXpdnqG7gW8UwL/Consta-Components-(Community)?type=design&node-id=70-13140&t=ponDmJar7RUOypIn-0',
});
