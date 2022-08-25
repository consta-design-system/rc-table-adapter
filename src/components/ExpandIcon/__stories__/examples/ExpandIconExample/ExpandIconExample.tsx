// eslint-disable-next-line import/no-named-default
import { default as RCTable } from 'rc-table';
import React from 'react';

import {
  columns,
  expandData,
} from '##/adapters/rcTableAdapter/__mock__/mock.data';
import { ExpandIcon } from '##/components/ExpandIcon/ExpandIcon';
import { cnRcTable } from '##/mixs/RcTable/RcTable';

export const ExpandIconExample = () => {
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

  return (
    <RCTable
      expandIcon={ExpandIcon}
      prefixCls={prefix}
      data={expandData}
      columns={columns}
    />
  );
};
