<template>
  <!-- <el-card>add</el-card> -->
  <div>
    <el-form ref="suitForm" label-width="20%" style="margin-top: 50px" :rules="addRules" :model="suitForm">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>基础信息</span>
        </div>
        <el-form-item label="suit描述：" prop="desc">
          <el-input v-model="suitForm.desc" maxlength="20" style="width: 60%" />
        </el-form-item>
        <el-form-item label="所属分组：" prop="group">
          <el-select v-model="suitForm.groupId" placeholder="请选择suit分组">
            <el-option label="公交" value="1" />
            <el-option label="门卡" value="0" />
          </el-select>
        </el-form-item>
      </el-card>

      <el-card class="box-card">
        <div slot="header">
          <span>添加执行用户</span>
          <el-switch
            v-model="suitForm.changeUser"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </div>
        <!-- 添加执行该suit的用户 -->
        <template v-if="suitForm.changeUser">
          <el-form-item label="用户名：" prop="userName">
            <el-input v-model="suitForm.userName" maxlength="20" style="width: 60%" />
          </el-form-item>
          <el-form-item label="密码：" prop="passWord">
            <el-input v-model="suitForm.passWord" maxlength="20" style="width: 60%" show-password />
          </el-form-item>
        </template>
      </el-card>
      <el-form-item label="运行？" prop="run">
        <el-switch
          v-model="suitForm.run"
          active-color="#13ce66"
          inactive-color="#ff4949"
        />
      </el-form-item>
      <el-form-item>
        <el-button @click="onSubmit('suitForm')">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addSuit } from '../../api/suit'
export default {
  data() {
    return {
      suitForm: {
        desc: '',
        groupId: '1',
        userName: '3150039459',
        passWord: 'nfc123456',
        changeUser: false,
        run: false
      },
      addRules: {
        desc: [
          { required: true, message: '请输入suit描述', trigger: 'change' }
        ],
        groupId: [
          { required: true, trigger: 'blur' }
        ],
        userName: [
          { required: true, trigger: 'blur' }
        ],
        passWord: [
          { required: true, trigger: 'blur' }
        ],
        run: [
          { required: true, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    changeUser: function() {
      return this.suitForm.changeUser
    }
  },
  watch: {
    changeUser: function() {
      if (this.suitForm.changeUser) {
        this.suitForm.userName = ''
        this.suitForm.passWord = ''
      } else {
        this.suitForm.userName = '3150039459'
        this.suitForm.passWord = 'nfc123456'
      }
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          addSuit(this.suitForm)
        } else {
          console.log('err submit!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
  .box-card {
  width: 80%;
  margin-left: 10%;
  margin-bottom: 50px;
}
</style>
