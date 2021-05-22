import React from "react";

const pokerChipColor = (color) => {
  return (
    <svg
      width="132"
      height="132"
      viewBox="0 0 132 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1" fill={color}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M55.0731 2V15.15C58.5964 14.3965 62.2519 14 66 14C69.8 14 73.5049 14.4076 77.0731 15.1815V2C86.8276 3.66266 95.8411 7.49869 103.598 12.9922L94.2527 22.3373C96.6966 23.9219 98.999 25.7061 101.137 27.6668C101.74 28.1689 102.323 28.7005 102.884 29.262C103.494 29.8719 104.069 30.5073 104.609 31.1662C106.509 33.2704 108.239 35.5305 109.778 37.9252L119.154 28.5485C124.648 36.3053 128.484 45.3188 130.146 55.0732H116.85C117.366 57.4863 117.715 59.9615 117.883 62.486C118.048 63.6662 118.132 64.8629 118.132 66.0732C118.132 67.3313 118.041 68.5746 117.863 69.8001C117.684 72.2766 117.332 74.705 116.818 77.0732H130.146C128.484 86.8276 124.648 95.8411 119.154 103.598L109.72 94.1639C108.45 96.1307 107.052 98.0063 105.536 99.7788C104.741 100.874 103.857 101.911 102.884 102.884C101.911 103.857 100.874 104.741 99.7788 105.536C98.0062 107.052 96.1306 108.451 94.1637 109.72L103.598 119.154C95.841 124.648 86.8275 128.484 77.0731 130.146V116.818C74.7057 117.332 72.2782 117.684 69.8027 117.863C68.5763 118.041 67.3322 118.132 66.0732 118.132C64.862 118.132 63.6646 118.048 62.4835 117.883C59.9598 117.714 57.4855 117.366 55.0731 116.85V130.146C45.3187 128.484 36.3052 124.648 28.5485 119.154L37.9251 109.777C35.531 108.239 33.2713 106.509 31.1676 104.61C30.5081 104.07 29.8724 103.495 29.262 102.884C28.7001 102.322 28.1681 101.739 27.6657 101.136C25.7054 98.998 23.9216 96.696 22.3373 94.2526L12.9921 103.598C7.49872 95.841 3.66273 86.8276 2.00006 77.0733H15.1815C14.4076 73.5049 14 69.8001 14 66C14 62.2519 14.3966 58.5964 15.15 55.0733H2C3.66264 45.3188 7.49865 36.3053 12.9921 28.5485L22.2798 37.8362C26.2985 31.6107 31.6106 26.2985 37.8362 22.2798L28.5485 12.9921C36.3052 7.49867 45.3187 3.66265 55.0731 2ZM106.297 66.0731C106.297 88.2881 88.2881 106.297 66.0731 106.297C43.8582 106.297 25.8494 88.2881 25.8494 66.0731C25.8494 43.8581 43.8582 25.8493 66.0731 25.8493C88.2881 25.8493 106.297 43.8581 106.297 66.0731Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55.0731 2V15.15C58.5964 14.3965 62.2519 14 66 14C69.8 14 73.5049 14.4076 77.0731 15.1815V2C86.8276 3.66266 95.8411 7.49869 103.598 12.9922L94.2527 22.3373C96.6966 23.9219 98.999 25.7061 101.137 27.6668C101.74 28.1689 102.323 28.7005 102.884 29.262C103.494 29.8719 104.069 30.5073 104.609 31.1662C106.509 33.2704 108.239 35.5305 109.778 37.9252L119.154 28.5485C124.648 36.3053 128.484 45.3188 130.146 55.0732H116.85C117.366 57.4863 117.715 59.9615 117.883 62.486C118.048 63.6662 118.132 64.8629 118.132 66.0732C118.132 67.3313 118.041 68.5746 117.863 69.8001C117.684 72.2766 117.332 74.705 116.818 77.0732H130.146C128.484 86.8276 124.648 95.8411 119.154 103.598L109.72 94.1639C108.45 96.1307 107.052 98.0063 105.536 99.7788C104.741 100.874 103.857 101.911 102.884 102.884C101.911 103.857 100.874 104.741 99.7788 105.536C98.0062 107.052 96.1306 108.451 94.1637 109.72L103.598 119.154C95.841 124.648 86.8275 128.484 77.0731 130.146V116.818C74.7057 117.332 72.2782 117.684 69.8027 117.863C68.5763 118.041 67.3322 118.132 66.0732 118.132C64.862 118.132 63.6646 118.048 62.4835 117.883C59.9598 117.714 57.4855 117.366 55.0731 116.85V130.146C45.3187 128.484 36.3052 124.648 28.5485 119.154L37.9251 109.777C35.531 108.239 33.2713 106.509 31.1676 104.61C30.5081 104.07 29.8724 103.495 29.262 102.884C28.7001 102.322 28.1681 101.739 27.6657 101.136C25.7054 98.998 23.9216 96.696 22.3373 94.2526L12.9921 103.598C7.49872 95.841 3.66273 86.8276 2.00006 77.0733H15.1815C14.4076 73.5049 14 69.8001 14 66C14 62.2519 14.3966 58.5964 15.15 55.0733H2C3.66264 45.3188 7.49865 36.3053 12.9921 28.5485L22.2798 37.8362C26.2985 31.6107 31.6106 26.2985 37.8362 22.2798L28.5485 12.9921C36.3052 7.49867 45.3187 3.66265 55.0731 2ZM106.297 66.0731C106.297 88.2881 88.2881 106.297 66.0731 106.297C43.8582 106.297 25.8494 88.2881 25.8494 66.0731C25.8494 43.8581 43.8582 25.8493 66.0731 25.8493C88.2881 25.8493 106.297 43.8581 106.297 66.0731Z"
        fill={color}
      />
      <path
        d="M55.0731 2H57.0731V-0.369749L54.7371 0.0284353L55.0731 2ZM55.0731 15.15H53.0731V17.6229L55.4914 17.1058L55.0731 15.15ZM77.0731 15.1815L76.6492 17.136L79.0731 17.6617V15.1815H77.0731ZM77.0731 2L77.4092 0.0284367L75.0731 -0.369748V2H77.0731ZM103.598 12.9922L105.012 14.4064L106.688 12.7301L104.754 11.36L103.598 12.9922ZM94.2527 22.3373L92.8385 20.9231L91.0908 22.6708L93.1646 24.0154L94.2527 22.3373ZM101.137 27.6668L99.7851 29.1408L99.8204 29.1732L99.8572 29.2039L101.137 27.6668ZM102.884 29.262L104.299 27.8478L104.299 27.8478L102.884 29.262ZM104.609 31.1662L103.062 32.4338L103.092 32.4709L103.124 32.5065L104.609 31.1662ZM109.778 37.9252L108.095 39.0065L109.437 41.0944L111.192 39.3394L109.778 37.9252ZM119.154 28.5485L120.786 27.3926L119.416 25.4581L117.74 27.1343L119.154 28.5485ZM130.146 55.0732V57.0732H132.516L132.118 54.7372L130.146 55.0732ZM116.85 55.0732V53.0732H114.377L114.894 55.4915L116.85 55.0732ZM117.883 62.486L115.888 62.6191L115.892 62.691L115.902 62.7622L117.883 62.486ZM117.863 69.8001L115.884 69.5131L115.874 69.5843L115.868 69.656L117.863 69.8001ZM116.818 77.0732L114.864 76.6493L114.338 79.0732H116.818V77.0732ZM130.146 77.0732L132.118 77.4093L132.516 75.0732H130.146V77.0732ZM119.154 103.598L117.74 105.012L119.416 106.688L120.786 104.754L119.154 103.598ZM109.72 94.1639L111.134 92.7496L109.383 90.9983L108.04 93.0792L109.72 94.1639ZM105.536 99.7788L104.016 98.479L103.964 98.5394L103.918 98.6037L105.536 99.7788ZM99.7788 105.536L98.6036 103.918L98.5393 103.964L98.4789 104.016L99.7788 105.536ZM94.1637 109.72L93.079 108.04L90.9982 109.383L92.7495 111.134L94.1637 109.72ZM103.598 119.154L104.754 120.786L106.688 119.416L105.012 117.74L103.598 119.154ZM77.0731 130.146H75.0731V132.516L77.4092 132.118L77.0731 130.146ZM77.0731 116.818H79.0731V114.338L76.6492 114.864L77.0731 116.818ZM69.8027 117.863L69.6585 115.868L69.5867 115.873L69.5155 115.884L69.8027 117.863ZM62.4835 117.883L62.76 115.902L62.6886 115.892L62.6168 115.887L62.4835 117.883ZM55.0731 116.85L55.4914 114.894L53.0731 114.377V116.85H55.0731ZM55.0731 130.146L54.7371 132.118L57.0731 132.516V130.146H55.0731ZM28.5485 119.154L27.1343 117.74L25.458 119.416L27.3926 120.786L28.5485 119.154ZM37.9251 109.777L39.3394 111.192L41.0943 109.437L39.0064 108.095L37.9251 109.777ZM31.1676 104.61L32.5078 103.126L32.4721 103.093L32.435 103.063L31.1676 104.61ZM29.262 102.884L30.6762 101.47L30.6762 101.47L29.262 102.884ZM27.6657 101.136L29.2028 99.856L29.1721 99.8192L29.1397 99.7838L27.6657 101.136ZM22.3373 94.2526L24.0154 93.1645L22.6708 91.0907L20.9231 92.8383L22.3373 94.2526ZM12.9921 103.598L11.36 104.754L12.7301 106.688L14.4064 105.012L12.9921 103.598ZM2.00006 77.0733V75.0733H-0.369694L0.0284979 77.4093L2.00006 77.0733ZM15.1815 77.0733V79.0733H17.6618L17.1361 76.6494L15.1815 77.0733ZM15.15 55.0733L17.1057 55.4915L17.6229 53.0733H15.15V55.0733ZM2 55.0733L0.028435 54.7372L-0.369742 57.0733H2V55.0733ZM12.9921 28.5485L14.4063 27.1343L12.7301 25.458L11.36 27.3926L12.9921 28.5485ZM22.2798 37.8362L20.8656 39.2504L22.6169 41.0017L23.9602 38.9209L22.2798 37.8362ZM37.8362 22.2798L38.9209 23.9602L41.0017 22.6169L39.2504 20.8656L37.8362 22.2798ZM28.5485 12.9921L27.3926 11.36L25.458 12.7301L27.1343 14.4063L28.5485 12.9921ZM53.0731 2V15.15H57.0731V2H53.0731ZM55.4914 17.1058C58.878 16.3815 62.3933 16 66 16V12C62.1104 12 58.3147 12.4115 54.6549 13.1942L55.4914 17.1058ZM66 16C69.6566 16 73.2193 16.3922 76.6492 17.136L77.497 13.2269C73.7904 12.423 69.9434 12 66 12V16ZM79.0731 15.1815V2H75.0731V15.1815H79.0731ZM104.754 11.36C96.7588 5.69784 87.4663 1.74268 77.4092 0.0284367L76.7371 3.97157C86.1889 5.58264 94.9234 9.29954 102.442 14.6243L104.754 11.36ZM95.6669 23.7515L105.012 14.4064L102.184 11.578L92.8385 20.9231L95.6669 23.7515ZM102.489 26.1928C100.269 24.1572 97.8785 22.3047 95.3408 20.6592L93.1646 24.0154C95.5146 25.5392 97.7289 27.255 99.7851 29.1408L102.489 26.1928ZM104.299 27.8478C103.694 27.2432 103.066 26.6706 102.417 26.1298L99.8572 29.2039C100.414 29.6672 100.952 30.1578 101.47 30.6762L104.299 27.8478ZM106.156 29.8987C105.574 29.1888 104.955 28.5046 104.299 27.8478L101.47 30.6762C102.033 31.2393 102.564 31.8257 103.062 32.4338L106.156 29.8987ZM111.46 36.844C109.862 34.3573 108.066 32.0106 106.094 29.826L103.124 32.5065C104.951 34.5302 106.615 36.7038 108.095 39.0065L111.46 36.844ZM117.74 27.1343L108.363 36.511L111.192 39.3394L120.568 29.9628L117.74 27.1343ZM132.118 54.7372C130.404 44.6801 126.448 35.3876 120.786 27.3926L117.522 29.7045C122.847 37.223 126.564 45.9575 128.175 55.4093L132.118 54.7372ZM116.85 57.0732H130.146V53.0732H116.85V57.0732ZM119.879 62.3528C119.704 59.732 119.342 57.1616 118.806 54.655L114.894 55.4915C115.39 57.8111 115.726 60.191 115.888 62.6191L119.879 62.3528ZM120.132 66.0732C120.132 64.7698 120.041 63.4809 119.864 62.2097L115.902 62.7622C116.054 63.8516 116.132 64.9559 116.132 66.0732H120.132ZM119.843 70.0871C120.034 68.7672 120.132 67.428 120.132 66.0732H116.132C116.132 67.2345 116.048 68.3819 115.884 69.5131L119.843 70.0871ZM118.773 77.4971C119.307 75.0371 119.672 72.5152 119.858 69.9442L115.868 69.656C115.696 72.0379 115.358 74.3728 114.864 76.6493L118.773 77.4971ZM130.146 75.0732H116.818V79.0732H130.146V75.0732ZM120.786 104.754C126.448 96.7588 130.404 87.4663 132.118 77.4093L128.175 76.7372C126.564 86.1889 122.847 94.9234 117.522 102.442L120.786 104.754ZM108.306 95.5781L117.74 105.012L120.568 102.184L111.134 92.7496L108.306 95.5781ZM107.056 101.079C108.63 99.2384 110.082 97.2909 111.4 95.2485L108.04 93.0792C106.819 94.9705 105.474 96.7742 104.016 98.479L107.056 101.079ZM104.299 104.299C105.346 103.251 106.298 102.133 107.154 100.954L103.918 98.6037C103.184 99.6146 102.368 100.572 101.47 101.47L104.299 104.299ZM100.954 107.154C102.133 106.298 103.251 105.346 104.299 104.299L101.47 101.47C100.572 102.368 99.6146 103.184 98.6036 103.918L100.954 107.154ZM95.2484 111.401C97.2908 110.082 99.2383 108.63 101.079 107.056L98.4789 104.016C96.7742 105.474 94.9704 106.819 93.079 108.04L95.2484 111.401ZM105.012 117.74L95.5779 108.306L92.7495 111.134L102.183 120.568L105.012 117.74ZM77.4092 132.118C87.4662 130.404 96.7587 126.448 104.754 120.786L102.442 117.522C94.9233 122.847 86.1888 126.564 76.7371 128.175L77.4092 132.118ZM75.0731 116.818V130.146H79.0731V116.818H75.0731ZM69.9468 119.858C72.5169 119.672 75.0379 119.306 77.497 118.773L76.6492 114.864C74.3735 115.357 72.0395 115.696 69.6585 115.868L69.9468 119.858ZM66.0732 120.132C67.4289 120.132 68.7691 120.034 70.0898 119.842L69.5155 115.884C68.3836 116.048 67.2354 116.132 66.0732 116.132V120.132ZM62.2071 119.864C63.4791 120.041 64.7689 120.132 66.0732 120.132V116.132C64.9551 116.132 63.85 116.054 62.76 115.902L62.2071 119.864ZM54.6549 118.806C57.1607 119.342 59.7303 119.704 62.3503 119.879L62.6168 115.887C60.1894 115.725 57.8103 115.39 55.4914 114.894L54.6549 118.806ZM57.0731 130.146V116.85H53.0731V130.146H57.0731ZM27.3926 120.786C35.3875 126.448 44.68 130.404 54.7371 132.118L55.4092 128.175C45.9574 126.564 37.2229 122.847 29.7044 117.522L27.3926 120.786ZM36.5109 108.363L27.1343 117.74L29.9627 120.568L39.3394 111.192L36.5109 108.363ZM29.8274 106.095C32.0116 108.066 34.3578 109.862 36.8439 111.46L39.0064 108.095C36.7042 106.615 34.5311 104.952 32.5078 103.126L29.8274 106.095ZM27.8477 104.299C28.505 104.956 29.1898 105.575 29.9002 106.157L32.435 103.063C31.8265 102.564 31.2397 102.034 30.6762 101.47L27.8477 104.299ZM26.1285 102.415C26.6697 103.065 27.2428 103.694 27.8477 104.299L30.6762 101.47C30.1574 100.951 29.6664 100.413 29.2028 99.856L26.1285 102.415ZM20.6592 95.3406C22.3043 97.8779 24.1565 100.268 26.1916 102.487L29.1397 99.7838C27.2543 97.7279 25.5389 95.5141 24.0154 93.1645L20.6592 95.3406ZM14.4064 105.012L23.7515 95.6668L20.9231 92.8383L11.5779 102.184L14.4064 105.012ZM0.0284979 77.4093C1.74275 87.4663 5.69787 96.7587 11.36 104.754L14.6243 102.442C9.29957 94.9234 5.58271 86.1889 3.97162 76.7372L0.0284979 77.4093ZM15.1815 75.0733H2.00006V79.0733H15.1815V75.0733ZM12 66C12 69.9435 12.4231 73.7905 13.227 77.4972L17.1361 76.6494C16.3922 73.2194 16 69.6566 16 66H12ZM13.1942 54.655C12.4116 58.3148 12 62.1105 12 66H16C16 62.3933 16.3815 58.8781 17.1057 55.4915L13.1942 54.655ZM2 57.0733H15.15V53.0733H2V57.0733ZM11.36 27.3926C5.69779 35.3876 1.74266 44.6801 0.028435 54.7372L3.97157 55.4093C5.58262 45.9575 9.2995 37.2229 14.6243 29.7044L11.36 27.3926ZM23.6941 36.422L14.4063 27.1343L11.5779 29.9627L20.8656 39.2504L23.6941 36.422ZM36.7515 20.5995C30.2874 24.7722 24.7722 30.2874 20.5995 36.7515L23.9602 38.9209C27.8248 32.9339 32.9339 27.8248 38.9209 23.9602L36.7515 20.5995ZM27.1343 14.4063L36.422 23.6941L39.2504 20.8656L29.9627 11.5779L27.1343 14.4063ZM54.7371 0.0284353C44.68 1.74268 35.3875 5.69781 27.3926 11.36L29.7044 14.6243C37.2229 9.29952 45.9574 5.58263 55.4092 3.97156L54.7371 0.0284353ZM66.0731 108.297C89.3927 108.297 108.297 89.3926 108.297 66.0731H104.297C104.297 87.1835 87.1835 104.297 66.0731 104.297V108.297ZM23.8494 66.0731C23.8494 89.3926 42.7536 108.297 66.0731 108.297V104.297C44.9627 104.297 27.8494 87.1835 27.8494 66.0731H23.8494ZM66.0731 23.8493C42.7536 23.8493 23.8494 42.7536 23.8494 66.0731H27.8494C27.8494 44.9627 44.9627 27.8493 66.0731 27.8493V23.8493ZM108.297 66.0731C108.297 42.7536 89.3927 23.8493 66.0731 23.8493V27.8493C87.1835 27.8493 104.297 44.9627 104.297 66.0731H108.297Z"
        fill={color}
        mask="url(#path-1-inside-1)"
      />
      <circle cx="66" cy="66" r="65" stroke={color} strokeWidth="4" />
    </svg>
  );
};

export default pokerChipColor;