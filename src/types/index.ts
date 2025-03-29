
export interface EmergencyContact {
  id: string;
  name: string;
  number: string;
  description: string;
  category: 'medical' | 'police' | 'fire' | 'other';
  priority: 'high' | 'medium' | 'low';
}

export interface CallRecord {
  id: string;
  contactId: string;
  contactName: string;
  number: string;
  timestamp: Date;
  duration?: number; // in seconds
  notes?: string;
  isRecorded: boolean;
}
