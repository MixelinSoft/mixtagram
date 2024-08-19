import styles from './Icon.module.css';

const Icon = (props) => {
  const icon = props.icon;
  const fill = props.fill;

  const icons = {
    home: (
      <svg
        height='24'
        viewBox='0 0 24 24'
        width='24'
        stroke='black'
        strokeWidth='2px'
        fill={fill}
      >
        <path d='M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z'></path>
      </svg>
    ),
    search: (
      <svg
        fill='currentColor'
        height='24'
        role='img'
        viewBox='0 0 24 24'
        width='24'
      >
        <path
          d='M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
        ></path>
        <line
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          x1='16.511'
          x2='22'
          y1='16.511'
          y2='22'
        ></line>
      </svg>
    ),
    reels: (
      <svg fill='currentColor' height='24' viewBox='0 0 24 24' width='24'>
        <line
          fill='none'
          stroke='currentColor'
          strokeLinejoin='round'
          strokeWidth='2'
          x1='2.049'
          x2='21.95'
          y1='7.002'
          y2='7.002'
        ></line>
        <line
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          x1='13.504'
          x2='16.362'
          y1='2.001'
          y2='7.002'
        ></line>
        <line
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          x1='7.207'
          x2='10.002'
          y1='2.11'
          y2='7.002'
        ></line>
        <path
          d='M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
        ></path>
        <path
          d='M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z'
          fillRule='evenodd'
        ></path>
      </svg>
    ),
    direct: (
      <svg
        fill='currentColor'
        height='24'
        role='img'
        viewBox='0 0 24 24'
        width='24'
      >
        <title>Messenger</title>
        <path
          d='M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z'
          fill='none'
          stroke='currentColor'
          strokeMiterlimit='10'
          strokeWidth='1.739'
        ></path>
        <path
          d='M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z'
          fillRule='evenodd'
        ></path>
      </svg>
    ),
    write: (
      <svg
        fill='currentColor'
        height='24'
        role='img'
        viewBox='0 0 24 24'
        width='24'
      >
        <path
          d='M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
        ></path>
        <path
          d='M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
        ></path>
        <line
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          x1='16.848'
          x2='20.076'
          y1='3.924'
          y2='7.153'
        ></line>
      </svg>
    ),
    plus: (
      <svg fill='currentColor' height='24' viewBox='0 0 24 24' width='24'>
        <path
          d='M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
        ></path>
        <line
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          x1='6.545'
          x2='17.455'
          y1='12.001'
          y2='12.001'
        ></line>
        <line
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          x1='12.003'
          x2='12.003'
          y1='6.545'
          y2='17.455'
        ></line>
      </svg>
    ),
    heart: (
      <svg
        fill='currentColor'
        height='24'
        role='img'
        viewBox='0 0 24 24'
        width='24'
      >
        <path d='M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z'></path>
      </svg>
    ),
    info: (
      <svg fill='currentColor' height='24' viewBox='0 0 24 24' width='24'>
        <circle
          cx='12.001'
          cy='12.005'
          fill='none'
          r='10.5'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
        ></circle>
        <circle cx='11.819' cy='7.709' r='1.25'></circle>
        <line
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          x1='10.569'
          x2='13.432'
          y1='16.777'
          y2='16.777'
        ></line>
        <polyline
          fill='none'
          points='10.569 11.05 12 11.05 12 16.777'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
        ></polyline>
      </svg>
    ),
    dots: (
      <svg
        fill='currentColor'
        height='24'
        role='img'
        viewBox='0 0 24 24'
        width='24'
      >
        <circle cx='12' cy='12' r='1.5'></circle>
        <circle cx='6' cy='12' r='1.5'></circle>
        <circle cx='18' cy='12' r='1.5'></circle>
      </svg>
    ),
    comments: (
      <svg
        fill='currentColor'
        height='24'
        role='img'
        viewBox='0 0 24 24'
        width='24'
      >
        <path
          d='M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z'
          fill='none'
          stroke='currentColor'
          strokeLinejoin='round'
          strokeWidth='2'
        ></path>
      </svg>
    ),
    share: (
      <svg
        fill='currentColor'
        height='24'
        role='img'
        viewBox='0 0 24 24'
        width='24'
      >
        <line
          fill='none'
          stroke='currentColor'
          strokeLinejoin='round'
          strokeWidth='2'
          x1='22'
          x2='9.218'
          y1='3'
          y2='10.083'
        ></line>
        <polygon
          fill='none'
          points='11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334'
          stroke='currentColor'
          strokeLinejoin='round'
          strokeWidth='2'
        ></polygon>
      </svg>
    ),
    bookmark: (
      <svg viewBox='0 0 24 24' width='24'>
        <polygon
          fill='none'
          points='20 21 12 13.44 4 21 4 3 20 3 20 21'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
        ></polygon>
      </svg>
    ),
    muted: (
      <svg
        fill='currentColor'
        height='15'
        role='img'
        viewBox='0 0 24 24'
        width='15'
      >
        <path d='M15.209 18.294a1 1 0 0 0-.707-.293H6.184a2.002 2.002 0 0 1-1.74-2.993l.47-.822a8.34 8.34 0 0 0 1.093-4.174c0-.159.005-.316.017-.471a1 1 0 1 0-1.994-.15 8.093 8.093 0 0 0-.023.63 6.341 6.341 0 0 1-.83 3.175l-.47.822a4.001 4.001 0 0 0 3.477 5.983h1.944a4 4 0 0 0 7.827-.382 1 1 0 0 0-.282-.86Zm-3.207 2.708a2 2 0 0 1-1.732-1.001h3.463a2.017 2.017 0 0 1-1.731 1.001Zm11.205.291-2.521-2.521a4.04 4.04 0 0 0 .976-1.629 3.957 3.957 0 0 0-.356-3.123l-.484-.853A6.358 6.358 0 0 1 20 9.997a7.953 7.953 0 0 0-4.745-7.302 3.972 3.972 0 0 0-6.51.002 8.011 8.011 0 0 0-2.438 1.697L2.707.793a1 1 0 0 0-1.414 1.414l20.5 20.5a1 1 0 0 0 1.414-1.414Zm-3.46-4.728a2.042 2.042 0 0 1-.468.8L7.72 5.805a6.004 6.004 0 0 1 2.068-1.377.998.998 0 0 0 .494-.426 1.976 1.976 0 0 1 3.439 0 1 1 0 0 0 .494.425 5.989 5.989 0 0 1 3.786 5.634 8.303 8.303 0 0 0 1.082 4.094l.483.852a1.975 1.975 0 0 1 .181 1.558Z'></path>
      </svg>
    ),
    image: (
      <svg
        fill='currentColor'
        height='24'
        role='img'
        viewBox='0 0 24 24'
        width='24'
      >
        <path
          d='M6.549 5.013A1.557 1.557 0 1 0 8.106 6.57a1.557 1.557 0 0 0-1.557-1.557Z'
          fillRule='evenodd'
        ></path>
        <path
          d='m2 18.605 3.901-3.9a.908.908 0 0 1 1.284 0l2.807 2.806a.908.908 0 0 0 1.283 0l5.534-5.534a.908.908 0 0 1 1.283 0l3.905 3.905'
          fill='none'
          stroke='currentColor'
          strokeLinejoin='round'
          strokeWidth='2'
        ></path>
        <path
          d='M18.44 2.004A3.56 3.56 0 0 1 22 5.564h0v12.873a3.56 3.56 0 0 1-3.56 3.56H5.568a3.56 3.56 0 0 1-3.56-3.56V5.563a3.56 3.56 0 0 1 3.56-3.56Z'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
        ></path>
      </svg>
    ),
    gear: (
      <svg
        fill='currentColor'
        height='24'
        role='img'
        viewBox='0 0 24 24'
        width='24'
      >
        <circle
          cx='12'
          cy='12'
          fill='none'
          r='8.635'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
        ></circle>
        <path
          d='M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096'
          fill='none'
          stroke='currentColor'
          strokeLinejoin='round'
          strokeWidth='2'
        ></path>
      </svg>
    ),
    ampersand: (
      <svg fill='currentColor' height='24' viewBox='0 0 192 192' width='24'>
        <path d='M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z'></path>
      </svg>
    ),
    grid: (
      <svg
        fill='currentColor'
        height='24'
        role='img'
        viewBox='0 0 24 24'
        width='24'
      >
        <rect
          fill='none'
          height='18'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          width='18'
          x='3'
          y='3'
        ></rect>
        <line
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          x1='9.015'
          x2='9.015'
          y1='3'
          y2='21'
        ></line>
        <line
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          x1='14.985'
          x2='14.985'
          y1='3'
          y2='21'
        ></line>
        <line
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          x1='21'
          x2='3'
          y1='9.015'
          y2='9.015'
        ></line>
        <line
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          x1='21'
          x2='3'
          y1='14.985'
          y2='14.985'
        ></line>
      </svg>
    ),
    feed: (
      <svg
        fill='currentColor'
        height='24'
        role='img'
        viewBox='0 0 24 24'
        width='24'
      >
        <rect
          fill='none'
          height='10'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          width='12'
          x='6'
          y='7'
        ></rect>
        <line
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeMiterlimit='10'
          strokeWidth='2'
          x1='6.002'
          x2='18'
          y1='3.004'
          y2='3.004'
        ></line>
        <line
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeMiterlimit='10'
          strokeWidth='2'
          x1='6.002'
          x2='18'
          y1='21'
          y2='21'
        ></line>
      </svg>
    ),
    mark: (
      <svg
        fill='currentColor'
        height='24'
        role='img'
        viewBox='0 0 24 24'
        width='24'
      >
        <path
          d='M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
        ></path>
        <path
          d='M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
        ></path>
        <circle
          cx='12.072'
          cy='11.075'
          fill='none'
          r='3.556'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
        ></circle>
      </svg>
    ),
  };

  return icons[icon];
};

export default Icon;
