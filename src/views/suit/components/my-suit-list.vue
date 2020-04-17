<template>
  <div class="suit-list-main-div">
    <el-collapse>
      <el-collapse-item
        v-for="suit in suitList"
        :key="suit.id"
      >
        <template slot="title">
          <span class="suit-list-header">{{ suit.id }} | {{ suit.desc }}</span>
        </template>
        <el-table
          :data="suit.apiList"
          style="width: 100%"
        >
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="right" class="table-expand" label-width="100px">
                <el-form-item label="步骤编号">
                  <span>{{ props.row.step }}</span>
                </el-form-item>
                <el-form-item label="接口描述">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
                <el-form-item label="接口url">
                  <span>{{ props.row.url }}</span>
                </el-form-item>
                <el-form-item label="请求方法">
                  <span>{{ props.row.id?"POST":"GET" }}</span>
                </el-form-item>
                <el-form-item label="入参">
                  <span>{{ props.row.params }}</span>
                </el-form-item>
                <el-form-item label="校验字段">
                  <span>{{ props.row.verify }}</span>
                </el-form-item>
                <el-form-item label="请求处理字段">
                  <span>{{ props.row.pendingData }}</span>
                </el-form-item>
                <el-form-item label="响应储存字段">
                  <span>{{ props.row.storingData }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            v-for="{ prop, label } in colConfigs"
            :key="prop"
            :prop="prop"
            :label="label"
          />
        </el-table>
        <div class="in-list-button" align="right">
          <el-button type="primary" icon="el-icon-edit" size="medium" circle />
          <el-button type="primary" icon="el-icon-plus" size="medium" circle @click="addApi(suit.id, suit.desc)" />
          <el-button type="danger" icon="el-icon-delete" size="medium" circle @click="deleteSuit(suit.id, suit.desc)" />
        </div>
      </el-collapse-item>
    </el-collapse>
    <ApiForm :select-suit-id="selectSuitId" :select-suit-desc="selectSuitDesc" />
  </div>
</template>

<script>
import ApiForm from './my-api-add-form'

export default {
  name: 'SuitList',
  components: {
    ApiForm
  },
  props: {
    suitList: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    // 配置suit列表显示列
    this.colConfigs = [
      { prop: 'step', label: 'step' },
      { prop: 'desc', label: '描述' },
      { prop: 'url', label: 'URL' },
      { prop: 'method', label: '请求方式' }
    ]
    this.testApiList = [
      { desc: '接口1', id: '1' },
      { desc: '接口2', id: '2' }
    ]
    return {
      selectSuitId: null,
      selectSuitDesc: null,
      form: {
        step: 1,
        suit: null,
        desc: '',
        url: '',
        method: 'POST',
        params: '',
        verify: '',
        pendingdata: '',
        storingdata: ''
      }
    }
  },
  created() {
    console.log('son suit')
    console.log(this.suitList)
  },
  methods: {
    addApi(suitId, suitDesc) {
      this.selectSuitId = suitId
      this.selectSuitDesc = suitDesc
      this.$store.commit('suit/T_API_ADD_FORM')
    },
    deleteSuit(suitId, suitDesc) {
      this.$confirm('此操作将会永久删除[ ' + suitDesc + ' ]以及对应api，是否继续？', '删除[ ' + suitDesc + ' ]', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log('进行删除操作')
        this.$message({
          type: 'success',
          message: '删除成功'
        })
      }).catch(() => {
        console.log('取消删除操作')
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style scoped>
.in-list-button{
  margin-top: 20px;
  margin-right: 20px;
}
.suit-list-main-div{
  position: relative;
}

.table-expand {
  font-size: 0;
}
.table-expand label {
  width: 200px;
  color: #68a0ee;
}
.table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}

.suit-list-header {
  font-size: 15px;
}
</style>
