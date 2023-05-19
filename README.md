# [Дизайн-система Consta](http://consta.design/) | rcTableAdapter

Адаптер rcTableAdapter стилизует таблицу [rc-table](https://github.com/react-component/table) для [дизайн-системы Consta](https://consta.design).

# Как использовать

```sh
# NPM
$ npm install @consta/rc-table-adapter
# Yarn
$ yarn add @consta/rc-table-adapter
```

## Подключите зависимости

Чтобы начать работу, установите библиотеку [`@consta/uikit`](https://www.npmjs.com/package/@consta/uikit) и [настройте тему](http://consta.design/libs/portal/theme-themeabout)

### Можно использовать компоненты

Например, так:

```js
import React from 'react';
import { rcTableAdapter } from '@consta/rc-table-adapter/rcTableAdapter';
import { default as RCTable } from 'rc-table';
const columns = [
  {
    title: 'Кто',
    dataIndex: 'name',
    key: 'name',
    width: 150,
  },
  {
    title: 'Что делает',
    dataIndex: 'occupation',
    key: 'occupation',
    width: 150,
  },
  {
    title: 'Где',
    dataIndex: 'address',
    key: 'address',
    width: 150,
  },
  {
    title: 'Как помочь',
    dataIndex: '',
    key: 'operations',
    render: () => <p>Покормить печеньем</p>,
  },
];
const data = [
  {
    name: 'Крокодил Гена',
    occupation: 'работает',
    address: 'Зоопарк',
    key: '1',
  },
  {
    name: 'Чебурашка',
    occupation: 'косит траву',
    address: 'Дом друзей',
    key: '2',
  },
];
export function TableExample() {
  const tableProps = rcTableAdapter({
    size: 'l',
    zebraStriped: 'odd',
    borderBetweenColumns: false,
  });
  return <RCTable data={data} columns={columns} {...tableProps} />;
}
```

или так:

```js
import React from 'react';
import { cnRcTable } from '@consta/rc-table-adapter/RcTable';
import { default as RCTable } from 'rc-table';
export const RcTableExample = () => {
  const prefix = cnRcTable(
    {
      size: 's',
      zebraStriped: 'odd',
      borderBetweenColumns: true,
      borderBetweenRows: true,
      verticalAlign: 'center',
      headerVerticalAlign: 'center',
    },
    ['CustomTable'],
  );
  return <RCTable prefixCls={prefix} data={data} columns={columns} />;
};
```

## Документация

[Посмотреть документацию и примеры](http://consta.design/libs/rc-table-adapter)

## Разработка

### Подготовка окружения

Рабочее окружение должно содержать NodeJS и Yarn.

Чтобы установить зависимости, выполните команду:

```sh
$ yarn install
```

### Основные команды

```sh
# Запуск локального сервера для разработки
$ yarn start

# Сборка пакета
$ yarn build

# Сборка стенда
$ yarn stand:build

# Запуск тестов
$ yarn test
```

## Контрибьюторам

Будем рады, если вы захотите принять участие в разработке дизайн-системы =) Но сначала прочитайте [инструкцию для контрибьюторов](https://consta.design/libs/portal/contributers-code).

## Лицензия

Дизайн-систему можно использовать бесплатно, она распространяется на условиях открытой [лицензии MIT](https://consta.design/static/licence_mit.pdf).
