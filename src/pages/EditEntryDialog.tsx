import * as React from 'react';
import { useState } from 'react';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { AccountEntry } from '@/types/accountEntry.ts';
import type { EntryCategory } from '@/types/account.ts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx';

interface EditEntryDialogProps {
  entry: AccountEntry;
  onSave: (account: AccountEntry) => void;
}

const EditEntryDialog = ({ entry, onSave }: EditEntryDialogProps) => {
  const [open, setOpen] = useState(false);

  const [date, setDate] = useState(entry.date);
  const [category, setCategory] = useState<EntryCategory>(entry.category);
  const [description, setDescription] = useState(entry.description);
  const [amount, setAmount] = useState<number | ''>(entry.amount);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !category || !description || amount === '') {
      // validation 작업
      return;
    }

    const updateAccount: AccountEntry = {
      ...entry,
      date,
      category,
      description,
      amount,
    };
    onSave(updateAccount);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>수정</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>정보 입력</DialogTitle>
        </DialogHeader>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="date">오늘 날짜</Label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="category">카테고리</Label>
              <Select
                value={category}
                onValueChange={(val) => setCategory(val as EntryCategory)}
              >
                <SelectTrigger id="category" className="w-full">
                  <SelectValue placeholder="카테고리를 선택해주세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="수입">수입</SelectItem>
                  <SelectItem value="지출">지출</SelectItem>
                  <SelectItem value="소비">소비</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">설명</Label>
              <Input
                id="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="amount">금액</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>
          </div>
          <DialogFooter className="flex justify-end space-x-1">
            <DialogClose asChild>
              <Button variant="default">취소</Button>
            </DialogClose>
            <Button variant="default" type="submit">
              저장
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditEntryDialog;