import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        transform="translate(2 2)"
        d="M 11.832 14.568 C 12.257 14.763 12.761 14.637 13.045 14.265 L 13.4 13.8 C 13.778 13.296 14.37 13 15 13 L 18 13 C 19.105 13 20 13.895 20 15 L 20 18 C 20 19.105 19.105 20 18 20 C 8.059 20 0 11.941 0 2 C 0 0.895 0.895 0 2 0 L 5 0 C 6.105 0 7 0.895 7 2 L 7 5 C 7 5.63 6.704 6.222 6.2 6.6 L 5.732 6.951 C 5.353 7.24 5.231 7.756 5.44 8.184 C 6.807 10.96 9.054 13.205 11.832 14.568"
      />
    </svg>
  )
}

export function IconArrowUpRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path transform="translate(7 7)" d="M 0 0 L 10 0 L 10 10" />
      <path transform="translate(7 7)" d="M 0 10 L 10 0" />
    </svg>
  )
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path transform="translate(4 5)" d="M 0 0 L 16 0" />
      <path transform="translate(4 12)" d="M 0 0 L 16 0" />
      <path transform="translate(4 19)" d="M 0 0 L 16 0" />
    </svg>
  )
}

export function IconGear(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        transform="translate(1.989 2.005)"
        d="M 1.861 6.615 C 1.564 5.279 1.972 3.884 2.94 2.917 C 3.909 1.95 5.305 1.546 6.641 1.845 C 7.376 0.696 8.646 0 10.011 0 C 11.375 0 12.646 0.696 13.381 1.845 C 14.719 1.544 16.117 1.95 17.087 2.919 C 18.056 3.889 18.462 5.287 18.161 6.625 C 19.311 7.36 20.006 8.631 20.006 9.995 C 20.006 11.36 19.311 12.63 18.161 13.365 C 18.46 14.701 18.056 16.097 17.089 17.066 C 16.122 18.035 14.727 18.442 13.391 18.145 C 12.657 19.299 11.384 19.998 10.016 19.998 C 8.648 19.998 7.375 19.299 6.641 18.145 C 5.305 18.445 3.909 18.04 2.94 17.073 C 1.972 16.107 1.564 14.711 1.861 13.375 C 0.702 12.642 0 11.366 0 9.995 C 0 8.624 0.702 7.348 1.861 6.615 Z"
      />
      <path transform="translate(12 12)" d="M 0 4 L 0 0" />
      <path transform="translate(12 8)" d="M 0 0 L 0.01 0" />
    </svg>
  )
}

export function IconPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        transform="translate(4 2)"
        d="M 16 8 C 16 12.993 10.461 18.193 8.601 19.799 C 8.245 20.067 7.755 20.067 7.399 19.799 C 5.539 18.193 0 12.993 0 8 C 0 3.582 3.582 0 8 0 C 12.418 0 16 3.582 16 8"
      />
      <path
        transform="translate(9 7)"
        d="M 0 3 C 0 1.343 1.343 0 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 Z"
      />
    </svg>
  )
}

export function IconMessage(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path transform="translate(14 8)" d="M 0 6 C 1.105 6 2 5.105 2 4 L 2 0 L 0 0" />
      <path
        transform="translate(2 3)"
        d="M 20 14 C 20 15.105 19.105 16 18 16 L 4.828 16 C 4.298 16 3.789 16.211 3.414 16.586 L 1.212 18.788 C 1.009 18.991 0.704 19.052 0.438 18.942 C 0.173 18.832 0 18.573 0 18.286 L 0 2 C 0 0.895 0.895 0 2 0 L 18 0 C 19.105 0 20 0.895 20 2 Z"
      />
      <path transform="translate(8 8)" d="M 0 6 C 1.105 6 2 5.105 2 4 L 2 0 L 0 0" />
    </svg>
  )
}

export function IconInstagram(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        transform="translate(2 2)"
        d="M 5 20 C 2.239 20 0 17.761 0 15 L 0 5 C 0 2.239 2.239 0 5 0 L 15 0 C 17.761 0 20 2.239 20 5 L 20 15 C 20 17.761 17.761 20 15 20 Z"
      />
      <path
        transform="translate(8.043 7.957)"
        d="M 7.957 3.413 C 8.21 5.12 7.34 6.797 5.798 7.573 C 4.257 8.349 2.392 8.049 1.172 6.829 C -0.049 5.608 -0.349 3.743 0.427 2.202 C 1.203 0.66 2.88 -0.21 4.587 0.043 C 6.33 0.302 7.698 1.67 7.957 3.413 Z"
      />
      <path transform="translate(17.5 6.5)" d="M 0 0 L 0.01 0" />
    </svg>
  )
}

