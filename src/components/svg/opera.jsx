import * as React from "react"

function SvgComponent(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={60}
            height={60}
            viewBox="0 0 60 60"
            {...props}
        >
            <defs>
                <linearGradient
                    id="prefix__a"
                    x1={0.5}
                    y1={0.011}
                    x2={0.5}
                    y2={1.004}
                    gradientUnits="objectBoundingBox"
                >
                    <stop offset={0.46} stopColor="#e52d37" />
                    <stop offset={1} stopColor="#981917" />
                </linearGradient>
                <linearGradient
                    id="prefix__b"
                    x1={0.5}
                    y1={1}
                    x2={0.5}
                    gradientUnits="objectBoundingBox"
                >
                    <stop offset={0} stopColor="#e94d50" />
                    <stop offset={1} stopColor="#941914" />
                </linearGradient>
            </defs>
            <g data-name="Group 41">
                <path
                    data-name="Path 74"
                    d="M70.754 36.208A30 30 0 1082.56 60.06a29.851 29.851 0 00-11.806-23.852zm-27.6 40.217a27.138 27.138 0 01-.845-31.564.213.213 0 01.018-.025C45.042 41.221 48.709 39 52.75 39c8.341 0 15.1 9.455 15.1 21.116s-6.762 21.116-15.1 21.116a12.757 12.757 0 01-9.574-4.787.071.071 0 01-.018-.021z"
                    transform="translate(-22.56 -30.06)"
                    fill="url(#prefix__a)"
                />
                <path
                    data-name="Path 75"
                    d="M229.643 91.859a29.946 29.946 0 01-11.806 23.852 22.628 22.628 0 01-9.029 1.873 23.445 23.445 0 01-18.55-9.338 12.757 12.757 0 009.574 4.787c8.341 0 15.1-9.455 15.1-21.116S208.174 70.8 199.834 70.8c-4.041 0-7.709 2.218-10.42 5.833a23.561 23.561 0 0119.395-10.5 22.63 22.63 0 019.029 1.873 29.946 29.946 0 0111.805 23.853z"
                    transform="translate(-169.643 -61.86)"
                    fill="url(#prefix__b)"
                />
            </g>
        </svg>
    )
}

export default SvgComponent
