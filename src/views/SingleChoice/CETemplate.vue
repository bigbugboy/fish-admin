<template>
    <div class="container">
        <el-form :model="handleData" label-position="left" label-width="100px">
            <el-form-item label="题干" class="form-item">
                <WangEdirot fieldName="question" :fieldValue="handleData.question" @callback="updatehandleData" />
            </el-form-item>
            <el-form-item label="A选项" class="form-item">
                <WangEdirot fieldName="choice_a" :fieldValue="handleData.choice_a" @callback="updatehandleData" />
            </el-form-item>
            <el-form-item label="B选项" class="form-item">
                <WangEdirot fieldName="choice_b" :fieldValue="handleData.choice_b" @callback="updatehandleData" />
            </el-form-item>
            <el-form-item label="C选项" class="form-item">
                <WangEdirot fieldName="choice_c" :fieldValue="handleData.choice_c" @callback="updatehandleData" />
            </el-form-item>
            <el-form-item label="D选项" class="form-item">
                <WangEdirot fieldName="choice_d" :fieldValue="handleData.choice_d" @callback="updatehandleData" />
            </el-form-item>
            <el-form-item label="正确答案" class="form-item">
                <el-select v-model="handleData.choice_right" placeholder="请选择正确答案">
                    <el-option v-for="c in choices" :key="c" :label="c" :value="c"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="解析" class="form-item">
                <WangEdirot fieldName="desc" :fieldValue="handleData.desc" @callback="updatehandleData" />
            </el-form-item>

            <el-form-item label="难度系数" class="form-item">
                <el-select v-model="handleData.level_id" placeholder="请选择难度等级">
                    <el-option v-for="l in levels" :key="l.id" :label="l.name" :value="l.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="类型" class="form-item">
                <el-select v-model="handleData.category_id" placeholder="请选择类型">
                    <el-option v-for="c in categories" :key="c.id" :label="c.name" :value="c.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="发布" class="form-item">
                <el-switch v-model="handleData.status"></el-switch>
            </el-form-item>
            <br>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button @click="onCancel">取消</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
import scApi from '@/api/sc'
import levelApi from '@/api/level'
import categoryApi from '@/api/category'
import WangEdirot from '@/components/WangEditor.vue'
export default {
    name: 'CETemplate',
    components: {WangEdirot},
    data() {
        return {
            handleData: {},
            choices: ['A', 'B', 'C', 'D'],
            levels: [],
            categories: [],
        }
    },

    created() {
        const pk = this.$route.query.id
        if (pk !== undefined) {
            scApi.getSingleChoice({ id: Number(pk) }).then(res => {
                this.handleData = res.data
            })
        }
        levelApi.getLevel().then(res => {
            this.levels = res.data
        })
        categoryApi.getCategory().then(res => {
            this.categories = res.data
        })
    },
    methods: {
        onSubmit() {
            if (this.handleData.id === undefined) {
                console.log('create...');
                this.createSc()
            } else {
                this.updateSc()
            }
        },
        createSc() {
            scApi.createSingleChoice(this.handleData).then(res => {
                console.log(res.data);
                this.$router.go(-1)
            }).catch(error => {
                console.log(error);
            })
        },
        updateSc() {
            scApi.updateSingleChoice(this.handleData).then(res => {
                console.log(res.data);
                this.$router.go(-1)
            })
        },
        onCancel() {
            this.$router.go(-1)
        },
        updatehandleData(key, val){
            this.handleData[key] = val
        },
    }

}
</script>

<style scoped>
.form-item {
    width: 50%;
}
</style>