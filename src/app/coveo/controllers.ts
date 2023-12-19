import { SearchBox, SearchBoxOptions, buildSearchBox } from '@coveo/headless';
import { headlessEngine } from './engine';

// Search
export const searchBox: SearchBox = buildSearchBox(headlessEngine);