export function IconClock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path transform="translate(12 6)" d="M 0 0 L 0 6 L 4 8" />
      <path
        transform="translate(2 2)"
        d="M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z"
      />
    </svg>
  )
}

export function IconCare(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        transform="translate(2 4)"
        d="M 17.414 10.414 C 19 8.828 20 7.5 20 5.5 C 20 3.222 18.596 1.18 16.468 0.365 C 14.341 -0.451 11.932 0.13 10.409 1.824 C 10.179 2.039 9.822 2.04 9.591 1.825 C 8.069 0.131 5.659 -0.45 3.532 0.365 C 1.405 1.18 0 3.222 0 5.5 C 0 7.8 1.5 9.5 3 11 L 8.535 16.362 C 8.905 16.76 9.42 16.99 9.963 17 C 10.506 17.01 11.03 16.798 11.414 16.414 C 11.812 16.016 12.035 15.476 12.034 14.913 C 12.033 14.351 11.809 13.811 11.41 13.414 C 11.936 13.996 12.74 14.24 13.501 14.05 C 14.262 13.86 14.856 13.266 15.046 12.505 C 15.236 11.744 14.992 10.94 14.41 10.414 C 14.808 10.813 15.349 11.036 15.912 11.036 C 16.475 11.036 17.016 10.813 17.414 10.414 C 18.195 9.633 18.195 8.367 17.414 7.586 L 15.533 5.704 C 15.081 5.252 14.468 4.998 13.829 4.998 C 13.189 4.998 12.576 5.252 12.124 5.704 L 10.414 7.414 C 9.633 8.195 8.367 8.195 7.586 7.414 C 6.805 6.633 6.805 5.367 7.586 4.586 L 10.409 1.824"
      />
    </svg>
  )
}

export function IconScanFrame(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path transform="translate(3 3)" d="M 0 4 L 0 2 C 0 0.895 0.895 0 2 0 L 4 0" />
      <path transform="translate(17 3)" d="M 0 0 L 2 0 C 3.105 0 4 0.895 4 2 L 4 4" />
      <path transform="translate(17 17)" d="M 4 0 L 4 2 C 4 3.105 3.105 4 2 4 L 0 4" />
      <path transform="translate(3 17)" d="M 4 4 L 2 4 C 0.895 4 0 3.105 0 2 L 0 0" />
      <path transform="translate(7 12)" d="M 0 0 L 10 0" />
    </svg>
  )
}

export function IconCheckCircle(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        transform="translate(2 2)"
        d="M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z"
      />
      <path transform="translate(9 10)" d="M 0 2 L 2 4 L 6 0" />
    </svg>
  )
}

export function IconBolt(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        transform="translate(2.997 1.997)"
        d="M 1.003 12.003 C 0.617 12.004 0.265 11.783 0.098 11.434 C -0.069 11.086 -0.02 10.673 0.223 10.373 L 10.123 0.173 C 10.276 -0.004 10.531 -0.051 10.737 0.059 C 10.943 0.169 11.045 0.407 10.983 0.633 L 9.063 6.653 C 8.948 6.96 8.992 7.305 9.18 7.574 C 9.367 7.844 9.675 8.004 10.003 8.003 L 17.003 8.003 C 17.39 8.001 17.742 8.223 17.909 8.571 C 18.076 8.919 18.027 9.333 17.783 9.633 L 7.883 19.833 C 7.73 20.009 7.476 20.056 7.27 19.946 C 7.064 19.836 6.961 19.598 7.023 19.373 L 8.943 13.353 C 9.058 13.045 9.015 12.701 8.827 12.431 C 8.64 12.162 8.332 12.002 8.003 12.003 Z"
      />
    </svg>
  )
}

export function IconWaves(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        transform="translate(2 5)"
        d="M 0 1 C 0.6 1.5 1.2 2 2.5 2 C 5 2 5 0 7.5 0 C 10.1 0 9.9 2 12.5 2 C 15 2 15 0 17.5 0 C 18.8 0 19.4 0.5 20 1"
      />
      <path
        transform="translate(2 11)"
        d="M 0 1 C 0.6 1.5 1.2 2 2.5 2 C 5 2 5 0 7.5 0 C 10.1 0 9.9 2 12.5 2 C 15 2 15 0 17.5 0 C 18.8 0 19.4 0.5 20 1"
      />
      <path
        transform="translate(2 17)"
        d="M 0 1 C 0.6 1.5 1.2 2 2.5 2 C 5 2 5 0 7.5 0 C 10.1 0 9.9 2 12.5 2 C 15 2 15 0 17.5 0 C 18.8 0 19.4 0.5 20 1"
      />
    </svg>
  )
}

