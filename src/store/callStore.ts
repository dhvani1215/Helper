
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CallRecord } from '@/types';

interface CallState {
  calls: CallRecord[];
  addCallRecord: (call: CallRecord) => void;
  updateCallNotes: (id: string, notes: string) => void;
  deleteCallRecord: (id: string) => void;
  clearAllCalls: () => void;
}

export const useCallStore = create<CallState>()(
  persist(
    (set) => ({
      calls: [],
      addCallRecord: (call) => 
        set((state) => ({ 
          calls: [call, ...state.calls] 
        })),
      updateCallNotes: (id, notes) => 
        set((state) => ({
          calls: state.calls.map((call) => 
            call.id === id ? { ...call, notes } : call
          )
        })),
      deleteCallRecord: (id) => 
        set((state) => ({
          calls: state.calls.filter((call) => call.id !== id)
        })),
      clearAllCalls: () => set({ calls: [] }),
    }),
    {
      name: 'emergency-calls',
    }
  )
);
