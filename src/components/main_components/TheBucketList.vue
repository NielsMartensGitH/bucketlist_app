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
            @click="setSelectedTab('completed-activity')"
            >Completed</base-button>
        </content-card>
        <keep-alive>
            <component :is="selectedTab"></component>
        </keep-alive>
</template>

<script>

import BucketList from './BucketList.vue';
import AddNewActivity from './AddNewActivity.vue';
import CompletedActivity from './CompletedActivity.vue';

export default {
    components: {
        BucketList,
        AddNewActivity,
        CompletedActivity
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
            ],
            completedResources: []
        }
    },
    provide() {
        return {
            resources: this.storedResources,
            deleteItem: this.removeItem,
            addItem: this.addNewItem,
            setCompleted: this.setCompleted,
            completed: this.completedResources
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
            return this.selectedTab == 'completed-activity' ? 'highlight' : null;
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        removeItem(itemId) {
            const itemIndex = this.storedResources.findIndex(res => res.id == itemId);
            this.storedResources.splice(itemIndex, 1);
        },
        addNewItem(title, description) {
            const newItem = {
                id: new Date().toISOString(),
                title: title,
                description: description
            };
            console.log(newItem);
            this.storedResources.unshift(newItem);
            this.selectedTab = 'bucket-list';
        },
        setCompleted(id) {
            const index = this.storedResources.findIndex(res => res.id == id);
            const newCompleted = {
                id: this.storedResources[index].id,
                title: this.storedResources[index].title,
                description: this.storedResources[index].description
            }
            this.removeItem(id);
            this.completedResources.unshift(newCompleted);
            this.selectedTab = 'completed-activity';
        }
    },
};
</script>
