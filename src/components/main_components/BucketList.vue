<template>
    <ul>
        <bucket-list-items
        v-for="res in resources"
        :key="res.title"
        :title="res.title"
        :description="res.description"
        ></bucket-list-items>
    </ul>
</template>

<script>
import BucketListItems from  './BucketListItems.vue';

export default {
    inject: ['resources'],
    components: {
        BucketListItems
    }
}
</script>

<style scoped>

</style>