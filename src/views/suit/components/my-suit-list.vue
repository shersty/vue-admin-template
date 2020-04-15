<template>
  <div>
    <el-collapse>
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
export default {
  name: 'SuitList',
  props: {
    suitList: {
      type: Array,
      default: () => ({})
    }
  },
  data() {
    this.colConfigs = [
      { prop: 'desc', label: '描述' },
      { prop: 'id', label: 'ID' }
    ]
    this.testApiList = [
      { desc: '接口1', id: '1' },
      { desc: '接口2', id: '2' }
    ]
    return {
    }
  }
}
</script>
