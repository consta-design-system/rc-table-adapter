// eslint-disable-next-line import/no-named-default
import { default as RCTable } from 'rc-table';
import React from 'react';

import { columns, data } from '##/adapters/rcTableAdapter/__mock__/mock.data';
import { cnRcTable } from '##/mixs/RcTable/RcTable';

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
    ['CustomTable'],
  );

  return <RCTable prefixCls={prefix} data={data} columns={columns} />;
};
