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
        <content-card>
            my bucket list
        </content-card>
    </div>
</template>

<script>


export default {
    data() {
        return {
            selectedTab: 'bucket-list'
        }
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
