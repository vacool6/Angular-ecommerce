import {
  SearchBox,
  buildSearchBox,
  buildResultList,
  ResultList,
  buildFacet,
  loadFieldActions,
  buildResultsPerPage,
  ResultsPerPage,
  Pager,
  buildPager,
} from '@coveo/headless';
import { headlessEngine } from './engine';

//fields to include
const FieldActions = loadFieldActions(headlessEngine);
headlessEngine.dispatch(
  FieldActions.registerFieldsToInclude([
    'ec_brand',
    'ec_images',
    'cat_available_sizes',
    'ec_category',
    'cat_color_swatch',
    'cat_colors_info',
    'ec_price_whsl_dict',
    'ec_product_id',
  ])
);
// search
export const searchBox: SearchBox = buildSearchBox(headlessEngine);

// resultList
export const headlessResultList: ResultList = buildResultList(headlessEngine);

// facets
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

// pager
export const headlessResultsPerPage: ResultsPerPage = buildResultsPerPage(
  headlessEngine,
  { initialState: { numberOfResults: 10 } }
);

export const headlessPager: Pager = buildPager(headlessEngine);
