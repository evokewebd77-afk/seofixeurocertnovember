export const SITE = {
  name: 'Eurocert Asia',
  shortName: 'Eurocert Asia',
  domain: 'eurocert.asia',
  establishedYear: 1998,
  metrics: {
    yearsExperience: '25+',
    countriesServed: '29+',
    continentsServed: 5,
    clientsCertified: '1000+',
    certificationTypes: '50+'
  },
  contact: {
    email: 'info@eurocert.in',
    phone: '+91 9316012883',
    phoneHref: '+919316012883',
    secondaryPhone: '+91 9262740889',
    secondaryPhoneHref: '+919262740889',
    addressLine1: '304, Mid Town Tower, Peer Muchalla',
    addressLine2: 'Panchkula, Haryana 134109, India',
    addressFull: '304, Mid Town Tower, Peer Muchalla, Panchkula, Haryana 134109, India'
  },
  standards: [
    'ISO 9001:2015',
    'ISO 14001:2015',
    'ISO 45001:2018',
    'ISO 27001:2022',
    'ISO 50001:2018',
    'ISO 22000:2018',
    'HACCP',
    'FSSC 22000',
    'BRCGS',
    'IFS Food',
    'GLOBALG.A.P.',
    'SEDEX / SMETA',
    'SA8000',
    'CE Marking',
    'ISO 14064-1',
    'ISO 22301:2019',
    'ISO/IEC 20000-1:2018',
    'ISO 37001',
    'ISO 39001:2012',
    'ISO 28000',
    'ISO 26000',
    'ISO 13485',
    'ISO 22716',
    'ISO 3834',
    'ISO 55001'
  ]
} as const;

export type SiteConfig = typeof SITE;
