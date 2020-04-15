<template>
  <el-tabs v-model="activeName" class="main-tabs" type="border-card" stretch>
    <el-tab-pane label="公交" name="busCard">
      <MySuitList :suit-list="busCardSuitList" />
    </el-tab-pane>
    <el-tab-pane label="门卡" name="doorCard">
      <MySuitList :suit-list="doorCardSuitList" />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { getSuitList } from '../../api/suit'
import MySuitList from './components/my-suit-list'
export default {
  components: {
    MySuitList
  },
  data() {
    return {
      busCardSuitList: [],
      doorCardSuitList: [],
      activeName: 'busCard'
    }
  },
  created() {
    this.fetchSuitList()
  },
  methods: {
    // 分别获取门卡和公交的 suit 列表
    fetchSuitList() {
      getSuitList(1).then(response => {
        this.busCardSuitList = response.data
      })
      getSuitList(0).then(response => {
        this.doorCardSuitList = response.data
      })
    }
  }
}
</script>

<style scoped>
.main-tabs{
  margin: 20px;
}
</style>
