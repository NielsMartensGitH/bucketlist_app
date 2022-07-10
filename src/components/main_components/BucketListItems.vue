<template>
    <base-modal title="Are you sure?" v-if="showModal" @close="closeModal">
        <template #default>
            <p>You are about to mark a bucketlist item as completed.</p>
            <p>Are you sure you want to do this?</p>
        </template>
        <template #actions>
             <base-button :mode="'highlight-green'" @click="setCompleted(id); closeModal()">Yes</base-button>
             <base-button :mode="'highlight'" @click="closeModal">No</base-button>
        </template>
    </base-modal>
    <li>
        <content-card>
            <header>
                <h2> {{title}} </h2>
                <div>
                    <base-button :mode="'highlight-green'" @click="openModal">Finished</base-button>
                    <base-button :mode="'highlight'" @click="deleteItem(id)">Delete</base-button>
                </div>
            </header>
            <p> {{ description }} </p>
        </content-card>
    </li>
</template>

<script>


export default {
    props: ['id','title', 'description'],
    inject: ['deleteItem', 'setCompleted'],
    data() {
        return {
            showModal: false
        }
    },
    methods: {
        openModal() {
            this.showModal = true;
            return;
        },
        closeModal() {
            this.showModal = false;
            return;
        }
    }
}
</script>

<style scoped>
    li {
        margin: auto;
        max-width: 40rem;
        list-style: none;
    }

    header {
        padding: 0.5rem 0.6rem;
        display: flex;
        justify-content: space-between;
    }

    p {
        padding: 0.5rem 0.6rem;
    }

</style>