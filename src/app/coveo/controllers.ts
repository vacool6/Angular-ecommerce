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

let field = '';

export const setFieldValue = (fieldValue: any) => {
  field = fieldValue;
};

export const createheadlessFacetController = (fieldValue: any) => {
  return buildFacet(headlessEngine, {
    options: {
      numberOfValues: 5,
      field: fieldValue,
    },
  });
};

// facet
export const headlessFacet: Facet = createheadlessFacetController(field);

export const headlessResultsPerPage: ResultsPerPage = buildResultsPerPage(
  headlessEngine,
  { initialState: { numberOfResults: 20 } }
);
