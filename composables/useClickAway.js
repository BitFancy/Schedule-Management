import { onMounted, onUnmounted, ref } from 'vue'

export function useClickAway(handler) {
    const target = ref(null)

    const listener = (event) => {
        if (target.value && !target.value.contains(event.target)) {
            handler()
        }
    }

    onMounted(() => document.addEventListener('click', listener))
    onUnmounted(() => document.removeEventListener('click', listener))

    return target
}
