<template>
    <div>
        <!-- heading -->
        <header class="pb-4 px-5 sm:pb-6">
            <div class="flex flex-wrap gap-6 items-center lg:px-8 max-w-7xl mx-auto px-4 sm:flex-nowrap sm:px-6">
                <h1 class="font-semibold leading-7 text-base text-gray-900">
                    Bulk tag contacts
                </h1>
            </div>
        </header>
        <hr class="mb-10" />

        <div class="pb-4 px-5 sm:pb-6">
            <div class="flex flex-col flex-wrap gap-6 lg:px-8 max-w-7xl mx-auto px-4 sm:flex-nowrap sm:px-6">
                <ui-input label="tag name" />

                <nav class="-mb-px flex space-x-8">
                    <a v-for="(tab, i) in tabs" :key="tab.name" :href="tab.href" :class="[current==i ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium']" :aria-current="tab.current ? 'page' : undefined" @click="() => current=i">{{ tab.name }}</a>
                </nav>

                <textarea id="comment" rows="4" name="comment" class="block border-0 focus:ring-2 focus:ring-indigo-600 focus:ring-inset placeholder:text-gray-400 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900 w-full" placeholder="comma separated list of email addresses..." />

                <ui-button primary class="w-max">
                    tag contacts
                </ui-button>
            </div>
        </div>
    </div>
</template>

<script setup>

    const current = ref(1)
    const tabs = [
        { name: 'Import File', href: '#', current: true },
        { name: 'Past Emails', href: '#', current: false },
    ]

</script>