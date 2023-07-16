<template>
  <div class="container">
    <h3>待发布</h3>
    <br>
    <br>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="100" />
      <el-table-column prop="level_id" label="难度等级" width="100" />
      <el-table-column prop="category_id" label="类型" width="100" />
      <el-table-column label="问题" min-width="300">
        <template slot-scope="scope">
          <div v-html="scope.row.question"></div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="gotoDetailPage(scope.$index, scope.row)">审核</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="paginationBox">
      <el-pagination layout="prev, next" @current-change="onPageChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import scApi from '@/api/sc'
export default {
  name: 'ScPublishedList',
  data() {
    return {
      tableData: [],
    }
  },
  created() {
    this.loadData({ status: 0 })
  },
  methods: {
    loadData(paramas) {
      scApi.getSingleChoice(paramas).then(res => {
        this.tableData = res.data;
      }).catch(error => {
        console.log(error);
      })
    },
    onPageChange(page) {
      console.log('当前页', page)
      this.loadData({ page: page, size: 10, status: 0 })
    },
    gotoCreatePage() {
      this.$router.push({ path: '/sc/detail' })
    },
    gotoDetailPage(index, row) {
      this.$router.push({ path: '/sc/detail', query: { id: row.id } })
    },
  },

}
</script>

<style scoped>
.paginationBox {
  margin-top: 50px;
  text-align: center;
}
</style>