import type {EntryCategory} from "@/types/account.ts";

export interface AccountEntry {
    id: number;
    date: string;
    category: EntryCategory;
    description: string;
    amount: number;
}