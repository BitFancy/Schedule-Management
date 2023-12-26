<template>
    <div>
        <!-- pre defined header -->
        <div class="flex gap-8 justify-between mb-8">
            <div class="font-600 text-base text-gray-900">
                Our guides
            </div>

            <ui-button white class="items-center px-4 py-2.5">
                View all
                <arrow-right-icon style="height: 22px" />
            </ui-button>
        </div>

        <!-- pre defined items -->
        <div class="gap-4 grid grid-cols-3">
            <ui-blog />
            <ui-blog kind="SMS" />
            <ui-blog kind="Notification" />
        </div>
    </div>
</template>

  
<script setup>

    import { ArrowRightIcon } from '@heroicons/vue/20/solid'

</script>