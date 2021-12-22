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
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '其它',
    children: [
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        children: [
          {
            title: '街道',
            dataIndex: 'street',
            key: 'street',
          },
          {
            title: '小区',
            children: [
              {
                title: '单元',
                dataIndex: 'building',
                key: 'building',
              },
              {
                title: '门牌',
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
    title: '公司',
    children: [
      {
        title: '地址',
        dataIndex: 'companyAddress',
        key: 'companyAddress',
      },
      {
        title: '名称',
        dataIndex: 'companyName',
        key: 'companyName',
      },
    ],
  },
  {
    title: '性别',
    dataIndex: 'gender',
    key: 'gender',
  },
]

export const groupData = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    street: '拱墅区和睦街道',
    building: 1,
    number: 2033,
    companyAddress: '西湖区湖底公园',
    companyName: '湖底有限公司',
    gender: '男',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    street: '拱墅区和睦街道',
    building: 3,
    number: 2035,
    companyAddress: '西湖区湖底公园',
    companyName: '湖底有限公司',
    gender: '男',
  },
]
