<template>
    <main>
        <header class="isolate pt-8 relative">
            <nav class="flex lg:px-8 max-w-7xl mx-auto px-4 sm:px-6" aria-label="Breadcrumb">
                <ol role="list" class="flex items-center space-x-4">
                    <li>
                        <div class="flex items-center">
                            <nuxt-link to="/billing" class="font-medium hover:text-gray-700 ml-4 text-gray-500 text-sm">
                                Invoices
                            </nuxt-link>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <chevron-right-icon v-if="index != 0" class="flex-shrink-0 h-5 text-gray-400 w-5" aria-hidden="true" />
                            <span class="font-medium ml-4 text-gray-500 text-sm" aria-current="page">Invoice #00011</span>
                        </div>
                    </li>
                </ol>
            </nav>
            

            <div class="-z-10 absolute inset-0 overflow-hidden" aria-hidden="true">
                <div class="-mt-16 absolute blur-3xl left-16 opacity-50 top-full transform-gpu xl:-ml-80 xl:left-1/2">
                    <div
                        class="aspect-[1154/678] bg-gradient-to-br from-[#FF80B5] to-[#9089FC] w-[72.125rem]"
                        style="clip-path: polygon( 100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5% )"
                    />
                </div>
                <div class="absolute bg-gray-900/5 bottom-0 h-px inset-x-0" />
            </div>
  
            <div class="lg:px-8 max-w-7xl mx-auto px-4 py-10 sm:px-6">
                <div class="flex gap-x-8 items-center justify-between lg:max-w-none lg:mx-0 max-w-2xl mx-auto">
                    <div class="flex gap-x-6 items-center">
                        <img src="https://tailwindui.com/img/logos/48x48/tuple.svg" alt="" class="flex-none h-16 ring-1 ring-gray-900/10 rounded-full w-16" />
                        <h1>
                            <div class="leading-6 text-gray-500 text-sm">
                                Invoice <span class="text-gray-700">#00011</span>
                            </div>
                            <div class="font-semibold leading-6 mt-1 text-base text-gray-900">
                                Tuple, Inc
                            </div>
                        </h1>
                    </div>
                    <div class="flex gap-x-4 items-center sm:gap-x-6">
                        <button type="button" class="font-semibold hidden leading-6 sm:block text-gray-900 text-sm">
                            Copy URL
                        </button>
                        <a href="#" class="font-semibold hidden leading-6 sm:block text-gray-900 text-sm">Edit</a>
                        <a href="#" class="bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 font-semibold hover:bg-primary-500 px-3 py-2 rounded-md shadow-sm text-sm text-white">Send</a>
  
                        <m-menu as="div" class="relative sm:hidden">
                            <menu-button class="-m-3 block p-3">
                                <span class="sr-only">More</span>
                                <ellipsis-vertical-icon class="h-5 text-gray-500 w-5" aria-hidden="true" />
                            </menu-button>
  
                            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                                <menu-items class="absolute bg-white focus:outline-none mt-0.5 origin-top-right py-2 right-0 ring-1 ring-gray-900/5 rounded-md shadow-lg w-32 z-10">
                                    <menu-item #default="{ active }">
                                        <button type="button" :class="[active ? 'bg-gray-50' : '', 'block w-full px-3 py-1 text-left text-sm leading-6 text-gray-900']">
                                            Copy URL
                                        </button>
                                    </menu-item>
                                    <menu-item #default="{ active }">
                                        <a href="#" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">Edit</a>
                                    </menu-item>
                                </menu-items>
                            </transition>
                        </m-menu>
                    </div>
                </div>
            </div>
        </header>
  
        <div class="lg:px-8 max-w-7xl mx-auto px-4 py-16 sm:px-6">
            <div class="gap-x-8 gap-y-8 grid grid-cols-1 grid-rows-1 items-start lg:grid-cols-3 lg:max-w-none lg:mx-0 max-w-2xl mx-auto">
                <!-- Invoice summary -->
                <div class="lg:col-start-3 lg:row-end-1">
                    <h2 class="sr-only">
                        Summary
                    </h2>
                    <div class="bg-gray-50 ring-1 ring-gray-900/5 rounded-lg shadow-sm">
                        <dl class="flex flex-wrap">
                            <div class="flex-auto pl-6 pt-6">
                                <dt class="font-semibold leading-6 text-gray-900 text-sm">
                                    Amount
                                </dt>
                                <dd class="font-semibold leading-6 mt-1 text-base text-gray-900">
                                    $10,560.00
                                </dd>
                            </div>
                            <div class="flex-none pt-4 px-6 self-end">
                                <dt class="sr-only">
                                    Status
                                </dt>
                                <dd class="bg-green-50 font-medium px-2 py-1 ring-1 ring-green-600/20 ring-inset rounded-md text-green-600 text-xs">
                                    Paid
                                </dd>
                            </div>
                            <div class="border-gray-900/5 border-t flex flex-none gap-x-4 mt-6 pt-6 px-6 w-full">
                                <dt class="flex-none">
                                    <span class="sr-only">Client</span>
                                    <user-circle-icon class="h-6 text-gray-400 w-5" aria-hidden="true" />
                                </dt>
                                <dd class="font-medium leading-6 text-gray-900 text-sm">
                                    Alex Curren
                                </dd>
                            </div>
                            <div class="flex flex-none gap-x-4 mt-4 px-6 w-full">
                                <dt class="flex-none">
                                    <span class="sr-only">Due date</span>
                                    <calendar-days-icon class="h-6 text-gray-400 w-5" aria-hidden="true" />
                                </dt>
                                <dd class="leading-6 text-gray-500 text-sm">
                                    <time datetime="2023-01-31">January 31, 2023</time>
                                </dd>
                            </div>
                            <div class="flex flex-none gap-x-4 mt-4 px-6 w-full">
                                <dt class="flex-none">
                                    <span class="sr-only">Status</span>
                                    <credit-card-icon class="h-6 text-gray-400 w-5" aria-hidden="true" />
                                </dt>
                                <dd class="leading-6 text-gray-500 text-sm">
                                    Paid with MasterCard
                                </dd>
                            </div>
                        </dl>
                        <div class="border-gray-900/5 border-t mt-6 px-6 py-6">
                            <a href="#" class="font-semibold leading-6 text-gray-900 text-sm">Download receipt <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </div>
                </div>
  
                <!-- Invoice -->
                <div class="-mx-4 lg:col-span-2 lg:row-end-2 lg:row-span-2 px-4 py-8 ring-1 ring-gray-900/5 shadow-sm sm:mx-0 sm:pb-14 sm:px-8 sm:rounded-lg xl:pb-20 xl:pt-16 xl:px-16">
                    <h2 class="font-semibold leading-6 text-base text-gray-900">
                        Invoice
                    </h2>
                    <dl class="grid grid-cols-1 leading-6 mt-6 sm:grid-cols-2 text-sm">
                        <div class="sm:pr-4">
                            <dt class="inline text-gray-500">
                                Issued on
                            </dt>
                            {{ ' ' }}
                            <dd class="inline text-gray-700">
                                <time datetime="2023-23-01">January 23, 2023</time>
                            </dd>
                        </div>
                        <div class="mt-2 sm:mt-0 sm:pl-4">
                            <dt class="inline text-gray-500">
                                Due on
                            </dt>
                            {{ ' ' }}
                            <dd class="inline text-gray-700">
                                <time datetime="2023-31-01">January 31, 2023</time>
                            </dd>
                        </div>
                        <div class="border-gray-900/5 border-t mt-6 pt-6 sm:pr-4">
                            <dt class="font-semibold text-gray-900">
                                From
                            </dt>
                            <dd class="mt-2 text-gray-500">
                                <span class="font-medium text-gray-900">Acme, Inc.</span><br />7363 Cynthia Pass<br />Toronto, ON N3Y 4H8
                            </dd>
                        </div>
                        <div class="mt-8 sm:border-gray-900/5 sm:border-t sm:mt-6 sm:pl-4 sm:pt-6">
                            <dt class="font-semibold text-gray-900">
                                To
                            </dt>
                            <dd class="mt-2 text-gray-500">
                                <span class="font-medium text-gray-900">Tuple, Inc</span><br />886 Walter Street<br />New York, NY 12345
                            </dd>
                        </div>
                    </dl>
                    <table class="leading-6 mt-16 text-left text-sm w-full whitespace-nowrap">
                        <colgroup>
                            <col class="w-full" />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead class="border-b border-gray-200 text-gray-900">
                            <tr>
                                <th scope="col" class="font-semibold px-0 py-3">
                                    Projects
                                </th>
                                <th scope="col" class="font-semibold hidden pl-8 pr-0 py-3 sm:table-cell text-right">
                                    Hours
                                </th>
                                <th scope="col" class="font-semibold hidden pl-8 pr-0 py-3 sm:table-cell text-right">
                                    Rate
                                </th>
                                <th scope="col" class="font-semibold pl-8 pr-0 py-3 text-right">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in invoice.items" :key="item.id" class="border-b border-gray-100">
                                <td class="align-top max-w-0 px-0 py-5">
                                    <div class="font-medium text-gray-900 truncate">
                                        {{ item.title }}
                                    </div>
                                    <div class="text-gray-500 truncate">
                                        {{ item.description }}
                                    </div>
                                </td>
                                <td class="align-top hidden pl-8 pr-0 py-5 sm:table-cell tabular-nums text-gray-700 text-right">
                                    {{ item.hours }}
                                </td>
                                <td class="align-top hidden pl-8 pr-0 py-5 sm:table-cell tabular-nums text-gray-700 text-right">
                                    {{ item.rate }}
                                </td>
                                <td class="align-top pl-8 pr-0 py-5 tabular-nums text-gray-700 text-right">
                                    {{ item.price }}
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th scope="row" class="font-normal pb-0 pt-6 px-0 sm:hidden text-gray-700">
                                    Subtotal
                                </th>
                                <th scope="row" colspan="3" class="font-normal hidden pb-0 pt-6 px-0 sm:table-cell text-gray-700 text-right">
                                    Subtotal
                                </th>
                                <td class="pb-0 pl-8 pr-0 pt-6 tabular-nums text-gray-900 text-right">
                                    {{ invoice.subTotal }}
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="font-normal pt-4 sm:hidden text-gray-700">
                                    Tax
                                </th>
                                <th scope="row" colspan="3" class="font-normal hidden pt-4 sm:table-cell text-gray-700 text-right">
                                    Tax
                                </th>
                                <td class="pb-0 pl-8 pr-0 pt-4 tabular-nums text-gray-900 text-right">
                                    {{ invoice.tax }}
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="font-semibold pt-4 sm:hidden text-gray-900">
                                    Total
                                </th>
                                <th scope="row" colspan="3" class="font-semibold hidden pt-4 sm:table-cell text-gray-900 text-right">
                                    Total
                                </th>
                                <td class="font-semibold pb-0 pl-8 pr-0 pt-4 tabular-nums text-gray-900 text-right">
                                    {{ invoice.total }}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>
  
