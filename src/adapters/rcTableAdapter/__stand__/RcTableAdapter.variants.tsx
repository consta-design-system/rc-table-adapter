import { useBoolean, useSelect } from '@consta/stand';
import RCTable from 'rc-table';
import React, { useEffect, useState } from 'react';

import { rcTableAdapter } from '##/adapters/rcTableAdapter/rcTableAdapter';
import { cn } from '##/utils/bem';

import {
  columns as mockColumns,
  columnsFixed,
  data as mockData,
  dataFixed,
  expandData,
  groupColumns,
  groupData,
  stickyData,
} from '../__mock__/mock.data';
import { defaultPropSize, propSize } from '../helper';

const cnRcTableAdapterVariants = cn('RcTableAdapterVariants');

const Variants = () => {
  const sticky = useBoolean('sticky', false);
  const emptyData = useBoolean('emptyData', false);
  const expandable = useBoolean('expandable', false);
  const grouped = useBoolean('grouped', false);
  const size = useSelect('size', propSize, defaultPropSize);
  const borderBetweenColumns = useBoolean('borderColumns', true);
  const borderBetweenRows = useBoolean('borderRows', true);
  const zebraStriped = useSelect(
    'zebraStriped',
    ['none', 'odd', 'even'],
    'none',
  );
  const verticalAlign = useSelect(
    'verticalAlign',
    ['top', 'center', 'bottom'],
    'top',
  );
  const headerVerticalAlign = useSelect(
    'headerVerticalAlign',
    ['center', 'bottom'],
    'center',
  );
  const withFixedColumns = useBoolean('withFixedColumns', false);

  const [data, setData] = useState<Array<Record<string, unknown>>>([]);
  const [columns, setColumns] = useState<Array<Record<string, unknown>>>([]);

  useEffect(() => {
    const getData = () => {
      if (emptyData) {
        return [];
      }
      if (withFixedColumns) {
        return dataFixed;
      }
      if (grouped) {
        return groupData;
      }
      if (expandable) {
        return expandData;
      }
      if (sticky) {
        return stickyData;
      }
      return mockData;
    };

    setData(getData());
  }, [expandable, grouped, emptyData, sticky, withFixedColumns]);

  useEffect(() => {
    const getColumns = () => {
      if (withFixedColumns) {
        return columnsFixed;
      }
      if (grouped) {
        return groupColumns;
      }
      return mockColumns;
    };
    setColumns(getColumns());
  }, [withFixedColumns, expandable, grouped, emptyData, sticky]);

  const tableProps = rcTableAdapter({
    size,
    borderBetweenColumns,
    borderBetweenRows,
    zebraStriped: zebraStriped === 'none' ? undefined : zebraStriped,
    headerVerticalAlign,
    verticalAlign,
  });

  return (
    <div className={cnRcTableAdapterVariants({ fixed: withFixedColumns })}>
      <RCTable
        {...tableProps}
        sticky={sticky}
        style={{ maxHeight: 500, width: '100%' }}
        columns={columns}
        data={data}
      />
    </div>
  );
};

export default Variants;
