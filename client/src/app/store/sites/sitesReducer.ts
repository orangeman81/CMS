import { SitesState } from './sitesState';
import { Action } from '../core/action';
import { SitesActions } from './sitesActions.enum';

export function sitesReducer(action: Action, state: SitesState): SitesState {
    switch (action.type) {
        case SitesActions.loadStore: {
            const newState = {
                ...state,
                data: action.payload,
                loaded: true
            };
            console.log("%cstore loaded", "background: green; color: white; padding: 4px", newState);
            return newState;
        }
        case SitesActions.add: {
            const newState = {
                ...state,
                data: [action.payload, ...state.data]
            };
            console.log("%citem added", "background: yellow; color: black; padding: 4px", newState);
            return newState
        }
        case SitesActions.update: {
            const updatedData = state.data
                .map(item =>
                    item._id === action.payload.id ? action.payload.item : item
                );
            const newState = {
                ...state,
                data: updatedData
            }
            console.log("%citem updated", "background: yellow; color: black; padding: 4px", newState);
            return newState
        }
        case SitesActions.delete: {
            console.log("%citem deleted", "background: red; color: black; padding: 4px");
            return state
        }
        default: {
            return state
        }
    }
}