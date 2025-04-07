<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

import ToTopButton from '@/components/buttons/ToTopButton.vue'
import MenuHeader from '@/components/app/MenuHeader.vue'

const rt = useRoute()
const search = computed<boolean>(() => !!rt.meta.search)
const back = computed<boolean>(() => !!rt.meta.back)
const menu = ref()
const main = ref()

setTimeout(() => main.value.focus(), 100)

function onKeyPress(event: KeyboardEvent) {
    if (event.key === '/') {
        menu.value.focus()
    }
    return event
}
</script>

<template>
    <div class="wrapper maladum-app">
        <MenuHeader
            ref="menu"
            :show-back="back"
            :show-search="search"
            tabindex="-2"
            @keyup="onKeyPress"
        />
        <main
            id="main-content"
            ref="main"
            class="content"
            tabindex="-1"
            @keyup="onKeyPress"
        >
            <router-view v-slot="{ Component, route }">
                <transition mode="out-in" name="slide-fade">
                    <component :is="Component" :key="route.path" />
                </transition>

                <ToTopButton />
            </router-view>
        </main>
    </div>
</template>
