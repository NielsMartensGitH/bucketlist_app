<template>
    <ul>
        <completed-items
        v-for="comp in completed"
        :key="comp.id"
        :id="comp.id"
        :title="comp.title"
        :description="comp.description"
        ></completed-items>
    </ul>
</template>

<script>

import CompletedItems from './CompletedItems.vue';
export default {
    components: {
        CompletedItems
    },
    inject: ['completed'],
    data() {
        return {
            test: "hello"
        }
    }
}
</script>

<style scoped>

</style>