import { useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl'

const CodeWidget = props => {
    const codeElement = useRef(null);

    let [isCopied, setIsCopied] = useState(false);

    const copyTextClipboard = () => {
        if (!isCopied) {
            setIsCopied(true)
            navigator.clipboard.writeText(codeElement.current.innerText)
            resetCopiedInfo()
        }
    }

    const resetCopiedInfo = () => {
        let resetInterval = setInterval(() => {
            setIsCopied(false)

            clearInterval(resetInterval)
        }, 3000);
    }

    return props.children ? (
        <div className={`code-widget${props.isLarge ? ' large' : ''}${props.children ? ' children' : ''}`}>
            {props.children}
        </div>
    ) : (
            <div className={`code-widget${isCopied ? ' copied' : ''}${props.isLarge ? ' large' : ''}`} onClick={copyTextClipboard}>
                <div className="copy-message">
                    <FormattedMessage id='copied.info' defaultMessage="Copied text to clipboard." />
                </div>
                <code ref={codeElement}>{props.code}</code>
                <i className="icon-copy"></i>
            </div>
        )
}

export default CodeWidget;