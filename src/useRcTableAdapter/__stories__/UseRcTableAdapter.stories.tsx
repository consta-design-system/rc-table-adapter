import React, { useEffect, useState } from 'react'

import { createMetadata } from '@/__private__/storybook'

import mdx from './UseRcTableAdapter.docs.mdx'
import { boolean, select } from '@storybook/addon-knobs'
import { defaultPropSize, propSize } from '../helper'
import {
  columns,
  data as mockData,
  expandData,
  groupColumns,
  groupData,
} from '../__mock__/mock.data'
import { default as RCTable } from 'rc-table'
import { useRcTableAdapter } from '@/useRcTableAdapter/useRcTableAdapter'

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

  const tableProps = useRcTableAdapter({
    size,
    sticky,
    borderBetweenColumns,
    borderBetweenRows,
    zebraStriped: zebraStriped === '' ? undefined : zebraStriped,
    headerVerticalAlign,
    verticalAlign,
    columns: grouped ? groupColumns : columns,
    data,
  })

  return <RCTable {...tableProps} />
}

export default createMetadata({
  title: 'Hooks/UseRcTableAdapterExample',
  id: 'hooks/UseRcTableAdapterExample',
  parameters: {
    docs: {
      page: mdx,
    },
  },
})
