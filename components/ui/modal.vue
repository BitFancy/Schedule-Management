<template>
    <slot name="button" @click="onOpen" />
    <transition-root as="template" :show="open">
        <d-dialog as="div" class="relative w-auto z-10" @close="open = false ">
            <transition-child as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="bg-gray-500 bg-opacity-75 fixed inset-0 transition-opacity" />
            </transition-child>

            <div class="fixed inset-0 overflow-y-auto z-10" @click="setModalShow(false)">
                <div class="flex items-end justify-center min-h-full p-4 sm:items-center sm:p-0 text-center">
                    <transition-child as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <dialog-panel class="bg-white overflow-hidden pb-4 pt-5 px-4 relative rounded-lg shadow-xl sm:max-w-sm sm:my-8 sm:p-6 sm:w-full text-left transform transition-all">
                            <slot />
                        </dialog-panel>
                    </transition-child>
                </div>
            </div>
        </d-dialog>
    </transition-root>
</template>

<script setup>

    import { Dialog as DDialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'

    const props = defineProps({
        modelValue: {
            type:    Boolean,
            default: undefined,
        },
        setModalShow: {
            type:    Function,
            default: undefined
        }

    })

    const emit = defineEmits(['update:modelValue'])

    const _open = ref(false)
    const open = computed({
        get() {
            return props.modelValue ?? _open.value
        },
        set(val) {
            emit('update:modelValue', val)
            _open.value = val
        }
    })

    function onOpen() {
        open.value = true
    }

</script>