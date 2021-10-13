# [Дизайн-система Consta](http://consta.gazprom-neft.ru/) | Table

Это компонент Table для дизайн-системы Consta: таблица с фильтрами, группировкой, кастомными полями и другими настройками. Компонент взят из библиотеки [rc-table](https://github.com/react-component/table) и адаптирован для [дизайн-системы Consta](https://consta.gazprom-neft.ru/).

# Как использовать

## Установите пакет

```sh
# NPM
$ npm install @consta/rc-table

# Yarn
$ yarn add @consta/rc-table
```

## Подключите зависимости

Чтобы начать работу, установите библиотеку [`@consta/uikit`](https://www.npmjs.com/package/@consta/uikit) и [настройте тему](https://consta-uikit.vercel.app/?path=/docs/components-theme--playground).

### Можно использовать компоненты

Например, так:

```js
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Table } from '@consta/rc-table/Table';

const data = [
  { name: 'Крокодил Гена', occupation: 'работает', address: 'Зоопарк', key: '1' },
  { name: 'Чебурашка', occupation: 'косит траву', address: 'Дом друзей', key: '2' },
]
const columns = [
  {
    title: 'Кто',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Что делает',
    dataIndex: 'occupation',
    key: 'occupation',
  },
  {
    title: 'Где',
    dataIndex: 'address',
    key: 'address',
  },
]

const App = () => {
  return <Table dataSource={data} columns={columns} />;
};
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

[Посмотреть документацию и примеры](https://rc-table.vercel.app/)

## Контрибьюторам

Будем рады, если вы захотите принять участие в разработке дизайн-системы =) Но сначала прочитайте [инструкцию для контрибьюторов](https://consta-uikit.vercel.app/?path=/docs/common-develop-contributors--page).

## Лицензия

Дизайн-систему можно использовать бесплатно, она распространяется ПАО «Газпром нефть» на условиях открытой [лицензии MIT](https://consta.gazprom-neft.ru/static/licence_mit.pdf).
