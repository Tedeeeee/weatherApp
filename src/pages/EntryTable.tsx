import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table.tsx';
import { Button } from '@/components/ui/button.tsx';
import type { AccountEntry } from '@/types/accountEntry.ts';
import EditEntryDialog from '@/pages/EditEntryDialog.tsx';

interface EntryTableProps {
  items: AccountEntry[];
  updateItem: (entry: AccountEntry) => void;
  deleteItem: (id: number) => void;
}

const EntryTable = ({ items, updateItem, deleteItem }: EntryTableProps) => {

  return (
    <div className="w-full overflow-x-auto">
      <Table className="table-auto md:table-fixed border border-gray-200 w-full">
        <colgroup>
          <col className="w-auto md:w-1/12" />
          <col className="w-auto md:w-2/12" />
          <col className="hidden lg:table-cell lg:w-4/12" />
          <col className="w-auto md:w-1/12" />
          <col className="w-auto md:w-2/12" />
          <col className="w-auto md:w-1/12" />
          <col className="w-auto md:w-1/12" />
        </colgroup>

        <TableHeader>
          <TableRow>
            <TableHead className="text-center">날짜</TableHead>
            <TableHead className="text-center">카테고리</TableHead>
            <TableHead className="hidden lg:table-cell text-center">설명</TableHead>
            <TableHead className="text-center">금액</TableHead>
            <TableHead className="text-center">수정</TableHead>
            <TableHead className="text-center">삭제</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {items.map(account => (
            <TableRow key={account.id}>
              <TableCell className="text-center">{account.date}</TableCell>
              <TableCell className="text-center">{account.category}</TableCell>
              <TableCell className="hidden lg:table-cell text-center">
                {account.description}
              </TableCell>
              <TableCell className="text-center">
                {account.amount.toLocaleString()}
              </TableCell>
              <TableCell className="text-center">
                <EditEntryDialog entry={account} onSave={updateItem} />
              </TableCell>
              <TableCell className="text-center">
                <Button onClick={() => deleteItem(account.id)}>삭제</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EntryTable;
