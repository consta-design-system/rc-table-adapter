import {
  ColumnType,
  ColumnsType,
  ExpandableConfig,
  GetComponentProps,
  RenderExpandIcon,
} from 'rc-table/lib/interface'
import { TableProps as RCTableProps } from 'rc-table/lib/Table'

type ExcludeProps =
  | 'data'
  | 'children'
  | 'columns'
  | 'expandable'
  | 'onHeaderRow'
  | 'transformColumns'
  | 'expandIcon'

export type TableProps<ITEM> = Omit<RCTableProps, ExcludeProps> & {
  data?: ITEM[]
  columns?: ColumnsType<Record<string, any>>
  expandable?: ExpandableConfig<Record<string, any>>
  onHeaderRow?: GetComponentProps<readonly ColumnType<Record<string, any>>[]>
  transformColumns?: (columns: ColumnsType<Record<string, any>>) => ColumnsType<Record<string, any>>
  expandIcon?: RenderExpandIcon<Record<string, any>>
}

export type TableComponentType = <ITEM>(props: TableProps<ITEM>) => React.ReactElement | null
