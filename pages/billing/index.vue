<template>
    <main>
        <div class="lg:px-8 max-w-7xl mx-auto px-4 sm:px-6">
            <h2 class="font-semibold leading-6 lg:max-w-none lg:mx-0 max-w-2xl mx-auto text-base text-gray-900">
                Invoices
            </h2>
        </div>
        <div class="border-gray-100 border-t mt-6 overflow-hidden">
            <div class="lg:px-8 max-w-7xl mx-auto px-4 sm:px-6">
                <div class="lg:max-w-none lg:mx-0 max-w-2xl mx-auto">
                    <table class="text-left w-full">
                        <thead class="sr-only">
                            <tr>
                                <th>Amount</th>
                                <th class="hidden sm:table-cell">
                                    Client
                                </th>
                                <th>More details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="day in days" :key="day.dateTime">
                                <tr class="leading-6 text-gray-900 text-sm">
                                    <th scope="colgroup" colspan="3" class="font-semibold isolate py-2 relative">
                                        <time :datetime="day.dateTime">{{ day.date }}</time>
                                        <div class="-z-10 absolute bg-gray-50 border-b border-gray-200 inset-y-0 right-full w-screen" />
                                        <div class="-z-10 absolute bg-gray-50 border-b border-gray-200 inset-y-0 left-0 w-screen" />
                                    </th>
                                </tr>
                                <tr v-for="transaction in day.transactions" :key="transaction.id">
                                    <td class="pr-6 py-5 relative">
                                        <div class="flex gap-x-6">
                                            <component :is="transaction.icon" class="flex-none h-6 hidden sm:block text-gray-400 w-5" aria-hidden="true" />
                                            <div class="flex-auto">
                                                <div class="flex gap-x-3 items-start">
                                                    <div class="font-medium leading-6 text-gray-900 text-sm">
                                                        {{ transaction.amount }}
                                                    </div>
                                                    <div :class="[statuses[transaction.status], 'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset']">
                                                        {{ transaction.status }}
                                                    </div>
                                                </div>
                                                <div v-if="transaction.tax" class="leading-5 mt-1 text-gray-500 text-xs">
                                                    {{ transaction.tax }} tax
                                                </div>
                                            </div>
                                        </div>
                                        <div class="absolute bg-gray-100 bottom-0 h-px right-full w-screen" />
                                        <div class="absolute bg-gray-100 bottom-0 h-px left-0 w-screen" />
                                    </td>
                                    <td class="hidden pr-6 py-5 sm:table-cell">
                                        <div class="leading-6 text-gray-900 text-sm">
                                            {{ transaction.client }}
                                        </div>
                                        <div class="leading-5 mt-1 text-gray-500 text-xs">
                                            {{ transaction.description }}
                                        </div>
                                    </td>
                                    <td class="py-5 text-right">
                                        <div class="flex justify-end">
                                            <nuxt-link to="/billing/x" class="font-medium hover:text-primary-500 leading-6 text-primary-600 text-sm">
                                                View<span class="hidden sm:inline"> transaction</span><span class="sr-only">, invoice #{{ transaction.invoiceNumber }}, {{ transaction.client }}</span>
                                            </nuxt-link>
                                        </div>
                                        <div class="leading-5 mt-1 text-gray-500 text-xs">
                                            Invoice <span class="text-gray-900">#{{ transaction.invoiceNumber }}</span>
                                        </div>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>
  
<script setup>

    import { ArrowDownCircleIcon, ArrowPathIcon, ArrowUpCircleIcon } from '@heroicons/vue/20/solid'


    const statuses = {
        Paid:     'text-green-700 bg-green-50 ring-green-600/20',
        Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
        Overdue:  'text-red-700 bg-red-50 ring-red-600/10',
    }

    const days = [
        {
            date:         'Today',
            dateTime:     '2023-03-22',
            transactions: [
                {
                    id:            1,
                    invoiceNumber: '00012',
                    href:          '#',
                    amount:        '$7,600.00 USD',
                    tax:           '$500.00',
                    status:        'Paid',
                    client:        'Reform',
                    description:   'Website redesign',
                    icon:          ArrowUpCircleIcon,
                },
                {
                    id:            2,
                    invoiceNumber: '00011',
                    href:          '#',
                    amount:        '$10,000.00 USD',
                    status:        'Withdraw',
                    client:        'Tom Cook',
                    description:   'Salary',
                    icon:          ArrowDownCircleIcon,
                },
                {
                    id:            3,
                    invoiceNumber: '00009',
                    href:          '#',
                    amount:        '$2,000.00 USD',
                    tax:           '$130.00',
                    status:        'Overdue',
                    client:        'Tuple',
                    description:   'Logo design',
                    icon:          ArrowPathIcon,
                },
            ],
        },
        {
            date:         'Yesterday',
            dateTime:     '2023-03-21',
            transactions: [
                {
                    id:            4,
                    invoiceNumber: '00010',
                    href:          '#',
                    amount:        '$14,000.00 USD',
                    tax:           '$900.00',
                    status:        'Paid',
                    client:        'SavvyCal',
                    description:   'Website redesign',
                    icon:          ArrowUpCircleIcon,
                },
            ],
        },
    ]
  </script>