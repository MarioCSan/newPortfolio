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
    id: 'az-204',
    name: 'Azure Developer Associate',
    issuer: 'Microsoft',
    issueDate: '4/15/2021',
    credentialId: 'XYZ789UVW012',
    credentialUrl: 'https://www.credly.com/badges/f38c45ea-c9f1-44aa-ac0f-0410ca716a95/public_url',
    image: 'https://images.credly.com/size/680x680/images/63316b60-f62d-4e51-aacc-c23cb850089c/azure-developer-associate-600x600.png'

  },
  {
    id: 'DVA-C01',
    name: 'AWS Certified Developer - Associate',
    issuer: 'Amazon Web Services',
    issueDate: '5/17/2021',
    credentialId: 'f38c45ea-c9f1-44aa-ac0f-0410ca716a95',
    credentialUrl: 'https://www.credly.com/badges/ffac012f-2153-414c-a95f-a977fbebae47/public_url',
    image: 'https://images.credly.com/size/680x680/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png'
  },
  {
    id: 'Google Project Management Professional Certificate (v2)',
    name: 'Google Project Management Professional Certificate (v2)',
    issuer: 'Google via Coursera',
    issueDate: '1/31/2025',
    credentialId: 'ad06dd90-f7ac-4ab9-aa2c-3c79eb01111b',
    credentialUrl: 'https://www.credly.com/badges/ad06dd90-f7ac-4ab9-aa2c-3c79eb01111b/public_url',
    image: 'https://images.credly.com/size/680x680/images/a34119f2-402f-4443-8555-ccfe2520f1df/GCC_badge_PGM_1000x1000.png'
  }
]
