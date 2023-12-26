<template>
    <div class="flex flex-col gap-11">
        <!-- title -->
        <div class="flex items-center justify-between">
            <h1 class="text-3xl">
                Segments
            </h1>
            <ui-button primary large to="/contacts/segments/new">
                Create a segment
            </ui-button>
        </div>

        <!-- empty state -->
        <ui-empty-state />

        <!-- pre defined segments -->
        <div>
            <!-- pre defined header -->
            <div class="flex gap-8 justify-between mb-8">
                <div class="text-base text-gray">
                    Pre-defined Segments
                </div>

                <ui-button white class="items-center px-4 py-2.5">
                    Use a pre-build segment
                    <arrow-right-icon style="height: 22px" />
                </ui-button>
            </div>

            <!-- pre defined items -->
            <div class="gap-4 grid grid-cols-3">
                <ui-predefined-card />
                <ui-predefined-card :image="2" />
                <ui-predefined-card :image="3" />
            </div>
        </div>

        <!-- guides -->
        <block-guides />
    </div>
</template>
  
<script setup>

    import { ArrowRightIcon } from '@heroicons/vue/20/solid'

</script>