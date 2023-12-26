<template>
    <div class="flex flex-col gap-8">
        <!-- smtp server -->
        <div class="border md:flex md:flex-col md:grid-cols-1 p-3 rounded-lg sm:gap-4 sm:grid sm:grid-cols-3 sm:items-baseline sm:py-6">
            <h2 class="font-medium text-base text-gray-700">
                SMTP Server
            </h2>
            <div class="flex gap-5 items-center justify-between mt-4 text-sm w-full">
                <label for="comments" class="font-medium text-base text-gray-700">Host</label>
                <div class="bg-gray-50 border border-gray-200 cursor-pointer flex flex-grow gap-3 items-center justify-between px-2 py-1 rounded-lg">
                    <span class="font-normal text-[#667085] text-sm">smtp.neodeliver.io</span>
                    <ui-button class="!p-2 bg-white border border-gray-200 rounded-lg">
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
                    </ui-button>
                </div>
                <label for="candidates" class="font-medium text-base text-gray-700">Port</label>
                <div class="bg-gray-50 border border-gray-200 cursor-pointer flex flex-grow gap-3 items-center justify-between px-2 py-1 rounded-lg">
                    <span class="text-gray-500 text-sm">587</span>
                    <ui-button class="!p-2 bg-white border border-gray-200 rounded-lg">
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
                    </ui-button>
                </div>
                <ui-button class="bg-primary border border-primary-600 font-medium rounded-md text-gray-50 text-sm">
                    Clear mailing queue (50 in queue)
                </ui-button>
            </div>
        </div>

        <!-- Security settings -->
        <div class="border md:flex md:flex-col md:grid-cols-1 md:p-5 rounded-lg sm:gap-4 sm:grid sm:grid-cols-3 sm:py-6">
            <h2 class="font-medium text-base text-gray-700">
                Encryption
            </h2>
            <div class="mt-4 sm:col-span-2 sm:mt-0">
                <div class="space-y-6 w-full">
                    <div class="flex gap-x-3 items-center justify-between relative">
                        <div class="leading-6 text-sm">
                            <label for="comments" class="font-medium text-base text-gray-700">TLS Only</label>
                            <p class="font-normal mt-1 text-gray text-sm">
                                Make sure that emails are sent only to destination email addresses that accept encrypted connections
                            </p>
                        </div>
                        <div class="flex h-6 items-center">
                            <input id="comments" name="comments" type="checkbox" class="border-2 border-gray-500 focus:ring-primary-600 h-4 rounded text-primary-600 w-4" />
                        </div>
                    </div>
                    <div class="border-b h-0.5 w-full" />
                    <div class="flex gap-x-3 items-center justify-between relative">
                        <div class="leading-6 text-sm">
                            <label for="candidates" class="font-medium text-base text-gray-700">Exclude Self-Signed Certificates</label>
                            <p class="font-normal mt-1 text-gray-500 text-sm">
                                Prevents emails from being sent to destination email addresses that utilize self-signed certificates.
                            </p>
                        </div>
                        <div class="flex h-6 items-center">
                            <input id="candidates" name="candidates" type="checkbox" class="border-2 border-gray-500 focus:ring-primary-600 h-4 rounded text-primary-600 w-4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Email Addresses -->
        <div class="border md:flex md:flex-col md:grid-cols-1 md:p-5 rounded-lg sm:gap-4 sm:grid sm:grid-cols-3 sm:py-6">
            <div class="flex items-center justify-between">
                <div class="flex flex-col gap-2 items-start justify-between">
                    <h2 class="font-medium text-base text-gray-700s">
                        Authentification Email Addresses
                    </h2>
                    <p class="font-normal max-w-3xl text-gray-500 text-sm">
                        Manager user accounts that can connect to the SMTP server
                    </p>
                </div>
                <div>
                    <ui-button class="bg-primary border border-primary-600 flex font-medium items-center justify-center text-gray-50 text-sm">
                        Add New Email

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
                </div>
            </div>
            <div class="border-b h-0.5 w-full" />
            <div class="mt-4 sm:col-span-2 sm:mt-0">
                <div class="space-y-6 w-full">
                    <table class="table w-full">
                        <thead>
                            <tr class="bg-white">
                                <th class="!px-0">
                                    <span class="font-medium text-base text-gray-700">Emails</span>
                                </th>
                                <th class="!px-0">
&nbsp;
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(m, index) in emailAddresses" :key="m.address" class="border-b-0">
                                <td :class="{ '!border-b-0': index === emailAddresses.length - 1 }" class="!px-0">
                                    <div class="flex flex-col gap-2 items-start justify-between">
                                        <span class="font-normal text-base text-gray-700">{{ m.address }}</span>
                                        <span class="font-normal text-gray-500 text-xs">
                                            Added 12, October 2023
                                        </span>
                                    </div>
                                </td>
                                <td :class="{ '!border-b-0': index === emailAddresses.length - 1 }" class="!px-0 text-right">
                                    <div class="flex gap-2 items-center justify-end">
                                        <button class="border border-gray-200 inline-block p-2 rounded-lg">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 12L13.3332 12.7294C12.9796 13.1161 12.5001 13.3333 12.0001 13.3333C11.5001 13.3333 11.0205 13.1161 10.6669 12.7294C10.3128 12.3434 9.83332 12.1267 9.33345 12.1267C8.83359 12.1267 8.35409 12.3434 7.99998 12.7294M2 13.3333H3.11636C3.44248 13.3333 3.60554 13.3333 3.75899 13.2965C3.89504 13.2638 4.0251 13.21 4.1444 13.1368C4.27895 13.0544 4.39425 12.9391 4.62486 12.7085L13 4.33333C13.5523 3.78104 13.5523 2.88561 13 2.33333C12.4477 1.78104 11.5523 1.78104 11 2.33333L2.62484 10.7085C2.39424 10.9391 2.27894 11.0544 2.19648 11.1889C2.12338 11.3082 2.0695 11.4383 2.03684 11.5744C2 11.7278 2 11.8909 2 12.217V13.3333Z" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                        <button class="border border-red inline-block p-2 rounded-lg" @click="deleteIP(domain.id)">
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
            </div>
        </div>
    </div>
</template>

<script setup>

    const emailAddresses = ref([
        { id: 1, address: 'john.doe@example.com' },
        { id: 2, address: 'jane.smith@example.com' },
    ])
  
</script>
