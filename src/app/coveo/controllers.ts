import {
  SearchBox,
  SearchBoxOptions,
  buildSearchBox,
  buildResultList,
  Result,
  ResultList,
  buildFacet,
  Facet,
  FacetValue,
  loadFieldActions,
  buildPager,
  buildResultsPerPage,
  Pager,
  PagerState,
  ResultsPerPage,
  ResultsPerPageState,
} from '@coveo/headless';
import { headlessEngine } from './engine';

const FieldActions = loadFieldActions(headlessEngine);
headlessEngine.dispatch(
  FieldActions.registerFieldsToInclude(['ec_brand', 'ec_images'])
);

// Search
export const searchBox: SearchBox = buildSearchBox(headlessEngine);

// resultList
export const headlessResultList: ResultList = buildResultList(headlessEngine);

// facet
export const headlessFacet: Facet = buildFacet(headlessEngine, {
  options: {
    numberOfValues: 5,
    field: 'source',
  },
});

export const headlessResultsPerPage: ResultsPerPage = buildResultsPerPage(
  headlessEngine,
  { initialState: { numberOfResults: 20 } }
);
