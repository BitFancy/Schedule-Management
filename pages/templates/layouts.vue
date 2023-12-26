<template>
    <div>
        <ui-page-title title="Layouts">
            <button class="bg-primary cursor-pointer flex flex-row gap-2 px-3 py-2 rounded text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add Layout
            </button>
        </ui-page-title>

        <!-- Existing Templates List -->
        <table class="mb-5 table w-full">
            <thead>
                <tr>
                    <th scope="col">
                        Layout Name
                    </th>
                    <th scope="col">
                        Created At
                    </th>
                    <th scope="col">
                        Last Updated At
                    </th>
                    <th scope="col">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="template in templates" :key="template.id">
                    <td>
                        {{ template.name }}
                    </td>
                    <td>
                        2022-01-01
                    </td>
                    <td>
                        2022-01-02
                    </td>
                    <td>
                        <button class="bg-blue-500 hover:bg-blue-700 px-8 py-1 rounded text-white" @click="editTemplate(template.id)">
                            Edit
                        </button>
                        <button class="bg-red-500 hover:bg-red-700 ml-4 px-8 py-1 rounded text-white" @click="deleteTemplate(template.id)">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script setup>

    import { ref } from 'vue'

  
    // Mock templates data
    const templates = ref([
        { id: 1, name: 'Template 1', type: 'GIT', languages: ['English', 'French'] },
        { id: 2, name: 'Template 2', type: 'HTML', languages: ['English', 'Spanish'] },
        { id: 3, name: 'Template 3', type: 'UI Editor', languages: ['English', 'German'] },
        { id: 4, name: 'Template 4', type: 'HTML', languages: ['French'] },
    ])

    const editTemplate = (templateId) => {
        // Edit template logic goes here...
        console.log('Editing Template:', templateId)
    }
  
    const deleteTemplate = (templateId) => {
        // Delete template logic goes here...
        console.log('Deleting Template:', templateId)
    }

</script>