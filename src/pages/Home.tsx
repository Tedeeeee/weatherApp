import type { AccountEntry } from '@/types/accountEntry.ts';
import { useRef, useState } from 'react';

import EntryTable from './EntryTable';
import AddEntryDialog from '@/pages/AddEntryDialog.tsx';

const initialEntries: AccountEntry[] = [
  {
    id: 0,
    date: '2025-07-13',
    category: '소비',
    description: '점심 식사',
    amount: 12300,
  },
  {
    id: 1,
    date: '2025-07-12',
    category: '소비',
    description: '버스비',
    amount: 1500,
  },
  {
    id: 2,
    date: '2025-07-11',
    category: '수입',
    description: '용돈',
    amount: 50000,
  },
];

const HomePage = () => {
  const [items, setItems] = useState<AccountEntry[]>(initialEntries);
  const idRef = useRef(
    items.length > 0 ? Math.max(...items.map((item) => Number(item.id))) + 1 : 1
  );

  const addItem = (entry: Omit<AccountEntry, 'id'>) => {
    console.log(entry);

    const newItem: AccountEntry = {
      id: idRef.current,
      ...entry,
    };

    idRef.current += 1;

    setItems((prev) => [...prev, newItem]);
  };

  const updateItem = (id: number) => {
    console.log('수정할 id: ', id);
  };

  const deleteItem = (id: number) => {
    console.log('삭제할 id: ', id);

    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen flex items-start justify-center p-4">
      <div className="w-[70%] max-w-screen-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">가계부 내역</h1>
        <div>
          <AddEntryDialog onAdd={addItem} />
        </div>
        <EntryTable
          items={items}
          updateItem={updateItem}
          deleteItem={deleteItem}
        />
      </div>
    </div>
  );
};

export default HomePage;
