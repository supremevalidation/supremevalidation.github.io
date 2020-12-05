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
                <radialGradient
                    id="prefix__b"
                    cx={0.552}
                    cy={0.509}
                    r={0.62}
                    gradientTransform="matrix(.863 0 0 -.95 .076 -.457)"
                    gradientUnits="objectBoundingBox"
                >
                    <stop offset={0.72} stopOpacity={0} />
                    <stop offset={0.95} stopOpacity={0.529} />
                    <stop offset={1} />
                </radialGradient>
                <radialGradient
                    id="prefix__d"
                    cx={0.418}
                    cy={0.726}
                    r={0.69}
                    gradientTransform="matrix(.185 -.989 -.986 -.121 -1.622 -1.971)"
                    gradientUnits="objectBoundingBox"
                >
                    <stop offset={0.76} stopOpacity={0} />
                    <stop offset={0.95} stopOpacity={0.502} />
                    <stop offset={1} />
                </radialGradient>
                <radialGradient
                    id="prefix__e"
                    cx={0.101}
                    cy={0.278}
                    r={1.188}
                    gradientTransform="matrix(-.025 .999 1.417 .08 -4.264 2.626)"
                    gradientUnits="objectBoundingBox"
                >
                    <stop offset={0} stopColor="#35c1f1" />
                    <stop offset={0.11} stopColor="#34c1ed" />
                    <stop offset={0.23} stopColor="#2fc2df" />
                    <stop offset={0.31} stopColor="#2bc3d2" />
                    <stop offset={0.67} stopColor="#36c752" />
                </radialGradient>
                <radialGradient
                    id="prefix__f"
                    cx={0.938}
                    cy={0.454}
                    r={0.571}
                    gradientTransform="matrix(.187 .96 .52 -.228 -.535 2.661)"
                    gradientUnits="objectBoundingBox"
                >
                    <stop offset={0} stopColor="#66eb6e" />
                    <stop offset={1} stopColor="#66eb6e" stopOpacity={0} />
                </radialGradient>
                <linearGradient
                    id="prefix__a"
                    y1={-0.136}
                    x2={1}
                    y2={-0.136}
                    gradientUnits="objectBoundingBox"
                >
                    <stop offset={0} stopColor="#0c59a4" />
                    <stop offset={1} stopColor="#114a8b" />
                </linearGradient>
                <linearGradient
                    id="prefix__c"
                    x1={0.906}
                    y1={0.521}
                    x2={0.245}
                    y2={-0.063}
                    gradientUnits="objectBoundingBox"
                >
                    <stop offset={0} stopColor="#1b9de2" />
                    <stop offset={0.16} stopColor="#1595df" />
                    <stop offset={0.67} stopColor="#0680d7" />
                    <stop offset={1} stopColor="#0078d4" />
                </linearGradient>
            </defs>
            <path
                data-name="Path 42"
                d="M103.722 126.2a21.966 21.966 0 01-2.47 1.1 23.877 23.877 0 01-8.414 1.514c-11.09 0-20.75-7.627-20.75-17.415a7.377 7.377 0 013.851-6.4c-10.031.422-12.609 10.873-12.609 17 0 17.312 15.958 19.067 19.4 19.067a24.994 24.994 0 006.328-1.069l.307-.1a30.077 30.077 0 0015.608-12.373.937.937 0 00-1.247-1.322z"
                transform="translate(-49.569 -81.548)"
                fill="url(#prefix__a)"
            />
            <path
                data-name="Path 43"
                d="M103.722 126.2a21.966 21.966 0 01-2.47 1.1 23.877 23.877 0 01-8.414 1.514c-11.09 0-20.75-7.627-20.75-17.415a7.377 7.377 0 013.851-6.4c-10.031.422-12.609 10.873-12.609 17 0 17.312 15.958 19.067 19.4 19.067a24.994 24.994 0 006.328-1.069l.307-.1a30.077 30.077 0 0015.608-12.373.937.937 0 00-1.247-1.322z"
                transform="translate(-49.569 -81.548)"
                opacity={0.35}
                fill="url(#prefix__b)"
            />
            <path
                data-name="Path 44"
                d="M29.469 98.351a18.56 18.56 0 01-5.329-5 18.914 18.914 0 016.92-28.12 7.835 7.835 0 013.642-.937 7.582 7.582 0 016.021 3.046 7.47 7.47 0 011.491 4.373c0-.049 5.732-18.653-18.749-18.653-10.288 0-18.749 9.762-18.749 18.327a30.494 30.494 0 002.838 13.122A30 30 0 0044.2 100.235a17.708 17.708 0 01-14.71-1.875z"
                transform="translate(-4.69 -41.779)"
                fill="url(#prefix__c)"
            />
            <path
                data-name="Path 45"
                d="M29.469 98.351a18.56 18.56 0 01-5.329-5 18.914 18.914 0 016.92-28.12 7.835 7.835 0 013.642-.937 7.582 7.582 0 016.021 3.046 7.47 7.47 0 011.491 4.373c0-.049 5.732-18.653-18.749-18.653-10.288 0-18.749 9.762-18.749 18.327a30.494 30.494 0 002.838 13.122A30 30 0 0044.2 100.235a17.708 17.708 0 01-14.71-1.875z"
                transform="translate(-4.69 -41.779)"
                opacity={0.41}
                fill="url(#prefix__d)"
            />
            <path
                data-name="Path 46"
                d="M40.31 39.8c-.19.246-.773.586-.773 1.326a2.18 2.18 0 001.106 1.694c3.37 2.343 9.724 2.034 9.74 2.034a13.96 13.96 0 007.094-1.954 14.383 14.383 0 007.132-12.391 20.733 20.733 0 00-2.658-10.289c-4.966-9.713-15.686-15.3-27.343-15.3A30 30 0 004.61 34.5c.113-8.565 8.624-15.48 18.749-15.48a22.677 22.677 0 019.843 2.36 17.007 17.007 0 017.23 6.845 15.072 15.072 0 011.706 6.917A8.464 8.464 0 0140.31 39.8z"
                transform="translate(-4.61 -4.92)"
                fill="url(#prefix__e)"
            />
            <path
                data-name="Path 47"
                d="M40.31 39.8c-.19.246-.773.586-.773 1.326a2.18 2.18 0 001.106 1.694c3.37 2.343 9.724 2.034 9.74 2.034a13.96 13.96 0 007.094-1.954 14.383 14.383 0 007.132-12.391 20.733 20.733 0 00-2.658-10.289c-4.966-9.713-15.686-15.3-27.343-15.3A30 30 0 004.61 34.5c.113-8.565 8.624-15.48 18.749-15.48a22.677 22.677 0 019.843 2.36 17.007 17.007 0 017.23 6.845 15.072 15.072 0 011.706 6.917A8.464 8.464 0 0140.31 39.8z"
                transform="translate(-4.61 -4.92)"
                fill="url(#prefix__f)"
            />
        </svg>
    )
}

export default SvgComponent
