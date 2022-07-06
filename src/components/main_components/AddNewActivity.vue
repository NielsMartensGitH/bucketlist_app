<template>
    <content-card>
        <form>
            <div class="form-control">
                <label>Title</label>
                <input type="text">
            </div>
            <div class="form-control">
                <label>Description</label>
                <textarea></textarea>
            </div>
            <div class="form-control">
                <base-button :mode="'highlight'">Add new activity</base-button>
            </div>
        </form>
    </content-card>
</template>

<script>


export default {
    data() {
        return {
            test: "hello"
        }
    }
}
</script>

<style scoped>

    label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
    }

    input,
    textarea {
        font: inherit;
        display: block;
        border: 2px solid #ccc;
        padding: 0.15rem;
        width: 100%;
    }

    input:focus,
    textarea:focus {
        background-color: rgb(225, 152, 152);
        outline: none;
        border-color: rgb(28, 48, 28)
    }

    .form-control {
        width: 90%;
        margin: 0 auto;
        padding: 0.8rem 0.3rem;
    }

</style>