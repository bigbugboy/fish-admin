<template>
    <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item v-for="item in breadcrumbItems" :key="item.path" :to="{ path: item.path }">{{ item.meta.title
        }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    name: 'Breadcrumb',
    computed: {
        breadcrumbItems() {
            let bis = this.$route.matched
            bis[0].path = '/'
            return bis
        }
    },

}
</script>

<style scoped>
.breadcrumb {
    margin: 10px 0 10px;
}
</style>