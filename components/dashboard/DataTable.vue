<template>
    <div class="lg:px-8 px-4 sm:px-6">
        <div class="flow-root mt-8">
            <div class="-mx-4 -my-2 lg:-mx-8 overflow-x-auto sm:-mx-6">
                <div class="align-middle inline-block lg:px-8 min-w-full py-2 sm:px-6">
                    <table class="divide-gray-300 divide-y min-w-full">
                        <thead>
                            <tr>
                                <th scope="col" class="font-semibold pl-4 pr-3 py-3.5 sm:pl-0 text-gray-900 text-left text-sm">
                                    Name
                                </th>
                                <th scope="col" class="font-semibold px-3 py-3.5 text-gray-900 text-left text-sm">
                                    Title
                                </th>
                                <th scope="col" class="font-semibold px-3 py-3.5 text-gray-900 text-left text-sm">
                                    Email
                                </th>
                                <th scope="col" class="font-semibold px-3 py-3.5 text-gray-900 text-left text-sm">
                                    Role
                                </th>
                                <th scope="col" class="pl-3 pr-4 py-3.5 relative sm:pr-0">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-gray-200 divide-y">
                            <tr v-for="person in people" :key="person.email">
                                <td class="font-medium pl-4 pr-3 py-4 sm:pl-0 text-gray-900 text-sm whitespace-nowrap">
                                    {{ person.name }}
                                </td>
                                <td class="px-3 py-4 text-gray-500 text-sm whitespace-nowrap">
                                    {{ person.title }}
                                </td>
                                <td class="px-3 py-4 text-gray-500 text-sm whitespace-nowrap">
                                    {{ person.email }}
                                </td>
                                <td class="px-3 py-4 text-gray-500 text-sm whitespace-nowrap">
                                    {{ person.role }}
                                </td>
                                <td class="font-medium pl-3 pr-4 py-4 relative sm:pr-0 text-right text-sm whitespace-nowrap">
                                    <a href="#" class="hover:text-primary-900 text-primary-600">Edit<span class="sr-only">, {{ person.name }}</span></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script setup>
    const people = [
        { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
        { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
        { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
        { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
        { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
        { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },

    ]
  </script>