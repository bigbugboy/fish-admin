<template>
    <div style="border: 1px solid #ccc;">
        <Toolbar style="border-bottom: 1px solid #ccc" :editor="editor" :defaultConfig="toolbarConfig" :mode="mode" />
        <Editor style="min-height: 300px; overflow-y: hidden;" v-model="html" :defaultConfig="editorConfig" :mode="mode"
            @onCreated="onCreated" @onChange="onChange" />
    </div>
</template>

<script>
import Vue from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

export default Vue.extend({
    name: 'WangEditor',
    components: { Editor, Toolbar },
    props: {
        fieldName: {type: String},
        fieldValue: { type: String },
    },
    data() {
        return {
            editor: null,
            toolbarConfig: {},
            editorConfig: {
                placeholder: '请输入内容...',
            },
            mode: 'default', // or 'simple',
            html: '',
        }
    },
    watch: {
        fieldValue(val) {
            this.html = val
        }
    },
    methods: {
        onCreated(editor) {
            this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
        },
        onChange(editor) {
            this.$emit('callback', this.fieldName, this.editor.getHtml())
        },
    },
    beforeDestroy() {
        const editor = this.editor
        if (editor == null) return
        editor.destroy() // 组件销毁时，及时销毁编辑器
    }
})
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>