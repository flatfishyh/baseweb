/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
/*global module */
import React from 'react';
import {styled} from './styles';

import {storiesOf} from '@storybook/react';

const Root = styled('div', ({$theme}) => ({
  padding: $theme.sizing.scale800,
  width: '600px',
  maxWidth: '500px',
}));

const P = styled('p', ({$theme}) => ({
  ...$theme.typography.font400,
}));

const Anchor = styled('a', ({$theme}) => ({
  color: $theme.colors.primary,
}));

storiesOf('Introduction', module).add('Welcome', () => (
  <Root>
    <svg
      width="142"
      height="40"
      viewBox="0 0 404 117"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M135.868 23.4406H158.833C161.405 23.4406 163.797 23.8887 166.01 24.7849C168.283 25.6214 170.226 26.7866 171.841 28.2803C173.516 29.7144 174.801 31.4471 175.699 33.4786C176.655 35.4504 177.134 37.5716 177.134 39.8421C177.134 42.5308 176.416 45.0105 174.981 47.281C173.605 49.4918 171.751 51.2843 169.419 52.6586C173.007 53.8536 175.878 55.8851 178.031 58.7531C180.244 61.5614 181.35 64.7879 181.35 68.4327C181.35 70.8825 180.872 73.1829 179.915 75.3339C178.958 77.4849 177.612 79.367 175.878 80.9803C174.203 82.5936 172.2 83.8782 169.867 84.8342C167.595 85.7305 165.113 86.1786 162.422 86.1786H135.868V23.4406ZM145.287 31.4173V49.7905H158.116C159.491 49.7905 160.747 49.5515 161.883 49.0735C163.079 48.5955 164.096 47.9383 164.933 47.1018C165.771 46.2653 166.429 45.3092 166.907 44.2337C167.385 43.0985 167.625 41.9035 167.625 40.6487C167.625 38.0197 166.728 35.8388 164.933 34.106C163.199 32.3135 160.926 31.4173 158.116 31.4173H145.287ZM161.166 78.2019C164.335 78.2019 166.907 77.216 168.881 75.2443C170.854 73.2127 171.841 70.7331 171.841 67.8053C171.841 66.3713 171.572 65.0568 171.034 63.8618C170.495 62.607 169.748 61.5315 168.791 60.6353C167.894 59.6792 166.787 58.9324 165.472 58.3946C164.156 57.8569 162.721 57.588 161.166 57.588H145.287V78.2019H161.166Z"
        fill="black"
      />
      <path
        d="M184.651 73.5414C184.651 69.5381 185.937 66.4012 188.509 64.1307C191.14 61.8004 194.848 60.4859 199.633 60.1871L213.896 59.1116V56.154C213.896 53.5249 213.089 51.4934 211.474 50.0594C209.859 48.5656 207.527 47.8188 204.477 47.8188C202.264 47.8188 200.141 48.1773 198.108 48.8943C196.074 49.5515 194.101 50.6569 192.187 52.2104L188.15 45.6677C190.542 43.6362 193.203 42.1425 196.134 41.1865C199.124 40.1707 202.324 39.6628 205.733 39.6628C208.305 39.6628 210.637 40.0213 212.73 40.7383C214.823 41.4553 216.618 42.501 218.113 43.8752C219.608 45.1897 220.744 46.803 221.522 48.715C222.359 50.5673 222.778 52.6586 222.778 54.9888V75.6028C222.778 77.3355 223.675 78.2019 225.469 78.2019H227.801V86.1786H223.316C221.103 86.1786 219.219 85.6707 217.664 84.655C216.169 83.6392 215.122 82.2351 214.524 80.4426C212.969 82.5338 210.966 84.177 208.514 85.372C206.062 86.567 203.311 87.1645 200.261 87.1645C197.988 87.1645 195.895 86.8359 193.981 86.1786C192.127 85.5214 190.482 84.5952 189.047 83.4002C187.671 82.1454 186.595 80.6816 185.817 79.0085C185.04 77.3355 184.651 75.5131 184.651 73.5414ZM193.353 73.4517C193.353 75.4235 194.16 77.0368 195.775 78.2915C197.39 79.4865 199.483 80.0841 202.055 80.0841C203.67 80.0841 205.195 79.8152 206.63 79.2774C208.065 78.7397 209.321 78.0227 210.398 77.1264C211.474 76.1704 212.312 75.065 212.91 73.8102C213.567 72.5555 213.896 71.2111 213.896 69.7771V66.0128L200.978 67.0883C195.895 67.4468 193.353 69.568 193.353 73.4517Z"
        fill="black"
      />
      <path
        d="M249.629 87.1645C246.818 87.1645 244.277 86.7761 242.004 85.9994C239.731 85.2226 237.728 84.177 235.994 82.8625C234.319 81.4882 232.943 79.8749 231.867 78.0227C230.79 76.1704 230.043 74.1688 229.624 72.0177H238.326C238.864 74.6468 240.15 76.6185 242.184 77.933C244.217 79.2475 246.669 79.9048 249.54 79.9048C252.052 79.9048 253.995 79.367 255.371 78.2915C256.806 77.216 257.524 75.8119 257.524 74.0791C257.524 71.2708 255.431 69.2991 251.244 68.1638L242.811 66.1024C234.558 64.0112 230.432 59.7091 230.432 53.1963C230.432 51.105 230.82 49.2229 231.598 47.5499C232.435 45.8769 233.542 44.4429 234.917 43.2479C236.352 42.0528 238.027 41.1267 239.941 40.4695C241.914 39.8122 244.067 39.4836 246.4 39.4836C249.091 39.4836 251.513 39.872 253.666 40.6487C255.879 41.4255 257.793 42.501 259.408 43.8752C261.022 45.1897 262.338 46.7731 263.355 48.6254C264.372 50.4777 265.029 52.4793 265.328 54.6303H256.627C256.088 52.0013 254.803 50.0295 252.769 48.715C250.796 47.4005 248.643 46.7433 246.31 46.7433C244.097 46.7433 242.363 47.281 241.107 48.3565C239.911 49.3723 239.313 50.6868 239.313 52.3001C239.313 55.1681 241.496 57.1399 245.862 58.2154L253.756 60.2768C262.189 62.4278 266.405 66.7896 266.405 73.3621C266.405 75.3339 266.016 77.1563 265.239 78.8293C264.461 80.5023 263.325 81.9662 261.83 83.221C260.394 84.4757 258.63 85.4616 256.537 86.1786C254.504 86.8359 252.201 87.1645 249.629 87.1645Z"
        fill="black"
      />
      <path
        d="M269.206 63.324C269.206 60.0975 269.804 57.0502 271 54.1822C272.196 51.3142 273.841 48.8047 275.934 46.6536C278.027 44.4429 280.509 42.7101 283.38 41.4553C286.25 40.2006 289.36 39.5732 292.709 39.5732C295.999 39.5732 299.049 40.1707 301.86 41.3657C304.671 42.5607 307.093 44.2337 309.126 46.3848C311.16 48.476 312.744 50.9855 313.881 53.9133C315.017 56.7813 315.585 59.9182 315.585 63.324V66.2817H278.356C278.655 68.1339 279.253 69.8667 280.15 71.48C281.047 73.0335 282.154 74.4077 283.469 75.6028C284.845 76.738 286.37 77.6343 288.044 78.2915C289.779 78.9488 291.603 79.2774 293.517 79.2774C298.959 79.2774 303.355 77.0368 306.704 72.5555L313.253 77.3953C310.98 80.4426 308.169 82.8326 304.82 84.5653C301.471 86.2981 297.703 87.1645 293.517 87.1645C290.108 87.1645 286.908 86.567 283.918 85.372C280.987 84.177 278.416 82.5039 276.203 80.3529C274.05 78.2019 272.345 75.6924 271.089 72.8244C269.834 69.8966 269.206 66.7298 269.206 63.324ZM292.53 47.4603C289.121 47.4603 286.131 48.5358 283.559 50.6868C281.047 52.7781 279.373 55.5863 278.535 59.1116H306.435C305.657 55.5863 303.983 52.7781 301.411 50.6868C298.899 48.5358 295.939 47.4603 292.53 47.4603Z"
        fill="black"
      />
      <path
        d="M346.476 62.1589C346.476 64.6684 346.865 66.9688 347.642 69.0601C348.42 71.0916 349.496 72.8542 350.872 74.348C352.247 75.782 353.862 76.8874 355.716 77.6642C357.63 78.4409 359.693 78.8293 361.906 78.8293C364.059 78.8293 366.062 78.4409 367.916 77.6642C369.83 76.8277 371.475 75.6924 372.85 74.2584C374.286 72.7646 375.392 71.002 376.17 68.9705C376.947 66.9389 377.336 64.6684 377.336 62.1589V23.4406H386.755V86.1786H377.426V80.3529C375.332 82.5637 372.85 84.2666 369.98 85.4616C367.169 86.6566 364.119 87.2541 360.829 87.2541C357.48 87.2541 354.34 86.6865 351.41 85.5512C348.539 84.3562 346.027 82.6832 343.874 80.5322C341.781 78.3812 340.107 75.8119 338.851 72.8244C337.655 69.7771 337.057 66.4012 337.057 62.6966V23.4406H346.476V62.1589Z"
        fill="black"
      />
      <path d="M394.58 86.1786V23.4406H404V86.1786H394.58Z" fill="black" />
      <path
        d="M48.7951 9.75C54.1849 4.36523 62.9235 4.36522 68.3133 9.75L107.35 48.75C112.739 54.1348 112.739 62.8652 107.35 68.25L68.3133 107.25C62.9235 112.635 54.1849 112.635 48.7951 107.25L9.75887 68.25C4.36909 62.8652 4.36909 54.1348 9.75887 48.75L48.7951 9.75Z"
        fill="#276EF1"
      />
      <path
        d="M53.7762 23.8344C56.4711 21.142 60.8404 21.142 63.5353 23.8344L92.8125 53.0843C95.5074 55.7767 95.5074 60.142 92.8125 62.8344L63.5353 92.0843C60.8404 94.7767 56.4711 94.7767 53.7762 92.0843L24.499 62.8344C21.8041 60.142 21.8041 55.7767 24.499 53.0843L53.7762 23.8344Z"
        fill="white"
      />
    </svg>

    <h1>Welcome!</h1>
    <P>
      We&apos;re still in development but feel free to browse around and leave
      feedback. Code is available at{' '}
      <Anchor
        href="https://github.com/uber-web/baseui"
        target="_blank"
        rel="noopener noreferrer"
      >
        uber-web/baseui
      </Anchor>{' '}
      on Github.
    </P>
  </Root>
));
