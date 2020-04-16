<template>
  <div class="suit-list-main-div">
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
  methods: {
    addApi(suitId, suitDesc) {
      this.selectSuitId = suitId
      this.selectSuitDesc = suitDesc
      this.$store.commit('suit/T_API_ADD_FORM')
    },
    addApiSubmit() {
      alert('submit')
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
</style>
