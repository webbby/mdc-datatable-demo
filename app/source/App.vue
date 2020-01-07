<template>
        <main class="app">
            <Table />
        </main>
</template>

<script>
    import Table from "./components/Table";
    export default {
        name: "App",
        components: {Table}
    }
</script>
<style>
    .h100 {
        height: 100%;
        overflow-y: auto;
    }
</style>

<style scoped>
    main {
        height: 100%;
    }
</style>
