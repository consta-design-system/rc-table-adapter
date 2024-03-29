import './RcTable.css';

import { PropSize } from '##/adapters/rcTableAdapter/helper';
import { cn } from '##/utils/bem';

export const cnTable = cn('RcTable');

type CnRcTableProps = {
  size?: PropSize;
  zebraStriped?: 'odd' | 'even';
  borderBetweenColumns?: boolean;
  borderBetweenRows?: boolean;
  verticalAlign?: 'top' | 'center' | 'bottom';
  headerVerticalAlign?: 'center' | 'bottom';
};

type CnRcTable = (
  props?: CnRcTableProps,
  classNames?: Array<string | undefined>,
) => string;

export const cnRcTable: CnRcTable = (props, classNames) => {
  const params = props || ({} as CnRcTableProps);
  const {
    size = 's',
    zebraStriped,
    borderBetweenColumns = true,
    borderBetweenRows = true,
    verticalAlign = 'top',
    headerVerticalAlign = 'center',
  } = params;
  return cnTable(
    {
      size,
      zebraStriped,
      borderBetweenColumns,
      borderBetweenRows,
      verticalAlign,
      headerVerticalAlign,
    },
    classNames,
  )
    .split(' ')
    .reverse()
    .join(' ');
};
