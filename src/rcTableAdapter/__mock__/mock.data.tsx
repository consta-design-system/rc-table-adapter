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
    render: () => <p>Покормить печеньем</p>,
  },
]

export const data = [
  { name: 'Крокодил Гена', occupation: 'работает', address: 'Зоопарк', key: '1' },
  { name: 'Чебурашка', occupation: 'косит траву', address: 'Дом друзей', key: '2' },
]

export const expandData = [
  {
    key: '1',
    name: 'a',
    address: 'I am a',
    occupation: 'работает',
    children: [
      {
        key: '11',
        name: 'aa',
        address: 'I am aa',
        occupation: 'работает',
      },
      {
        key: '12',
        name: 'ab',
        address: 'I am ab',
        occupation: 'работает',
        children: [
          {
            key: '121',
            name: 'aba',
            address: 'I am aba',
            occupation: 'работает',
          },
        ],
      },
      {
        key: '13',
        name: 'ac',
        address: 'I am ac',
        occupation: 'работает',
        children: [
          {
            key: '131',
            name: 'aca',
            address: 'I am aca',
            occupation: 'работает',
            children: [
              {
                key: '1311',
                name: 'acaa',
                address: 'I am acaa',
                occupation: 'работает',
              },
              {
                key: '1312',
                name: 'acab',
                address: 'I am acab',
                occupation: 'работает',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: '2',
    name: 'b',
    address: 'I am b',
    occupation: 'работает',
  },
]

export const groupColumns = [
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Разное',
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
            title: 'Сообщество',
            children: [
              {
                title: 'Здание',
                dataIndex: 'building',
                key: 'building',
              },
              {
                title: 'Номер',
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
