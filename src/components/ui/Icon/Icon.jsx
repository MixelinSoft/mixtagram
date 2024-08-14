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
  };

  return icons[icon];
};

export default Icon;
