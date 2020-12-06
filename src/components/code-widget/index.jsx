import { useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl'

const CodeWidget = props => {
    const code = useRef(null);

    let [isCopied, setIsCopied] = useState(false);

    const copyTextClipboard = () => {
        if (!isCopied) {
            setIsCopied(true)
            navigator.clipboard.writeText(code.current.innerText)
            resetCopiedInfo()
        }
    }

    const resetCopiedInfo = () => {
        let resetInterval = setInterval(() => {
            setIsCopied(false)

            clearInterval(resetInterval)
        }, 3000);
    }

    return (
        <div className={`code-widget${isCopied ? ' copied' : ''}`} onClick={copyTextClipboard}>
            <div className="copy-message">
                <FormattedMessage id='copied.info' defaultMessage="Copied text to clipboard." />
            </div>
            <code ref={code}>{props.code}</code>
            <i className="icon-copy"></i>
        </div>
    )
}

export default CodeWidget;