export function IconSparkleWand(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        transform="translate(2.001 2.001)"
        d="M 19.639 1.639 L 18.359 0.359 C 18.132 0.129 17.822 0 17.499 0 C 17.176 0 16.866 0.129 16.639 0.359 L 0.359 16.639 C 0.129 16.866 0 17.176 0 17.499 C 0 17.822 0.129 18.132 0.359 18.359 L 1.639 19.639 C 1.865 19.871 2.175 20.002 2.499 20.002 C 2.823 20.002 3.133 19.871 3.359 19.639 L 19.639 3.359 C 19.871 3.133 20.002 2.823 20.002 2.499 C 20.002 2.175 19.871 1.865 19.639 1.639"
      />
      <path transform="translate(14 7)" d="M 0 0 L 3 3" />
      <path transform="translate(5 6)" d="M 0 0 L 0 4" />
      <path transform="translate(19 14)" d="M 0 0 L 0 4" />
      <path transform="translate(10 2)" d="M 0 0 L 0 2" />
      <path transform="translate(3 8)" d="M 4 0 L 0 0" />
      <path transform="translate(17 16)" d="M 4 0 L 0 0" />
      <path transform="translate(9 3)" d="M 2 0 L 0 0" />
    </svg>
  )
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path transform="translate(5 12)" d="M 0 0 L 14 0" />
      <path transform="translate(12 5)" d="M 0 0 L 7 7 L 0 14" />
    </svg>
  )
}

export function IconStar(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        transform="translate(1.998 2)"
        d="M 9.527 0.295 C 9.616 0.114 9.8 0 10.002 0 C 10.203 0 10.387 0.114 10.477 0.295 L 12.787 4.974 C 13.096 5.599 13.692 6.033 14.382 6.134 L 19.548 6.89 C 19.747 6.919 19.913 7.059 19.976 7.251 C 20.038 7.442 19.986 7.653 19.842 7.794 L 16.106 11.432 C 15.606 11.919 15.377 12.622 15.495 13.31 L 16.377 18.45 C 16.412 18.65 16.33 18.852 16.166 18.971 C 16.002 19.09 15.785 19.105 15.606 19.01 L 10.988 16.582 C 10.37 16.258 9.632 16.258 9.015 16.582 L 4.398 19.01 C 4.219 19.105 4.002 19.089 3.838 18.97 C 3.674 18.851 3.593 18.649 3.628 18.45 L 4.509 13.311 C 4.627 12.622 4.398 11.919 3.898 11.432 L 0.162 7.795 C 0.016 7.654 -0.037 7.443 0.026 7.25 C 0.088 7.057 0.255 6.917 0.456 6.889 L 5.621 6.134 C 6.312 6.033 6.909 5.6 7.218 4.974 Z"
      />
    </svg>
  )
}

export function IconPlus(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path transform="translate(5 12)" d="M 0 0 L 14 0" />
      <path transform="translate(12 5)" d="M 0 0 L 0 14" />
    </svg>
  )
}

export function IconTooth(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path transform="translate(11 2)" d="M 0 0 L 0 2" />
      <path transform="translate(5 2)" d="M 0 0 L 0 2" />
      <path
        transform="translate(2 3)"
        d="M 3 0 L 2 0 C 0.895 0 0 0.895 0 2 L 0 6 C 0 9.314 2.686 12 6 12 C 9.314 12 12 9.314 12 6 L 12 2 C 12 0.895 11.105 0 10 0 L 9 0"
      />
      <path transform="translate(8 12)" d="M 0 3 C 0 6.314 2.686 9 6 9 C 9.314 9 12 6.314 12 3 L 12 0" />
      <path
        transform="translate(18 8)"
        d="M 0 2 C 0 0.895 0.895 0 2 0 C 3.105 0 4 0.895 4 2 C 4 3.105 3.105 4 2 4 C 0.895 4 0 3.105 0 2 Z"
      />
    </svg>
  )
}

export function IconLeaf(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        transform="translate(3.978 2)"
        d="M 7.022 18 C 3.381 18.011 0.339 15.229 0.026 11.602 C -0.287 7.975 2.233 4.713 5.822 4.1 C 11.522 3 13.022 2.48 15.022 0 C 16.022 2 17.022 4.18 17.022 8 C 17.022 13.5 12.242 18 7.022 18 Z"
      />
      <path transform="translate(2 12)" d="M 0 9 C 0 6 1.85 3.64 5.08 3 C 7.5 2.52 10 1 11 0" />
    </svg>
  )
}

