import React from 'react'
import { rcTableAdapter } from '@/rcTableAdapter/rcTableAdapter'
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

const data: Array<Record<string, unknown>> = [
  { name: 'Крокодил Гена', occupation: 'работает', address: 'Зоопарк', key: '1' },
  { name: 'Чебурашка', occupation: 'косит траву', address: 'Дом друзей', key: '2' },
]

export function TableExample() {
  const tableProps = rcTableAdapter()

  return <RCTable {...tableProps} data={data} columns={columns} />
}
