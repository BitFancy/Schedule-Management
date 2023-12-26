<template>
    <div>
        <div>
            <!-- <h3 class="font-semibold leading-6 text-base text-gray-900">
                Last 30 days
            </h3> -->

            <dl class="gap-5 grid grid-cols-1 lg:grid-cols-4 mt-5 sm:grid-cols-4">
                <div v-for="item in stats" :key="item.id" class="bg-white overflow-hidden pb-8 pt-5 px-4 relative rounded-lg shadow sm:pt-6 sm:px-6">
                    <dt>
                        <div class="absolute bg-primary-500 p-3 rounded-md">
                            <component :is="item.icon" class="h-6 text-white w-6" aria-hidden="true" />
                        </div>
                        <p class="font-medium ml-16 text-gray-500 text-sm truncate">
                            {{ item.name }}
                        </p>
                    </dt>
                    <dd class="flex items-baseline ml-16 pb-6 sm:pb-7">
                        <p class="font-semibold text-2xl text-gray-900">
                            {{ item.stat }}
                        </p>
                        <p :class="[item.changeType === 'increase' ? 'text-green-600' : 'text-red-600', 'ml-2 flex items-baseline text-sm font-semibold']">
                            <arrow-up-icon v-if="item.changeType === 'increase'" class="flex-shrink-0 h-5 self-center text-green-500 w-5" aria-hidden="true" />
                            <arrow-down-icon v-else class="flex-shrink-0 h-5 self-center text-red-500 w-5" aria-hidden="true" />
                            <span class="sr-only"> {{ item.changeType === 'increase' ? 'Increased' : 'Decreased' }} by </span>
                            {{ item.change }}
                        </p>
                        <!-- <div class="absolute bg-gray-50 bottom-0 inset-x-0 px-4 py-4 sm:px-6">
                            <div class="text-sm">
                                <a href="#" class="font-medium hover:text-primary-500 text-primary-600">View all<span class="sr-only"> {{ item.name }} stats</span></a>
                            </div>
                        </div> -->
                    </dd>
                </div>
            </dl>
        </div>
        <!-- <ul class="ul" style="padding: auto">
            <li>
                Stats
                <ul>
                    <li>Send mails count</li>
                    <li>Delivered count & percentage</li>
                    <li>failed count & percentage</li>
                    <li>suppresed count & percentage</li>
                    <li>sending count graph</li>
                    <li>plan usage overview x/x & %?</li>
                    <li>filter by domain & date</li>
                    <li>filter by tags</li>
                    <li>filter by receipient mail domains</li>
                    <li>view logs table</li>
                    <li>by template</li>
                    <li>unique opens</li>
                    <li>unique clicks</li>
                </ul>
            </li>
        </ul> -->
        <div class="flex my-6">
            <div class="flex-1">
                <pie-chart />
            </div>
            <div class="flex-1 py-10">
                <bar-chart />
            </div>
        </div>
        <data-table />
    </div>
</template>

<script setup>
    import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/vue/20/solid'
    import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/vue/24/outline'
    import PieChart from "~/components/dashboard/PieChart.vue"
    import BarChart from "~/components/dashboard/BarChart.vue"
    import DataTable from "~/components/dashboard/DataTable.vue"
    const stats = [
        { name: 'Sent messages count', stat: '1500', icon: UsersIcon, change: '12%', changeType: 'positive' },
        { name: 'Delivered', stat: '1420', icon: EnvelopeOpenIcon, change: '2.02%', changeType: 'positive' },
        { name: 'Failed', stat: '50', icon: CursorArrowRaysIcon, change: '4.05%', changeType: 'positive' },
        { name: 'Suppressed', stat: '30', icon: EnvelopeOpenIcon, change: '4.05%', changeType: 'positive' }
    ]
</script>