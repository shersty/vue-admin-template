<template>
  <el-tabs v-model="activeName" class="main-tabs" type="border-card" stretch>
    <el-tab-pane label="公交" name="busCard">
      <MySuitList
        :group-id="1"
      />
    </el-tab-pane>
    <el-tab-pane label="门卡" name="doorCard">
      <MySuitList
        :group-id="0"
      />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import MySuitList from './components/my-suit-list'
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
  },
  methods: {

  }
}
</script>

<style scoped>
.main-tabs{
  margin: 20px;
}
</style>
