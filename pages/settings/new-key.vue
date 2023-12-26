<template>
    <div class="container mx-auto p-4">
        <h1 class="font-bold mb-4 text-2xl text-gray-800">
            Add API Key
        </h1>
        <form class="space-y-4" @submit.prevent="saveApiKey">
            <div>
                <label class="block font-bold mb-1 text-gray-800" for="name">API Key Name:</label>
                <input id="name" v-model="apiKeyName" type="text" class="block border-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 placeholder:text-gray-400 px-2 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900 w-full" />
            </div>
            <div>
                <label class="block font-bold mb-1 text-gray-800" for="key">API Key Value:</label>
                <input id="key" v-model="apiKeyValue" type="text" class="block border-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 placeholder:text-gray-400 px-2 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900 w-full" />
            </div>
            <div>
                <label class="block font-bold mb-1 text-gray-800" for="description">Description:</label>
                <textarea id="description" v-model="apiKeyDescription" class="block border-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 placeholder:text-gray-400 px-2 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900 w-full" />
            </div>
            <button type="submit" class="bg-blue-500 px-4 py-2 rounded-md text-white">
                Save API Key
            </button>
        </form>
    </div>
</template>
  
<script setup>



</script>
