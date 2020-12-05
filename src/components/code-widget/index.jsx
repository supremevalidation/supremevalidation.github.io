import { useRef } from 'react';

const CodeWidget = props => {

    const code = useRef(null);

    const copyTextClipboard = () => navigator.clipboard.writeText(code.current.innerText)

    return (
        <div className="code-widget" onClick={copyTextClipboard}>
            <code ref={code}>{props.code}</code>
            <i className="icon-copy"></i>
        </div>
    )
}

export default CodeWidget;