import React, { useEffect, useState } from 'react'

import { createMetadata } from '@/__private__/storybook'
import { Table } from '../Table'

import mdx from './Table.docs.mdx'
import { boolean, select } from '@storybook/addon-knobs'
import { defaultPropSize, propSize } from '../../useRcTableAdapter/helper'
import {
  columns,
  data as mockData,
  expandData,
  groupColumns,
  groupData,
} from '../__mock__/mock.data'

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
})

type TableData = { [key: string]: string | number | TableData }

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
  } = getKnobs()

  const [data, setData] = useState<TableData[]>([])

  useEffect(() => {
    const getData = () => {
      if (emptyData) {
        return []
      }
      if (grouped) {
        return groupData
      }
      if (expandable) {
        return expandData
      }
      return mockData
    }

    setData(getData())
  }, [expandable, grouped, emptyData])

  return (
    <Table
      size={size}
      sticky={sticky}
      defaultExpandAllRows
      borderBetweenColumns={borderBetweenColumns}
      borderBetweenRows={borderBetweenRows}
      zebraStriped={zebraStriped === '' ? undefined : zebraStriped}
      headerVerticalAlign={headerVerticalAlign}
      verticalAlign={verticalAlign}
      columns={grouped ? groupColumns : columns}
      data={data}
    />
  )
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
