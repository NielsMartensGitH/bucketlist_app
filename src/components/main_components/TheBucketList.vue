<template>
    <div>
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
    </div>
</template>

<script>

import Bucketlist from './BucketList.vue';

export default {
    component: {
        Bucketlist
    },
    data() {
        return {
            selectedTab: 'bucket-list',
            storedResources: [
                {
                    title: 'lose weight',
                    description: 'Achieve my ideal weight'
                },
                {
                    title: 'balloon flight',
                    description: 'Fly in a hot-air balloon'
                },
                {
                    title: 'northern light',
                    description: 'See the Northern Lights'
                }
            ]
        }
    },
    provide() {
        return {
            resources: this.storedResources
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
        }
    }
}
</script>