<script setup>

    import {
        Menu as MMenu,
        MenuButton,
        MenuItem,
        MenuItems,
    } from '@headlessui/vue'
    import {
        CalendarDaysIcon,
        CreditCardIcon,
        EllipsisVerticalIcon,
        UserCircleIcon,
    } from '@heroicons/vue/20/solid'
    import { ChevronRightIcon } from '@heroicons/vue/20/solid'

    const invoice = {
        subTotal: '$8,800.00',
        tax:      '$1,760.00',
        total:    '$10,560.00',
        items:    [
            {
                id:          1,
                title:       'Logo redesign',
                description: 'New logo and digital asset playbook.',
                hours:       '20.0',
                rate:        '$100.00',
                price:       '$2,000.00',
            },
            {
                id:          2,
                title:       'Website redesign',
                description: 'Design and program new company website.',
                hours:       '52.0',
                rate:        '$100.00',
                price:       '$5,200.00',
            },
            {
                id:          3,
                title:       'Business cards',
                description: 'Design and production of 3.5" x 2.0" business cards.',
                hours:       '12.0',
                rate:        '$100.00',
                price:       '$1,200.00',
            },
            {
                id:          4,
                title:       'T-shirt design',
                description: 'Three t-shirt design concepts.',
                hours:       '4.0',
                rate:        '$100.00',
                price:       '$400.00',
            },
        ],
    }

  </script>