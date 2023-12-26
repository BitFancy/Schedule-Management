<template>
    <listbox v-model="current" as="div">
        <listbox-label class="block font-medium leading-6 text-gray-900 text-sm">
            {{ label }}
        </listbox-label>
        <div class="mt-2 relative">
            <listbox-button class="bg-white cursor-default focus:outline-none focus:ring-2 focus:ring-primary-600 pl-3 pr-10 py-1.5 relative ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900 text-left w-full">
                <span class="block truncate">{{ current.name }}</span>
                <span class="absolute flex inset-y-0 items-center pointer-events-none pr-2 right-0">
                    <chevron-up-down-icon class="h-5 text-gray-400 w-5" aria-hidden="true" />
                </span>
            </listbox-button>
  
            <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                <listbox-options class="absolute bg-white focus:outline-none max-h-60 mt-1 overflow-auto py-1 ring-1 ring-black ring-opacity-5 rounded-md shadow-lg sm:text-sm text-base w-full z-10">
                    <listbox-option v-for="person in items" :key="person.id" #default="{ active, selected }" as="template" :value="person">
                        <li :class="[active ? 'bg-primary-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                            <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{ person.name }}</span>
  
                            <span v-if="selected" :class="[active ? 'text-white' : 'text-primary-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                <check-icon class="h-5 w-5" aria-hidden="true" />
                            </span>
                        </li>
                    </listbox-option>
                </listbox-options>
            </transition>
        </div>
    </listbox>
</template>
  
<script setup>

    import { ref } from 'vue'
    import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
    import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
  
    const props = defineProps({
        label: String,
        items: Array,
    })

    const current = ref(props.items[0])

</script>