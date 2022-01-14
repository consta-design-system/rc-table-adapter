# [Дизайн-система Consta](http://consta.gazprom-neft.ru/) | RcTableAdapter

Адаптер RcTableAdapter стилизует таблицу [rc-table](https://github.com/react-component/table) для [дизайн-системы Consta](https://consta.gazprom-neft.ru/).

# Как использовать

## Установите пакет

```sh
# NPM
$ npm install @consta/rc-table-adapter

# Yarn
$ yarn add @consta/rc-table-adapter
```

## Подключите зависимости

Чтобы начать работу, установите библиотеку [`@consta/uikit`](https://www.npmjs.com/package/@consta/uikit) и [настройте тему](https://consta-uikit.vercel.app/?path=/docs/components-theme--playground).

### Можно использовать компоненты

Например, так:

```js
import React from 'react'
import { rcTableAdapter } from '@consta/rc-table-adapter/rcTableAdapter'
import { default as RCTable } from 'rc-table'

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
]

const data = [
  { name: 'Крокодил Гена', occupation: 'работает', address: 'Зоопарк', key: '1' },
  { name: 'Чебурашка', occupation: 'косит траву', address: 'Дом друзей', key: '2' },
]

export function TableExample() {
  const tableProps = rcTableAdapter({ size: 'l', zebraStriped: 'odd', borderBetweenColumns: false })

  return <RCTable data={data} columns={columns} {...tableProps} />
}
```

или так:

```js
import React from 'react'
import { cnRcTable } from '@consta/rc-table-adapter/RcTable'

import { default as RCTable } from 'rc-table'
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
    ['CustomTable']
  )

  return <RCTable prefixCls={prefix} data={data} columns={columns} />
}
```

## Разработка

### Подготовка окружения

Рабочее окружение должно содержать NodeJS и Yarn, необходимые версии можно узнать в файле [package.json](./package.json) в блоке **engines**.

Чтобы установить зависимости, выполните команду:

```sh
$ yarn install
```

### Основные команды

```sh
# Сборка и старт Storybook
$ yarn start

# Сборка для production
$ yarn build

# Линтинг всех файлов
$ yarn lint

# Форматирование всех файлов prettier
$ yarn format

# Запуск юнит-тестов
$ yarn unit

# Запуск юнит-тестов, тестирование TS, линтинг файлов
$ yarn test
```

## Документация

[Посмотреть документацию и примеры](https://consta-table.vercel.app/)

## Контрибьюторам

Будем рады, если вы захотите принять участие в разработке дизайн-системы =) Но сначала прочитайте [инструкцию для контрибьюторов](https://consta-uikit.vercel.app/?path=/docs/common-develop-contributors--page).

## Лицензия

Дизайн-систему можно использовать бесплатно, она распространяется ПАО «Газпром нефть» на условиях открытой [лицензии MIT](https://consta.gazprom-neft.ru/static/licence_mit.pdf).
