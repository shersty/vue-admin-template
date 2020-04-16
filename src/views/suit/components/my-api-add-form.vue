<template>
  <el-dialog :visible.sync="$store.state.suit.apiAddFormVisible" :modal-append-to-body="true">
    <div slot="title" align="center">
      <span>添加接口-{{ selectSuitId }}-{{ selectSuitDesc }}
      </span>
    </div>
    <!-- <ApiForm /> -->
    <el-form ref="apiForm" label-width="150px" :model="apiForm" class="api-form" :rules="formRule">
      <el-form-item label="第几步:" prop="step">
        <el-input-number v-model="apiForm.step" controls-position="right" :min="1" :max="10" />
      </el-form-item>
      <el-form-item label="接口描述:" prop="desc">
        <el-input v-model="apiForm.desc" />
      </el-form-item>
      <el-form-item label="URL:" prop="url">
        <el-input v-model="apiForm.url" />
      </el-form-item>
      <el-form-item label="入参:" prop="params">
        <el-input v-model="apiForm.params" type="textarea" autosize />
      </el-form-item>
      <el-form-item label="校验字段:" prop="verify">
        <el-input v-model="apiForm.verify" type="textarea" autosize />
      </el-form-item>
      <el-form-item label="中间处理字段:" prop="pendingdata">
        <el-input v-model="apiForm.pendingdata" />
      </el-form-item>
      <el-form-item label="要存储的字段:" prop="storingdata">
        <el-input v-model="apiForm.storingdata" />
      </el-form-item>
      <el-form-item label="请求方法" prop="method">
        <el-select v-model="apiForm.method">
          <el-option label="POST" value="1" />
          <el-option label="GET" value="0" />
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="addApiCancel">取 消</el-button>
      <el-button type="primary" @click="addApiSubmit('apiForm')">确 定</el-button>
    </div>
  </el-dialog>

</template>

<script>
import { addApiBySuitId } from '../../../api/suit'
// 为了将这个页面拆分到子组件中
// 解决了使用vuex存储 el-dialog :visible.sync 属性
// 以及遮罩的 z-index 大于 el-dialog的z-index的问题
export default {
  // name: 'ApiForm',
  props: {
    selectSuitId: {
      type: Number,
      default: null
    },
    selectSuitDesc: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      apiForm: {
        step: 1,
        suitId: this.selectSuitId,
        desc: '',
        url: '',
        method: 'POST',
        params: '',
        verify: '',
        pendingdata: '',
        storingdata: ''
      },
      formRule: {
        step: [{ required: true, message: '请添加step', trigger: 'change' }],
        suitId: [{ required: true, message: '请输入所属suit', trigger: 'change' }],
        desc: [{ required: true, message: '请输入接口描述', trigger: 'change' }],
        url: [{ required: true, message: '请输入接口URL', trigger: 'change' }],
        method: [{ required: true, message: '请输入请求方法', trigger: 'change' }],
        params: [{ required: true, message: '请输入接口入参', trigger: 'change' }],
        verify: [{ required: true, message: '请输入校验信息', trigger: 'change' }]
      }
    }
  },
  created() {
    console.log('begin to add api')
  },
  methods: {
    addApiSubmit(formName) {
      this.$store.commit('suit/F_API_ADD_FORM')
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('add api suit id is ' + this.selectSuitId)
          addApiBySuitId(this.apiForm, this.selectSuitId)
        } else {
          console.log('add api submit error!')
          return false
        }
      })
    },
    addApiCancel() {
      this.$store.commit('suit/F_API_ADD_FORM')
    }
  }
}
</script>

<style scoped>
.api-form {
  z-index: 2600;
}

/* 这个z-index的值猜测是在elementUI中通过js代码写死了
   element.style的 z-index = 2001
   在这儿通过 !import 修改其值，使得不被遮罩挡住*/
.el-dialog__wrapper{
  z-index: 2500 !important
}
</style>
