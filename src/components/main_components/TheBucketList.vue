<template>
       <content-card>
            <base-button 
            :mode="bucketListButtonMode"
            @click="setSelectedTab('bucket-list')"
            >Bucketlist</base-button>
            <base-button 
            :mode="addNewActivityButtonMode"
            @click="setSelectedTab('add-new-activity')"
            >Add new activity</base-button>
            <base-button 
            :mode="CompletedButtonMode"
            @click="setSelectedTab('completed')"
            >Completed</base-button>
        </content-card>
        <keep-alive>
            <component :is="selectedTab"></component>
        </keep-alive>
</template>

<script>

import BucketList from './BucketList.vue';

export default {
    components: {
        BucketList
    },
    data() {
        return {
            selectedTab: 'bucket-list',
            storedResources: [
                {
                    id: 'weight',
                    title: 'lose weight',
                    description: 'Achieve my ideal weight'
                },
                {
                    id: 'balloon',
                    title: 'balloon flight',
                    description: 'Fly in a hot-air balloon'
                },
                {
                    id: 'northernlight',
                    title: 'northern light',
                    description: 'See the Northern Lights'
                }
            ]
        }
    },
    provide() {
        return {
            resources: this.storedResources,
            deleteItem: this.removeItem
        };
    },
    computed: {
        bucketListButtonMode() {
            return this.selectedTab == 'bucket-list' ? 'highlight' : null;
        },
        addNewActivityButtonMode() {
            return this.selectedTab == 'add-new-activity' ? 'highlight' : null;
        },
        CompletedButtonMode() {
            return this.selectedTab == 'completed' ? 'highlight' : null;
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        removeItem(itemId) {
            const itemIndex = this.storedResources.findIndex(res => res.id == itemId);
            this.storedResources.splice(itemIndex, 1);
        }
    },
};
</script>
