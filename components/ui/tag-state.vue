<template>
    <div class="bg-black flex flex-col gap-8 h-[65vh] items-center justify-center p-16 relative rounded-2xl text-center text-gray-700 w-full" style="background-color: #F2F7FE;">
        <img src="../../assets/svg/tag.svg" />
        <div>
            <div class="mb-6 text-4xl text-primary-200">
                Easily Target Specific Audience
            </div>

            <p class="text-gray-400 text-sm">
                When sending emails, streamlining your communication strategy.
            </p>
        </div>

        <div class="flex gap-4">
            <ui-button primary large to="/contacts/segments/1">
                Create tag
            </ui-button>
        </div>
    </div>
</template>

<script>

    // import { ArrowRightIcon } from '@heroicons/vue/20/solid'
    // TODO use props to make it dynamic

</script>