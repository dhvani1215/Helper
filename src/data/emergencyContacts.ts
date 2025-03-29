
import { EmergencyContact } from '@/types';

export const emergencyContacts: EmergencyContact[] = [
  {
    id: '1',
    name: 'Emergency Medical Services (Ambulance)',
    number: '108',
    description: 'For medical emergencies requiring immediate medical attention in Surat',
    category: 'medical',
    priority: 'high'
  },
  {
    id: '2',
    name: 'Surat Police',
    number: '100',
    description: 'For emergencies requiring law enforcement assistance in Surat',
    category: 'police',
    priority: 'high'
  },
  {
    id: '3',
    name: 'Surat Fire Department',
    number: '101',
    description: 'For fires, gas leaks, and other hazardous situations in Surat',
    category: 'fire',
    priority: 'high'
  },
  {
    id: '4',
    name: 'Women Helpline',
    number: '1091',
    description: 'Helpline for women in distress or facing harassment in Surat',
    category: 'other',
    priority: 'high'
  },
  {
    id: '5',
    name: 'Surat Municipal Corporation',
    number: '0261-2422244',
    description: 'For civic issues and municipal services in Surat',
    category: 'other',
    priority: 'medium'
  },
  {
    id: '6',
    name: 'SMIMER Hospital',
    number: '0261-2368040',
    description: 'Surat Municipal Institute of Medical Education and Research',
    category: 'medical',
    priority: 'medium'
  },
  {
    id: '7',
    name: 'New Civil Hospital Surat',
    number: '0261-2244456',
    description: 'Government hospital for emergency medical services in Surat',
    category: 'medical',
    priority: 'medium'
  },
  {
    id: '8',
    name: 'Child Helpline',
    number: '1098',
    description: 'Helpline for children in distress or danger in Surat',
    category: 'other',
    priority: 'high'
  },
  {
    id: '9',
    name: 'Disaster Management',
    number: '0261-2418800',
    description: 'For disaster management services in Surat',
    category: 'other',
    priority: 'high'
  },
  {
    id: '10',
    name: 'Railway Enquiry',
    number: '139',
    description: 'For railway related information and emergencies in Surat',
    category: 'other',
    priority: 'low'
  }
];
