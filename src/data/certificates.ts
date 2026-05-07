export interface Certificate {
  id: string
  name: string
  issuer: string
  issueDate: string
  expiryDate?: string
  credentialId?: string
  credentialUrl?: string
  image?: string
}

export const certificates: Certificate[] = [
  {
    id: 'az-305',
    name: 'Azure Solutions Architect Expert',
    issuer: 'Microsoft',
    issueDate: '2024-06',
    credentialId: 'ABC123DEF456',
    credentialUrl: 'https://learn.microsoft.com/en-us/credentials/',
    image: 'https://images.unsplash.com/photo-1516534775068-bb57914b763e?w=300&h=300&fit=crop'
  },
  {
    id: 'az-204',
    name: 'Azure Developer Associate',
    issuer: 'Microsoft',
    issueDate: '2024-03',
    credentialId: 'XYZ789UVW012',
    credentialUrl: 'https://learn.microsoft.com/en-us/credentials/',
    image: 'https://images.unsplash.com/photo-1516534775068-bb57914b763e?w=300&h=300&fit=crop'
  },
  {
    id: 'cka',
    name: 'Certified Kubernetes Administrator',
    issuer: 'Linux Foundation',
    issueDate: '2024-01',
    expiryDate: '2027-01',
    credentialId: 'LF-CKA-2024-001',
    credentialUrl: 'https://www.credly.com/',
    image: 'https://images.unsplash.com/photo-1516534775068-bb57914b763e?w=300&h=300&fit=crop'
  },
  {
    id: 'aws-sap',
    name: 'AWS Certified Solutions Architect Professional',
    issuer: 'Amazon Web Services',
    issueDate: '2023-11',
    expiryDate: '2026-11',
    credentialId: 'AWS-SAP-2023-001',
    credentialUrl: 'https://www.credly.com/',
    image: 'https://images.unsplash.com/photo-1516534775068-bb57914b763e?w=300&h=300&fit=crop'
  },
  {
    id: 'scrum-master',
    name: 'Professional Scrum Master I',
    issuer: 'Scrum.org',
    issueDate: '2023-09',
    credentialId: 'PSM-2023-001',
    credentialUrl: 'https://www.scrum.org/',
    image: 'https://images.unsplash.com/photo-1516534775068-bb57914b763e?w=300&h=300&fit=crop'
  },
  {
    id: 'docker',
    name: 'Docker Certified Associate',
    issuer: 'Docker',
    issueDate: '2023-07',
    expiryDate: '2026-07',
    credentialId: 'DCA-2023-001',
    credentialUrl: 'https://www.credly.com/',
    image: 'https://images.unsplash.com/photo-1516534775068-bb57914b763e?w=300&h=300&fit=crop'
  }
]
