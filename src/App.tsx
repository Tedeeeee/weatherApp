import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import type { AccountEntry } from '@/types/accountEntry.ts';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const entries: AccountEntry[] = [
  {
    id: 0,
    date: '2025-07-13',
    category: 'expense',
    description: '점심 식사',
    amount: 12300,
  },
  {
    id: 1,
    date: '2025-07-12',
    category: 'expense',
    description: '버스비',
    amount: 1500,
  },
  {
    id: 2,
    date: '2025-07-11',
    category: 'income',
    description: '용돈',
    amount: 50000,
  },
];

function App() {
  const [items, setItems] = useState<AccountEntry[]>(entries);

  const deleteItem = (id: number) => {
    console.log('삭제할 id : ', id);

    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="min-h-screen flex items-start justify-center p-4">
        <div className="w-[70%] max-w-screen-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">가계부 내역</h1>
          <Table className="table-auto border border-gray-200 mx-auto max-w-md">
            <TableHeader>
              <TableRow>
                <TableHead className="p-2 border-b text-center">순서</TableHead>
                <TableHead className="p-2 border-b text-center">날짜</TableHead>
                <TableHead className="p-2 border-b text-center">
                  카테고리
                </TableHead>
                <TableHead className="p-2 border-b text-center">설명</TableHead>
                <TableHead className="p-2 border-b text-center">
                  금액(원)
                </TableHead>
                <TableHead className="p-2 border-b text-center">삭제</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((e, i) => (
                <TableRow
                  key={e.id}
                  className={i < entries.length - 1 ? 'border-b' : ''}
                >
                  <TableCell className="p-2 text-center">{i + 1}</TableCell>
                  <TableCell className="p-2 text-center">{e.date}</TableCell>
                  <TableCell className="p-2 text-center">
                    {e.category}
                  </TableCell>
                  <TableCell className="p-2 text-center">
                    {e.description}
                  </TableCell>
                  <TableCell className="p-2 text-center">
                    {e.amount.toLocaleString()}
                  </TableCell>
                  <TableCell className="p-2 text-center">
                    <Button
                      variant="destructive"
                      onClick={() => deleteItem(e.id)}
                    >
                      {' '}
                      삭제
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default App;
