import { buildSearchEngine, getOrganizationEndpoints } from '@coveo/headless';
// Envs
import { ORG_ID, ACCESS_TOKEN } from '../env';

export const headlessEngine = buildSearchEngine({
  configuration: {
    organizationId: ORG_ID,
    organizationEndpoints: getOrganizationEndpoints(ORG_ID),
    accessToken: ACCESS_TOKEN,
    //  ||
    // 'xx4c7cab9f-11e8-48a6-b50e-27fcfaae9119',
    // renewAccessToken: <CALLBACK>,
  },
});
