<template>
    <div class="mt-10">
        <!-- filters -->
        <div class="flex max-w-7xl mb-10 mx-auto px-4 sm:px-6 space-x-3">
            <!-- email -->
            <div class="flex-1">
                <label for="email" class="block font-medium leading-6 text-gray-900 text-sm">Search contact</label>
                <div class="mt-2">
                    <input id="email" type="email" name="email" class="block border-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 placeholder:text-gray-400 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900 w-full" placeholder="you@example.com" />
                </div>
            </div>

            <!-- filters -->
            <ui-select class="w-40" label="status" :items="items('all', 'active', 'inactive', 'spam complaints', 'bounces')" />
            <ui-select class="w-40" label="preferences" :items="items('all', 'active', 'inactive')" />
            <ui-select class="w-40" label="segments" :items="items('all', 'active', 'inactive')" />
            <ui-select class="w-40" label="language" :items="items('all', 'fr', 'nl')" />
            <ui-select class="w-40" label="tags" :items="items('all', 'fr', 'nl')" />
        </div>
        <div class="flex gap-6 max-w-7xl mb-10 mx-auto px-4 sm:px-6 space-x-3">
            <label>
                <input type="checkbox" />
                Mailing contacts
            </label>
            <label>
                <input type="checkbox" />
                Mobile Notifications contacts
            </label>
            <label>
                <input type="checkbox" />
                SMS contacts
            </label>
        </div>

        <!-- table -->
        <ui-table-deletable style="z-index: 1;" />
    </div>
</template>

<script setup>

    function items() {
        const res = []
        for(var n of arguments) {
            res.push({ name: n })
        }

        return res
    }

</script>