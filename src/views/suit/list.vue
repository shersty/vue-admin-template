<template>
  <div>
    <!-- <el-table
      :data="suitList"
      style="width: 100%"
    >
      <el-table-column
        v-for="{ prop, label } in colConfigs"
        :key="prop"
        :prop="prop"
        :label="label"
      />
    </el-table>
    <el-divider /> -->
    <el-collapse accordion="true">
      <el-collapse-item
        v-for="suit in suitList"
        :key="suit.id"
        :title="suit.desc + '||' +suit.id"
      >
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
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { getSuitList } from '../../api/suit'
export default {
  data() {
    // 配置suit列表显示列
    this.colConfigs = [
      { prop: 'desc', label: '描述' },
      { prop: 'id', label: 'ID' }
    ]
    this.testApiList = [
      { desc: 'api1',
        id: 'api/test1' },
      { desc: 'api2',
        id: 'api/test2' }
    ]
    return {
      suitList: null
    }
  },
  created() {
    this.fetchSuitList()
  },
  methods: {
    // 获取suit 列表
    fetchSuitList() {
      getSuitList().then(response => {
        this.suitList = response.data
      })
    }
  }
}
</script>
