type OutlinedTextProps = {
  text: string | number
  secondColor?: string
  firstColor?: string
  className?: string
}

export default function OutlinedText({
  text,
  firstColor = 'white',
  secondColor = 'white',
  className,
}: OutlinedTextProps) {
  return (
    <svg
      width="185"
      height="160"
      viewBox="0 0 120 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...{ className }}
    >
      <defs>
        <linearGradient
          id="linearGradient"
          x1="25.508"
          y1="-20.936"
          x2="25.008"
          y2="92.064"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.3} stopColor={firstColor} />
          <stop offset={1} stopColor={secondColor} stopOpacity={0.2} />
        </linearGradient>
      </defs>
      <g>
        <text
          id="text"
          y="100"
          fontSize="90"
          fontWeight="400"
          strokeWidth="2"
          fontFamily="arial"
          stroke="url(#linearGradient)"
        >
          {text}
        </text>
      </g>
    </svg>
  )
}
