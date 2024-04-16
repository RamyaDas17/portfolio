import React from 'react'

function Info() {
  return (
    <div className='about_info grid'>
        <div className='about_box'>
        <svg width="36" height="36" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M304 144C304.006 135.696 301.858 127.533 297.765 120.308C293.673 113.083 287.776 107.043 280.651 102.779C273.526 98.5141 265.417 96.1708 257.116 95.9779C248.814 95.7849 240.605 97.7487 233.289 101.678C225.974 105.606 219.803 111.366 215.379 118.393C210.955 125.42 208.43 133.474 208.05 141.769C207.67 150.064 209.449 158.316 213.212 165.718C216.975 173.12 222.594 179.419 229.52 184H209.736L150.96 157.28C144.848 154.502 137.932 154.05 131.51 156.01C125.088 157.97 119.603 162.207 116.084 167.925C112.565 173.643 111.255 180.449 112.398 187.065C113.542 193.68 117.062 199.651 122.296 203.856L192 259.856V303.76L175.12 376.448C173.206 384.535 174.487 393.048 178.695 400.215C182.903 407.381 189.714 412.647 197.708 414.916C205.703 417.185 214.265 416.281 221.61 412.394C228.955 408.506 234.516 401.935 237.136 394.048L256 337.76L274.864 394C277.484 401.887 283.045 408.458 290.39 412.346C297.735 416.233 306.297 417.137 314.292 414.868C322.286 412.599 329.097 407.333 333.305 400.167C337.513 393 338.794 384.487 336.88 376.4L320 303.744V259.84L389.696 203.84C394.935 199.638 398.459 193.668 399.605 187.051C400.752 180.435 399.442 173.627 395.923 167.907C392.404 162.188 386.916 157.951 380.493 155.993C374.069 154.034 367.152 154.489 361.04 157.272L302.264 184H282.48C289.091 179.628 294.516 173.686 298.271 166.707C302.026 159.727 303.994 151.926 304 144ZM304 200C305.143 199.999 306.272 199.754 307.312 199.28L367.664 171.848C369.427 171.048 371.362 170.704 373.292 170.847C375.223 170.989 377.086 171.615 378.712 172.665C380.338 173.715 381.674 175.157 382.598 176.858C383.522 178.559 384.004 180.464 384 182.4C384.004 184.13 383.618 185.838 382.87 187.398C382.122 188.957 381.031 190.328 379.68 191.408L306.992 249.808C306.064 250.553 305.314 251.495 304.797 252.566C304.279 253.637 304.007 254.81 304 256V304.664C304.002 305.273 304.071 305.879 304.208 306.472L321.296 380.072C322.252 384.146 321.6 388.432 319.476 392.039C317.353 395.645 313.921 398.293 309.894 399.434C305.868 400.575 301.557 400.119 297.857 398.162C294.158 396.206 291.355 392.898 290.032 388.928L263.584 310.08C263.058 308.479 262.04 307.086 260.675 306.098C259.311 305.11 257.669 304.578 255.984 304.578C254.299 304.578 252.657 305.11 251.293 306.098C249.928 307.086 248.91 308.479 248.384 310.08L221.936 388.928C220.613 392.898 217.81 396.206 214.111 398.162C210.411 400.119 206.1 400.575 202.074 399.434C198.047 398.293 194.615 395.645 192.492 392.039C190.368 388.432 189.716 384.146 190.672 380.072L207.76 306.472C207.907 305.88 207.988 305.274 208 304.664V256C207.999 254.804 207.73 253.623 207.212 252.544C206.694 251.466 205.941 250.517 205.008 249.768L132.32 191.368C130.974 190.292 129.887 188.928 129.139 187.376C128.391 185.824 128.002 184.123 128 182.4C128.001 180.467 128.487 178.565 129.413 176.869C130.339 175.172 131.676 173.735 133.301 172.688C134.926 171.642 136.788 171.019 138.716 170.878C140.643 170.737 142.576 171.081 144.336 171.88L204.688 199.312C205.73 199.775 206.86 200.009 208 200H304ZM256 176C249.671 176 243.484 174.123 238.222 170.607C232.959 167.091 228.858 162.093 226.436 156.246C224.014 150.399 223.38 143.964 224.615 137.757C225.85 131.55 228.897 125.848 233.373 121.373C237.848 116.897 243.55 113.85 249.757 112.615C255.965 111.38 262.399 112.014 268.246 114.436C274.093 116.858 279.091 120.959 282.607 126.222C286.123 131.484 288 137.671 288 144C288 152.487 284.629 160.626 278.627 166.627C272.626 172.629 264.487 176 256 176ZM256 24C253.878 24 251.843 24.8428 250.343 26.3431C248.843 27.8434 248 29.8783 248 32V48C248 50.1217 248.843 52.1566 250.343 53.6568C251.843 55.1571 253.878 56 256 56C258.122 56 260.157 55.1571 261.657 53.6568C263.157 52.1566 264 50.1217 264 48V32C264 29.8783 263.157 27.8434 261.657 26.3431C260.157 24.8428 258.122 24 256 24ZM256 488C258.122 488 260.157 487.157 261.657 485.657C263.157 484.157 264 482.122 264 480V464C264 461.878 263.157 459.843 261.657 458.343C260.157 456.843 258.122 456 256 456C253.878 456 251.843 456.843 250.343 458.343C248.843 459.843 248 461.878 248 464V480C248 482.122 248.843 484.157 250.343 485.657C251.843 487.157 253.878 488 256 488ZM480 264C482.122 264 484.157 263.157 485.657 261.657C487.157 260.157 488 258.122 488 256C488 253.878 487.157 251.843 485.657 250.343C484.157 248.843 482.122 248 480 248H464C461.878 248 459.843 248.843 458.343 250.343C456.843 251.843 456 253.878 456 256C456 258.122 456.843 260.157 458.343 261.657C459.843 263.157 461.878 264 464 264H480ZM32 248C29.8783 248 27.8434 248.843 26.3431 250.343C24.8428 251.843 24 253.878 24 256C24 258.122 24.8428 260.157 26.3431 261.657C27.8434 263.157 29.8783 264 32 264H48C50.1217 264 52.1566 263.157 53.6568 261.657C55.1571 260.157 56 258.122 56 256C56 253.878 55.1571 251.843 53.6568 250.343C52.1566 248.843 50.1217 248 48 248H32ZM488.704 423.384C450.872 417.192 446.832 413.152 440.64 375.296C440.299 373.258 439.246 371.406 437.668 370.071C436.091 368.736 434.091 368.003 432.024 368.003C429.957 368.003 427.957 368.736 426.38 370.071C424.802 371.406 423.749 373.258 423.408 375.296C417.216 413.128 413.176 417.168 375.32 423.36C373.282 423.701 371.43 424.754 370.095 426.332C368.76 427.909 368.027 429.909 368.027 431.976C368.027 434.043 368.76 436.043 370.095 437.62C371.43 439.198 373.282 440.251 375.32 440.592C413.152 446.784 417.192 450.824 423.384 488.68C423.725 490.718 424.778 492.57 426.356 493.905C427.933 495.24 429.933 495.973 432 495.973C434.067 495.973 436.067 495.24 437.644 493.905C439.222 492.57 440.275 490.718 440.616 488.68C446.808 450.848 450.848 446.808 488.704 440.616C490.742 440.275 492.594 439.222 493.929 437.644C495.264 436.067 495.997 434.067 495.997 432C495.997 429.933 495.264 427.933 493.929 426.356C492.594 424.778 490.742 423.725 488.704 423.384ZM432 456.512C430.053 450.828 426.832 445.665 422.583 441.417C418.335 437.168 413.172 433.947 407.488 432C413.172 430.053 418.335 426.832 422.583 422.583C426.832 418.335 430.053 413.172 432 407.488C433.948 413.171 437.17 418.334 441.418 422.582C445.666 426.83 450.829 430.052 456.512 432C450.828 433.947 445.665 437.168 441.417 441.417C437.168 445.665 433.947 450.828 432 456.512ZM23.32 88.616C61.152 94.808 65.192 98.848 71.384 136.704C71.7254 138.742 72.7784 140.594 74.3559 141.929C75.9334 143.264 77.9332 143.997 80 143.997C82.0668 143.997 84.0666 143.264 85.6441 141.929C87.2216 140.594 88.2746 138.742 88.616 136.704C94.808 98.872 98.848 94.832 136.704 88.64C138.742 88.2986 140.594 87.2456 141.929 85.6681C143.264 84.0906 143.997 82.0908 143.997 80.024C143.997 77.9572 143.264 75.9574 141.929 74.3799C140.594 72.8024 138.742 71.7494 136.704 71.408C98.872 65.216 94.832 61.176 88.64 23.32C88.2986 21.2816 87.2456 19.4303 85.6681 18.095C84.0906 16.7597 82.0908 16.027 80.024 16.027C77.9572 16.027 75.9574 16.7597 74.3799 18.095C72.8024 19.4303 71.7494 21.2816 71.408 23.32C65.192 61.152 61.152 65.192 23.296 71.384C21.2576 71.7254 19.4063 72.7784 18.071 74.3559C16.7357 75.9334 16.003 77.9332 16.003 80C16.003 82.0668 16.7357 84.0666 18.071 85.6441C19.4063 87.2216 21.2576 88.2746 23.296 88.616H23.32ZM80 55.488C81.9485 61.1711 85.1698 66.3338 89.418 70.582C93.6661 74.8302 98.8289 78.0515 104.512 80C98.8283 81.9474 93.665 85.1683 89.4167 89.4167C85.1683 93.665 81.9474 98.8283 80 104.512C78.0526 98.8283 74.8316 93.665 70.5833 89.4167C66.335 85.1683 61.1717 81.9474 55.488 80C61.1711 78.0515 66.3338 74.8302 70.582 70.582C74.8302 66.3338 78.0515 61.1711 80 55.488ZM23.32 440.616C61.152 446.808 65.192 450.848 71.384 488.704C71.7254 490.742 72.7784 492.594 74.3559 493.929C75.9334 495.264 77.9332 495.997 80 495.997C82.0668 495.997 84.0666 495.264 85.6441 493.929C87.2216 492.594 88.2746 490.742 88.616 488.704C94.808 450.872 98.848 446.832 136.704 440.64C138.742 440.299 140.594 439.246 141.929 437.668C143.264 436.091 143.997 434.091 143.997 432.024C143.997 429.957 143.264 427.957 141.929 426.38C140.594 424.802 138.742 423.749 136.704 423.408C98.872 417.216 94.832 413.176 88.64 375.32C88.2986 373.282 87.2456 371.43 85.6681 370.095C84.0906 368.76 82.0908 368.027 80.024 368.027C77.9572 368.027 75.9574 368.76 74.3799 370.095C72.8024 371.43 71.7494 373.282 71.408 375.32C65.216 413.152 61.176 417.192 23.32 423.384C21.2816 423.725 19.4303 424.778 18.095 426.356C16.7597 427.933 16.027 429.933 16.027 432C16.027 434.067 16.7597 436.067 18.095 437.644C19.4303 439.222 21.2816 440.275 23.32 440.616ZM80 407.488C81.9474 413.172 85.1683 418.335 89.4167 422.583C93.665 426.832 98.8283 430.053 104.512 432C98.8289 433.948 93.6661 437.17 89.418 441.418C85.1698 445.666 81.9485 450.829 80 456.512C78.0526 450.828 74.8316 445.665 70.5833 441.417C66.335 437.168 61.1717 433.947 55.488 432C61.1717 430.053 66.335 426.832 70.5833 422.583C74.8316 418.335 78.0526 413.172 80 407.488ZM488.68 71.384C450.848 65.192 446.808 61.152 440.616 23.296C440.275 21.2576 439.222 19.4063 437.644 18.071C436.067 16.7357 434.067 16.003 432 16.003C429.933 16.003 427.933 16.7357 426.356 18.071C424.778 19.4063 423.725 21.2576 423.384 23.296C417.192 61.128 413.152 65.168 375.296 71.36C373.258 71.7014 371.406 72.7544 370.071 74.3319C368.736 75.9094 368.003 77.9092 368.003 79.976C368.003 82.0428 368.736 84.0426 370.071 85.6201C371.406 87.1976 373.258 88.2506 375.296 88.592C413.128 94.784 417.168 98.824 423.36 136.68C423.701 138.718 424.754 140.57 426.332 141.905C427.909 143.24 429.909 143.973 431.976 143.973C434.043 143.973 436.043 143.24 437.62 141.905C439.198 140.57 440.251 138.718 440.592 136.68C446.784 98.848 450.824 94.808 488.68 88.616C490.718 88.2746 492.57 87.2216 493.905 85.6441C495.24 84.0666 495.973 82.0668 495.973 80C495.973 77.9332 495.24 75.9334 493.905 74.3559C492.57 72.7784 490.718 71.7254 488.68 71.384ZM432 104.512C430.053 98.8283 426.832 93.665 422.583 89.4167C418.335 85.1683 413.172 81.9474 407.488 80C413.172 78.0526 418.335 74.8316 422.583 70.5833C426.832 66.335 430.053 61.1717 432 55.488C433.948 61.1711 437.17 66.3338 441.418 70.582C445.666 74.8302 450.829 78.0515 456.512 80C450.829 81.9485 445.666 85.1698 441.418 89.418C437.17 93.6661 433.948 98.8289 432 104.512Z" fill="black"/>
        </svg>
            <h3 className='about_title'>Zeal for Learning</h3>
            <span className='about_subtitle'></span>
        </div>
        <div className='about_box'>
        <svg width="36" height="36" viewBox="0 0 512 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_2)">
        <path d="M294.387 251.062H294.086C305.088 241.071 311.989 226.828 311.989 211.035C311.989 180.887 286.873 156.359 256.001 156.359C225.13 156.359 200.013 180.887 200.013 211.035C200.013 226.828 206.914 241.071 217.916 251.062H217.614C195.655 251.062 177.789 268.508 177.789 289.953V337.305C177.789 339.247 178.579 341.11 179.986 342.484C181.392 343.857 183.3 344.629 185.289 344.629H326.711C330.854 344.629 334.211 341.351 334.211 337.305V289.953C334.212 268.508 316.347 251.062 294.387 251.062ZM215.014 211.035C215.014 188.965 233.401 171.008 256.002 171.008C278.603 171.008 296.99 188.965 296.99 211.035C296.99 233.105 278.602 251.062 256.002 251.062C233.402 251.062 215.014 233.105 215.014 211.035ZM319.212 329.98H192.79V289.953C192.79 276.586 203.927 265.71 217.615 265.71H294.387C308.075 265.71 319.212 276.586 319.212 289.953V329.98ZM210.761 123.654H301.241C311.066 123.654 319.06 115.848 319.06 106.252V76.6035C319.06 72.5576 315.703 69.2793 311.56 69.2793C307.417 69.2793 304.06 72.5576 304.06 76.6035V106.251C304.059 106.981 303.762 107.681 303.234 108.197C302.705 108.713 301.988 109.004 301.241 109.005H210.761C210.013 109.004 209.297 108.713 208.768 108.197C208.24 107.681 207.942 106.981 207.941 106.251V17.8926C207.943 17.1636 208.241 16.4653 208.77 15.9507C209.298 15.4361 210.015 15.1472 210.761 15.1475H301.241C301.987 15.1472 302.703 15.4361 303.232 15.9507C303.76 16.4654 304.058 17.1637 304.06 17.8926V42.4238C304.06 46.4697 307.417 49.748 311.56 49.748C315.703 49.748 319.06 46.4697 319.06 42.4238V17.8926C319.06 8.30274 311.066 0.5 301.241 0.5H210.761C200.935 0.5 192.941 8.30274 192.941 17.8926V106.251C192.942 115.848 200.936 123.654 210.761 123.654ZM494.955 208.383C493.585 207.005 491.717 206.208 489.751 206.162C487.785 206.116 485.88 206.826 484.445 208.138C483.009 209.451 482.159 211.261 482.077 213.18C481.995 215.098 482.687 216.972 484.005 218.396C492.367 227.089 497.015 238.572 496.999 250.499C496.999 276.373 475.44 297.423 448.94 297.423C422.439 297.423 400.88 276.373 400.88 250.499C400.88 224.62 422.439 203.566 448.94 203.566C451.885 203.566 454.836 203.831 457.711 204.352C461.786 205.096 465.698 202.464 466.453 198.486C466.816 196.576 466.387 194.604 465.26 193.003C464.134 191.402 462.403 190.304 460.447 189.949C456.651 189.263 452.799 188.918 448.939 188.918C414.168 188.918 385.879 216.543 385.879 250.499C385.879 284.449 414.168 312.07 448.939 312.07C483.71 312.07 512 284.449 512 250.499C512 234.802 505.946 219.845 494.955 208.383ZM123.314 303.331C126.779 297.855 127.088 291.148 124.141 285.391L79.963 199.106C76.744 192.819 70.274 188.913 63.075 188.913C55.878 188.913 49.407 192.819 46.188 199.105L2.011 285.391C-0.936996 291.148 -0.627996 297.855 2.837 303.331C6.302 308.806 12.306 312.075 18.897 312.075H107.253C113.845 312.075 119.849 308.806 123.314 303.331ZM15.597 295.63C15.255 295.089 14.554 293.648 15.427 291.942L59.605 205.656C60.573 203.766 62.355 203.562 63.075 203.562C63.796 203.562 65.578 203.767 66.546 205.657L110.724 291.941C111.598 293.647 110.896 295.09 110.554 295.629C110.212 296.17 109.206 297.427 107.253 297.427H18.897C16.945 297.427 15.939 296.17 15.597 295.63ZM307.141 389.731L267.921 367.622C260.568 363.477 251.434 363.477 244.082 367.622L204.863 389.73C197.51 393.874 192.942 401.6 192.942 409.893V414.912C192.942 418.958 196.3 422.236 200.442 422.236C204.584 422.236 207.942 418.958 207.942 414.912V409.893C207.944 408.378 208.354 406.89 209.129 405.578C209.904 404.267 211.019 403.176 212.361 402.417L251.581 380.308C252.926 379.553 254.45 379.155 256.001 379.155C257.552 379.155 259.076 379.553 260.421 380.308L299.642 402.418C300.984 403.177 302.098 404.267 302.873 405.579C303.649 406.891 304.058 408.378 304.06 409.893V454.12C304.058 455.635 303.648 457.123 302.873 458.435C302.097 459.746 300.982 460.837 299.64 461.596L260.42 483.705C259.076 484.461 257.551 484.859 256 484.859C254.449 484.859 252.925 484.461 251.58 483.705L212.359 461.595C211.017 460.836 209.903 459.746 209.127 458.434C208.352 457.122 207.943 455.635 207.941 454.12V449.092C207.941 445.046 204.583 441.768 200.441 441.768C196.299 441.768 192.941 445.046 192.941 449.092V454.12C192.941 462.413 197.509 470.139 204.861 474.281L244.081 496.391C247.706 498.43 251.816 499.503 256 499.5C260.122 499.5 264.243 498.463 267.919 496.391L307.138 474.282C314.491 470.139 319.06 462.413 319.06 454.12V409.893C319.061 401.6 314.492 393.874 307.141 389.731ZM343.885 69.4004H428.739C435.744 69.4004 441.442 74.9648 441.442 81.8057V146.987L430.002 135.814C429.306 135.134 428.479 134.595 427.569 134.227C426.659 133.859 425.683 133.669 424.698 133.669C422.709 133.669 420.802 134.441 419.395 135.814C417.988 137.188 417.198 139.051 417.198 140.994C417.198 142.936 417.988 144.799 419.395 146.173L443.639 169.849C445.046 171.222 446.954 171.993 448.943 171.993C450.933 171.993 452.84 171.221 454.247 169.848L478.49 146.172C479.187 145.492 479.739 144.684 480.116 143.796C480.493 142.907 480.687 141.955 480.687 140.993C480.687 140.031 480.493 139.079 480.115 138.19C479.738 137.302 479.186 136.494 478.489 135.814C477.082 134.441 475.175 133.67 473.186 133.67C471.197 133.67 469.289 134.442 467.883 135.815L456.444 146.987V81.8057C456.444 66.8887 444.016 54.752 428.741 54.752H343.887C339.744 54.752 336.387 58.0303 336.387 62.0762C336.387 66.1221 339.742 69.4004 343.885 69.4004ZM149.182 33.2168C147.775 31.8435 145.868 31.0722 143.879 31.0724C141.89 31.0725 139.982 31.8443 138.576 33.2178C137.17 34.5913 136.38 36.4541 136.38 38.3965C136.38 40.3388 137.17 42.2017 138.576 43.5752L150.016 54.7461H83.269C67.994 54.7461 55.566 66.8828 55.566 81.7998V164.665C55.566 168.711 58.924 171.989 63.066 171.989C67.208 171.989 70.566 168.711 70.566 164.665V81.8008C70.566 74.96 76.265 69.3955 83.269 69.3955H150.016L138.576 80.5674C137.18 81.9429 136.398 83.8027 136.402 85.7396C136.406 87.6765 137.196 89.533 138.599 90.9027C140.001 92.2724 141.902 93.0438 143.885 93.0481C145.869 93.0524 147.773 92.2893 149.182 90.9258L173.426 67.25C174.123 66.5699 174.675 65.7624 175.052 64.8736C175.429 63.9849 175.623 63.0323 175.623 62.0703C175.623 61.1083 175.429 60.1558 175.052 59.267C174.675 58.3783 174.123 57.5708 173.426 56.8906L149.182 33.2168ZM168.117 431.578H83.264C76.26 431.578 70.561 426.014 70.561 419.173V353.991L82.001 365.164C83.465 366.594 85.385 367.309 87.304 367.309C89.223 367.309 91.143 366.594 92.607 365.164C93.3035 364.484 93.856 363.677 94.2329 362.788C94.6099 361.899 94.8039 360.947 94.8039 359.985C94.8039 359.023 94.6099 358.071 94.2329 357.182C93.856 356.293 93.3035 355.486 92.607 354.806L68.363 331.13C66.9565 329.757 65.049 328.985 63.06 328.985C61.071 328.985 59.1635 329.757 57.757 331.13L33.514 354.805C32.1176 356.18 31.336 358.04 31.3402 359.977C31.3445 361.914 32.1342 363.77 33.5367 365.14C34.9391 366.51 36.84 367.281 38.8235 367.285C40.8069 367.29 42.7113 366.527 44.12 365.163L55.561 353.99V419.172C55.561 434.089 67.989 446.226 83.264 446.226H168.117C169.109 446.237 170.094 446.056 171.014 445.693C171.934 445.33 172.771 444.792 173.476 444.111C174.182 443.429 174.742 442.618 175.124 441.724C175.507 440.83 175.704 439.871 175.704 438.902C175.704 437.933 175.507 436.974 175.124 436.079C174.742 435.185 174.182 434.374 173.476 433.693C172.771 433.012 171.934 432.474 171.014 432.111C170.094 431.748 169.109 431.567 168.117 431.578ZM448.936 328.988C447.951 328.988 446.976 329.178 446.066 329.546C445.156 329.914 444.329 330.453 443.632 331.133C442.936 331.813 442.383 332.621 442.007 333.51C441.63 334.398 441.436 335.351 441.436 336.313V419.178C441.436 426.019 435.738 431.583 428.733 431.583H361.987L373.428 420.411C374.835 419.038 375.625 417.175 375.625 415.232C375.625 413.289 374.835 411.426 373.428 410.053C372.021 408.679 370.114 407.907 368.125 407.907C366.135 407.907 364.228 408.679 362.821 410.053L338.577 433.729C337.171 435.103 336.381 436.966 336.381 438.908C336.381 440.851 337.171 442.714 338.578 444.088L362.822 467.763C364.286 469.192 366.206 469.907 368.125 469.907C370.044 469.907 371.964 469.192 373.429 467.762C374.126 467.082 374.678 466.274 375.055 465.386C375.432 464.497 375.626 463.545 375.626 462.583C375.626 461.621 375.432 460.669 375.054 459.78C374.677 458.891 374.125 458.084 373.428 457.404L361.988 446.233H428.734C444.009 446.233 456.437 434.097 456.437 419.18V336.314C456.437 334.372 455.647 332.508 454.24 331.134C452.833 329.761 450.925 328.989 448.936 328.988Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_1_2">
        <rect width="512" height="500" fill="white"/>
        </clipPath>
        </defs>
        </svg>
            <h3 className='about_title'>Adaptability</h3>
            <span className='about_subtitle'></span>
        </div>
        <div className='about_box'>
        <svg class="about_icon" width="36" height="36" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_3)">
        <path d="M55.2 332.8C44 332.8 35.2 323.2 35.2 312V226.4C35.2 215.2 44.8 205.6 56 205.6H150.4C161.6 205.6 171.2 215.2 171.2 226.4V312C171.2 323.2 161.6 332.8 150.4 332.8H120H55.2Z" fill="white" stroke="black" stroke-width="16" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M300 340.8C298.4 347.2 292 352 284.8 352H233.6C227.2 352 220 349.6 215.2 344.8L199.2 328.8C194.4 324 188 321.6 180.8 321.6H168.8C170.4 319.2 171.2 316 171.2 312V226.4C171.2 224 170.4 220.8 169.6 218.4L184 212M474.4 430.4C480 440 476 452.8 466.4 458.4L392 500.8C382.4 506.4 369.6 503.2 364 493.6L353.6 476L331.2 436.8L316 411.2C310.4 401.6 313.6 388.8 324 383.2L398.4 340.8C408 335.2 420.8 338.4 426.4 348L441.6 374.4L474.4 430.4Z" fill="white"/>
        <path d="M300 340.8C298.4 347.2 292 352 284.8 352H233.6C227.2 352 220 349.6 215.2 344.8L199.2 328.8C194.4 324 188 321.6 180.8 321.6H168.8C170.4 319.2 171.2 316 171.2 312V226.4C171.2 224 170.4 220.8 169.6 218.4L184 212M474.4 430.4C480 440 476 452.8 466.4 458.4L392 500.8C382.4 506.4 369.6 503.2 364 493.6L353.6 476L331.2 436.8L316 411.2C310.4 401.6 313.6 388.8 324 383.2L398.4 340.8C408 335.2 420.8 338.4 426.4 348L441.6 374.4L474.4 430.4Z" stroke="black" stroke-width="16" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M399.2 261.6L401.6 265.6C404.8 271.2 405.6 278.4 404 284.8L398.4 306.4C396.8 312.8 397.6 320 400.8 325.6L407.2 336C404 336 400.8 336.8 398.4 338.4L324 380.8C321.6 382.4 320 384 318.4 385.6L285.6 362.4C282.4 360 280 357.6 278.4 354.4L275.2 349.6L272 344.8M349.6 17.6C355.2 8 368 4.8 377.6 11.2L452 53.6C461.6 59.2 465.6 72 459.2 81.6L448.8 99.2L426.4 138.4L411.2 164C405.6 173.6 392.8 177.6 382.4 171.2L308 128.8C298.4 123.2 294.4 110.4 300.8 100.8L316 74.4L349.6 17.6Z" fill="white"/>
        <path d="M399.2 261.6L401.6 265.6C404.8 271.2 405.6 278.4 404 284.8L398.4 306.4C396.8 312.8 397.6 320 400.8 325.6L407.2 336C404 336 400.8 336.8 398.4 338.4L324 380.8C321.6 382.4 320 384 318.4 385.6L285.6 362.4C282.4 360 280 357.6 278.4 354.4L275.2 349.6L272 344.8M349.6 17.6C355.2 8 368 4.8 377.6 11.2L452 53.6C461.6 59.2 465.6 72 459.2 81.6L448.8 99.2L426.4 138.4L411.2 164C405.6 173.6 392.8 177.6 382.4 171.2L308 128.8C298.4 123.2 294.4 110.4 300.8 100.8L316 74.4L349.6 17.6Z" stroke="black" stroke-width="16" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M244 223.2C241.6 227.2 238.4 229.6 234.4 230.4C229.6 232 224.8 230.4 220.8 227.2C215.2 222.4 214.4 213.6 217.6 208L243.2 164C246.4 158.4 252 153.6 258.4 152L280 145.6C286.4 144 292 139.2 295.2 133.6L301.6 123.2C303.2 125.6 305.6 128 308.8 129.6L383.2 172C385.6 173.6 388 174.4 390.4 174.4L386.4 214.4C386.4 218.4 384.8 221.6 383.2 224.8L369.6 248.8" fill="white"/>
        <path d="M244 223.2C241.6 227.2 238.4 229.6 234.4 230.4C229.6 232 224.8 230.4 220.8 227.2C215.2 222.4 214.4 213.6 217.6 208L243.2 164C246.4 158.4 252 153.6 258.4 152L280 145.6C286.4 144 292 139.2 295.2 133.6L301.6 123.2C303.2 125.6 305.6 128 308.8 129.6L383.2 172C385.6 173.6 388 174.4 390.4 174.4L386.4 214.4C386.4 218.4 384.8 221.6 383.2 224.8L369.6 248.8" stroke="black" stroke-width="16" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M264.8 188L222.4 260.8C218.4 268 220.8 277.6 228 281.6C232 284 236 284 239.2 283.2C243.2 282.4 246.4 280 248.8 276L291.2 203.2" fill="white"/>
        <path d="M264.8 188L222.4 260.8C218.4 268 220.8 277.6 228 281.6C232 284 236 284 239.2 283.2C243.2 282.4 246.4 280 248.8 276L291.2 203.2" stroke="black" stroke-width="16" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M291.2 203.2L238.4 294.4C234.4 301.6 236.8 311.2 244 315.2C248 317.6 252 317.6 255.2 316.8C259.2 316 262.4 313.6 264.8 309.6L317.6 218.4" fill="white"/>
        <path d="M291.2 203.2L238.4 294.4C234.4 301.6 236.8 311.2 244 315.2C248 317.6 252 317.6 255.2 316.8C259.2 316 262.4 313.6 264.8 309.6L317.6 218.4" stroke="black" stroke-width="16" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M316.8 218.4L277.6 286.4C273.6 293.6 276 303.2 283.2 307.2C287.2 309.6 291.2 309.6 294.4 308.8C298.4 308 301.6 305.6 303.2 301.6L342.4 233.6M343.2 233.6L312 288C308 295.2 310.4 304.8 317.6 308.8C321.6 311.2 325.6 311.2 328.8 310.4C332.8 309.6 336 307.2 338.4 303.2L369.6 248.8" fill="white"/>
        <path d="M316.8 218.4L277.6 286.4C273.6 293.6 276 303.2 283.2 307.2C287.2 309.6 291.2 309.6 294.4 308.8C298.4 308 301.6 305.6 303.2 301.6L342.4 233.6M343.2 233.6L312 288C308 295.2 310.4 304.8 317.6 308.8C321.6 311.2 325.6 311.2 328.8 310.4C332.8 309.6 336 307.2 338.4 303.2L369.6 248.8" stroke="black" stroke-width="16" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_1_3">
        <rect width="512" height="512" fill="white"/>
        </clipPath>
        </defs>
        </svg>

            <h3 className='about_title'>Collaborative Spirit</h3>
            <span className='about_subtitle'></span>
        </div>
    </div>
  )
}

export default Info