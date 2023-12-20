import { buildSearchEngine, getOrganizationEndpoints } from '@coveo/headless';

export const headlessEngine = buildSearchEngine({
  configuration: {
    organizationId: 'italentg2v8fsu6',
    organizationEndpoints: getOrganizationEndpoints('italentg2v8fsu6'),
    accessToken: 'xx40a8c6d8-c531-4dad-a795-4ec890aba200',
    //  ||
    // 'xx4c7cab9f-11e8-48a6-b50e-27fcfaae9119',
    // renewAccessToken: <CALLBACK>,
  },
});
