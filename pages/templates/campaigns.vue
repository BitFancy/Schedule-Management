<template>
    <div>
        <ui-page-title title="Campaigns" class="border-b border-border mb-5">
            <ui-button primary>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add Campaign
            </ui-button>
        </ui-page-title>

        <!-- Introduction -->
        <p class="m-5">
            A campaign is a one-shot email send to a specific set of recipients. It can be a newsletter, announcement, or any other targeted email communication.
        </p>
  
        <!-- Filter and Search -->
        <div class="flex items-center m-5">
            <div class="flex flex-col">
                <label for="filterState" class="block font-medium leading-6 text-gray-900 text-sm">Filter State:</label>
                <select id="filterState" v-model="filterState" class="bblock border-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 placeholder:text-gray-400 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900 w-fu2-3">
                    <option value="">
                        All
                    </option>
                    <option value="draft">
                        Draft
                    </option>
                    <option value="sent">
                        Sent
                    </option>
                </select>
            </div>
            <div class="flex flex-col ml-20">
                <label for="filterDate" class="block font-medium leading-6 text-gray-900 text-sm">Filter Date:</label>
                <input id="filterDate" v-model="filterDate" type="date" class="block border-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 placeholder:text-gray-400 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900" />
            </div>
            <div class="ml-20 mt-6 relative">
                <label for="search" class="-top-2 absolute bg-white font-medium inline-block left-2 px-1 text-gray-900 text-xs">Search</label>
                <input id="search" v-model="searchTerm" type="text" name="name" class="block border-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 placeholder:text-gray-400 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900 w-full" placeholder="search" />
            </div>
        </div>
  
        <!-- Campaigns Table -->
        <table class="min-w-full table">
            <thead>
                <tr>
                    <th scope="col">
                        Campaign Name
                    </th>
                    <th scope="col">
                        Sent Date
                    </th>
                    <th>
                        Recipients
                    </th>
                    <th>
                        Opened %
                    </th>
                    <th>
                        Clicked %
                    </th>
                    <th>
                        Performance Score
                    </th>
                    <th>
                        State
                    </th>
                </tr>
            </thead>
            <tbody class="divide-gray-200 divide-y">
                <tr v-for="campaign in filteredCampaigns" :key="campaign.id">
                    <td>
                        {{ campaign.name }}
                    </td>
                    <td>
                        {{ campaign.sentDate }}
                    </td>
                    <td>
                        {{ campaign.recipients }}
                    </td>
                    <td>
                        {{ campaign.openedPercentage }}
                    </td>
                    <td>
                        {{ campaign.clickedPercentage }}
                    </td>
                    <td>
                        {{ campaign.performanceScore }}
                    </td>
                    <td>
                        {{ campaign.state }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script setup>

    import { ref, computed } from 'vue'



    // Mock campaigns data
    const campaigns = ref([
        { id: 1, name: 'Campaign 1', sentDate: '2023-07-15', recipients: 1000, openedPercentage: 30, clickedPercentage: 10, performanceScore: 8, state: 'draft' },
        { id: 2, name: 'Campaign 2', sentDate: '2023-07-10', recipients: 1500, openedPercentage: 40, clickedPercentage: 12, performanceScore: 7, state: 'sent' },
        { id: 3, name: 'Campaign 3', sentDate: '2023-07-05', recipients: 800, openedPercentage: 35, clickedPercentage: 8, performanceScore: 6, state: 'sent' },
        { id: 4, name: 'Campaign 4', sentDate: '2023-07-01', recipients: 1200, openedPercentage: 25, clickedPercentage: 5, performanceScore: 5, state: 'sent' },
    ])
  
    const filterState = ref('')
    const filterDate = ref('')
    const searchTerm = ref('')
  
    const filteredCampaigns = computed(() => {
        return campaigns.value.filter(campaign => {
            const isMatchState = filterState.value === '' || campaign.state === filterState.value
            const isMatchDate = filterDate.value === '' || campaign.sentDate === filterDate.value
            const isMatchSearch = searchTerm.value === '' || campaign.name.toLowerCase().includes(searchTerm.value.toLowerCase())
            return isMatchState && isMatchDate && isMatchSearch
        })
    })
</script>