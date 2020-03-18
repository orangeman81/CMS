import { Action } from '../core/action';
import { SharedState } from './sharedState';
import { SharedActions } from './sharedActions';

export function sharedReducer(action: Action, state: SharedState): SharedState {
    switch (action.type) {
        case SharedActions.selectSite: {
            const newState: SharedState = {
                ...state,
                siteId: action.payload
            };
            console.log("%cshared store site selected", "background: green; color: white; padding: 4px", newState);
            return newState;
        }
        default: {
            return state
        }
    }
}