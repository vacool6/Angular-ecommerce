import { headlessEngine } from './engine';
import { loadGenericAnalyticsActions } from '@coveo/headless';
import { SEARCH_HUB } from '../env';

// Middleware
export const analyticsClientMiddleware = (eventName: any, payload: any) => {
  if (payload.visitorId == '') {
    payload.customData['loggedIn'] = false;
    payload.customData['context_role'] = 'Anonymous';
  } else {
    payload.customData['loggedIn'] = true;
    payload.customData['context_role'] = 'Visitor';
  }
  return payload;
};

// Custom event function
export const customEventAnalytics = (
  eventValue: string,
  eventType: string,
  data: any
) => {
  const { logCustomEvent, logClickEvent, logSearchEvent } =
    loadGenericAnalyticsActions(headlessEngine);

  const payload = {
    evt: eventValue,
    type: eventType,
    meta: {
      Searchhub: SEARCH_HUB,
      pa: data.pa,
      pr1ca: data.category,
      pr1id: data.id,
      pr1qt: data.quantity,
    },
  };

  headlessEngine.dispatch(logCustomEvent(payload));
};
