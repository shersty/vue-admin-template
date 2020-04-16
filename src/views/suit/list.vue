<template>
  <el-tabs v-model="activeName" class="main-tabs" type="border-card" stretch>
    <el-tab-pane label="公交" name="busCard">
      <MySuitList
        :suit-list="busCardSuitList"
        :api-list="apiList"
      />
    </el-tab-pane>
    <el-tab-pane label="门卡" name="doorCard">
      <MySuitList :suit-list="doorCardSuitList" />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { getSuitList, getApisBySuitId } from '../../api/suit'
import MySuitList from './components/my-suit-list'
export default {
  components: {
    MySuitList
  },
  data() {
    return {
      busCardSuitList: [],
      doorCardSuitList: [],
      apiList: [],
      activeName: 'busCard'
    }
  },
  created() {
    this.fetchSuitList()
    this.fetchApiList()
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
    },
    fetchApiList() {
      console.log('fetch api list')
      getApisBySuitId(1).then(response => {
        this.apiList = response.data
      })
      console.log('got api List ' + this.apiList)
    }
  }
}
</script>

<style scoped>
.main-tabs{
  margin: 20px;
}
</style>
