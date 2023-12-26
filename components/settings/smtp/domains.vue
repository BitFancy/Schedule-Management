<template>
    <div v-if="domains?.length > 1" class="flex flex-col gap-8">
        <!-- search Domains -->
        <div class="flex gap-5 items-center justify-between w-full">
            <div class="flex gap-4 items-center">
                <div class="flex flex-col flex-grow gap-[10px] max-w-md">
                    <div class="relative text-black-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 left-[18px] top-[11px] w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                        <input id="search-dedicated-ip" type="search" name="Search IPs" placeholder="Search Domains" class="bg-white border border-gray-300 font-normal leading-6 pl-12 py-[9px] rounded-lg text-gray-400 text-sm w-full" />
                    </div>
                </div>
            </div>
            <ui-button class="bg-primary border border-primary-600 flex font-medium items-center justify-center text-gray-50 text-sm" @click="addNewDomainToggle">
                Add Domain

                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_4801)">
                        <path d="M7.99998 5.33333V10.6667M5.33331 8H10.6666M14.6666 8C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8C1.33331 4.3181 4.31808 1.33333 7.99998 1.33333C11.6819 1.33333 14.6666 4.3181 14.6666 8Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_4801">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </ui-button>

            <ui-modal v-model="isNewDomainVisible">
                <!-- modal content -->
                <div class="flex flex-col gap-3">
                    <div class="flex items-center justify-between">
                        <h2 class="flex-grow font-semibold text-3xl text-gray-700">
                            Add Domain
                        </h2>
                        <ui-button class="" @click="addNewDomainToggle">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 1L1 13M1 1L13 13" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </ui-button>
                    </div>
                    <div class="bg-gray-50 border border-gray-200 flex items-center justify-between my-5 px-2 py-1 rounded-lg">
                        <div class="flex flex-grow gap-2 items-center justify-start">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00001 10.6666V7.99998M8.00001 5.33331H8.00668M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00001 14.6666C4.31811 14.6666 1.33334 11.6819 1.33334 7.99998C1.33334 4.31808 4.31811 1.33331 8.00001 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span class="text-[#667085] text-sm">Learn Domains</span>
                        </div>

                        <ui-button class="!px-3 !py-1 bg-white border border-gray-200 flex font-medium gap-2 items-center justify-center text-gray-700 text-sm" @click="addNewDomainToggle">
                            Read Docs
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.833313 9.16665L9.16665 0.833313M9.16665 0.833313H0.833313M9.16665 0.833313V9.16665" stroke="#374151" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </ui-button>
                    </div>
                    <div class="col-span-full">
                        <div class="flex gap-2 items-center justify-start">
                            <label for="region" class="block font-medium text-gray-700 text-sm">Select Region</label>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00001 10.6666V7.99998M8.00001 5.33331H8.00668M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00001 14.6666C4.31811 14.6666 1.33334 11.6819 1.33334 7.99998C1.33334 4.31808 4.31811 1.33331 8.00001 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>

                        <div class="flex gap-3 items-center justify-between mt-2">
                            <div :class="[ region === 'france' ? 'border-primary-500':'' ]" class="border border-solid cursor-pointer flex flex-col gap-3 justify-center p-3 rounded-lg w-1/2" @click="handleRegionClick('france')">
                                <div class="flex items-center justify-between">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_8927)">
                                            <path d="M24 18C24 18.7072 23.719 19.3855 23.219 19.8856C22.7189 20.3857 22.0406 20.6666 21.3333 20.6666H16V3.33331H21.3333C22.0406 3.33331 22.7189 3.61426 23.219 4.11436C23.719 4.61446 24 5.29274 24 5.99998V18Z" fill="#ED2939" />
                                            <path d="M2.66667 3.33331C1.95942 3.33331 1.28115 3.61426 0.781049 4.11436C0.280952 4.61446 0 5.29274 0 5.99998L0 18C0 18.7072 0.280952 19.3855 0.781049 19.8856C1.28115 20.3857 1.95942 20.6666 2.66667 20.6666H8V3.33331H2.66667Z" fill="#002495" />
                                            <path d="M8 3.33331H16V20.6666H8V3.33331Z" fill="#EEEEEE" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_8927">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <span class="bg-yellow font-medium px-2 py-1 rounded-full text-white text-xs">Pro</span>
                                </div>
                                <div class="flex flex-col">
                                    <span class="font-medium text-[#1D2939] text-lg">Germany</span>
                                    <span class="font-normal text-[#667085] text-sm">EU East</span>
                                </div>
                            </div>
                            <div :class="[ region === 'north-america' ? 'border-primary-500':'' ]" class="border border-solid cursor-pointer flex flex-col gap-3 justify-center p-3 rounded-lg w-1/2" @click="handleRegionClick('north-america')">
                                <div class="flex items-center justify-between">
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
                                </div>
                                <div class="flex flex-col">
                                    <span class="font-medium text-[#1D2939] text-lg">West Virginia</span>
                                    <span class="font-normal text-[#667085] text-sm">North America</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-full">
                        <div class="flex gap-2 items-center justify-start">
                            <label for="new-domain" class="block font-medium text-gray-700 text-sm">Enter Domain</label>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00001 10.6666V7.99998M8.00001 5.33331H8.00668M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00001 14.6666C4.31811 14.6666 1.33334 11.6819 1.33334 7.99998C1.33334 4.31808 4.31811 1.33331 8.00001 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="mt-2">
                            <input id="new-domain" name="new-domain" placeholder="email@neodeliver.io" type="password" class="bg-white/5 block border border-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-500 font-normal leading-6 py-1.5 ring-1 ring-black/10 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-400 w-full" />
                        </div>
                    </div>

                    <div class="flex">
                        <ui-button primary class="bg-primary border-primary-600 flex-1 font-medium text-base text-gray-50">
                            Add Domain
                        </ui-button>
                    </div>
                </div>
            </ui-modal>
        </div>

        <!-- Existing Domains Table -->
        <div class="border border-gray-200 p-5 rounded-xl">
            <table class="border-separate border-spacing-y-4 w-full">
                <thead>
                    <tr>
                        <th class="font-medium text-base text-gray-700 text-left">
                            Domain Name
                        </th>
                        <th class="font-medium text-base text-gray-700 text-left w-64">
                            Status
                        </th>
                        <th class="font-medium text-base text-gray-700 text-left w-44">
                            Mails Sent
                        </th>
                        <th class="font-medium text-base text-gray-700 text-right w-9">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(domain, index) in domains" :key="domain.id">
                        <td :class="{ '!border-b-0': index === domains.length - 1 }" class="border-b border-gray-200">
                            <nuxt-link :href="`/settings/smtp/1`" class="flex flex-col gap-2 items-start justify-between py-2">
                                <span class="font-normal text-base text-gray-700">{{ domain.domainName }}</span>
                                <span class="font-normal text-gray-500 text-xs">
                                    Added on 12-08-2020
                                </span>
                            </nuxt-link>
                        </td>
                        <td :class="{ '!border-b-0': index === domains.length - 1 }" class="border-b border-gray-200">
                            <span :class="[ domain.status == 'active' ? 'bg-green-50 text-green':'', domain.status == 'verification pending' ? 'bg-primary-50 text-primary':'' , domain.status == 'invalid configuration' ? 'bg-red-50 text-red':'', 'px-4 py-1 text-sm font-normal rounded-full border' ]">
                                {{ domain.status }}
                            </span>
                        </td>
                        <td :class="{ '!border-b-0': index === domains.length - 1 }" class="border-b border-gray-200 font-normal text-gray text-sm">
                            {{ domain.mailsSentLastMonth }}
                        </td>
                        <td :class="{ '!border-b-0': index === domains.length - 1 }" class="border-b border-gray-200 text-right">
                            <div class="flex gap-2 items-center justify-end">
                                <nuxt-link to="/settings/smtp/1" class="border border-gray-200 inline-block p-2 rounded-lg">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 12L13.3332 12.7294C12.9796 13.1161 12.5001 13.3333 12.0001 13.3333C11.5001 13.3333 11.0205 13.1161 10.6669 12.7294C10.3128 12.3434 9.83332 12.1267 9.33345 12.1267C8.83359 12.1267 8.35409 12.3434 7.99998 12.7294M2 13.3333H3.11636C3.44248 13.3333 3.60554 13.3333 3.75899 13.2965C3.89504 13.2638 4.0251 13.21 4.1444 13.1368C4.27895 13.0544 4.39425 12.9391 4.62486 12.7085L13 4.33333C13.5523 3.78104 13.5523 2.88561 13 2.33333C12.4477 1.78104 11.5523 1.78104 11 2.33333L2.62484 10.7085C2.39424 10.9391 2.27894 11.0544 2.19648 11.1889C2.12338 11.3082 2.0695 11.4383 2.03684 11.5744C2 11.7278 2 11.8909 2 12.217V13.3333Z" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </nuxt-link>
                                <button class="border border-red inline-block p-2 rounded-lg" @click="deleteDomain(domain.id)">
                                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.66667 4V3.46667C9.66667 2.71993 9.66667 2.34656 9.52134 2.06135C9.39351 1.81046 9.18954 1.60649 8.93865 1.47866C8.65344 1.33333 8.28007 1.33333 7.53333 1.33333H6.46667C5.71993 1.33333 5.34656 1.33333 5.06135 1.47866C4.81046 1.60649 4.60649 1.81046 4.47866 2.06135C4.33333 2.34656 4.33333 2.71993 4.33333 3.46667V4M5.66667 7.66667V11M8.33333 7.66667V11M1 4H13M11.6667 4V11.4667C11.6667 12.5868 11.6667 13.1468 11.4487 13.5746C11.2569 13.951 10.951 14.2569 10.5746 14.4487C10.1468 14.6667 9.58677 14.6667 8.46667 14.6667H5.53333C4.41323 14.6667 3.85318 14.6667 3.42535 14.4487C3.04903 14.2569 2.74307 13.951 2.55132 13.5746C2.33333 13.1468 2.33333 12.5868 2.33333 11.4667V4" stroke="#E53935" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Add/Edit Domain Form -->
        <div v-show="isNewDomainVisible" class="add-new-domain-wrapper">
            <div v-if="!editMode">
                <h2 class="font-bold mb-3 text-lg">
                    Add Domain
                </h2>
                <form @submit.prevent="addDomain">
                    <!-- Form fields for adding a new domain -->
                    <button type="submit" class="bg-blue-500 px-4 py-2 rounded shadow">
                        Add Domain
                    </button>
                </form>
            </div>
            <div v-else>
                <h2 class="font-bold mb-3 text-lg">
                    Edit Domain
                </h2>
                <form @submit.prevent="updateDomain">
                    <!-- Form fields for editing an existing domain -->
                    <button type="submit" class="bg-blue-500 px-4 py-2 rounded shadow text-white">
                        Update Domain
                    </button>
                    <button class="bg-gray-500 ml-2 px-4 py-2 rounded shadow text-white" @click="cancelEdit">
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    </div>

    <!-- New Domains -->
    <new-domain v-else />
