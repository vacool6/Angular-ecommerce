import { buildSearchEngine, getOrganizationEndpoints } from '@coveo/headless';

export const headlessEngine = buildSearchEngine({
  configuration: {
    organizationId: 'italentg2v8fsu6',
    organizationEndpoints: getOrganizationEndpoints('italentg2v8fsu6'),
    accessToken: 'xx4c7cab9f-11e8-48a6-b50e-27fcfaae9119',
    // renewAccessToken: <CALLBACK>,
  },
});
