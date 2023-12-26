<template>
    <div>
        <div class="lg:px-8 max-w-7xl mx-auto px-6">
            <div class="lg:max-w-none max-w-2xl mx-auto">
                <div class="flex gap-10 justify-between">
                    <div>
                        <h2 class="font-bold sm:text-4xl text-3xl text-gray-900 tracking-tight">
                            Test
                        </h2>
                        <p class="leading-8 mt-4 text-gray-600 text-lg">
                            segment
                        </p>
                    </div>
                    <div class="flex gap-3">
                        <ui-button primary class="h-min">
                            edit
                        </ui-button>
                        <ui-button primary class="h-min">
                            delete
                        </ui-button>
                    </div>
                </div>

                <!-- show stats per channel -->
                <div class="bg-gray-100 card mt-8 rounded-2xl">
                    <div class="grid grid-cols-2 text-left">
                        <div class="sm:hidden">
                            <label for="tabs" class="sr-only">Select a tab</label>
                            <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
                            <select id="tabs" name="tabs" class="block border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md w-full">
                                <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
                                    {{ tab.name }}
                                </option>
                            </select>
                        </div>
                        <div class="hidden sm:block">
                            <nav class="flex space-x-4" aria-label="Tabs">
                                <a v-for="tab in tabs" :key="tab.name" :href="tab.href" :class="[tab.current ? 'bg-gray-200 text-gray-800' : 'text-gray-600 hover:text-gray-800', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="tab.current ? 'page' : undefined">{{ tab.name }}</a>
                            </nav>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2">
                        <div v-for="stat in stats" :key="stat.name" class="px-3 py-6">
                            <p class="font-medium leading-6 text-black-400 text-sm">
                                {{ stat.name }}
                            </p>
                            <p class="flex gap-x-2 items-baseline mt-2">
                                <span class="font-semibold text-4xl text-primary-900 tracking-tight">{{ stat.value }}</span>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- profile -->
                <div class="card flex flex-col gap-4 mt-8">
                    <div>
                        Address is  <b> XYZ</b>
                    </div>

                    <div class="flex font-bold gap-2 items-center text-primary">
                        and
                        <hr class="flex-1" />
                    </div>
                    <div>
                        Name is <b> xz</b>
                    </div>
                    <b class="text-primary">or</b>
                    <div>
                        Age is <b> 25</b>
                    </div>
                    <div class="flex font-bold gap-2 items-center text-primary">
                        and
                        <hr class="flex-1" />
                    </div>

                    <div>
                        Subscribed before  <b> January 2022</b>
                    </div>
                </div>

                <contacts-list />
            </div>
        </div>
    </div>
</template>

<script setup>


    const stats = [
        { id: 1, name: 'Messages send', value: '256' },
        { id: 2, name: 'Open Rate', value: '3%' },
        { id: 3, name: 'Click Rate', value: '2%' },
        { id: 4, name: 'Last message', value: '30 days ago' },
    ]

    const tabs = [
        { name: 'Mail Stats', href: '#', current: false },
        { name: 'Mobile Notification Stats', href: '#', current: false },
        { name: 'SMS Stats', href: '#', current: true },
    ]

</script>