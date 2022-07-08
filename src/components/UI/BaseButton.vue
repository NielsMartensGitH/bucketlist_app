<template>
    <button :class="mode">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: ['mode']
}
</script>

<style scoped>
    button {
        padding: 0.5rem 3rem;
        color: black;
        border: none;
    }

    button:hover {
        background-color: rgba(0, 0, 0, 0.256);
    }

    .highlight {
        background-color: rgb(145, 26, 35);
        color: white;
        margin-left: 0.2rem;
    }

    .highlight-green {
        background-color: rgb(48, 118, 51);
        color: white;
    }

    .highlight:hover {
        background-color: black;
    }
</style>