export function IconOrbit(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        transform="translate(2.998 3.013)"
        d="M 17.987 9.473 C 17.726 14.31 13.682 18.073 8.839 17.986 C 3.995 17.899 0.089 13.994 0.001 9.15 C -0.086 4.306 3.676 0.262 8.514 0.001 C 8.919 -0.021 9.131 0.461 8.916 0.804 C 7.435 3.173 7.786 6.251 9.761 8.226 C 11.737 10.202 14.815 10.553 17.184 9.072 C 17.528 8.857 18.009 9.068 17.987 9.473"
      />
    </svg>
  )
}

export function IconShieldCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        transform="translate(4 2.003)"
        d="M 16 10.997 C 16 15.997 12.5 18.497 8.34 19.947 C 8.122 20.021 7.886 20.017 7.67 19.937 C 3.5 18.497 0 15.997 0 10.997 L 0 3.997 C 0 3.445 0.448 2.997 1 2.997 C 3 2.997 5.5 1.797 7.24 0.277 C 7.678 -0.097 8.322 -0.097 8.76 0.277 C 10.51 1.807 13 2.997 15 2.997 C 15.552 2.997 16 3.445 16 3.997 Z"
      />
      <path transform="translate(9 10)" d="M 0 2 L 2 4 L 6 0" />
    </svg>
  )
}

export function IconCrown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        transform="translate(7.002 12.89)"
        d="M 8.475 0 L 9.99 8.526 C 10.025 8.732 9.928 8.937 9.748 9.042 C 9.567 9.146 9.341 9.128 9.18 8.996 L 5.6 6.309 C 5.245 6.044 4.758 6.044 4.403 6.309 L 0.817 8.995 C 0.656 9.127 0.43 9.145 0.249 9.041 C 0.069 8.937 -0.027 8.731 0.007 8.526 L 1.521 0"
      />
      <path
        transform="translate(6 2)"
        d="M 0 6 C 0 2.686 2.686 0 6 0 C 9.314 0 12 2.686 12 6 C 12 9.314 9.314 12 6 12 C 2.686 12 0 9.314 0 6 Z"
      />
    </svg>
  )
}

export function IconSparkle(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        transform="translate(1.998 1.998)"
        d="M 9.019 0.816 C 9.108 0.343 9.521 0 10.002 0 C 10.484 0 10.897 0.343 10.985 0.816 L 12.036 6.374 C 12.189 7.183 12.822 7.816 13.63 7.968 L 19.188 9.019 C 19.662 9.108 20.005 9.521 20.005 10.002 C 20.005 10.484 19.662 10.897 19.188 10.985 L 13.63 12.036 C 12.822 12.189 12.189 12.822 12.036 13.63 L 10.985 19.188 C 10.897 19.662 10.484 20.005 10.002 20.005 C 9.521 20.005 9.108 19.662 9.019 19.188 L 7.968 13.63 C 7.816 12.822 7.183 12.189 6.374 12.036 L 0.816 10.985 C 0.343 10.897 0 10.484 0 10.002 C 0 9.521 0.343 9.108 0.816 9.019 L 6.374 7.968 C 7.183 7.816 7.816 7.183 7.968 6.374 Z"
      />
    </svg>
  )
}

export function IconPerson(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        transform="translate(5 15)"
        d="M 14 6 L 14 4 C 14 1.791 12.209 0 10 0 L 4 0 C 1.791 0 0 1.791 0 4 L 0 6"
      />
      <path
        transform="translate(8 3)"
        d="M 0 4 C 0 1.791 1.791 0 4 0 C 6.209 0 8 1.791 8 4 C 8 6.209 6.209 8 4 8 C 1.791 8 0 6.209 0 4 Z"
      />
    </svg>
  )
}

export function IconHeartPulse(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        transform="translate(2 3.984)"
        d="M 0 5.516 C 0 3.238 1.404 1.196 3.532 0.381 C 5.659 -0.435 8.068 0.146 9.591 1.84 C 9.697 1.954 9.845 2.018 10 2.018 C 10.155 2.018 10.303 1.954 10.409 1.84 C 11.927 0.135 14.343 -0.453 16.475 0.364 C 18.607 1.181 20.011 3.233 20 5.516 C 20 7.806 18.5 9.516 17 11.016 L 11.508 16.329 C 11.131 16.762 10.586 17.012 10.012 17.016 C 9.438 17.02 8.89 16.776 8.508 16.348 L 3 11.016 C 1.5 9.516 0 7.816 0 5.516"
      />
      <path
        transform="translate(3.22 9.5)"
        d="M 0 3.5 L 6.28 3.5 L 6.78 2.5 L 8.78 7 L 10.78 0 L 12.28 3.5 L 17.55 3.5"
      />
    </svg>
  )
}
