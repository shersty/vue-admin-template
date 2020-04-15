<template>
  <MySuiList :suit-list="suitList" />
</template>

<script>
import { getSuitList } from '../../api/suit'
import MySuiList from './components/my-suit-list'
export default {
  components: {
    MySuiList
  },
  data() {
    // 配置suit列表显示列
    this.colConfigs = [
      { prop: 'desc', label: '描述' },
      { prop: 'id', label: 'ID' }
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
