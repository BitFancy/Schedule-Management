<template>
    <div>
        <ui-page-title title="Webhooks" class="border-b border-border mb-5">
            <ui-button primary @click="addNewWebhookToggle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

                Add Webhook
            </ui-button>
        </ui-page-title>

        <!-- Search Dedicated IPs -->

        <div class="flex gap-5 max-w-[690px] mb-10 px-8 search-ips-wrapper w-full">
            <div class="flex flex-col flex-grow gap-[10px]">
                <p class="font-medium text-[#111827]">
                    Search webhook
                </p>
                <div class="relative text-black-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 left-[18px] top-[11px] w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                    <input id="search-dedicated-ip" type="search" name="Search IPs" placeholder="your webhook name" class="border-black-50 pl-12 py-[9px] rounded-lg w-full" />
                </div>
            </div>
            <div class="flex flex-col gap-[10px]">
                <p>Status</p>
                <div>
                    <select id="search-ips-status" name="Status" class="border-black-50 rounded-lg text-black-200">
                        <option value="all" default>
                            All
                        </option>
                        <option value="todo" default>
                            Todo
                        </option>
                        <option value="pending" default>
                            Pending
                        </option>
                        <option value="completed" default>
                            Completed
                        </option>
                    </select>
                </div>
            </div>
        </div>

        <!-- Existing Domains Table -->
        <table class="mb-8 mt-5 table w-full">
            <thead>
                <tr>
                    <th>Webhook Type</th>
                    <th>Endpoint URL</th>
                    <th>Status</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="hook in webhooks" :key="hook.id">
                    <td>{{ hook.type }}</td>
                    <td>{{ hook.endpoint }}</td>
                    <td>failing</td>
                    <td class="text-right">
                        <button @click="editDomain(domain.id)">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="pencil-alt">
                                    <path id="Vector" d="M11 4.99992H6C5.46957 4.99992 4.96086 5.21063 4.58579 5.5857C4.21071 5.96078 4 6.46948 4 6.99992V17.9999C4 18.5304 4.21071 19.0391 4.58579 19.4141C4.96086 19.7892 5.46957 19.9999 6 19.9999H17C17.5304 19.9999 18.0391 19.7892 18.4142 19.4141C18.7893 19.0391 19 18.5304 19 17.9999V12.9999M17.586 3.58592C17.7705 3.3949 17.9912 3.24253 18.2352 3.13772C18.4792 3.0329 18.7416 2.97772 19.0072 2.97542C19.2728 2.97311 19.5361 3.02371 19.7819 3.12427C20.0277 3.22484 20.251 3.37334 20.4388 3.56113C20.6266 3.74891 20.7751 3.97222 20.8756 4.21801C20.9762 4.4638 21.0268 4.72716 21.0245 4.99272C21.0222 5.25828 20.967 5.52072 20.8622 5.76473C20.7574 6.00874 20.605 6.22942 20.414 6.41392L11.828 14.9999H9V12.1719L17.586 3.58592Z" stroke="#3658F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>
                        </button>
                        <button @click="deleteDomain(domain.id)">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Delete">
                                    <path id="Vector" d="M14.74 9.00003L14.394 18M9.606 18L9.26 9.00003M19.228 5.79003C19.57 5.84203 19.91 5.89703 20.25 5.95603M19.228 5.79003L18.16 19.673C18.1164 20.2383 17.8611 20.7662 17.445 21.1513C17.029 21.5364 16.4829 21.7502 15.916 21.75H8.084C7.5171 21.7502 6.97102 21.5364 6.55498 21.1513C6.13894 20.7662 5.88359 20.2383 5.84 19.673L4.772 5.79003M19.228 5.79003C18.0739 5.61555 16.9138 5.48313 15.75 5.39303M4.772 5.79003C4.43 5.84103 4.09 5.89603 3.75 5.95503M4.772 5.79003C5.92613 5.61555 7.08623 5.48313 8.25 5.39303M15.75 5.39303V4.47703C15.75 3.29703 14.84 2.31303 13.66 2.27603C12.5536 2.24067 11.4464 2.24067 10.34 2.27603C9.16 2.31303 8.25 3.29803 8.25 4.47703V5.39303M15.75 5.39303C13.2537 5.20011 10.7463 5.20011 8.25 5.39303" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Add New Webhook Form -->
        <div v-show="isNewWebhookVisible">
            <h2 class="font-bold mb-3 text-lg">
                Add New Webhook
            </h2>
            <form @submit.prevent="addWebhook">
                <div class="mb-4">
                    <label for="webhookType" class="block mb-2">Webhook Type</label>
                    <select id="webhookType" v-model="newWebhook.type" class="appearance-none border px-3 py-2 rounded shadow w-full">
                        <option value="Contact Created">
                            Contact Created
                        </option>
                        <option value="Mail Sent">
                            Mail Sent
                        </option>
                        <option value="Campaign Completed">
                            Campaign Completed
                        </option>
                        <!-- Add more webhook types here -->
                    </select>
                </div>
                <div class="mb-4">
                    <label for="webhookEndpoint" class="block mb-2">Endpoint URL</label>
                    <input id="webhookEndpoint" v-model="newWebhook.endpoint" type="text" class="appearance-none border px-3 py-2 rounded shadow w-full" />
                </div>
                <button type="submit" class="bg-blue-500 px-4 py-2 rounded shadow text-white">
                    Add Webhook
                </button>
            </form>
        </div>
    </div>
</template>
  
<script setup>
    import { ref } from 'vue'

    // Mock webhooks data
    const webhooks = ref([
        { id: 1, type: 'Contact Created', endpoint: 'https://example.com/webhook1' },
        { id: 2, type: 'Mail Sent', endpoint: 'https://example.com/webhook2' },
        { id: 3, type: 'Campaign Completed', endpoint: 'https://example.com/webhook3' },
    ])
  
    const newWebhook = ref({
        type:     '',
        endpoint: '',
    })

    const isNewWebhookVisible = ref(false)
  
    const addWebhook = () => {
        // Add new webhook logic goes here...
        console.log('New Webhook:', newWebhook.value)
        // Reset form fields
        newWebhook.value.type = ''
        newWebhook.value.endpoint = ''
    }

    const addNewWebhookToggle = () => {
        isNewWebhookVisible.value = !isNewWebhookVisible.value
    }
  
</script>