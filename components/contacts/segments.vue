<template>
    <div class="relative">
        <div v-if="selectedPeople.length > 0" class="absolute bg-white flex h-12 items-center left-14 sm:left-12 space-x-3 top-0" style="z-index: 15">
            <button type="button" class="bg-white disabled:cursor-not-allowed disabled:hover:bg-white disabled:opacity-30 font-semibold hover:bg-gray-50 inline-flex items-center px-2 py-1 ring-1 ring-gray-300 ring-inset rounded shadow-sm text-gray-900 text-sm">
                Delete
            </button>
        </div>
        <table class="border-separate border-spacing-0 min-w-full">
            <thead>
                <tr>
                    <th scope="col" class="backdrop-blur backdrop-filter bg-opacity-75 bg-white border-b border-gray-300 font-semibold lg:pl-10 pl-4 pr-3 py-3.5 relative sm:pl-6 sticky text-gray-900 text-left text-sm top-0 z-10">
                        <input type="checkbox" class="-mt-2 absolute border-gray-300 focus:ring-primary-600 h-4 left-4 rounded text-primary-600 top-1/2 w-4" :checked="indeterminate || selectedPeople.length === people.length" :indeterminate="indeterminate" @change="selectedPeople = $event.target.checked ? people.map((p) => p.email) : []" />
                    </th>
                    <th scope="col" class="backdrop-blur backdrop-filter bg-opacity-75 bg-white border-b border-gray-300 font-semibold hidden px-3 py-3.5 sm:table-cell sticky text-gray-900 text-left text-sm top-0 z-10">
                        Name
                    </th>
                    <th scope="col" class="backdrop-blur backdrop-filter bg-opacity-75 bg-white border-b border-gray-300 font-semibold hidden px-3 py-3.5 sm:table-cell sticky text-gray-900 text-left text-sm top-0 z-10">
                        Creation Date
                    </th>
                    <th scope="col" class="backdrop-blur backdrop-filter bg-opacity-75 bg-white border-b border-gray-300 font-semibold hidden lg:table-cell px-3 py-3.5 sticky text-gray-900 text-left text-sm top-0 z-10">
                        Subscribers
                    </th>
                    <th scope="col" class="backdrop-blur backdrop-filter bg-opacity-75 bg-white border-b border-gray-300 font-semibold px-3 py-3.5 sticky text-gray-900 text-left text-sm top-0 z-10">
                        Open Rate
                    </th>
                    <th scope="col" class="backdrop-blur backdrop-filter bg-opacity-75 bg-white border-b border-gray-300 font-semibold px-3 py-3.5 sticky text-gray-900 text-left text-sm top-0 z-10">
                        Click Rate
                    </th>
                    <th scope="col" class="backdrop-blur backdrop-filter bg-opacity-75 bg-white border-b border-gray-300 font-semibold px-3 py-3.5 sticky text-gray-900 text-left text-sm top-0 z-10">
                        Mails Sent
                    </th>
                    <th scope="col" class="backdrop-blur backdrop-filter bg-opacity-75 bg-white border-b border-gray-300 lg:pr-8 pl-3 pr-4 py-3.5 sm:pr-6 sticky top-0 z-10">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(person, personIdx) in people" :key="person.email" :class="[selectedPeople.includes(person.email) && 'bg-gray-50']">
                    <td class="px-7 relative sm:px-6 sm:w-12">
                        <div v-if="selectedPeople.includes(person.email)" class="absolute bg-primary-600 inset-y-0 left-0 w-0.5" />
                        <input v-model="selectedPeople" type="checkbox" class="-mt-2 absolute border-gray-300 focus:ring-primary-600 h-4 left-4 rounded text-primary-600 top-1/2 w-4" :value="person.email" />
                    </td>
                    <td :class="[personIdx !== people.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900 px-3']">
                        {{ person.name }}
                    </td>
                    <td :class="[personIdx !== people.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell']">
                        2023-01-01
                    </td>
                    <td :class="[personIdx !== people.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 lg:table-cell']">
                        5
                    </td>
                    <td :class="[personIdx !== people.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap px-3 py-4 text-sm text-gray-500']">
                        2
                    </td>
                    <td :class="[personIdx !== people.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap px-3 py-4 text-sm text-gray-500']">
                        50%
                    </td>
                    <td :class="[personIdx !== people.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap px-3 py-4 text-sm text-gray-500']">
                        500
                    </td>
                    <td :class="[personIdx !== people.length - 1 ? 'border-b border-gray-200' : '', 'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-10']">
                        <nuxt-link to="/contacts/segments/1" class="hover:text-primary-900 text-primary-600">
                            Show<span class="sr-only">, {{ person.name }}</span>
                        </nuxt-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>

    const people = [
        { name: 'segment 1', email: 'lindsay.walton@example.com', role: 'Member' },
        { name: 'segment 2', title: 'Front-end Developer', email: 'lindsay.john@example.com', role: 'Member' },
        { name: 'segment 3', title: 'Front-end Developer', email: 'lindsay.doe@example.com', role: 'Member' },
        // More people...
    ]

    const selectedPeople = ref([])
    const indeterminate = computed(() => selectedPeople.value.length > 0 && selectedPeople.value.length < people.length)

</script>