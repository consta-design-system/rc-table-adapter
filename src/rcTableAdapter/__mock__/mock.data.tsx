import React from 'react'

export const columns = [
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
    title: 'Поддержать',
    dataIndex: '',
    key: 'operations',
    render: () => <div>Покормить печеньем</div>,
  },
]

export const data = [
  { name: 'Крокодил Гена', occupation: 'работает', address: 'Зоопарк', key: '1' },
  { name: 'Чебурашка', occupation: 'косит траву', address: 'Дом друзей', key: '2' },
]

export const expandData = [
  {
    key: '1',
    name: '1',
    address: 'место 1',
    occupation: 'задача 1',
    children: [
      {
        key: '11',
        name: '1.1',
        address: 'место 1.1',
        occupation: 'задача 1.1',
      },
      {
        key: '12',
        name: '1.2',
        address: 'место 1.2',
        occupation: 'задача 1.2',
        children: [
          {
            key: '121',
            name: '1.2.1',
            address: 'место 1.2.1',
            occupation: 'задача 1.2.1',
          },
        ],
      },
      {
        key: '13',
        name: '1.3',
        address: 'место 1.3',
        occupation: 'задача 1.3',
        children: [
          {
            key: '131',
            name: '1.3.1',
            address: 'место 1.3.1',
            occupation: 'задача 1.3.1',
            children: [
              {
                key: '1311',
                name: '1.3.1.1',
                address: 'место 1.3.1.1',
                occupation: 'задача 1.3.1.1',
              },
              {
                key: '1312',
                name: '1.3.1.2',
                address: 'место 1.3.1.2',
                occupation: 'задача 1.3.1.2',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: '2',
    name: '2',
    address: 'место 2',
    occupation: 'задача 2',
  },
]

export const groupColumns = [
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Личные данные',
    children: [
      {
        title: 'Возраст',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Адрес',
        children: [
          {
            title: 'Улица',
            dataIndex: 'street',
            key: 'street',
          },
          {
            title: 'Здание',
            children: [
              {
                title: 'Дом',
                dataIndex: 'building',
                key: 'building',
              },
              {
                title: 'Квартира',
                dataIndex: 'number',
                key: 'number',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Компания',
    children: [
      {
        title: 'Адрес',
        dataIndex: 'companyAddress',
        key: 'companyAddress',
      },
      {
        title: 'Название',
        dataIndex: 'companyName',
        key: 'companyName',
      },
    ],
  },
  {
    title: 'Пол',
    dataIndex: 'gender',
    key: 'gender',
  },
]

export const groupData = [
  {
    key: '1',
    name: 'Иван',
    age: 32,
    street: 'ул. Мира',
    building: 1,
    number: 2033,
    companyAddress: 'ул. Летняя',
    companyName: 'ООО Зима',
    gender: 'муж.',
  },
  {
    key: '2',
    name: 'Анна',
    age: 42,
    street: 'пл. Ленина',
    building: 3,
    number: 2035,
    companyAddress: 'пр. Гражданский',
    companyName: 'ИП Карамель',
    gender: 'жен.',
  },
]

export const stickyData = [
  { name: 'Крокодил Гена', occupation: 'работает', address: 'Зоопарк', key: '1' },
  { name: 'Чебурашка 1', occupation: 'косит траву', address: 'Дом друзей', key: '2' },
  { name: 'Чебурашка 2', occupation: 'косит траву', address: 'Дом друзей', key: '3' },
  { name: 'Чебурашка 3', occupation: 'косит траву', address: 'Дом друзей', key: '4' },
  { name: 'Чебурашка 4', occupation: 'косит траву', address: 'Дом друзей', key: '5' },
  { name: 'Чебурашка 5', occupation: 'косит траву', address: 'Дом друзей', key: '6' },
  { name: 'Чебурашка 6', occupation: 'косит траву', address: 'Дом друзей', key: '7' },
  { name: 'Чебурашка 7', occupation: 'косит траву', address: 'Дом друзей', key: '2' },
  { name: 'Чебурашка 8', occupation: 'косит траву', address: 'Дом друзей', key: '3' },
  { name: 'Чебурашка 9', occupation: 'косит траву', address: 'Дом друзей', key: '4' },
  { name: 'Чебурашка 10', occupation: 'косит траву', address: 'Дом друзей', key: '5' },
  { name: 'Чебурашка 11', occupation: 'косит траву', address: 'Дом друзей', key: '6' },
  { name: 'Чебурашка 12', occupation: 'косит траву', address: 'Дом друзей', key: '7' },
  { name: 'Чебурашка 13', occupation: 'косит траву', address: 'Дом друзей', key: '2' },
  { name: 'Чебурашка 14', occupation: 'косит траву', address: 'Дом друзей', key: '3' },
  { name: 'Чебурашка 15', occupation: 'косит траву', address: 'Дом друзей', key: '4' },
  { name: 'Чебурашка 16', occupation: 'косит траву', address: 'Дом друзей', key: '5' },
  { name: 'Чебурашка 17', occupation: 'косит траву', address: 'Дом друзей', key: '6' },
  { name: 'Чебурашка 18', occupation: 'косит траву', address: 'Дом друзей', key: '7' },
  { name: 'Чебурашка 19', occupation: 'косит траву', address: 'Дом друзей', key: '2' },
  { name: 'Чебурашка 21', occupation: 'косит траву', address: 'Дом друзей', key: '3' },
  { name: 'Чебурашка 22', occupation: 'косит траву', address: 'Дом друзей', key: '4' },
  { name: 'Чебурашка 23', occupation: 'косит траву', address: 'Дом друзей', key: '5' },
  { name: 'Чебурашка 24', occupation: 'косит траву', address: 'Дом друзей', key: '6' },
  { name: 'Чебурашка 25', occupation: 'косит траву', address: 'Дом друзей', key: '7' },
]
