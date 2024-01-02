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
  FieldActions.registerFieldsToInclude([
    'ec_brand',
    'ec_images',
    'cat_available_sizes',
    'ec_category',
  ])
);

// Search
export const searchBox: SearchBox = buildSearchBox(headlessEngine);

// resultList
export const headlessResultList: ResultList = buildResultList(headlessEngine);

let field = '';
//
export const setFieldValue = (fieldValue: any) => {
  field = fieldValue;
};

// facet
export const sourceFacetController = buildFacet(headlessEngine, {
  options: {
    numberOfValues: 5,
    field: 'source',
  },
});
export const brandFacetController = buildFacet(headlessEngine, {
  options: {
    numberOfValues: 5,
    field: 'ec_brand',
  },
});
export const categoryFacetController = buildFacet(headlessEngine, {
  options: {
    numberOfValues: 5,
    field: 'ec_category',
  },
});
export const sizesFacetController = buildFacet(headlessEngine, {
  options: {
    numberOfValues: 5,
    field: 'cat_available_sizes',
  },
});

export const headlessResultsPerPage: ResultsPerPage = buildResultsPerPage(
  headlessEngine,
  { initialState: { numberOfResults: 100 } }
);

// for pager
// export const headlessResultsPerPage:
