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

interface EntryTableProps {
  items: AccountEntry[];
  updateItem: (id: number) => void;
  deleteItem: (id: number) => void;
}

const EntryTable = ({ items, updateItem, deleteItem }: EntryTableProps) => {
  return (
    <Table className="table-fixed border border-gray-200 w-full">
      <colgroup>
        <col className="w-1/12" />
        <col className="w-2/12" />
        <col className="w-1/12" />
        <col className="w-5/12" />
        <col className="w-2/12" />
        <col className="w-1/12" />
        <col className="w-1/12" />
      </colgroup>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">날짜</TableHead>
          <TableHead className="text-center">카테고리</TableHead>
          <TableHead className="text-center">설명</TableHead>
          <TableHead className="text-center">금액</TableHead>
          <TableHead className="text-center">수정</TableHead>
          <TableHead className="text-center">삭제</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((account: AccountEntry) => (
          <TableRow key={account.id}>
            <TableCell className="text-center">{account.date}</TableCell>
            <TableCell className="text-center">{account.category}</TableCell>
            <TableCell className="text-center">{account.description}</TableCell>
            <TableCell className="text-center">{account.amount}</TableCell>
            <TableCell className="text-center">
              <Button onClick={() => updateItem(account.id)}>수정</Button>
            </TableCell>
            <TableCell className="text-center">
              <Button onClick={() => deleteItem(account.id)}>삭제</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EntryTable;
