<template>
    <div>
        <label v-if="label" :for="id" class="block font-medium leading-6 text-gray-900 text-sm">{{ label }}</label>
        <div :class="{ 'mt-2' : label }">
            <input :id="id" :name="name" :type="type" :autocomplete="autocomplete" :placeholder="placeholder" class="block border-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 placeholder:text-gray-400 px-2 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900 w-full" />
        </div>
    </div>
</template>

<script setup>

    defineProps({
        label:        String,
        placeholder:  String,
        autocomplete: String,
        type:         {
            type:    String,
            default: 'text'
        },
        name: String,
        id:   String,
    })

</script>