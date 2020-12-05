import { TRFlag, USAFlag } from '../../svg'
import { useSelector, useDispatch } from 'react-redux'
import { LANGUAGE_CHANGE } from '../../../redux/actions-types'

const Language = () => {
    const language = useSelector(state => state.language)
    const dispatch = useDispatch();

    const onLanguageClick = () => {
        dispatch({ type: LANGUAGE_CHANGE, language: language === 'EN' ? 'TR' : 'EN' })
    }

    return (
        <div className="language-button" onClick={onLanguageClick}>
            {
                language === 'EN' ? <TRFlag /> : <USAFlag />
            }
        </div>
    )
}

export default Language;