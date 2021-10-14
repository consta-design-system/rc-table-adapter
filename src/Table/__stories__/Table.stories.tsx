import React from 'react'

import { createMetadata } from '@/__private__/storybook'

import { Table } from '../Table'

import mdx from './Table.docs.mdx'

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
    title: 'Поддержать',
    dataIndex: '',
    key: 'operations',
    render: () => <p>Покормить печеньем</p>,
  },
]

const data = [
  { name: 'Крокодил Гена', occupation: 'работает', address: 'Зоопарк', key: '1' },
  { name: 'Чебурашка', occupation: 'косит траву', address: 'Дом друзей', key: '2' },
]

export function Playground() {
  return <Table columns={columns} data={data} />
}

export default createMetadata({
  title: 'Компоненты|/Table',
  id: 'components/Table',
  parameters: {
    docs: {
      page: mdx,
    },
  },
})
