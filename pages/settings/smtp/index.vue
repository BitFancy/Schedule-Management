<template>
    <div class="flex flex-col gap-8">
        <div>
            <h2 class="font-semibold mb-2 text-3xl text-gray-700">
                SMTP Settings
            </h2>
            <p class="font-normal text-gray-500 text-sm">
                Manage all your domains, request for dedicated IPs and more.
            </p>
        </div>

        <div class="bg-gray-50 border border-gray-200 flex items-center justify-between px-4 py-2 rounded-lg">
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

        <div class="flex">
            <nav class="flex gap-2 items-center">
                <nuxt-link v-for="(tab, i) in tabs" :key="tab.name" :href="`/settings/smtp?tab=${i}`" :class="[current==i ? 'bg-primary-50 text-primary' : 'border-transparent text-[#667085] hover:bg-primary-50 hover:text-primary', 'whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium flex gap-2 justify-center items-center']" :aria-current="tab.current ? 'page' : undefined" @click="() => current=i">
                    <svg v-if="i == 0 && current == i" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6667 11.6667L14.2055 4.97983C14.1331 3.93002 14.0969 3.40512 13.8694 3.00721C13.6691 2.65689 13.3674 2.37536 13.0042 2.19961C12.5916 2 12.0654 2 11.0131 2H4.98692C3.93462 2 3.40847 2 2.99585 2.19961C2.63257 2.37536 2.33096 2.65689 2.13063 3.00721C1.90311 3.40512 1.86691 3.93002 1.7945 4.97983L1.33334 11.6667M14.6667 11.6667C14.6667 12.9553 13.622 14 12.3333 14H3.66668C2.37801 14 1.33334 12.9553 1.33334 11.6667M14.6667 11.6667C14.6667 10.378 13.622 9.33333 12.3333 9.33333H3.66668C2.37801 9.33333 1.33334 10.378 1.33334 11.6667M4.00001 11.6667H4.00668M8.00001 11.6667H12" stroke="#1D46F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg v-else-if="i == 1 && current == i" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 3.33203C14 4.4366 11.3137 5.33203 8 5.33203C4.68629 5.33203 2 4.4366 2 3.33203M14 3.33203C14 2.22746 11.3137 1.33203 8 1.33203C4.68629 1.33203 2 2.22746 2 3.33203M14 3.33203V12.6654C14 13.772 11.3333 14.6654 8 14.6654C4.66667 14.6654 2 13.772 2 12.6654V3.33203M14 7.9987C14 9.10536 11.3333 9.9987 8 9.9987C4.66667 9.9987 2 9.10536 2 7.9987" stroke="#1D46F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg v-else-if="i == 2 && current == i" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1529_10145)">
                            <path d="M14.1359 14.6654C14.3226 14.6654 14.416 14.6654 14.4873 14.629C14.55 14.5971 14.601 14.5461 14.6329 14.4834C14.6693 14.4121 14.6693 14.3187 14.6693 14.132V7.1987C14.6693 7.01201 14.6693 6.91867 14.6329 6.84737C14.601 6.78465 14.55 6.73365 14.4873 6.7017C14.416 6.66537 14.3226 6.66537 14.1359 6.66537L12.5359 6.66537C12.3493 6.66537 12.2559 6.66537 12.1846 6.7017C12.1219 6.73365 12.0709 6.78465 12.0389 6.84737C12.0026 6.91867 12.0026 7.01201 12.0026 7.1987V8.7987C12.0026 8.98538 12.0026 9.07872 11.9663 9.15003C11.9343 9.21275 11.8833 9.26374 11.8206 9.2957C11.7493 9.33203 11.656 9.33203 11.4693 9.33203H9.86927C9.68259 9.33203 9.58924 9.33203 9.51794 9.36836C9.45522 9.40032 9.40423 9.45131 9.37227 9.51403C9.33594 9.58534 9.33594 9.67868 9.33594 9.86536V11.4654C9.33594 11.652 9.33594 11.7454 9.29961 11.8167C9.26765 11.8794 9.21666 11.9304 9.15393 11.9624C9.08263 11.9987 8.98929 11.9987 8.8026 11.9987H7.2026C7.01592 11.9987 6.92258 11.9987 6.85127 12.035C6.78855 12.067 6.73756 12.118 6.7056 12.1807C6.66927 12.252 6.66927 12.3453 6.66927 12.532V14.132C6.66927 14.3187 6.66927 14.4121 6.7056 14.4834C6.73756 14.5461 6.78855 14.5971 6.85127 14.629C6.92258 14.6654 7.01592 14.6654 7.2026 14.6654L14.1359 14.6654Z" stroke="#1D46F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.66927 4.53203C6.66927 4.34535 6.66927 4.252 6.7056 4.1807C6.73756 4.11798 6.78855 4.06699 6.85127 4.03503C6.92258 3.9987 7.01592 3.9987 7.2026 3.9987H8.8026C8.98929 3.9987 9.08263 3.9987 9.15393 4.03503C9.21666 4.06699 9.26765 4.11798 9.29961 4.1807C9.33594 4.252 9.33594 4.34535 9.33594 4.53203V6.13203C9.33594 6.31872 9.33594 6.41206 9.29961 6.48336C9.26765 6.54608 9.21666 6.59708 9.15393 6.62903C9.08263 6.66536 8.98929 6.66536 8.8026 6.66536H7.2026C7.01592 6.66536 6.92258 6.66536 6.85127 6.62903C6.78855 6.59708 6.73756 6.54608 6.7056 6.48336C6.66927 6.41206 6.66927 6.31872 6.66927 6.13203V4.53203Z" stroke="#1D46F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2.0026 8.53203C2.0026 8.34535 2.0026 8.25201 2.03894 8.1807C2.07089 8.11798 2.12189 8.06699 2.18461 8.03503C2.25591 7.9987 2.34925 7.9987 2.53594 7.9987H4.13594C4.32262 7.9987 4.41596 7.9987 4.48727 8.03503C4.54999 8.06699 4.60098 8.11798 4.63294 8.1807C4.66927 8.25201 4.66927 8.34535 4.66927 8.53203V10.132C4.66927 10.3187 4.66927 10.4121 4.63294 10.4834C4.60098 10.5461 4.54999 10.5971 4.48727 10.629C4.41596 10.6654 4.32262 10.6654 4.13594 10.6654H2.53594C2.34925 10.6654 2.25591 10.6654 2.18461 10.629C2.12189 10.5971 2.07089 10.5461 2.03894 10.4834C2.0026 10.4121 2.0026 10.3187 2.0026 10.132V8.53203Z" stroke="#1D46F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.33594 1.86536C1.33594 1.67868 1.33594 1.58534 1.37227 1.51403C1.40423 1.45131 1.45522 1.40032 1.51794 1.36836C1.58924 1.33203 1.68259 1.33203 1.86927 1.33203H3.46927C3.65596 1.33203 3.7493 1.33203 3.8206 1.36836C3.88332 1.40032 3.93432 1.45131 3.96627 1.51403C4.0026 1.58534 4.0026 1.67868 4.0026 1.86536V3.46536C4.0026 3.65205 4.0026 3.74539 3.96627 3.81669C3.93432 3.87942 3.88332 3.93041 3.8206 3.96237C3.7493 3.9987 3.65596 3.9987 3.46927 3.9987H1.86927C1.68259 3.9987 1.58924 3.9987 1.51794 3.96237C1.45522 3.93041 1.40423 3.87942 1.37227 3.81669C1.33594 3.74539 1.33594 3.65205 1.33594 3.46536V1.86536Z" stroke="#1D46F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1529_10145">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>



                    {{ tab.name }}
                </nuxt-link>
            </nav>
        </div>

        <settings-smtp-domains v-if="current==0" />
        <settings-smtp-server v-else-if="current==1" />
        <settings-smtp-ips v-else />
    </div>
</template>

<script setup>

    const route = useRoute()
    const router = useRouter()

    const tabs = [
        { name: 'Domains', href: '#', current: true },
        { name: 'Server', href: '#', current: false },
        { name: 'Dedicated IPs', href: '#', current: false },
    ]

    const current = computed({
        get() {
            const n = parseInt(route.query.tab || '0')
            return n >= 0 && n < tabs.length ? n : 0
        },
        set(val) {
            router.push({
                path:  route.path,
                query: {
                    ...route.query,
                    tab: val,
                }
            }).catch((e) => console.error(e))
        }
    })

</script>
