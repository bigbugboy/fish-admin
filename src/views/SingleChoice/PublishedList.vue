<template>
  <div class="container">
    <el-button type="primary" @click="gotoCreatePage">新建</el-button>
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
          <el-button size="mini" @click="gotoDetailPage(scope.$index, scope.row)">详情</el-button>
          <el-button size="mini" type="danger" @click="confirmDelete(scope.$index, scope.row)">下架</el-button>
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
    this.loadData()
  },
  methods: {
    loadData(params) {
      scApi.getSingleChoice(params).then(res => {
        this.tableData = res.data;
      }).catch(error => {
        console.log(error);
      })
    },
    onPageChange(page){
      console.log('当前页', page)
      this.loadData({page: page, size: 10})
    },
    gotoCreatePage() {
      this.$router.push({ path: '/sc/detail' })
    },
    gotoDetailPage(index, row) {
      this.$router.push({ path: '/sc/detail', query: { id: row.id } })
    },
    gotoDelete(id) {
      scApi.deleteSingleChoice({ id }).then(_ => {
        console.log("delete success");
        this.$message({ type: 'success', message: '已下架!' });
      }).catch(error => {
        console.log(error)
        this.$message({ type: 'info', message: error });
      })
    },

    confirmDelete(index, row) {
      this.$confirm('确认下架, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.gotoDelete(row.id)
      }).catch(() => {
        this.$message({ type: 'info', message: '已取消' });
      });
    }
  },

}
</script>

<style scoped>
.paginationBox{
  margin-top: 50px;
  text-align: center;
}
</style>