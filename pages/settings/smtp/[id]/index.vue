<template>
    <div>
        <ui-button class="border flex font-medium gap-2 items-center justify-center my-2 px-4 py-0 rounded-lg text-gray-700 text-sm w-36">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.8333 6.99999H1.16663M1.16663 6.99999L6.99996 12.8333M1.16663 6.99999L6.99996 1.16666" stroke="#374151" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Back
        </ui-button>

        <div class="border flex gap-2 items-center justify-center my-4 p-4 rounded-lg">
            <div class="bg-gray-100 flex h-10 items-center justify-center rounded-full w-10">
                <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.82288 13H24.177M2.82288 13C2.82288 18.8968 7.60317 23.6771 13.5 23.6771M2.82288 13C2.82288 7.1032 7.60317 2.32291 13.5 2.32291M24.177 13C24.177 18.8968 19.3968 23.6771 13.5 23.6771M24.177 13C24.177 7.1032 19.3968 2.32291 13.5 2.32291M13.5 2.32291C16.1706 5.24667 17.6883 9.04096 17.7708 13C17.6883 16.959 16.1706 20.7533 13.5 23.6771M13.5 2.32291C10.8293 5.24667 9.3116 9.04096 9.22913 13C9.3116 16.959 10.8293 20.7533 13.5 23.6771" stroke="#6B7280" stroke-width="1.28125" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div class="flex-grow">
                <div :href="`/settings/smtp/1`" class="flex flex-col items-start justify-between">
                    <span class="font-medium text-gray-700 text-xl">https://neodeliver.io</span>
                    <span class="font-normal text-gray text-sm">Domain URL</span>
                </div>
            </div>

            <div class="flex gap-2 items-center justify-center">
                <ui-button class="bg-primary border border-primary-600 flex-grow font-medium px-6 text-gray-50 text-sm">
                    Verify Domain
                </ui-button>

                <div class="border cursor-pointer flex flex-grow h-full items-center justify-center p-3 rounded-lg">
                    <!-- SVG content -->
                    <svg width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 10C2.55228 10 3 9.55228 3 9C3 8.44772 2.55228 8 2 8C1.44772 8 1 8.44772 1 9C1 9.55228 1.44772 10 2 10Z" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2 17C2.55228 17 3 16.5523 3 16C3 15.4477 2.55228 15 2 15C1.44772 15 1 15.4477 1 16C1 16.5523 1.44772 17 2 17Z" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>


        <div class="flex gap-5 items-center justify-between my-8 text-sm w-10/12">
            <div class="flex gap-3 items-center justify-center">
                <span class="font-normal text-gray-700 text-sm">Status</span>
                <span class="bg-primary-50 border font-normal px-3 py-0.5 rounded-full text-primary text-sm">
                    Pending
                </span>
            </div>
            <div class="flex gap-3 items-center justify-center">
                <span class="font-normal text-gray-700 text-sm">Region</span>
                <div class="bg-gray-50 border border-gray-200 cursor-pointer flex flex-grow gap-3 items-center justify-between px-2 py-1 rounded-lg">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_8937)">
                            <path d="M24.13 4.66665C23.668 3.87265 22.818 3.33331 21.8333 3.33331H12.5V4.66665H24.13ZM0.5 16.6666H24.5V18H0.5V16.6666ZM12.5 11.3333H24.5V12.6666H12.5V11.3333ZM12.5 8.66665H24.5V9.99998H12.5V8.66665ZM0.5 14H24.5V15.3333H0.5V14ZM3.16667 20.6666H21.8333C22.818 20.6666 23.668 20.1273 24.13 19.3333H0.87C1.332 20.1273 2.182 20.6666 3.16667 20.6666ZM12.5 5.99998H24.5V7.33331H12.5V5.99998Z" fill="#B22334" />
                            <path d="M0.545333 18.4527C0.556667 18.5147 0.569333 18.5767 0.584667 18.6374C0.602 18.7047 0.623333 18.7694 0.646 18.8347C0.705333 19.0074 0.777333 19.174 0.868 19.33L0.87 19.3334H24.13L24.1313 19.3307C24.2208 19.1735 24.2949 19.0081 24.3527 18.8367C24.3966 18.7116 24.4305 18.5832 24.454 18.4527C24.4813 18.306 24.5 18.1554 24.5 18H0.5C0.5 18.1554 0.518667 18.3054 0.545333 18.4527ZM0.5 15.3334H24.5V16.6667H0.5V15.3334ZM0.5 12.6667V14H24.5V12.6667H12.5H0.5ZM12.5 10H24.5V11.3334H12.5V10ZM12.5 7.33335H24.5V8.66669H12.5V7.33335ZM0.585333 5.36269C0.602 5.29469 0.625333 5.23002 0.646667 5.16469C0.623515 5.22982 0.603054 5.29587 0.585333 5.36269ZM12.5 6.00002H24.5C24.5 5.84469 24.4813 5.69402 24.454 5.54669C24.4307 5.41609 24.3965 5.28765 24.352 5.16269C24.2942 4.99056 24.2199 4.82445 24.13 4.66669H12.5V6.00002Z" fill="#EEEEEE" />
                            <path d="M12.5 3.33331H3.16667C2.45942 3.33331 1.78115 3.61426 1.28105 4.11436C0.780952 4.61446 0.5 5.29274 0.5 5.99998L0.5 12.6666H12.5V3.33331Z" fill="#3C3B6E" />
                            <path d="M1.83401 5.15069L2.24601 5.45002L2.08868 5.93335L2.50001 5.63469L2.91201 5.93335L2.75468 5.45002L3.16668 5.15069H2.65735L2.50001 4.66669L2.34335 5.15069H1.83401ZM3.16735 6.48402L3.57935 6.78335L3.42201 7.26669L3.83335 6.96802L4.24535 7.26669L4.08802 6.78335L4.50002 6.48402H3.99068L3.83335 6.00002L3.67668 6.48402H3.16735ZM5.83402 6.48402L6.24602 6.78335L6.08868 7.26669L6.50002 6.96802L6.91201 7.26669L6.75468 6.78335L7.16668 6.48402H6.65735L6.50002 6.00002L6.34335 6.48402H5.83402ZM8.50068 6.48402L8.91268 6.78335L8.75535 7.26669L9.16668 6.96802L9.57868 7.26669L9.42135 6.78335L9.83335 6.48402H9.32402L9.16668 6.00002L9.01002 6.48402H8.50068ZM3.16735 9.15069L3.57935 9.45002L3.42201 9.93335L3.83335 9.63469L4.24535 9.93335L4.08802 9.45002L4.50002 9.15069H3.99068L3.83335 8.66669L3.67668 9.15069H3.16735ZM5.83402 9.15069L6.24602 9.45002L6.08868 9.93335L6.50002 9.63469L6.91201 9.93335L6.75468 9.45002L7.16668 9.15069H6.65735L6.50002 8.66669L6.34335 9.15069H5.83402ZM8.50068 9.15069L8.91268 9.45002L8.75535 9.93335L9.16668 9.63469L9.57868 9.93335L9.42135 9.45002L9.83335 9.15069H9.32402L9.16668 8.66669L9.01002 9.15069H8.50068ZM4.50068 5.15069L4.91268 5.45002L4.75535 5.93335L5.16668 5.63469L5.57868 5.93335L5.42135 5.45002L5.83335 5.15069H5.32402L5.16668 4.66669L5.01002 5.15069H4.50068ZM7.16735 5.15069L7.57935 5.45002L7.42202 5.93335L7.83335 5.63469L8.24535 5.93335L8.08802 5.45002L8.50002 5.15069H7.99068L7.83335 4.66669L7.67668 5.15069H7.16735ZM9.83401 5.15069L10.246 5.45002L10.0887 5.93335L10.5 5.63469L10.912 5.93335L10.7547 5.45002L11.1667 5.15069H10.6573L10.5 4.66669L10.3433 5.15069H9.83401ZM1.83401 7.81735L2.24601 8.11669L2.08868 8.60002L2.50001 8.30135L2.91201 8.60002L2.75468 8.11669L3.16668 7.81735H2.65735L2.50001 7.33335L2.34335 7.81735H1.83401ZM4.75535 8.60002L5.16668 8.30135L5.57868 8.60002L5.42135 8.11669L5.83335 7.81735H5.32402L5.16668 7.33335L5.01002 7.81735H4.50068L4.91268 8.11669L4.75535 8.60002ZM7.16735 7.81735L7.57935 8.11669L7.42202 8.60002L7.83335 8.30135L8.24535 8.60002L8.08802 8.11669L8.50002 7.81735H7.99068L7.83335 7.33335L7.67668 7.81735H7.16735ZM9.83401 7.81735L10.246 8.11669L10.0887 8.60002L10.5 8.30135L10.912 8.60002L10.7547 8.11669L11.1667 7.81735H10.6573L10.5 7.33335L10.3433 7.81735H9.83401ZM1.83401 10.484L2.24601 10.7834L2.08868 11.2667L2.50001 10.968L2.91201 11.2667L2.75468 10.7834L3.16668 10.484H2.65735L2.50001 10L2.34335 10.484H1.83401ZM4.75535 11.2667L5.16668 10.968L5.57868 11.2667L5.42135 10.7834L5.83335 10.484H5.32402L5.16668 10L5.01002 10.484H4.50068L4.91268 10.7834L4.75535 11.2667ZM7.16735 10.484L7.57935 10.7834L7.42202 11.2667L7.83335 10.968L8.24535 11.2667L8.08802 10.7834L8.50002 10.484H7.99068L7.83335 10L7.67668 10.484H7.16735ZM9.83401 10.484L10.246 10.7834L10.0887 11.2667L10.5 10.968L10.912 11.2667L10.7547 10.7834L11.1667 10.484H10.6573L10.5 10L10.3433 10.484H9.83401Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_8937">
                                <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span class="text-gray-700 text-sm">West Virginia (North America)</span>
                </div>
            </div>
            <div class="flex gap-3 items-center justify-center">
                <span class="font-normal text-gray-700 text-sm">Created</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_9260)">
                        <path d="M9.99996 5.00001V10L13.3333 11.6667M18.3333 10C18.3333 14.6024 14.6023 18.3333 9.99996 18.3333C5.39759 18.3333 1.66663 14.6024 1.66663 10C1.66663 5.39763 5.39759 1.66667 9.99996 1.66667C14.6023 1.66667 18.3333 5.39763 18.3333 10Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_9260">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <span class="text-gray-500 text-xs">
                    12, October 2023
                </span>
            </div>
        </div>


        <div class="flex flex-col gap-2 items-center justify-center my-10">
            <span class="font-semibold text-gray-700 text-lg">Get your email delivered</span>
            <span class="text-gray-500 text-sm">
                Add a DNS record to point your domains to our server
            </span>
            <div class="bg-gray-50 border border-gray-200 flex items-center justify-between my-5 px-2 py-1 rounded-lg w-6/12">
                <div class="flex flex-grow gap-2 items-center justify-start">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00001 10.6666V7.99998M8.00001 5.33331H8.00668M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00001 14.6666C4.31811 14.6666 1.33334 11.6819 1.33334 7.99998C1.33334 4.31808 4.31811 1.33331 8.00001 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span class="text-[#667085] text-sm">Learn more about domains and SMTPs</span>
                </div>
                <ui-button class="!px-3 !py-1 bg-white border border-gray-200 flex font-medium gap-2 items-center justify-center text-gray-700 text-sm">
                    Read Docs
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.833313 9.16665L9.16665 0.833313M9.16665 0.833313H0.833313M9.16665 0.833313V9.16665" stroke="#374151" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </ui-button>
            </div>
        </div>


        <!-- Table -->
        <div class="flex items-center justify-between my-2">
            <span class="font-medium mt-2 text-[#1D2939] text-base">TXT Records</span>
            <div class="flex gap-4 items-center justify-center text-sm">
                <span class="mt-2 text-[#1D2939] text-sm">Select Registrar</span>
                <ui-select class="leading-6 text-gray-500 text-sm w-40" :items="items('namecheap', 'godaddy', 'hostgator')" />
            </div>
        </div>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="dark:text-gray-400 rtl:text-right text-gray-500 text-left text-sm w-full">
                <thead class="bg-gray-50">
                    <tr>
                        <th scope="col" class="font-normal leading-6 px-6 py-3 text-gray-500 text-sm w-2/12">
                            Type
                        </th>
                        <th scope="col" class="font-normal leading-6 px-6 py-3 text-gray-500 text-sm w-2/12">
                            Host
                        </th>
                        <th scope="col" class="font-normal leading-6 px-6 py-3 text-gray-500 text-sm">
                            Value
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 hover:bg-gray-50">
                        <td scope="row" class="dark:text-white font-medium px-6 py-4 text-gray-900 whitespace-nowrap">
                            <div class="flex items-center justify-between">
                                <span class="font-medium text-gray-800 text-sm">TXT</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00001 10.6666V7.99998M8.00001 5.33331H8.00668M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00001 14.6666C4.31811 14.6666 1.33334 11.6819 1.33334 7.99998C1.33334 4.31808 4.31811 1.33331 8.00001 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center justify-between">
                                <span class="font-normal text-gray-700 text-sm">Email new</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_9722)">
                                        <path d="M5.33325 5.33333V3.46666C5.33325 2.71992 5.33325 2.34656 5.47858 2.06134C5.60641 1.81046 5.81038 1.60648 6.06126 1.47865C6.34648 1.33333 6.71985 1.33333 7.46659 1.33333H12.5333C13.28 1.33333 13.6534 1.33333 13.9386 1.47865C14.1895 1.60648 14.3934 1.81046 14.5213 2.06134C14.6666 2.34656 14.6666 2.71992 14.6666 3.46666V8.53333C14.6666 9.28007 14.6666 9.65343 14.5213 9.93865C14.3934 10.1895 14.1895 10.3935 13.9386 10.5213C13.6534 10.6667 13.28 10.6667 12.5333 10.6667H10.6666M3.46659 14.6667H8.53325C9.27999 14.6667 9.65336 14.6667 9.93857 14.5213C10.1895 14.3935 10.3934 14.1895 10.5213 13.9386C10.6666 13.6534 10.6666 13.2801 10.6666 12.5333V7.46666C10.6666 6.71992 10.6666 6.34656 10.5213 6.06134C10.3934 5.81046 10.1895 5.60648 9.93857 5.47865C9.65336 5.33333 9.27999 5.33333 8.53325 5.33333H3.46659C2.71985 5.33333 2.34648 5.33333 2.06126 5.47865C1.81038 5.60648 1.60641 5.81046 1.47858 6.06134C1.33325 6.34656 1.33325 6.71993 1.33325 7.46666V12.5333C1.33325 13.2801 1.33325 13.6534 1.47858 13.9386C1.60641 14.1895 1.81038 14.3935 2.06126 14.5213C2.34648 14.6667 2.71985 14.6667 3.46659 14.6667Z" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_9722">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center justify-between">
                                <nuxt-link :href="`/settings/smtp/1`" class="flex flex-col font-medium hover:text-primary-300 items-start justify-between leading-6 text-primary-500 text-sm">
                                    neodeliver-smtp.us-east-1.northstars.com
                                </nuxt-link>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_9722)">
                                        <path d="M5.33325 5.33333V3.46666C5.33325 2.71992 5.33325 2.34656 5.47858 2.06134C5.60641 1.81046 5.81038 1.60648 6.06126 1.47865C6.34648 1.33333 6.71985 1.33333 7.46659 1.33333H12.5333C13.28 1.33333 13.6534 1.33333 13.9386 1.47865C14.1895 1.60648 14.3934 1.81046 14.5213 2.06134C14.6666 2.34656 14.6666 2.71992 14.6666 3.46666V8.53333C14.6666 9.28007 14.6666 9.65343 14.5213 9.93865C14.3934 10.1895 14.1895 10.3935 13.9386 10.5213C13.6534 10.6667 13.28 10.6667 12.5333 10.6667H10.6666M3.46659 14.6667H8.53325C9.27999 14.6667 9.65336 14.6667 9.93857 14.5213C10.1895 14.3935 10.3934 14.1895 10.5213 13.9386C10.6666 13.6534 10.6666 13.2801 10.6666 12.5333V7.46666C10.6666 6.71992 10.6666 6.34656 10.5213 6.06134C10.3934 5.81046 10.1895 5.60648 9.93857 5.47865C9.65336 5.33333 9.27999 5.33333 8.53325 5.33333H3.46659C2.71985 5.33333 2.34648 5.33333 2.06126 5.47865C1.81038 5.60648 1.60641 5.81046 1.47858 6.06134C1.33325 6.34656 1.33325 6.71993 1.33325 7.46666V12.5333C1.33325 13.2801 1.33325 13.6534 1.47858 13.9386C1.60641 14.1895 1.81038 14.3935 2.06126 14.5213C2.34648 14.6667 2.71985 14.6667 3.46659 14.6667Z" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_9722">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>



        <!-- Table -->
        <div class="flex items-center justify-between mb-2 mt-4">
            <span class="font-medium mt-2 text-[#1D2939] text-base">CNAME Records</span>
        </div>
        <div class="mb-4 overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="dark:text-gray-400 rtl:text-right text-gray-500 text-left text-sm w-full">
                <thead class="bg-gray-50">
                    <tr>
                        <th scope="col" class="font-normal leading-6 px-6 py-3 text-gray-500 text-sm w-2/12">
                            Type
                        </th>
                        <th scope="col" class="font-normal leading-6 px-6 py-3 text-gray-500 text-sm w-2/12">
                            Host
                        </th>
                        <th scope="col" class="font-normal leading-6 px-6 py-3 text-gray-500 text-sm">
                            Value
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 hover:bg-gray-50">
                        <td scope="row" class="dark:text-white font-medium px-6 py-4 text-gray-900 whitespace-nowrap">
                            <div class="flex items-center justify-between">
                                <span class="font-medium text-gray-800 text-sm">CNAME</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00001 10.6666V7.99998M8.00001 5.33331H8.00668M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00001 14.6666C4.31811 14.6666 1.33334 11.6819 1.33334 7.99998C1.33334 4.31808 4.31811 1.33331 8.00001 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center justify-between">
                                <span class="font-normal text-gray-700 text-sm">kn5930</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_9722)">
                                        <path d="M5.33325 5.33333V3.46666C5.33325 2.71992 5.33325 2.34656 5.47858 2.06134C5.60641 1.81046 5.81038 1.60648 6.06126 1.47865C6.34648 1.33333 6.71985 1.33333 7.46659 1.33333H12.5333C13.28 1.33333 13.6534 1.33333 13.9386 1.47865C14.1895 1.60648 14.3934 1.81046 14.5213 2.06134C14.6666 2.34656 14.6666 2.71992 14.6666 3.46666V8.53333C14.6666 9.28007 14.6666 9.65343 14.5213 9.93865C14.3934 10.1895 14.1895 10.3935 13.9386 10.5213C13.6534 10.6667 13.28 10.6667 12.5333 10.6667H10.6666M3.46659 14.6667H8.53325C9.27999 14.6667 9.65336 14.6667 9.93857 14.5213C10.1895 14.3935 10.3934 14.1895 10.5213 13.9386C10.6666 13.6534 10.6666 13.2801 10.6666 12.5333V7.46666C10.6666 6.71992 10.6666 6.34656 10.5213 6.06134C10.3934 5.81046 10.1895 5.60648 9.93857 5.47865C9.65336 5.33333 9.27999 5.33333 8.53325 5.33333H3.46659C2.71985 5.33333 2.34648 5.33333 2.06126 5.47865C1.81038 5.60648 1.60641 5.81046 1.47858 6.06134C1.33325 6.34656 1.33325 6.71993 1.33325 7.46666V12.5333C1.33325 13.2801 1.33325 13.6534 1.47858 13.9386C1.60641 14.1895 1.81038 14.3935 2.06126 14.5213C2.34648 14.6667 2.71985 14.6667 3.46659 14.6667Z" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_9722">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center justify-between">
                                <nuxt-link :href="`/settings/smtp/1`" class="flex flex-col font-medium hover:text-primary-300 items-start justify-between leading-6 text-primary-500 text-sm">
                                    con53ct6xhzlthfur7unnp55xag2jvlo.dkim.amazonses.com
                                </nuxt-link>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_9722)">
                                        <path d="M5.33325 5.33333V3.46666C5.33325 2.71992 5.33325 2.34656 5.47858 2.06134C5.60641 1.81046 5.81038 1.60648 6.06126 1.47865C6.34648 1.33333 6.71985 1.33333 7.46659 1.33333H12.5333C13.28 1.33333 13.6534 1.33333 13.9386 1.47865C14.1895 1.60648 14.3934 1.81046 14.5213 2.06134C14.6666 2.34656 14.6666 2.71992 14.6666 3.46666V8.53333C14.6666 9.28007 14.6666 9.65343 14.5213 9.93865C14.3934 10.1895 14.1895 10.3935 13.9386 10.5213C13.6534 10.6667 13.28 10.6667 12.5333 10.6667H10.6666M3.46659 14.6667H8.53325C9.27999 14.6667 9.65336 14.6667 9.93857 14.5213C10.1895 14.3935 10.3934 14.1895 10.5213 13.9386C10.6666 13.6534 10.6666 13.2801 10.6666 12.5333V7.46666C10.6666 6.71992 10.6666 6.34656 10.5213 6.06134C10.3934 5.81046 10.1895 5.60648 9.93857 5.47865C9.65336 5.33333 9.27999 5.33333 8.53325 5.33333H3.46659C2.71985 5.33333 2.34648 5.33333 2.06126 5.47865C1.81038 5.60648 1.60641 5.81046 1.47858 6.06134C1.33325 6.34656 1.33325 6.71993 1.33325 7.46666V12.5333C1.33325 13.2801 1.33325 13.6534 1.47858 13.9386C1.60641 14.1895 1.81038 14.3935 2.06126 14.5213C2.34648 14.6667 2.71985 14.6667 3.46659 14.6667Z" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_9722">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 hover:bg-gray-50">
                        <td scope="row" class="dark:text-white font-medium px-6 py-4 text-gray-900 whitespace-nowrap">
                            <div class="flex items-center justify-between">
                                <span class="font-medium text-gray-800 text-sm">CNAME</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00001 10.6666V7.99998M8.00001 5.33331H8.00668M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00001 14.6666C4.31811 14.6666 1.33334 11.6819 1.33334 7.99998C1.33334 4.31808 4.31811 1.33331 8.00001 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center justify-between">
                                <span class="font-normal text-gray-700 text-sm">kn5930</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_9722)">
                                        <path d="M5.33325 5.33333V3.46666C5.33325 2.71992 5.33325 2.34656 5.47858 2.06134C5.60641 1.81046 5.81038 1.60648 6.06126 1.47865C6.34648 1.33333 6.71985 1.33333 7.46659 1.33333H12.5333C13.28 1.33333 13.6534 1.33333 13.9386 1.47865C14.1895 1.60648 14.3934 1.81046 14.5213 2.06134C14.6666 2.34656 14.6666 2.71992 14.6666 3.46666V8.53333C14.6666 9.28007 14.6666 9.65343 14.5213 9.93865C14.3934 10.1895 14.1895 10.3935 13.9386 10.5213C13.6534 10.6667 13.28 10.6667 12.5333 10.6667H10.6666M3.46659 14.6667H8.53325C9.27999 14.6667 9.65336 14.6667 9.93857 14.5213C10.1895 14.3935 10.3934 14.1895 10.5213 13.9386C10.6666 13.6534 10.6666 13.2801 10.6666 12.5333V7.46666C10.6666 6.71992 10.6666 6.34656 10.5213 6.06134C10.3934 5.81046 10.1895 5.60648 9.93857 5.47865C9.65336 5.33333 9.27999 5.33333 8.53325 5.33333H3.46659C2.71985 5.33333 2.34648 5.33333 2.06126 5.47865C1.81038 5.60648 1.60641 5.81046 1.47858 6.06134C1.33325 6.34656 1.33325 6.71993 1.33325 7.46666V12.5333C1.33325 13.2801 1.33325 13.6534 1.47858 13.9386C1.60641 14.1895 1.81038 14.3935 2.06126 14.5213C2.34648 14.6667 2.71985 14.6667 3.46659 14.6667Z" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_9722">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center justify-between">
                                <nuxt-link :href="`/settings/smtp/1`" class="flex flex-col font-medium hover:text-primary-300 items-start justify-between leading-6 text-primary-500 text-sm">
                                    con53ct6xhzlthfur7unnp55xag2jvlo.dkim.amazonses.com
                                </nuxt-link>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_9722)">
                                        <path d="M5.33325 5.33333V3.46666C5.33325 2.71992 5.33325 2.34656 5.47858 2.06134C5.60641 1.81046 5.81038 1.60648 6.06126 1.47865C6.34648 1.33333 6.71985 1.33333 7.46659 1.33333H12.5333C13.28 1.33333 13.6534 1.33333 13.9386 1.47865C14.1895 1.60648 14.3934 1.81046 14.5213 2.06134C14.6666 2.34656 14.6666 2.71992 14.6666 3.46666V8.53333C14.6666 9.28007 14.6666 9.65343 14.5213 9.93865C14.3934 10.1895 14.1895 10.3935 13.9386 10.5213C13.6534 10.6667 13.28 10.6667 12.5333 10.6667H10.6666M3.46659 14.6667H8.53325C9.27999 14.6667 9.65336 14.6667 9.93857 14.5213C10.1895 14.3935 10.3934 14.1895 10.5213 13.9386C10.6666 13.6534 10.6666 13.2801 10.6666 12.5333V7.46666C10.6666 6.71992 10.6666 6.34656 10.5213 6.06134C10.3934 5.81046 10.1895 5.60648 9.93857 5.47865C9.65336 5.33333 9.27999 5.33333 8.53325 5.33333H3.46659C2.71985 5.33333 2.34648 5.33333 2.06126 5.47865C1.81038 5.60648 1.60641 5.81046 1.47858 6.06134C1.33325 6.34656 1.33325 6.71993 1.33325 7.46666V12.5333C1.33325 13.2801 1.33325 13.6534 1.47858 13.9386C1.60641 14.1895 1.81038 14.3935 2.06126 14.5213C2.34648 14.6667 2.71985 14.6667 3.46659 14.6667Z" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_9722">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


        <!-- Table -->
        <div class="flex items-center justify-between my-2">
            <span class="font-medium mt-2 text-[#1D2939] text-base">MX Records</span>
        </div>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="dark:text-gray-400 rtl:text-right text-gray-500 text-left text-sm w-full">
                <thead class="bg-gray-50">
                    <tr>
                        <th scope="col" class="font-normal leading-6 px-6 py-3 text-gray-500 text-sm w-2/12">
                            Type
                        </th>
                        <th scope="col" class="font-normal leading-6 px-6 py-3 text-gray-500 text-sm w-2/12">
                            Host
                        </th>
                        <th scope="col" class="font-normal leading-6 px-6 py-3 text-gray-500 text-sm w-2/12">
                            Priority
                        </th>
                        <th scope="col" class="font-normal leading-6 px-6 py-3 text-gray-500 text-sm">
                            Value
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 hover:bg-gray-50">
                        <td scope="row" class="dark:text-white font-medium px-6 py-4 text-gray-900 whitespace-nowrap">
                            <div class="flex items-center justify-between">
                                <span class="font-medium text-gray-800 text-sm">MX</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00001 10.6666V7.99998M8.00001 5.33331H8.00668M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00001 14.6666C4.31811 14.6666 1.33334 11.6819 1.33334 7.99998C1.33334 4.31808 4.31811 1.33331 8.00001 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </td>
                        <td scope="row" class="dark:text-white font-medium px-6 py-4 text-gray-900 whitespace-nowrap">
                            <span class="font-normal text-gray-700 text-sm">10</span>
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center justify-between">
                                <span class="font-normal text-gray-700 text-sm">Email new</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_9722)">
                                        <path d="M5.33325 5.33333V3.46666C5.33325 2.71992 5.33325 2.34656 5.47858 2.06134C5.60641 1.81046 5.81038 1.60648 6.06126 1.47865C6.34648 1.33333 6.71985 1.33333 7.46659 1.33333H12.5333C13.28 1.33333 13.6534 1.33333 13.9386 1.47865C14.1895 1.60648 14.3934 1.81046 14.5213 2.06134C14.6666 2.34656 14.6666 2.71992 14.6666 3.46666V8.53333C14.6666 9.28007 14.6666 9.65343 14.5213 9.93865C14.3934 10.1895 14.1895 10.3935 13.9386 10.5213C13.6534 10.6667 13.28 10.6667 12.5333 10.6667H10.6666M3.46659 14.6667H8.53325C9.27999 14.6667 9.65336 14.6667 9.93857 14.5213C10.1895 14.3935 10.3934 14.1895 10.5213 13.9386C10.6666 13.6534 10.6666 13.2801 10.6666 12.5333V7.46666C10.6666 6.71992 10.6666 6.34656 10.5213 6.06134C10.3934 5.81046 10.1895 5.60648 9.93857 5.47865C9.65336 5.33333 9.27999 5.33333 8.53325 5.33333H3.46659C2.71985 5.33333 2.34648 5.33333 2.06126 5.47865C1.81038 5.60648 1.60641 5.81046 1.47858 6.06134C1.33325 6.34656 1.33325 6.71993 1.33325 7.46666V12.5333C1.33325 13.2801 1.33325 13.6534 1.47858 13.9386C1.60641 14.1895 1.81038 14.3935 2.06126 14.5213C2.34648 14.6667 2.71985 14.6667 3.46659 14.6667Z" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_9722">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center justify-between">
                                <nuxt-link :href="`/settings/smtp/1`" class="flex flex-col font-medium hover:text-primary-300 items-start justify-between leading-6 text-primary-500 text-sm">
                                    neodeliver-smtp.us-east-1.northstars.com
                                </nuxt-link>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_9722)">
                                        <path d="M5.33325 5.33333V3.46666C5.33325 2.71992 5.33325 2.34656 5.47858 2.06134C5.60641 1.81046 5.81038 1.60648 6.06126 1.47865C6.34648 1.33333 6.71985 1.33333 7.46659 1.33333H12.5333C13.28 1.33333 13.6534 1.33333 13.9386 1.47865C14.1895 1.60648 14.3934 1.81046 14.5213 2.06134C14.6666 2.34656 14.6666 2.71992 14.6666 3.46666V8.53333C14.6666 9.28007 14.6666 9.65343 14.5213 9.93865C14.3934 10.1895 14.1895 10.3935 13.9386 10.5213C13.6534 10.6667 13.28 10.6667 12.5333 10.6667H10.6666M3.46659 14.6667H8.53325C9.27999 14.6667 9.65336 14.6667 9.93857 14.5213C10.1895 14.3935 10.3934 14.1895 10.5213 13.9386C10.6666 13.6534 10.6666 13.2801 10.6666 12.5333V7.46666C10.6666 6.71992 10.6666 6.34656 10.5213 6.06134C10.3934 5.81046 10.1895 5.60648 9.93857 5.47865C9.65336 5.33333 9.27999 5.33333 8.53325 5.33333H3.46659C2.71985 5.33333 2.34648 5.33333 2.06126 5.47865C1.81038 5.60648 1.60641 5.81046 1.47858 6.06134C1.33325 6.34656 1.33325 6.71993 1.33325 7.46666V12.5333C1.33325 13.2801 1.33325 13.6534 1.47858 13.9386C1.60641 14.1895 1.81038 14.3935 2.06126 14.5213C2.34648 14.6667 2.71985 14.6667 3.46659 14.6667Z" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_9722">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="bg-[#FFFDF2] border border-yellow-400 flex flex-col gap-2 items-start justify-center my-8 p-4 rounded-lg">
            <span class="font-medium text-base text-yellow-900">Estimated Verification Period</span>
            <span class="text-sm text-yellow-800">
                If you've added all records and still can't verify your domain, note that it takes ~48hrs to our records to propagate. Wait and try again
            </span>
        </div>
    </div>
</template>

<script setup>

    function items() {
        const res = []
        for(var n of arguments) {
            res.push({ name: n })
        }

        return res
    }

</script>
