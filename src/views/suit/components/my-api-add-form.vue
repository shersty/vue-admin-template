<template>
  <el-dialog :visible.sync="$store.state.suit.apiAddFormVisible" :modal-append-to-body="true">
    <div slot="title" align="center">
      <span>添加接口-{{ selectSuitId }}-{{ selectSuitDesc }}
      </span>
    </div>
    <!-- <ApiForm /> -->
    <el-form label-width="150px" :model="form" class="api-form">
      <el-form-item label="第几步:">
        <el-input-number v-model="form.step" controls-position="right" :min="1" :max="10" />
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
    <div slot="footer" class="dialog-footer">
      <el-button @click="addApiCancel">取 消</el-button>
      <el-button type="primary" @click="addApiSubmit">确 定</el-button>
    </div>
  </el-dialog>

</template>

<script>
// 为了将这个页面拆分到子组件中
// 解决了使用vuex存储 el-dialog :visible.sync 属性
// 以及遮罩的 z-index 大于 el-dialog的z-index的问题
export default {
  name: 'ApiForm',
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
      },
      num: 1
    }
  },
  created() {
    console.log('begin to add api')
  },
  methods: {
    addApiSubmit() {
      alert('submit')
      this.$store.commit('suit/F_API_ADD_FORM')
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
