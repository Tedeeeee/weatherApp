import type { AccountEntry } from '@/types/accountEntry.ts';
import { useRef, useState } from 'react';

import EntryTable from './EntryTable';
import AddEntryDialog from '@/pages/AddEntryDialog.tsx';
import { initialEntries } from '@/dummyData/initialEntries.ts';

const HomePage = () => {
  const [items, setItems] = useState<AccountEntry[]>(initialEntries);
  const idRef = useRef(
    items.length > 0 ? Math.max(...items.map((item) => Number(item.id))) + 1 : 1
  );

  const addItem = (entry: Omit<AccountEntry, 'id'>) => {
    const newItem: AccountEntry = {
      id: idRef.current,
      ...entry,
    };

    idRef.current += 1;

    setItems((prev) => [...prev, newItem]);
  };

  const updateItem = (updateEntry: AccountEntry) => {
    setItems(items =>
      items.map(item =>
        item.id === updateEntry.id ?
          {
            ...item,
            date: updateEntry.date,
            category: updateEntry.category,
            description: updateEntry.description,
            amount: updateEntry.amount,
          } : item
      )
    )
  };

  const deleteItem = (id: number) => {
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
