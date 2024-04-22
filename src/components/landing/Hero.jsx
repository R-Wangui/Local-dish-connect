import { FaSearch } from 'react-icons/fa'
import Buttons from '../layout/Buttons'

function Hero() {
  return (
    <>
        <div className="arrows-hero">
            <svg xmlns="http://www.w3.org/2000/svg" width="184" height="207" viewBox="0 0 184 207" fill="none" className="arrow1">
                <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M169.904 198.394L164.003 205.223C163.641 205.642 163.035 205.662 162.651 205.268L156.378 198.844C155.993 198.45 155.975 197.79 156.337 197.371C156.699 196.952 157.304 196.932 157.689 197.326L163.265 203.037L168.51 196.967C168.872 196.548 169.478 196.527 169.863 196.922C170.248 197.316 170.266 197.975 169.904 198.394Z" fill="#F54748"/>
                <path opacity="0.5" d="M14.2698 1.39746C79.6932 13.3342 144.795 30.4523 163.728 196.076" stroke="#F54748" stroke-width="2" stroke-dasharray="8 8"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="240" height="276" viewBox="0 0 240 276" fill="none" className="arrow2">
                <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M130.485 253.245L121.896 252.559C121.369 252.517 120.973 252.017 121.012 251.444L121.642 242.093C121.681 241.519 122.139 241.088 122.667 241.13C123.194 241.172 123.589 241.672 123.551 242.245L122.991 250.557L130.625 251.167C131.152 251.209 131.548 251.709 131.509 252.282C131.471 252.856 131.012 253.287 130.485 253.245Z" fill="#F54748"/>
                <path opacity="0.5" d="M113.754 16.9453C155.61 61.6117 194.759 109.965 129.432 243.804" stroke="#F54748" stroke-width="2" stroke-dasharray="8 8"/>
            </svg>
        </div>
        <div id="hero-container">
            <div id="hero-text">
                <div>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="#F54748"/>
                        <path d="M16.6613 7.45916C16.4441 6.97793 16.1309 6.54185 15.7392 6.17532C15.3472 5.80769 14.8851 5.51555 14.3779 5.31477C13.852 5.10575 13.288 4.99876 12.7185 5.00001C11.9195 5.00001 11.1401 5.20933 10.4627 5.60472C10.3006 5.6993 10.1467 5.80319 10.0008 5.91638C9.85495 5.80319 9.701 5.6993 9.53894 5.60472C8.86155 5.20933 8.08206 5.00001 7.28313 5.00001C6.70783 5.00001 6.15036 5.10545 5.62368 5.31477C5.11483 5.51634 4.65621 5.80629 4.26241 6.17532C3.87023 6.54143 3.55695 6.97762 3.34032 7.45916C3.11506 7.95999 3 8.49182 3 9.03916C3 9.55549 3.1102 10.0935 3.32897 10.6409C3.5121 11.0983 3.77463 11.5727 4.11008 12.0519C4.64162 12.8101 5.37249 13.6008 6.28 14.4025C7.78388 15.7313 9.27317 16.6492 9.33637 16.6864L9.72045 16.9221C9.8906 17.026 10.1094 17.026 10.2795 16.9221L10.6636 16.6864C10.7268 16.6476 12.2145 15.7313 13.72 14.4025C14.6275 13.6008 15.3584 12.8101 15.8899 12.0519C16.2254 11.5727 16.4895 11.0983 16.671 10.6409C16.8898 10.0935 17 9.55549 17 9.03916C17.0016 8.49182 16.8865 7.95999 16.6613 7.45916Z" fill="#FDC55E"/></svg>
                    </span><span> People trust us</span>
                </div>
                <div className="hero-tagline">
                    <span>One</span><span style={{color: '#FDCD5E'}}> Stop!</span>
                    <span></span><br/>
                    <span>To Your <br/></span>
                    <span></span>
                    <span style={{color: '#FDCD5E'}}>Special<br/></span>
                    <span></span>
                    <span>Food Offer</span>
                </div>
                <p style={{marginTop: '40px'}}>Lorem ipsum dolor sit amet consectetur. Aliquet massa ac risus non mi morbi egestas lacus tellus. Amet</p>
            </div>
            <div>
                <img src="\images\Hero image.png" alt="Hero image" className="hero-image" />
            </div> 
        </div>
        <div className="search-location">
            <label htmlFor="">Your Location</label>
            <FaSearch /><input type="search" name="search" placeholder="Search" id="hero-search" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="235" height="210" viewBox="0 0 235 210" fill="none" className="hero-deco">
            <g filter="url(#filter0_f_315_3963)">
                <path d="M97.6324 126.009C93.853 126.265 90.9352 124.981 89.6358 121.233C88.344 117.522 89.8986 114.469 93.1115 111.526C89.2123 110.224 86.1571 108.324 86.1271 103.883C86.1024 100.074 88.1913 97.6389 91.5077 96.0829C91.8561 95.9892 92.1972 95.9071 92.5455 95.8134C94.3374 95.6336 96.3142 95.5993 97.5442 96.7708C99.7966 98.9064 100.103 97.3506 101.444 95.5067C103.285 92.9523 103.694 91.7009 100.6 90.4065C99.4748 89.9287 98.8836 88.2437 98.0582 87.1096C97.9548 86.6105 97.8514 86.1115 97.7407 85.6242C97.8907 82.0517 99.1003 79.0625 102.578 77.4923C106.437 75.7513 109.445 77.2349 112.338 80.3592C113.706 76.1759 115.819 73.0607 120.157 72.7909C123.867 72.5731 126.14 74.5762 127.469 77.858C127.541 78.2092 127.603 78.5536 127.676 78.9048C127.37 80.5093 127.582 82.5598 126.668 83.6155C124.211 86.4719 125.985 86.7654 127.949 88.2079C130.312 89.9429 130.965 89.3574 132.291 87.0687C133.037 85.7654 134.795 85.0484 136.098 84.0536C136.465 83.9549 136.839 83.8445 137.205 83.7459C141.024 83.4011 143.92 84.7195 145.242 88.4326C146.552 92.139 145.078 95.209 141.88 98.1284C145.581 99.552 148.779 101.297 148.809 105.787C148.834 109.595 146.767 112.044 143.503 113.664C143.081 113.778 142.667 113.879 142.256 114C140.696 113.756 138.747 114.017 137.659 113.158C135.31 111.303 134.755 112.271 133.382 114.563C132.052 116.785 131.277 117.764 134.037 119.031C135.299 119.609 135.935 121.467 136.846 122.734C136.935 123.159 137.023 123.584 137.122 124.016C137.161 127.85 135.743 130.905 132.033 132.43C128.349 133.939 125.398 132.733 122.744 129.496C121.154 133.592 118.969 136.873 114.45 137.016C110.978 137.121 108.815 135.186 107.445 132.169C107.334 131.633 107.234 131.103 107.116 130.579C107.078 127.877 108.098 125.514 109.841 123.464C106.567 120.882 103.565 119.192 100.864 124.368C100.538 124.992 99.5187 125.257 98.813 125.681C98.4024 125.801 98.0174 125.905 97.6324 126.009ZM121.621 124.968C120.398 122.428 127.185 120.944 122.678 118.156C120.38 116.735 119.322 117.235 117.944 119.508C115.041 124.27 121.63 122.116 121.621 124.968ZM97.5925 110.359C99.9542 109.333 101.832 116.341 104.657 110.029C106.897 105.006 101.853 106.959 101.052 104.823C100.487 107.141 98.8214 108.35 97.5925 110.359ZM137.483 99.702C131.768 97.0152 131.886 97.1199 130.919 98.3364C127.577 102.573 131.793 103.019 133.877 105.278C134.436 102.698 136.097 101.324 137.483 99.702ZM113.443 84.667C112.466 86.9106 111.56 88.7937 110.028 90.6013C112.365 90.109 113.192 95.3602 116.533 91.0753C120.659 85.7692 113.335 87.5062 113.443 84.667ZM115.606 103.277C114.948 104.537 113.011 105.742 115.654 106.679C116.992 107.158 117.97 108.983 119.38 106.262C120.342 104.412 120.681 103.667 118.684 102.624C117.186 101.837 116.249 101.055 115.606 103.277Z" fill="#FFE8C8"/>
                <path d="M127.039 79.5595C126.966 79.2083 126.904 78.8639 126.831 78.5128C126.972 78.2115 127.201 77.9157 127.253 77.6089C127.855 73.6028 129.667 70.5787 133.896 69.9681C137.335 69.4723 139.903 71.0258 141.026 74.2947C142.409 78.3036 140.512 81.292 137.217 83.6515C136.965 83.8364 136.792 84.1661 136.584 84.4267C136.218 84.5254 135.844 84.6357 135.477 84.7343C131.904 84.2123 129.103 82.4679 127.039 79.5595Z" fill="#FFE8C8"/>
                <path d="M137.775 124.668C137.687 124.243 137.599 123.818 137.5 123.386C138.119 119.747 139.939 116.857 142.908 114.653C143.33 114.54 143.744 114.438 144.155 114.318C145.234 114.574 146.334 114.747 147.37 115.122C150.301 116.187 152.126 118.223 152.107 121.584C152.086 124.653 150.628 127.006 147.892 128.416C144.891 129.955 142.221 129.258 139.943 127.139C139.135 126.42 138.492 125.51 137.775 124.668Z" fill="#FFE8C8"/>
                <path d="M107.757 129.938C107.868 130.474 107.968 131.003 108.087 131.528C107.844 132.315 107.593 133.114 107.339 133.895C106.272 137.245 104.227 139.561 100.679 139.862C97.4253 140.132 95.0309 138.62 93.8767 135.574C92.6283 132.261 93.8499 129.425 96.4425 127.04C97.0514 126.476 97.6825 125.926 98.2914 125.362C98.6764 125.259 99.0687 125.143 99.4537 125.04C102.934 125.489 105.661 127.204 107.757 129.938Z" fill="#FFE8C8"/>
                <path d="M91.8974 95.1724C91.5491 95.266 91.208 95.348 90.8597 95.4417C86.8792 94.5416 82.9601 93.5176 82.8308 88.2741C82.7496 85.2227 84.1882 82.8259 86.9435 81.4116C91.6528 79.0131 94.4447 81.8819 97.1171 84.9681C97.2206 85.4671 97.3241 85.9661 97.4348 86.4534C96.6829 90.0607 94.7706 92.9263 91.8974 95.1724Z" fill="#FFE8C8"/>
                <path d="M139.469 143.943C137.542 147.203 132.996 148.426 129.984 146.504C127.128 144.678 126.227 140.383 128.071 137.282C130.006 134.011 134.534 132.793 137.557 134.721C140.395 136.553 141.295 140.847 139.469 143.943Z" fill="#FFE8C8"/>
                <path d="M74.8375 112.246C71.8011 110.438 70.8911 105.863 72.9556 102.752C74.9221 99.7742 79.1464 98.677 82.0386 100.397C85.075 102.204 85.985 106.779 83.9205 109.891C81.9651 112.875 77.7297 113.966 74.8375 112.246Z" fill="#FFE8C8"/>
                <path d="M87.7244 124.538C85.8743 127.797 81.3612 129.089 78.3244 127.233C75.4538 125.478 74.5023 121.216 76.2582 118.11C78.1084 114.851 82.6214 113.559 85.6583 115.416C88.5399 117.177 89.4987 121.427 87.7244 124.538Z" fill="#FFE8C8"/>
                <path d="M152.453 109.172C149.517 107.103 148.911 102.457 151.186 99.4739C153.385 96.5899 157.685 95.765 160.417 97.6934C163.353 99.7624 163.951 104.421 161.683 107.392C159.496 110.283 155.196 111.108 152.453 109.172Z" fill="#FFE8C8"/>
                <path d="M104.578 63.1252C107.488 64.7426 108.601 68.9409 106.948 72.1268C105.242 75.4248 100.775 76.8898 97.6584 75.1622C94.5752 73.4549 93.5479 68.9214 95.5382 65.7324C97.4271 62.7073 101.635 61.4875 104.578 63.1252Z" fill="#FFE8C8"/>
                <path d="M158.488 91.8881C156.483 95.1006 151.924 96.2193 148.993 94.2176C146.187 92.3088 145.394 88.0149 147.297 84.9664C149.302 81.7539 153.86 80.6351 156.792 82.6369C159.597 84.5457 160.384 88.8513 158.488 91.8881Z" fill="#FFE8C8"/>
                <path d="M119.687 59.6816C122.705 61.543 123.549 66.126 121.44 69.2104C119.422 72.1728 115.175 73.2078 112.33 71.4363C109.312 69.5749 108.468 64.992 110.566 61.9008C112.588 58.9568 116.842 57.9101 119.687 59.6816Z" fill="#FFE8C8"/>
                <path d="M124.532 147.553C122.583 150.799 118.047 151.98 115.061 150.042C112.219 148.192 111.359 143.906 113.218 140.83C115.168 137.584 119.692 136.396 122.682 138.353C125.524 140.203 126.38 144.471 124.532 147.553Z" fill="#FFE8C8"/>
                <path d="M80.5588 132.819C83.087 129.749 85.992 129.055 89.1625 131.042C92.1889 132.94 92.72 137.042 90.3308 140.036C87.8252 143.169 84.7787 143.647 81.7648 141.482C78.6915 139.264 78.6027 136.175 80.5588 132.819Z" fill="#FFE8C8"/>
                <path d="M145.221 142.557C142.233 140.327 141.463 137.451 143.41 133.962C145.266 130.643 149.344 129.586 152.257 131.689C155.296 133.886 155.889 136.975 153.734 140.306C151.577 143.666 148.553 144.206 145.221 142.557Z" fill="#FFE8C8"/>
                <path d="M80.1013 94.4105C77.7837 97.6098 74.9004 98.6878 71.6272 96.7191C68.3872 94.7707 67.692 91.6987 69.7649 88.253C71.8416 84.8258 74.8959 83.9652 78.1577 85.8784C81.4454 87.8237 81.872 90.8607 80.1013 94.4105Z" fill="#FFE8C8"/>
                <path d="M109.262 150.914C106.977 154.085 104.072 155.199 100.792 153.339C97.553 151.488 96.8066 148.449 98.625 144.896C100.36 141.502 104.423 140.322 107.409 142.309C110.544 144.403 111.021 147.358 109.262 150.914Z" fill="#FFE8C8"/>
                <path d="M156.482 123.924C153.519 121.628 152.811 118.726 154.813 115.271C156.726 111.986 160.825 110.991 163.695 113.165C166.691 115.432 167.217 118.529 165.026 121.821C162.795 125.152 159.763 125.607 156.482 123.924Z" fill="#FFE8C8"/>
                <path d="M89.8244 67.4006C92.7401 69.7478 93.4232 72.715 91.1917 76.0467C88.9531 79.3901 85.839 80.0521 82.7088 77.9772C79.5454 75.882 79.0776 72.7398 81.2797 69.4063C83.5107 66.026 86.5352 65.6319 89.8244 67.4006Z" fill="#FFE8C8"/>
                <path d="M136.187 65.0478C133.632 68.4086 130.7 69.3924 127.489 67.3485C124.289 65.3114 123.688 62.1845 125.85 58.793C128.012 55.4015 131.115 54.6352 134.325 56.6304C137.592 58.6595 137.824 61.7389 136.187 65.0478Z" fill="#FFE8C8"/>
                <path d="M154.507 76.6635C152.141 79.8172 149.282 80.7326 145.995 78.8846C142.852 77.1248 142.097 73.0639 144.36 69.9768C146.704 66.7608 149.741 66.0512 152.864 68.0896C156.02 70.1483 156.333 73.1962 154.507 76.6635Z" fill="#FFE8C8"/>
                <path d="M64.141 129.995C61.5256 127.928 60.6132 125.208 62.4024 122.171C64.1954 119.153 67.1717 118.294 70.0298 119.944C72.899 121.601 73.5714 124.61 71.7966 127.624C70.0296 130.674 67.1714 131.17 64.141 129.995Z" fill="#FFE8C8"/>
                <path d="M86.0565 156.423C83.4927 154.372 82.5691 151.645 84.3656 148.596C86.1659 145.566 89.1716 144.709 92.0369 146.348C94.9172 148.012 95.5934 151.039 93.8225 154.071C92.0337 157.157 89.1683 157.664 86.0565 156.423Z" fill="#FFE8C8"/>
                <path d="M166.977 128.655C169.224 130.626 169.956 133.268 168.262 136.348C166.721 139.133 162.441 140.148 160.161 138.254C157.648 136.169 157.154 133.366 158.969 130.361C160.505 127.782 164.394 126.98 166.977 128.655Z" fill="#FFE8C8"/>
                <path d="M76.1024 79.144C73.7408 81.9454 70.9997 82.9169 68.2239 81.107C65.4702 79.3106 64.8931 76.2945 66.8014 73.3612C68.7025 70.4397 71.6955 69.703 74.4748 71.4827C77.2763 73.276 77.4334 76.1806 76.1024 79.144Z" fill="#FFE8C8"/>
                <path d="M148.818 53.3638C151.378 55.3968 152.291 58.1169 150.479 61.1403C148.686 64.1589 145.699 65.0112 142.848 63.3491C139.986 61.6802 139.325 58.678 141.1 55.6644C142.889 52.6273 145.736 52.1249 148.818 53.3638Z" fill="#FFE8C8"/>
                <path d="M117.224 53.3592C115.108 56.0848 112.416 57.1505 109.545 55.4928C106.694 53.8302 106.018 50.8505 107.786 47.8477C109.561 44.8332 112.531 43.9856 115.379 45.6297C118.256 47.2757 118.608 50.1377 117.224 53.3592Z" fill="#FFE8C8"/>
                <path d="M127.128 162.206C124.828 164.884 122.065 165.891 119.267 164.067C116.491 162.257 115.907 159.204 117.829 156.248C119.756 153.309 122.782 152.544 125.576 154.349C128.389 156.149 128.627 159.071 127.128 162.206Z" fill="#FFE8C8"/>
                <path d="M170.819 79.7796C173.383 81.8311 174.307 84.5579 172.51 87.6066C170.71 90.6369 167.704 91.4942 164.835 89.837C161.954 88.173 161.285 85.1338 163.067 82.1085C164.842 79.0462 167.707 78.5388 170.819 79.7796Z" fill="#FFE8C8"/>
                <path d="M66.6032 104.887C69.2276 107.136 70.03 109.886 68.104 112.823C66.2036 115.744 63.2154 116.499 60.4371 114.72C57.6771 112.935 57.1113 109.927 58.9968 106.981C60.9152 104.007 63.76 103.681 66.6032 104.887Z" fill="#FFE8C8"/>
                <path d="M168.286 104.928C165.723 102.876 164.806 100.138 166.614 97.0959C168.414 94.0657 171.42 93.2084 174.3 94.8724C177.18 96.5364 177.838 99.5687 176.067 102.601C174.256 105.673 171.38 106.174 168.286 104.928Z" fill="#FFE8C8"/>
                <path d="M102.38 56.8677C100.21 59.6567 97.5102 60.7342 94.6473 59.0648C91.7956 57.4022 91.1268 54.4108 92.8948 51.408C94.6701 48.3935 97.6328 47.5575 100.488 49.19C103.388 50.8495 103.695 53.7331 102.38 56.8677Z" fill="#FFE8C8"/>
                <path d="M142.028 158.653C139.768 161.29 137.125 162.177 134.212 160.589C131.564 159.164 130.821 154.836 132.811 152.389C135.005 149.71 137.879 148.918 140.601 150.791C143.304 152.669 143.534 155.554 142.028 158.653Z" fill="#FFE8C8"/>
                <path d="M177.845 110.38C180.416 112.371 180.93 114.896 178.992 117.73C177.021 120.592 174.368 121.003 171.75 119.161C169.292 117.432 168.921 114.898 170.636 112.202C172.489 109.284 175.025 108.866 177.845 110.38Z" fill="#FFE8C8"/>
                <path d="M149.458 156.726C146.751 154.684 146.112 152.212 147.947 149.348C149.782 146.484 152.367 145.837 155.072 147.539C157.787 149.247 158.25 151.854 156.467 154.734C154.629 157.676 152.093 157.998 149.458 156.726Z" fill="#FFE8C8"/>
                <path d="M57.0293 99.3105C54.5173 97.323 54.0183 94.8234 55.964 92.0271C57.9314 89.1957 60.5518 88.8128 63.1397 90.653C65.5797 92.3867 65.9061 94.8938 64.1907 97.5404C62.3268 100.451 59.8202 100.823 57.0293 99.3105Z" fill="#FFE8C8"/>
                <path d="M167.039 65.2905C169.627 67.1795 170.284 69.6465 168.417 72.539C166.53 75.4363 163.941 75.9671 161.254 74.2118C158.745 72.565 158.279 70.0856 159.909 67.3546C161.685 64.3895 164.175 63.8464 167.039 65.2905Z" fill="#FFE8C8"/>
                <path d="M80.1603 62.4144C77.3878 60.4774 76.6432 58.0535 78.4555 55.1272C80.2717 52.2194 82.8201 51.5827 85.5466 53.2979C88.0809 54.8795 88.6052 57.3138 87.0486 60.0738C85.351 63.0863 82.875 63.6059 80.1603 62.4144Z" fill="#FFE8C8"/>
                <path d="M111.889 165.44C109.653 168.335 107.134 168.973 104.486 167.129C101.795 165.257 101.562 162.549 103.523 159.777C105.372 157.163 107.878 156.694 110.417 158.294C113.207 160.08 113.335 162.661 111.889 165.44Z" fill="#FFE8C8"/>
                <path d="M67.9767 144.566C65.2217 142.527 64.6089 140.039 66.5098 137.166C68.418 134.283 71.0153 133.789 73.6872 135.568C76.1818 137.238 76.5999 139.72 74.9586 142.444C73.1544 145.456 70.6367 145.821 67.9767 144.566Z" fill="#FFE8C8"/>
                <path d="M131.53 49.7818C129.443 52.4604 126.964 53.1077 124.328 51.2701C121.659 49.4122 121.426 46.7524 123.373 44.0041C125.207 41.4129 127.684 40.9419 130.186 42.5521C132.939 44.2997 133.167 46.8438 131.53 49.7818Z" fill="#FFE8C8"/>
                <path d="M164.499 152.58C162.351 150.573 161.717 148.217 163.479 145.841C165.186 143.529 167.724 142.983 169.958 144.703C171.959 146.233 172.351 148.635 170.845 150.893C169.198 153.355 166.826 153.583 164.499 152.58Z" fill="#FFE8C8"/>
                <path d="M54.0107 83.8678C51.869 82.2196 51.2288 79.9725 52.8428 77.4898C54.308 75.2227 56.6288 74.6082 58.8192 75.9311C61.1979 77.3691 61.6927 79.8017 60.0898 82.2912C58.6208 84.5398 56.4121 84.9485 54.0107 83.8678Z" fill="#FFE8C8"/>
                <path d="M163.052 50.7419C165.052 52.1745 165.879 54.2447 164.654 56.691C163.302 59.3665 160.88 60.1935 158.433 58.891C155.964 57.575 155.417 55.0784 156.942 52.5415C158.344 50.2036 160.571 49.7413 163.052 50.7419Z" fill="#FFE8C8"/>
                <path d="M182.405 132.124C180.683 134.412 178.419 135.352 176.018 133.949C173.628 132.553 173.125 130.034 174.636 127.52C176.035 125.211 178.411 124.533 180.645 125.689C183.119 126.975 183.488 129.364 182.405 132.124Z" fill="#FFE8C8"/>
                <path d="M70.1534 57.2476C72.1387 58.6549 72.9572 60.6882 71.7396 63.1228C70.4026 65.775 68.0101 66.6038 65.5738 65.3081C63.1336 63.9938 62.5689 61.5508 64.0942 59.0139C65.5002 56.6944 67.6863 56.2235 70.1534 57.2476Z" fill="#FFE8C8"/>
                <path d="M78.1174 157.2C76.3982 159.458 74.1381 160.369 71.781 158.944C69.4349 157.526 68.9396 155.044 70.4768 152.562C71.8907 150.279 74.245 149.636 76.453 150.808C78.8899 152.104 79.2629 154.463 78.1174 157.2Z" fill="#FFE8C8"/>
                <path d="M146.088 45.6478C144.529 47.794 142.42 48.6834 140.127 47.5242C137.617 46.2479 136.953 43.792 138.427 41.2392C139.897 38.6678 142.384 38.0088 144.771 39.4841C146.94 40.8424 147.235 43.1048 146.088 45.6478Z" fill="#FFE8C8"/>
                <path d="M90.1329 170.432C88.0237 168.707 87.317 166.419 88.9164 163.96C90.5014 161.524 92.9952 160.951 95.2937 162.469C97.3816 163.858 97.8649 166.235 96.5029 168.533C95.0071 171.072 92.6774 171.503 90.1329 170.432Z" fill="#FFE8C8"/>
                <path d="M138.566 174.248C136.455 172.699 135.997 170.676 137.59 168.326C139.034 166.191 141.04 165.739 143.087 167.023C145.366 168.449 145.693 170.585 144.126 172.919C142.689 175.09 140.737 175.381 138.566 174.248Z" fill="#FFE8C8"/>
                <path d="M184.587 77.4376C186.924 79.0432 187.521 80.9897 185.998 83.3992C184.627 85.5628 182.674 86.1274 180.583 84.9141C178.287 83.5906 177.839 81.5258 179.307 79.1311C180.688 76.9256 182.611 76.6328 184.587 77.4376Z" fill="#FFE8C8"/>
                <path d="M128.276 170.599C130.244 172.06 130.789 173.943 129.452 176.176C127.999 178.595 125.924 179.183 123.656 177.764C121.598 176.474 121.177 174.489 122.485 172.255C123.941 169.805 125.973 169.385 128.276 170.599Z" fill="#FFE8C8"/>
                <path d="M188.175 92.4362C190.511 94.0418 191.112 96.0068 189.582 98.4279C188.204 100.603 186.243 101.18 184.13 99.9527C181.822 98.6225 181.36 96.5324 182.853 94.1211C184.223 91.9088 186.161 91.5925 188.175 92.4362Z" fill="#FFE8C8"/>
                <path d="M112.25 37.6888C110.716 39.7211 108.836 40.3633 106.76 39.0777C104.472 37.6634 104.16 35.5033 105.769 33.2264C107.239 31.1233 109.269 30.7823 111.272 32.1363C113.298 33.5039 113.462 35.4601 112.25 37.6888Z" fill="#FFE8C8"/>
                <path d="M51.0211 109.958C52.9263 111.445 53.4165 113.343 52.0059 115.546C50.4464 117.966 48.3039 118.366 46.1519 116.809C44.1627 115.383 43.9833 113.305 45.4497 111.183C46.9601 109.041 48.9019 108.791 51.0211 109.958Z" fill="#FFE8C8"/>
                <path d="M182.402 68.1029C181.018 69.9682 179.201 70.7301 177.274 69.697C175.128 68.547 174.658 66.4195 176.036 64.2436C177.276 62.2902 179.275 61.8013 181.163 62.9231C183.066 64.0701 183.27 65.9863 182.402 68.1029Z" fill="#FFE8C8"/>
                <path d="M126.98 33.9209C125.525 35.6784 123.705 36.4218 121.846 35.3019C119.799 34.0667 119.373 31.9176 120.829 29.8378C122.122 27.9971 124.132 27.515 125.955 28.7421C127.766 29.9625 127.918 31.8634 126.98 33.9209Z" fill="#FFE8C8"/>
                <path d="M54.4367 124.885C56.4037 126.298 56.9967 128.177 55.6525 130.421C54.1851 132.865 52.0693 133.395 49.8444 131.906C47.8007 130.543 47.5223 128.501 48.9223 126.339C50.344 124.142 52.2667 123.801 54.4367 124.885Z" fill="#FFE8C8"/>
                <path d="M153.599 170.484C151.797 168.978 151.222 167.046 152.696 164.913C154.006 163.019 155.982 162.517 157.829 163.678C159.869 164.974 160.265 167.071 158.821 169.206C157.507 171.13 155.617 171.394 153.599 170.484Z" fill="#FFE8C8"/>
                <path d="M46.9747 94.9371C48.8131 96.3837 49.4679 98.1877 48.3422 100.178C47.0971 102.386 44.9747 102.976 42.9648 101.683C41.1583 100.53 40.8067 98.508 42.0061 96.5466C43.2345 94.5384 45.1364 94.378 46.9747 94.9371Z" fill="#FFE8C8"/>
                <path d="M91.9228 42.797C89.8327 41.1642 89.2986 39.2886 90.6836 37.1017C92.2063 34.6923 94.3339 34.2664 96.4892 35.7937C98.4633 37.1942 98.6756 39.2442 97.2386 41.3671C95.7726 43.5369 93.8263 43.6702 91.9228 42.797Z" fill="#FFE8C8"/>
                <path d="M187.457 114.582C185.808 112.977 185.277 111.022 186.858 108.987C188.232 107.213 190.238 106.761 192.001 108.033C193.917 109.43 194.24 111.548 192.695 113.572C191.311 115.389 189.413 115.616 187.457 114.582Z" fill="#FFE8C8"/>
                <path d="M58.9019 145.6C57.3802 147.317 55.5628 147.981 53.693 146.806C51.8342 145.638 51.3908 143.639 52.5979 141.666C53.9428 139.47 56.0701 138.946 58.052 140.335C59.8268 141.565 59.9538 143.532 58.9019 145.6Z" fill="#FFE8C8"/>
                <path d="M113.006 174.204C114.964 175.853 115.572 177.757 114.146 179.887C112.872 181.771 110.9 182.291 109.057 181.148C107.025 179.89 106.633 177.811 108.018 175.673C109.284 173.752 111.193 173.628 113.006 174.204Z" fill="#FFE8C8"/>
                <path d="M82.2472 44.722C80.6998 46.4555 78.8568 47.1366 77.0193 45.8842C75.2078 44.6638 74.8339 42.6274 76.1259 40.6894C77.4217 38.7698 79.428 38.2692 81.2689 39.4914C83.0915 40.7186 83.233 42.6614 82.2472 44.722Z" fill="#FFE8C8"/>
                <path d="M184.865 146.545C183.48 148.362 181.849 148.898 180.134 147.818C178.42 146.737 178.063 144.97 179.216 143.157C180.369 141.344 182.115 140.894 183.837 141.963C185.57 143.038 185.732 144.751 184.865 146.545Z" fill="#FFE8C8"/>
                <path d="M98.8695 182.546C97.7226 184.25 96.3897 184.823 94.9062 184.11C93.2087 183.298 92.7068 181.765 93.7244 179.998C94.7348 178.243 96.2936 177.873 97.8973 178.885C99.3348 179.797 99.3507 181.226 98.8695 182.546Z" fill="#FFE8C8"/>
                <path d="M74.9617 168.302C76.4856 166.409 78.129 166.026 79.7639 167.235C81.432 168.465 81.5135 170.258 80.2195 171.952C79.0709 173.461 77.471 173.774 75.9261 172.765C74.1816 171.634 74.1269 169.971 74.9617 168.302Z" fill="#FFE8C8"/>
                <path d="M61.7797 159.988C60.6017 161.495 59.1689 162.007 57.6051 160.955C56.263 160.037 55.9785 158.572 56.8849 157.109C57.9219 155.434 59.477 155.045 61.0258 156.073C62.3935 156.973 62.5049 158.397 61.7797 159.988Z" fill="#FFE8C8"/>
                <path d="M141.095 29.8854C140 31.2337 138.641 31.7749 137.226 30.926C135.611 29.9551 135.31 28.3186 136.488 26.714C137.49 25.3416 138.998 25.0044 140.37 25.9722C141.716 26.908 141.835 28.3202 141.095 29.8854Z" fill="#FFE8C8"/>
                <path d="M159.826 41.4797C158.328 43.4046 156.676 43.6538 155.045 42.4144C153.572 41.2883 153.426 39.6494 154.556 38.0479C155.863 36.184 157.578 36.0057 159.209 37.2451C160.707 38.3545 160.699 39.9472 159.826 41.4797Z" fill="#FFE8C8"/>
                <path d="M178.106 52.6709C176.687 54.3212 175.187 54.7442 173.722 53.6063C172.475 52.6341 172.219 51.1221 173.233 49.7078C174.37 48.0945 175.944 47.7978 177.424 48.9123C178.718 49.8814 178.683 51.3448 178.106 52.6709Z" fill="#FFE8C8"/>
                <path d="M66.6647 47.7455C65.5921 49.1074 64.2258 49.6602 62.8147 48.8299C61.1858 47.8825 60.8779 46.2577 62.029 44.6211C63.0168 43.2235 64.5172 42.898 65.8998 43.8239C67.2678 44.7732 67.3864 46.1854 66.6647 47.7455Z" fill="#FFE8C8"/>
                <path d="M195.983 127.55C194.712 129.356 193.305 129.851 191.687 128.862C190.279 128.001 189.915 126.616 190.71 125.085C191.599 123.353 193.061 122.745 194.759 123.606C196.461 124.485 196.598 125.989 195.983 127.55Z" fill="#FFE8C8"/>
                <path d="M55.5561 66.5044C54.3359 68.2279 52.7707 68.7074 51.0408 67.5531C49.5031 66.5324 49.2217 64.9884 50.2402 63.3192C51.3964 61.4276 53.0286 61.0374 54.7658 62.18C56.3217 63.1958 56.5 64.7089 55.5561 66.5044Z" fill="#FFE8C8"/>
                <path d="M43.9374 85.0011C42.8277 86.3241 41.4576 86.8585 40.0644 85.9746C38.4717 84.9686 38.1894 83.3272 39.3887 81.7362C40.4063 80.3891 41.9362 80.0654 43.2825 81.0499C44.6066 82.0207 44.7291 83.4514 43.9374 85.0011Z" fill="#FFE8C8"/>
                <path d="M173.159 164.939C172.037 166.529 170.623 167.036 169.004 166.047C167.597 165.187 167.232 163.802 168.028 162.27C168.917 160.538 170.385 159.919 172.076 160.791C173.738 161.661 174.015 163.138 173.159 164.939Z" fill="#FFE8C8"/>
            </g>
            <defs>
                <filter id="filter0_f_315_3963" x="34.6488" y="21.4192" width="165.669" height="166.991" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_315_3963"/>
                </filter>
            </defs>
        </svg>
    </>
  )
}

export default Hero