</template>
  
<script setup>

    const domains = ref([
        { id: 1, status: 'active', domainName: 'example.com', hostname: 'smtp.example.com', environment: 'Production', dataCenter: 'EU', mailsSentLastMonth: 1500 },
        { id: 2, status: 'verification pending', domainName: 'test.com', hostname: 'smtp.test.com', environment: 'Staging', dataCenter: 'EU', mailsSentLastMonth: 500 },
        { id: 3, status: 'invalid configuration', domainName: 'test.com', hostname: 'smtp.test.com', environment: 'Development', dataCenter: 'US', mailsSentLastMonth: 1500 },
        { id: 4, status: 'active', domainName: 'example.com', hostname: 'smtp.test.com', environment: 'Staging', dataCenter: 'JYP', mailsSentLastMonth: 600 },
        { id: 5, status: 'active', domainName: 'test.com', hostname: 'smtp.test.com', environment: 'Development', dataCenter: 'US', mailsSentLastMonth: 100 },
        { id: 6, status: 'active', domainName: 'test.com', hostname: 'smtp.test.com', environment: 'Production', dataCenter: 'US', mailsSentLastMonth: 500 },
        { id: 7, status: 'active', domainName: 'example.com', hostname: 'smtp.test.com', environment: 'Staging', dataCenter: 'EU', mailsSentLastMonth: 500 },
        { id: 8, status: 'active', domainName: 'test.com', hostname: 'smtp.test.com', environment: 'Staging', dataCenter: 'US', mailsSentLastMonth: 100 },
        { id: 9, status: 'active', domainName: 'sample.com', hostname: 'smtp.test.com', environment: 'Production', dataCenter: 'US', mailsSentLastMonth: 500 }
    ])
  
    const newDomain = ref({
        domainName:         '',
        hostname:           '',
        environment:        'Production',
        dataCenter:         'EU',
        mailsSentLastMonth: 0,
    })
  
    const editMode = ref(false)
    const editingDomainId = ref(null)
    const isNewDomainVisible = ref(false)


    const region = ref(null)
    const handleRegionClick = (selectedRegion) => {
        console.log(selectedRegion)
        region.value = region.value == selectedRegion ? null : selectedRegion
        console.log(region.value)
    }
  
    const addDomain = () => {
        // Add new domain logic goes here...
        console.log('New Domain:', newDomain.value)
        // Reset form fields
        resetForm()
    }

    const addNewDomainToggle = () => {
        isNewDomainVisible.value = !isNewDomainVisible.value
    }
  
    const updateDomain = () => {
        // Update existing domain logic goes here...
        console.log('Updated Domain:', newDomain.value)
        // Reset form fields
        resetForm()
    }
  
    const deleteDomain = (domainId) => {
        // Delete domain logic goes here...
        console.log('Deleting Domain:', domainId)
    }
  
    const cancelEdit = () => {
        // Cancel edit mode and reset form fields
        resetForm()
    }
  
    const resetForm = () => {
        newDomain.value = {
            domainName:         '',
            hostname:           '',
            environment:        'Production',
            dataCenter:         'EU',
            mailsSentLastMonth: 0,
        }
        editMode.value = false
        editingDomainId.value = null
    }

</script>