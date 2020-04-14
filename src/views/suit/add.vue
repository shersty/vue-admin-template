<template>
  <!-- <el-card>add</el-card> -->
  <div>
    <el-form label-width="20%">
      <el-form-item label="suit描述：">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="所属分组：">
        <el-select v-model="form.region" placeholder="请选择suit分组">
          <el-option label="公交" value="1" />
          <el-option label="门卡" value="0" />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        regin: ''
      }
    }
  }
}
</script>
