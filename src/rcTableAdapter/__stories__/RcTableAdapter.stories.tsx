import React, { useEffect, useState } from 'react'

import { createMetadata } from '@/__private__/storybook'
import './RcTableAdapterStories.css'
import mdx from './RcTableAdapter.docs.mdx'
import { boolean, select } from '@storybook/addon-knobs'
import { defaultPropSize, propSize } from '../helper'
import {
  columns as mockColumns,
  data as mockData,
  expandData,
  groupColumns,
  groupData,
  dataFixed,
  columnsFixed,
  stickyData,
} from '../__mock__/mock.data'
import { default as RCTable } from 'rc-table'
import { rcTableAdapter } from '@/rcTableAdapter/rcTableAdapter'
import { cn } from '@/__private__/utils/bem'

const getKnobs = () => ({
  sticky: boolean('sticky', false),
  emptyData: boolean('emptyData', false),
  expandable: boolean('expandable', false),
  grouped: boolean('grouped', false),
  size: select('size', propSize, defaultPropSize),
  borderBetweenColumns: boolean('borderBetweenColumns', true),
  borderBetweenRows: boolean('borderBetweenRows', true),
  zebraStriped: select('zebraStriped', ['', 'odd', 'even'], ''),
  verticalAlign: select('verticalAlign', ['top', 'center', 'bottom'], 'top'),
  headerVerticalAlign: select('headerVerticalAlign', ['center', 'bottom'], 'center'),
  withFixedColumns: boolean('withFixedColumns', false),
})

const cnRcTableAdapterStories = cn('RcTableAdapterStories')

export function Playground() {
  const {
    size,
    borderBetweenColumns,
    borderBetweenRows,
    zebraStriped,
    headerVerticalAlign,
    verticalAlign,
    emptyData,
    expandable,
    sticky,
    grouped,
    withFixedColumns,
  } = getKnobs()

  const [data, setData] = useState<Array<Record<string, unknown>>>([])
  const [columns, setColumns] = useState<Array<Record<string, unknown>>>([])

  useEffect(() => {
    const getData = () => {
      if (emptyData) {
        return []
      }
      if (withFixedColumns) {
        return dataFixed
      }
      if (grouped) {
        return groupData
      }
      if (expandable) {
        return expandData
      }
      if (sticky) {
        return stickyData
      }
      return mockData
    }

    setData(getData())
  }, [expandable, grouped, emptyData, sticky, withFixedColumns])

  useEffect(() => {
    const getColumns = () => {
      if (withFixedColumns) {
        return columnsFixed
      }
      if (grouped) {
        return groupColumns
      }
      return mockColumns
    }
    setColumns(getColumns())
  }, [withFixedColumns, expandable, grouped, emptyData, sticky])

  const tableProps = rcTableAdapter({
    size,
    borderBetweenColumns,
    borderBetweenRows,
    zebraStriped: zebraStriped === '' ? undefined : zebraStriped,
    headerVerticalAlign,
    verticalAlign,
  })

  return (
    <div className={cnRcTableAdapterStories({ fixed: withFixedColumns })}>
      <RCTable
        {...tableProps}
        sticky={sticky}
        style={{ maxHeight: 500, width: '100%' }}
        columns={columns}
        data={data}
      />
    </div>
  )
}

export default createMetadata({
  title: 'Utils/RcTableAdapter',
  id: 'Utils/RcTableAdapter',
  parameters: {
    docs: {
      page: mdx,
    },
  },
})
