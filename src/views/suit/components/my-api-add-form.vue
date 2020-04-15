<template>
  <el-form label-width="150px" :model="form">
    <el-form-item label="第几步:">
      <el-input-number v-model="num" controls-position="right" :min="1" :max="10" />
    </el-form-item>
    <el-form-item label="接口描述:">
      <el-input v-model="form.desc" />
    </el-form-item>
    <el-form-item label="URL:">
      <el-input v-model="form.url" />
    </el-form-item>
    <el-form-item label="入参:">
      <el-input v-model="form.params" type="textarea" autosize />
    </el-form-item>
    <el-form-item label="校验字段:">
      <el-input v-model="form.verify" type="textarea" autosize />
    </el-form-item>
    <el-form-item label="中间处理字段:">
      <el-input v-model="form.pendingdata" />
    </el-form-item>
    <el-form-item label="要存储的字段:">
      <el-input v-model="form.storingdata" />
    </el-form-item>
    <el-form-item label="请求方法">
      <el-select v-model="form.method">
        <el-option label="POST" value="1" />
        <el-option label="GET" value="0" />
      </el-select>
    </el-form-item>
  </el-form>

</template>

<script>
export default {
  name: 'ApiForm',
  data() {
    return {
      form: {
        step: 1,
        suit: null,
        desc: '',
        url: '',
        method: '',
        params: '',
        verify: '',
        pendingdata: '',
        storingdata: ''
      },
      num: 1
    }
  },
  created() {
    console.log('begin to add api')
  }
}
</script>
