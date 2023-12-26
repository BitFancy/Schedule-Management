<template>
    <div class="pb-8">
        <!-- <h1>TODO add custom SPF DNS!</h1> -->

        <!-- search ip -->
        <div class="flex gap-5 items-center justify-between mb-8 w-full">
            <div class="flex gap-4 items-center">
                <div class="flex flex-col flex-grow gap-[10px] max-w-md">
                    <div class="relative text-black-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 left-[18px] top-[11px] w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                        <input id="search-dedicated-ip" type="search" name="Search IPs" placeholder="Search IPs" class="bg-white border border-gray-300 font-normal leading-6 pl-12 py-[9px] rounded-lg text-gray-400 text-sm w-full" />
                    </div>
                </div>
            </div>
            <ui-button class="bg-primary border border-primary-600 flex font-medium items-center justify-center text-gray-50 text-sm" @click="addDedicatedIp">
                Request new IP

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


        <!-- Existing Dedicated IPs List -->
        <div class="border border-gray-200 p-5 rounded-xl">
            <table class="border-separate border-spacing-y-4 w-full">
                <thead>
                    <tr>
                        <th class="font-medium text-base text-gray-700 text-left">
                            IP Address
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
                    <tr v-for="(ip, index) in dedicatedIPs" :key="ip.id">
                        <td :class="{ '!border-b-0': index === dedicatedIPs.length - 1 }" class="border-b border-gray-200">
                            <nuxt-link :href="`/settings/smtp/1`" class="flex flex-col gap-2 items-start justify-between py-2">
                                <span class="font-normal text-base text-gray-700">{{ ip.ipAddress }}</span>
                                <span class="font-normal text-gray-500 text-xs">
                                    Added on 12-08-2020
                                </span>
                            </nuxt-link>
                        </td>
                        <td :class="{ '!border-b-0': index === dedicatedIPs.length - 1 }" class="border-b border-gray-200">
                            <span :class="[ ip.status == 'active' ? 'bg-green-50 text-green':'', ip.status == 'warming up' ? 'bg-primary-50 text-primary':'' , ip.status == 'inactive' ? 'bg-red-50 text-red':'', 'px-4 py-1 text-sm font-normal rounded-full border' ]">
                                {{ ip.status }}
                            </span>
                        </td>
                        <td :class="{ '!border-b-0': index === dedicatedIPs.length - 1 }" class="border-b border-gray-200 font-normal text-gray text-sm">
                            50
                        </td>
                        <td :class="{ '!border-b-0': index === dedicatedIPs.length - 1 }" class="border-b border-gray-200 text-right">
                            <div class="flex gap-2 items-center justify-end">
                                <button class="border border-red inline-block p-2 rounded-lg">
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

        <!-- Add New Dedicated IP Form -->
        <div v-show="addNewDedicatedIps">
            <h2 class="font-bold mb-3 text-lg">
                Add New Dedicated IP
            </h2>
            <form @submit.prevent="addIP">
                <div class="mb-4">
                    <label for="ipAddress" class="block mb-2">IP Address</label>
                    <input id="ipAddress" v-model="newIP.ipAddress" type="text" class="appearance-none border px-3 py-2 rounded shadow w-full" />
                </div>
                <div class="mb-4">
                    <label for="assignedDomain" class="block mb-2">Assigned Domain</label>
                    <input id="assignedDomain" v-model="newIP.assignedDomain" type="text" class="appearance-none border px-3 py-2 rounded shadow w-full" />
                </div>
                <button type="submit" class="bg-blue-500 px-4 py-2 rounded shadow">
                    Add IP
                </button>
            </form>
        </div>
    </div>
</template>
  
<script setup>

    // Mock dedicated IPs data
    const dedicatedIPs = ref([
        { id: 1, ipAddress: '192.168.0.1', assignedDomain: 'example.com', status: 'active' },
        { id: 2, ipAddress: '192.168.0.2', assignedDomain: 'test.com', status: 'warming up' },
        { id: 3, ipAddress: '192.168.0.3', assignedDomain: 'demo.com', status: 'inactive' },
    ])
  
    const newIP = ref({
        ipAddress:      '',
        assignedDomain: '',
    })

    const addNewDedicatedIps = ref(false)
  
    const addIP = () => {
        // Add new IP logic goes here...
        console.log('New Dedicated IP:', newIP.value)
        // Reset form fields
        newIP.value.ipAddress = ''
        newIP.value.assignedDomain = ''
    }
  
    // const deleteIP = (ipId) => {
    //     // Delete IP logic goes here...
    //     console.log('Deleting IP:', ipId)
    // }

    const addDedicatedIp = () => {
        addNewDedicatedIps.value = !addNewDedicatedIps.value
    }
</script>