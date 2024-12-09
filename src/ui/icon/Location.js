import React from 'react'

const Location = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <style>
        {`
          @keyframes svg-gravitation-animate {
            0% {
              transform: translateY(0); /* Початок */
            }
            25% {
              transform: translateY(-4px); /* Падіння вниз */
            }
            50% {
              transform: translateY(0); /* Падіння вниз */
            }
            75% {
              transform: translateY(-2px); /* Відскок */
            }
            100% {
              transform: translateY(0); /* Знову вниз */
            }
          }

          .svg-gravitation {
            animation: svg-gravitation-animate 6s ease-in-out infinite;
          }
        `}
      </style>

      <g>
        <circle
          fill="#B2B1CF"
          stroke="#000000"
          strokeMiterlimit="10"
          cx="32"
          cy="52"
          r="2.5"
        />
        <g>
          <path
            fill="#9090BA"
            d="M32,50c-0.2,0-0.3,0-0.5,0.1c0.9,0.2,1.5,1,1.5,1.9s-0.6,1.7-1.5,1.9c0.2,0,0.3,0.1,0.5,0.1c1.1,0,2-0.9,2-2 S33.1,50,32,50z"
          />
        </g>

        <g className="svg-gravitation">
          <path
            fill="#EF1D1D"
            stroke="#000000"
            strokeMiterlimit="10"
            d="M32,46.7c-1.2,0-2.1-0.6-2.5-1.6c-3.3-6.8-8.8-18.9-8.8-23.3c0-6.3,5.1-11.3,11.3-11.3 c6.3,0,11.3,5.1,11.3,11.3c0,4.4-5.5,16.5-8.8,23.3C34.1,46.1,33.1,46.7,32,46.7z M32,17c-2.7,0-4.9,2.2-4.9,4.9s2.2,4.9,4.9,4.9 s5-2.2,5-4.9S34.7,17,32,17z"
          />
          <g>
            <path
              fill="#D11313"
              d="M32,11c-0.2,0-0.4,0-0.6,0c5.7,0.3,10.3,5.1,10.3,10.8c0,4.3-5.7,16.6-8.8,23.1c-0.3,0.7-0.9,1.1-1.5,1.2 c0.2,0,0.4,0.1,0.6,0.1c0.8,0,1.7-0.4,2.1-1.3c3.1-6.5,8.8-18.8,8.8-23.1C42.8,15.9,38,11,32,11z"
            />
          </g>
          <path
            opacity="0.5"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="M25.1,29.6c-1.4-3.7-2.1-6.4-2.1-7.7c0-2.2,0.9-4.4,2.2-6"
          />
          <path
            opacity="0.5"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="M27.2,34.5c-0.3-0.7-0.6-1.4-0.8-2"
          />
        </g>
      </g>
    </svg>
  )
}

Location.displayName = 'Location'

export default Location
