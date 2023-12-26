<template>
    <div>
        <ui-page-title title="Overview">
            <ui-button primary to="/templates/new">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add Campaign
            </ui-button>
        </ui-page-title>

        <!-- banner -->
        <div class="banner flex gap-8 items-center p-7">
            <svg width="553" height="116" viewBox="0 0 553 116" fill="none" xmlns="http://www.w3.org/2000/svg" class="bg">
                <ellipse cx="363.5" cy="-84" rx="363.5" ry="200" fill="url(#paint0_linear_0_1)" fill-opacity="0.4" />
                <path d="M726.5 -84C726.5 -29.038 686.004 20.8284 620.292 56.9833C554.599 93.1283 463.81 115.5 363.5 115.5C263.19 115.5 172.401 93.1283 106.708 56.9833C40.9962 20.8284 0.5 -29.038 0.5 -84C0.5 -138.962 40.9962 -188.828 106.708 -224.983C172.401 -261.128 263.19 -283.5 363.5 -283.5C463.81 -283.5 554.599 -261.128 620.292 -224.983C686.004 -188.828 726.5 -138.962 726.5 -84Z" stroke="url(#paint1_linear_0_1)" stroke-opacity="0.7" />
                <ellipse cx="435" cy="-86" rx="277" ry="152" fill="url(#paint2_linear_0_1)" fill-opacity="0.3" />
                <path d="M711.5 -86C711.5 -44.2936 680.687 -6.42703 630.628 21.0419C580.588 48.5008 511.424 65.5 435 65.5C358.576 65.5 289.412 48.5008 239.372 21.0419C189.313 -6.42703 158.5 -44.2936 158.5 -86C158.5 -127.706 189.313 -165.573 239.372 -193.042C289.412 -220.501 358.576 -237.5 435 -237.5C511.424 -237.5 580.588 -220.501 630.628 -193.042C680.687 -165.573 711.5 -127.706 711.5 -86Z" stroke="url(#paint3_linear_0_1)" stroke-opacity="0.7" />
                <defs>
                    <linearGradient id="paint0_linear_0_1" x1="-353.713" y1="26" x2="513.827" y2="-386.03" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_0_1" x1="-19" y1="61" x2="476.365" y2="9.1527" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_0_1" x1="131" y1="95.5" x2="511.442" y2="-230.331" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="0.853034" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_0_1" x1="125.145" y1="33.9733" x2="583.911" y2="-19.5389" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>


            <svg width="102" height="80" viewBox="0 0 102 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_8_517)">
                    <path d="M50.9597 70.019C69.7677 70.019 85.0156 54.7711 85.0156 35.896C85.0156 17.0208 69.7005 1.77289 50.9597 1.77289C32.1517 1.77289 16.9038 17.0208 16.9038 35.896C16.9038 54.7711 32.1517 70.019 50.9597 70.019Z" fill="white" fill-opacity="0.05" stroke="white" stroke-width="1.1023" stroke-miterlimit="10" />
                    <path d="M50.9399 51.1015L49.7499 51.0852C49.5119 51.082 49.2771 50.8407 49.2952 50.5469C49.3132 50.2531 49.4986 50.0036 49.7366 50.0068L50.9266 50.0231C51.1646 50.0264 51.3994 50.2676 51.3813 50.5614C51.3486 50.911 51.1779 51.1047 50.9399 51.1015Z" fill="#CED7E2" />
                    <path d="M40.2099 9.56229C41.2364 9.07245 42.4647 9.52874 42.9224 10.57L59.9826 49.3765C60.4649 50.403 60.0388 51.5966 59.0123 52.0789L29.9033 65.8262C28.8767 66.3085 27.6831 65.8824 27.2008 64.8559L9.11293 26.5081C8.63065 25.4815 9.05678 24.2879 10.0833 23.8056L31.1504 13.8852L40.2099 9.56229Z" fill="url(#paint0_linear_8_517)" fill-opacity="0.4" />
                    <path d="M40.2099 9.56229C41.2364 9.07245 42.4647 9.52874 42.9224 10.57L59.9826 49.3765C60.4649 50.403 60.0388 51.5966 59.0123 52.0789L29.9033 65.8262C28.8767 66.3085 27.6831 65.8824 27.2008 64.8559L9.11293 26.5081C8.63065 25.4815 9.05678 24.2879 10.0833 23.8056L31.1504 13.8852L40.2099 9.56229Z" fill="url(#paint1_linear_8_517)" />
                    <path d="M40.2099 9.56229C41.2364 9.07245 42.4647 9.52874 42.9224 10.57L59.9826 49.3765C60.4649 50.403 60.0388 51.5966 59.0123 52.0789L29.9033 65.8262C28.8767 66.3085 27.6831 65.8824 27.2008 64.8559L9.11293 26.5081C8.63065 25.4815 9.05678 24.2879 10.0833 23.8056L31.1504 13.8852L40.2099 9.56229Z" stroke="white" stroke-width="1.1023" stroke-miterlimit="10" />
                    <path d="M69.5137 11.2482C70.6274 11.2471 71.5308 12.1496 71.5308 13.2633L71.5311 55.654C71.5296 56.7882 70.6352 57.6861 69.501 57.6846L37.309 57.7066C36.1748 57.7051 35.2769 56.8106 35.2784 55.6765L35.27 13.2769C35.2715 12.1427 36.1659 11.2447 37.3001 11.2463L60.5861 11.2566L69.5137 11.2482Z" fill="url(#paint2_linear_8_517)" fill-opacity="0.4" />
                    <path d="M69.5137 11.2482C70.6274 11.2471 71.5308 12.1496 71.5308 13.2633L71.5311 55.654C71.5296 56.7882 70.6352 57.6861 69.501 57.6846L37.309 57.7066C36.1748 57.7051 35.2769 56.8106 35.2784 55.6765L35.27 13.2769C35.2715 12.1427 36.1659 11.2447 37.3001 11.2463L60.5861 11.2566L69.5137 11.2482Z" fill="url(#paint3_linear_8_517)" />
                    <path d="M69.5137 11.2482C70.6274 11.2471 71.5308 12.1496 71.5308 13.2633L71.5311 55.654C71.5296 56.7882 70.6352 57.6861 69.501 57.6846L37.309 57.7066C36.1748 57.7051 35.2769 56.8106 35.2784 55.6765L35.27 13.2769C35.2715 12.1427 36.1659 11.2447 37.3001 11.2463L60.5861 11.2566L69.5137 11.2482Z" stroke="white" stroke-width="1.1023" stroke-miterlimit="10" />
                    <path d="M93.7394 25.9651C94.7156 26.4331 95.1476 27.5888 94.7177 28.5824L77.9093 67.4333C77.4614 68.4493 76.2091 68.8943 75.2078 68.3905L46.0425 54.9414C45.0264 54.4935 44.5814 53.2412 45.0294 52.2251L62.7925 13.7511C63.2405 12.7351 64.4928 12.2901 65.494 12.7939L86.672 22.5771L93.7394 25.9651Z" fill="url(#paint4_linear_8_517)" stroke="white" stroke-width="1.1023" stroke-miterlimit="10" />
                    <g filter="url(#filter0_b_8_517)">
                        <path d="M59.9533 71.7109C59.7617 72.525 59.4744 73.3869 59.1392 74.1052C58.2293 75.8771 56.7927 77.2658 55.0209 78.1756C53.2012 79.0855 51.0463 79.4686 48.8913 78.9897C43.8153 77.9362 40.559 72.956 41.6125 67.8799C42.666 62.8039 47.5984 59.4997 52.6744 60.6011C54.4941 60.9842 56.0744 61.894 57.4153 63.1391C59.666 65.4377 60.5758 68.6461 59.9533 71.7109Z" fill="white" fill-opacity="0.1" />
                        <path d="M59.9533 71.7109C59.7617 72.525 59.4744 73.3869 59.1392 74.1052C58.2293 75.8771 56.7927 77.2658 55.0209 78.1756C53.2012 79.0855 51.0463 79.4686 48.8913 78.9897C43.8153 77.9362 40.559 72.956 41.6125 67.8799C42.666 62.8039 47.5984 59.4997 52.6744 60.6011C54.4941 60.9842 56.0744 61.894 57.4153 63.1391C59.666 65.4377 60.5758 68.6461 59.9533 71.7109Z" stroke="white" stroke-width="1.1023" stroke-miterlimit="10" />
                    </g>
                    <path d="M53.7279 68.4301H52.1241V66.8263C52.1241 66.1123 51.5632 65.4611 50.7589 65.4611C50.045 65.4611 49.3937 66.022 49.3937 66.8263V68.4301H47.7899C47.076 68.4301 46.4247 68.991 46.4247 69.7953C46.4247 70.1667 46.557 70.515 46.8136 70.7716C47.0702 71.0282 47.4185 71.1605 47.7899 71.1605H49.3937V72.7643C49.3937 73.4783 49.9547 74.1295 50.7589 74.1295C51.4729 74.1295 52.1241 73.5685 52.1241 72.7643V71.1605H53.7279C54.4337 71.1605 55.0782 70.6123 55.0929 69.8228C55.163 68.9615 54.446 68.4301 53.7279 68.4301Z" stroke="white" stroke-width="1.1023" />
                </g>
                <defs>
                    <filter id="filter0_b_8_517" x="29.8403" y="48.8146" width="41.8785" height="41.9566" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.5115" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_8_517" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_8_517" result="shape" />
                    </filter>
                    <linearGradient id="paint0_linear_8_517" x1="-7.49628" y1="60.4029" x2="66.0173" y2="28.9346" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_8_517" x1="-7.49628" y1="60.4029" x2="66.0173" y2="28.9346" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#879BFA" />
                        <stop offset="1" stop-color="#617CF9" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_8_517" x1="5.77312" y1="36.9278" x2="85.6655" y2="39.701" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_8_517" x1="5.77312" y1="36.9278" x2="85.6655" y2="39.701" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#879BFA" />
                        <stop offset="1" stop-color="#617CF9" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_8_517" x1="26.0298" y1="43.472" x2="99.5597" y2="46.6354" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#879BFA" />
                        <stop offset="1" stop-color="#617CF9" />
                    </linearGradient>
                    <clipPath id="clip0_8_517">
                        <rect width="102" height="80" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <div class="text-white">
                <div class="text-lg">
                    How would you like to start your campaign today?
                </div>
                <div>
                    <button class="bg-blue-500 bg-white font-bold gap-1 h-10 mt-[12px] px-4 py-2 rounded-md text-primary w-48">
                        Pre-built template
                    </button>

                    <button class="bg-blue-500 border border-white font-bold gap-1 h-10 ml-[16px] px-4 py-2 rounded-md text-white w-48">
                        Create from scratch
                    </button>
                </div>
            </div>
        </div>

        <!-- stats -->
        <div class="isolate overflow-hidden relative">
            <div class="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
                <dl class="grid grid-cols-1 lg:grid-cols-3 lg:px-2 sm:grid-cols-2 xl:px-0">
                    <div class="border-black-50 border-gray-900/5 border-r border-t flex flex-wrap gap-x-4 gap-y-2 items-baseline justify-between lg:border-t-0 px-4 py-10 sm:px-6 xl:px-[32px] xl:py-[24px]">
                        <dt class="font-medium leading-6 text-gray-500 text-medium">
                            Mails Sent
                        </dt><dd class="font-medium text-green-600 text-xs">
                            +4.75%
                        </dd><dd class="flex-none font-medium leading-10 text-4xl text-gray-900 tracking-tight w-full">
                            17
                        </dd>
                        <dd class="text-[#696D77] text-[14px] w-full">
                            Compared to last 30 days
                        </dd>
                    </div>
                    <div class="border-black-50 border-gray-900/5 border-r border-t flex flex-wrap gap-x-4 gap-y-2 items-baseline justify-between lg:border-t-0 px-4 py-10 sm:px-6 xl:px-[32px] xl:py-[24px]">
                        <dt class="font-medium leading-6 text-gray-500 text-sm">
                            SMS Sent
                        </dt><dd class="font-medium text-red text-xs">
                            +4.75%
                        </dd><dd class="flex-none font-medium leading-10 text-4xl text-gray-900 tracking-tight w-full">
                            348
                        </dd>
                        <dd class="text-[#696D77] text-[14px] w-full">
                            Compared to last 30 days
                        </dd>
                    </div>
                    <div class="border-gray-900/5 border-t flex flex-wrap gap-x-4 gap-y-2 items-baseline justify-between lg:border-t-0 px-4 py-10 sm:px-6 xl:px-[32px] xl:py-[24px]">
                        <dt class="font-medium leading-6 text-gray-500 text-sm">
                            Notifications Sent
                        </dt><dd class="font-medium text-green-600 text-xs">
                            +4.75%
                        </dd><dd class="flex-none font-medium leading-10 text-4xl text-gray-900 tracking-tight w-full">
                            56
                        </dd>
                        <dd class="text-[#696D77] text-[14px] w-full">
                            Compared to last 30 days
                        </dd>
                    </div>
                </dl>
            </div>
            <div class="-rotate-90 -z-10 absolute blur-3xl left-0 mt-96 opacity-20 origin-top-left sm:-ml-96 sm:-mt-10 sm:left-1/2 sm:opacity-50 sm:rotate-0 sm:transform-gpu sm:translate-y-0 top-full transform-gpu translate-y-40" aria-hidden="true">
                <div class="aspect-[1154/678] bg-gradient-to-br from-primary-200 to-[#9089FC] w-[72.125rem]" style="clip-path: polygon( 100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5% );" />
            </div>
        </div>
        
        <!-- recent campaigns -->
        <div>
            <div class="flex gap-8 justify-between pb-6 pt-10 px-8">
                <div class="font-bold text-lg">
                    Recent Campaigns
                </div>
                <button class="flex flex-row font-medium gap-2 text-md text-primary-500">
                    View My Campaigns
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

            <table class="campaigns-table table table-auto w-full">
                <thead>
                    <tr>
                        <th class="text-black-300">
                            Title
                        </th>
                        <th class="text-black-300">
                            Type
                        </th>
                        <th class="text-black-300">
                            Creation Date
                        </th>
                        <th class="text-black-300">
                            Status
                        </th>
                        <th class="min-w-min" />
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="i in 5" :key="i">
                        <td>
                            Email Campaign Title #1
                        </td>
                        <td>
                            Transactional
                        </td>
                        <td>
                            2023-07-14
                        </td>
                        <td :class="i % 2 === 0 ? 'sent' : 'draft'" class="relative status">
                            <p class="status-label">
                                {{ i % 2 === 0 ? "Sent" : "Draft" }}
                            </p>
                        </td>
                        <td class="flex justify-end relative">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M12.5 15H14.1667M14.1667 15H27.5M14.1667 15V26.6667C14.1667 27.1087 14.3423 27.5326 14.6548 27.8452C14.9674 28.1577 15.3913 28.3333 15.8333 28.3333H24.1667C24.6087 28.3333 25.0326 28.1577 25.3452 27.8452C25.6577 27.5326 25.8333 27.1087 25.8333 26.6667V15H14.1667ZM16.6667 15V13.3333C16.6667 12.8913 16.8423 12.4674 17.1548 12.1548C17.4674 11.8423 17.8913 11.6667 18.3333 11.6667H21.6667C22.1087 11.6667 22.5326 11.8423 22.8452 12.1548C23.1577 12.4674 23.3333 12.8913 23.3333 13.3333V15M18.3333 19.1667V24.1667M21.6667 19.1667V24.1667" stroke="#686D79" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <g clip-path="url(#clip0_16_393)">
                                        <path d="M24.1666 12.5C24.3855 12.2811 24.6453 12.1075 24.9313 11.9891C25.2173 11.8706 25.5238 11.8096 25.8333 11.8096C26.1428 11.8096 26.4493 11.8706 26.7353 11.9891C27.0213 12.1075 27.2811 12.2811 27.5 12.5C27.7188 12.7189 27.8924 12.9787 28.0109 13.2647C28.1294 13.5506 28.1903 13.8571 28.1903 14.1667C28.1903 14.4762 28.1294 14.7827 28.0109 15.0687C27.8924 15.3546 27.7188 15.6145 27.5 15.8333L16.25 27.0833L11.6666 28.3333L12.9166 23.75L24.1666 12.5Z" stroke="#686D79" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_16_393">
                                            <rect width="20" height="20" fill="white" transform="translate(10 10)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- prebuild templates -->
        <div class="px-8 py-10">
            <div class="font-bold mb-6 text-lg">
                Pre-built Templates
            </div>

            <div class="gap-6 grid grid-cols-4">
                <div class="card">
                    <div class="flex gap-3 template-title-wrapper">
                        <div class="bg-primary-50 p-2 rounded-full template-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g id="inbox">
                                    <path id="Vector" d="M16.6667 10.8333V4.99999C16.6667 4.55797 16.4911 4.13404 16.1785 3.82148C15.866 3.50892 15.442 3.33333 15 3.33333H5.00001C4.55798 3.33333 4.13406 3.50892 3.8215 3.82148C3.50894 4.13404 3.33334 4.55797 3.33334 4.99999V10.8333M16.6667 10.8333V15C16.6667 15.442 16.4911 15.8659 16.1785 16.1785C15.866 16.4911 15.442 16.6667 15 16.6667H5.00001C4.55798 16.6667 4.13406 16.4911 3.8215 16.1785C3.50894 15.8659 3.33334 15.442 3.33334 15V10.8333M16.6667 10.8333H14.5117C14.2907 10.8334 14.0788 10.9212 13.9225 11.0775L11.9108 13.0892C11.7546 13.2455 11.5427 13.3333 11.3217 13.3333H8.67834C8.45735 13.3333 8.24542 13.2455 8.08918 13.0892L6.07751 11.0775C5.92127 10.9212 5.70934 10.8334 5.48834 10.8333H3.33334" stroke="#3658F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>
                        </div>
                        <div class="flex font-medium items-center template-title tracking-wider">
                            Email Campaign
                        </div>
                    </div>
                    <div class="mt-4 template-content-wrapper text-[#686D79] text-[14px]">
                        Lorem ipsum dolor sit amet consectetur. Aliquet sed sit elit sem.
                    </div>
                </div>
                <div class="card">
                    <div class="flex gap-3 template-title-wrapper">
                        <div class="bg-primary-50 p-2 rounded-full template-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g id="mail">
                                    <path id="Vector" d="M2.5 6.66667L9.075 11.05C9.34888 11.2327 9.67075 11.3303 10 11.3303C10.3292 11.3303 10.6511 11.2327 10.925 11.05L17.5 6.66667M4.16667 15.8333H15.8333C16.2754 15.8333 16.6993 15.6577 17.0118 15.3452C17.3244 15.0326 17.5 14.6087 17.5 14.1667V5.83334C17.5 5.39131 17.3244 4.96739 17.0118 4.65483C16.6993 4.34227 16.2754 4.16667 15.8333 4.16667H4.16667C3.72464 4.16667 3.30072 4.34227 2.98816 4.65483C2.67559 4.96739 2.5 5.39131 2.5 5.83334V14.1667C2.5 14.6087 2.67559 15.0326 2.98816 15.3452C3.30072 15.6577 3.72464 15.8333 4.16667 15.8333Z" stroke="#3658F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>
                        </div>
                        <div class="flex font-medium items-center template-title tracking-wider">
                            SMS Campaign
                        </div>
                    </div>
                    <div class="mt-4 template-content-wrapper text-[#686D79] text-[14px]">
                        Lorem ipsum dolor sit amet consectetur. Aliquet sed sit elit sem.
                    </div>
                </div>
                <div class="card">
                    <div class="flex gap-3 template-title-wrapper">
                        <div class="bg-primary-50 p-2 rounded-full template-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g id="bell">
                                    <path id="Vector" d="M12.5 14.1667H16.6666L15.4958 12.9958C15.3386 12.8386 15.2139 12.6519 15.1288 12.4464C15.0437 12.2409 14.9999 12.0207 15 11.7983V9.16667C15.0001 8.13245 14.6796 7.12362 14.0827 6.27907C13.4857 5.43453 12.6416 4.7958 11.6666 4.45083V4.16667C11.6666 3.72464 11.4911 3.30072 11.1785 2.98816C10.8659 2.67559 10.442 2.5 9.99998 2.5C9.55795 2.5 9.13403 2.67559 8.82147 2.98816C8.50891 3.30072 8.33331 3.72464 8.33331 4.16667V4.45083C6.39165 5.1375 4.99998 6.99 4.99998 9.16667V11.7992C4.99998 12.2475 4.82165 12.6783 4.50415 12.9958L3.33331 14.1667H7.49998M12.5 14.1667H7.49998M12.5 14.1667V15C12.5 15.663 12.2366 16.2989 11.7677 16.7678C11.2989 17.2366 10.663 17.5 9.99998 17.5C9.33694 17.5 8.70105 17.2366 8.23221 16.7678C7.76337 16.2989 7.49998 15.663 7.49998 15V14.1667" stroke="#3658F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>
                        </div>
                        <div class="flex font-medium items-center template-title tracking-wider">
                            Notification Campaign
                        </div>
                    </div>
                    <div class="mt-4 template-content-wrapper text-[#686D79] text-[14px]">
                        Lorem ipsum dolor sit amet consectetur. Aliquet sed sit elit sem.
                    </div>
                </div>
                <div class="card card-final flex items-center justify-center px-6 py-[21px] relative">
                    <img src="../../public/img/svg/try-ai-tool.svg" class="absolute inset-0 w-full z-0" alt="" />
                    <div class="content-wrapper relative z-10">
                        <h2 class="font-bold mb-1 text-white">
                            Need some help?
                        </h2>
                        <p class="content font-normal mb-3 text-sm text-white">
                            We are here to assist you!
                        </p>
                        <button class="bg-white border border-white cursor-pointer flex gap-[6px] hover:bg-opacity-90 items-center justify-center px-4 py-2 relative rounded-md z-10">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="chip">
                                    <path id="Vector" d="M7.5 2.5V4.16667M12.5 2.5V4.16667M7.5 15.8333V17.5M12.5 15.8333V17.5M4.16667 7.5H2.5M4.16667 12.5H2.5M17.5 7.5H15.8333M17.5 12.5H15.8333M5.83333 15.8333H14.1667C14.6087 15.8333 15.0326 15.6577 15.3452 15.3452C15.6577 15.0326 15.8333 14.6087 15.8333 14.1667V5.83333C15.8333 5.39131 15.6577 4.96738 15.3452 4.65482C15.0326 4.34226 14.6087 4.16667 14.1667 4.16667H5.83333C5.39131 4.16667 4.96738 4.34226 4.65482 4.65482C4.34226 4.96738 4.16667 5.39131 4.16667 5.83333V14.1667C4.16667 14.6087 4.34226 15.0326 4.65482 15.3452C4.96738 15.6577 5.39131 15.8333 5.83333 15.8333ZM7.5 7.5H12.5V12.5H7.5V7.5Z" stroke="#3658F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>
                            <span class="font-medium text-primary text-sm">Try our AI Tool</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- guides -->
        <div class="mb-10 px-8">
            <div class="flex font-bold items-center justify-between mb-6 text-lg">
                <p>
                    Our Guides
                </p>
                <button class="flex font-medium gap-[6px] items-center">
                    <span class="text-base text-primary">
                        View All Guides
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                        <path stroke="#3658F7" stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

            <div class="gap-6 grid grid-cols-4">
                <div v-for="guideCard in guideCards" :key="guideCard.name" class="card guide-card">
                    <div class="guide-image min-h-[160px]">
                        <img class="object-contain rounded-t-lg w-full" :src="guideCard.backgroundImage" alt="" />
                    </div>
                    <div class="guide-content p-5">
                        <p class="font-bold text-primary text-sm">
                            {{ guideCard.contenTitle }}
                        </p>
                        <h3 class="flex font-bold items-start justify-between mt-2 relative text-black">
                            <span>
                                How to create my first campaign
                            </span>
                            <button class="cursor-pointer guide-link">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </button>
                        </h3>
                        <p class="mt-2 text-black-300 text-sm">
                            How do you create compelling campaigns that wow your colleagues...
                        </p>
                        <div class="flex gap-3 items-center mt-4 profile-wrapper">
                            <div class="profile-img">
                                <img 
                                    :src="guideCard.profileImage" alt=""
                                />
                            </div>
                            <div class="profile-content-wrapper">
                                <div class="font-bold profile-name text-black">
                                    {{ guideCard.name }}
                                </div>
                                <div class="profile-date text-[12px] text-black-300">
                                    2023-07-15
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
    


    const guideCards = [
        {
            name:            'Zaire Ekstrom Bothman',
            date:            '2023-07-15',
            backgroundImage: '/img/samples/guide-microphone.png',
            profileImage:    '/img/samples/Avatar.png',
            contenTitle:     "Guide",
        },
        {
            name:            'Paityn Franci',
            date:            '2023-07-15',
            backgroundImage: '/img/samples/guide-vr.png',
            profileImage:    '/img/samples/Avatar_1.png',
            contenTitle:     "Blog Post",
        },
        {
            name:            'Giana Carder',
            date:            '2023-07-15',
            backgroundImage: '/img/samples/guide-office.png',
            profileImage:    '/img/samples/Avatar_2.png',
            contenTitle:     "Guide",
        },
        {
            name:            'Randy Culhane',
            date:            '2023-07-15',
            backgroundImage: '/img/samples/guide-tower.png',
            profileImage:    '/img/samples/Avatar_3.png',
            contenTitle:     "Blog Post",
        }

    ]

</script>


<style scoped lang="scss">

    /* banner */

    .banner {
        background: linear-gradient( 91.17deg, #3658F7 -34.73%, #5A76F8 74.42% );
        position: relative;
        min-height: 138px;

        .bg {
            position: absolute;
            top: 0;
            right: 0;
            max-width: 50%;
        }
    }

    td.status {

        .status-label {
            background-color: #ECFDF3;
            color: #027A48;
            max-width: 70px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            padding: 5px 5px 5px 15px;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                background-color: #12B76A;
                width: 8px;
                aspect-ratio: 1;
                border-radius: 100%;
                top: 50%;
                left: 10px;
                transform: translateY(-50%);
            }
        }

        &.draft {

            .status-label {
                background-color: #F2F4F7;
                color: #0F172A;

                &::before {
                    background-color: #686D79;
                }
            }
        }
    }

    .campaigns-table td {
        padding-top: 10px;
    }

    .card {
        height: 140px;
        overflow: hidden;
    }

    .card.guide-card {
        height: unset;
        min-height: 384px;
    }

    .guide-card {
        padding: 0;
    }

</style>