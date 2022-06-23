<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<script>


export default {
    props: ['title']
}
</script>

<style defer>

header {
    background-color: rgb(77, 120, 77);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5rem;
}

header h1 {
    color: white;
}

</style>
