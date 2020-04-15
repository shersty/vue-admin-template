<template>
  <div>
    <el-collapse>
      <el-collapse-item
        v-for="suit in suitList"
        :key="suit.id"
      >
        <template slot="title">
          <span>{{ suit.id }} | {{ suit.desc }}</span>
        </template>
        <el-table
          :data="testApiList"
          style="width: 100%"
        >
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
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-dialog :title="'添加接口-' + selectSuitId + '-' + selectSuitDesc" :visible.sync="apiAddFormVisible" :modal-append-to-body="true">
      <div slot="title" align="center">
        <span>添加接口-{{ selectSuitId }}-{{ selectSuitDesc }}
        </span>
      </div>
      <ApiForm />
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
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
      default: () => ({})
    }
  },
  data() {
    // 配置suit列表显示列
    this.colConfigs = [
      { prop: 'desc', label: '描述' },
      { prop: 'id', label: 'ID' }
    ]
    this.testApiList = [
      { desc: '接口1', id: '1' },
      { desc: '接口2', id: '2' }
    ]
    return {
      apiAddFormVisible: false,
      selectSuitId: null,
      selectSuitDesc: null
    }
  },
  methods: {
    addApi(suitId, suitDesc) {
      this.apiAddFormVisible = true
      console.log('click add api')
      this.selectSuitId = suitId
      this.selectSuitDesc = suitDesc
    }
  }
}
</script>

<style scoped>
.in-list-button{
  margin-top: 20px;
  margin-right: 20px;
}
</style>
