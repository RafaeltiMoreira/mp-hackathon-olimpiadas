import { ComponentProps } from "react";

interface TableRowProps extends ComponentProps<'tr'> {}

export function TableRow(props: TableRowProps) {
  return (
      <tr className="border-b hover:bg-zinc-600/10 dark:hover:bg-zinc-50/15" {...props} />
  )
}
