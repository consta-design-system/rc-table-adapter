import React from 'react'

import { createMetadata } from '@/__private__/storybook'

import { Table } from '../Table'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 100,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 200,
  },
  {
    title: 'Operations',
    dataIndex: '',
    key: 'operations',
    render: () => <p>Delete</p>,
  },
]

const data = [
  { name: 'Jack', age: 28, address: 'some where', key: '1' },
  { name: 'Rose', age: 36, address: 'some where', key: '2' },
]

export function Playground() {
  return <Table columns={columns} data={data} />
}

export default createMetadata({
  title: 'Компоненты|/Table',
  id: 'components/Table',
})
