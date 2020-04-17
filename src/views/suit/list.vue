<template>
  <el-tabs v-model="activeName" class="main-tabs" type="border-card" stretch>
    <el-tab-pane label="公交" name="busCard">
      <MySuitList
        :suit-list="busCardSuitList"
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
import suit from '../../store/modules/suit'
export default {
  components: {
    MySuitList
  },
  data() {
    return {
      busCardSuitList: [],
      doorCardSuitList: [],
      busApiList: [],
      doorCardApiList: [],
      activeName: 'busCard'
    }
  },
  created() {
    this.fetchSuitList()
  },
  methods: {
    // 分别获取门卡和公交的 suit 列表
    fetchSuitList() {
      return this.fetchBusCardSuit()
        .then(() => this.fetchDoorCardList())
        .then(() => this.fetchBusCardApiList())
        .then(() => this.fetchDoorCardApiList())
        .then(() => {
          for (suit in this.busCardSuitList) {
            this.busCardSuitList[suit]['apis'] = this.busApiList[suit]
          }
          return []
        }).then(() => {
          for (suit in this.doorCardSuitList) {
            this.doorCardSuitList[suit]['apis'] = this.doorCardApiList[suit]
          }
          console.log('all things done')
          return []
        })
    },
    fetchBusCardSuit() {
      return getSuitList(1).then(response => {
        this.busCardSuitList = response.data
        console.log('get bus card suit')
      })
    },
    fetchDoorCardList() {
      return getSuitList(0).then(response => {
        this.doorCardSuitList = response.data
        console.log('get door card suit')
      })
    },
    // 根据suitId获取接口列表
    fetchBusCardApiList() {
      const requestArr = []
      for (suit in this.busCardSuitList) {
        var suitId = this.busCardSuitList[suit].id
        requestArr.push(getApisBySuitId(suitId).then(response => {
          return response.data
        }))
      }
      return Promise.all(requestArr).then((result) => {
        console.log('is me')
        this.busApiList = result
        console.log(result)
      })
    },
    fetchDoorCardApiList() {
      const requestArr = []
      for (suit in this.doorCardSuitList) {
        var suitId = this.doorCardSuitList[suit].id
        requestArr.push(getApisBySuitId(suitId).then(response => {
          return response.data
        }))
      }
      return Promise.all(requestArr).then((result) => {
        console.log('is me')
        this.doorCardApiList = result
        console.log(result)
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
