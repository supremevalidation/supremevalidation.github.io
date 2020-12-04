import { LANGUAGE_CHANGE } from '../../actions-types'

const initialState = {
    current: 'EN'
}

const alert = (state = initialState, action) => {
    switch (action.type) {

        case LANGUAGE_CHANGE:
            return {
                ...state,
                current: action.language
            }

        default:
            return state;
    }
}

export default alert