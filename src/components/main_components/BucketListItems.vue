<template>
    <li>
        <content-card>
            <header>
                <h2> {{title}} </h2>
                <base-button :mode="'highlight'" @click="deleteItem(id)">Delete</base-button>
            </header>
            <p> {{ description }} </p>
        </content-card>
    </li>
</template>

<script>


export default {
    props: ['id','title', 'description'],
    inject: ['deleteItem']
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