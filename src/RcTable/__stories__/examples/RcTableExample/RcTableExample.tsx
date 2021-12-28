import React from 'react'
import { default as RCTable } from 'rc-table'
import { data, columns } from '@/rcTableAdapter/__mock__/mock.data'
import { cnRcTable } from '@/RcTable/RcTable'

export const RcTableExample = () => {
  const prefix = cnRcTable(
    {
      size: 's',
      zebraStriped: 'odd',
      borderBetweenColumns: true,
      borderBetweenRows: true,
      verticalAlign: 'center',
      headerVerticalAlign: 'center',
    },
    ['CustomTable']
  )

  return <RCTable prefixCls={prefix} data={data} columns={columns} />
}
