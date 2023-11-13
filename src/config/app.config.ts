interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Job Poster'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Job Poster'],
  tenantName: 'Company',
  applicationName: 'Upwork clone',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage applications',
    'View job details',
    'Edit personal user information',
    'View company information',
  ],
  ownerAbilities: [
    'Manage job postings',
    'View applications for posted jobs',
    'Edit company information',
    'View user information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/df7d37c3-8bf5-476e-8175-9d2117b8dfd2',
};
