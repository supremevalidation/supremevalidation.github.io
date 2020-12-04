import { LANGUAGE_CHANGE } from '../../actions-types';
import { store } from '../..'

export const changeLanguage = language => {
    store.dispatch({ type: LANGUAGE_CHANGE, language: language })
}