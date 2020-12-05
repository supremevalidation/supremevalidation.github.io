import { LANGUAGE_CHANGE } from '../../actions-types'

const initialState = 'EN'

const alert = (state = initialState, action) => {
    switch (action.type) {

        case LANGUAGE_CHANGE:
            return action.language

        default:
            return state;
    }
}

export default alert