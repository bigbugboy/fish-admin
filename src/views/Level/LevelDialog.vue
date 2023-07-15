<template>
    <el-dialog :visible="true" :title="title" @close="closeDialog">
        <el-input v-model="name" placeholder="难度"></el-input>
        <div slot="footer">
            <el-button @click="closeDialog">取 消</el-button>
            <el-button type="primary" @click="submitHandler">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    name: 'LevelDialog',
    props: {
        title: { type: String, default: 'title' },
    },
    data() {
        return {
            name: ''
        }
    },
    methods: {
        closeDialog() {
            this.$emit('closeDialog')
        },
        submitHandler() {
            if (this.name.trim()) {
                this.$emit('submit', this.name)
            }
        }

    },

}
</script>

<style></style>