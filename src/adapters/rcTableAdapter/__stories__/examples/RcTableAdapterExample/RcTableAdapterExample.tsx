// eslint-disable-next-line import/no-named-default
import { default as RCTable } from 'rc-table';
import React from 'react';

import { rcTableAdapter } from '##/adapters/rcTableAdapter/rcTableAdapter';

import { ExpandIcon } from '../../../../ExpandIcon/ExpandIcon';
import {
  expandData,
  groupColumns,
  groupData,
} from '../../../__mock__/mock.data';

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
    render: () => <div>Покормить печеньем</div>,
  },
];

const data: Array<Record<string, unknown>> = [
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
  const tableProps = rcTableAdapter();

  return <RCTable {...tableProps} data={data} columns={columns} />;
}

export function TableExampleStyles() {
  const tableProps = rcTableAdapter({
    size: 'l',
    zebraStriped: 'odd',
    borderBetweenColumns: false,
  });

  return <RCTable {...tableProps} data={data} columns={columns} />;
}

export function TableExampleGrouped() {
  const tableProps = rcTableAdapter();

  return (
    <RCTable
      {...tableProps}
      data={groupData}
      columns={groupColumns}
      expandIcon={ExpandIcon}
    />
  );
}

export function TableExampleExpand() {
  const tableProps = rcTableAdapter();

  return (
    <RCTable
      {...tableProps}
      data={expandData}
      columns={columns}
      expandIcon={ExpandIcon}
    />
  );
}
