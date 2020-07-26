<template>
  <div class="create">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">内容管理</el-breadcrumb-item>
      <el-breadcrumb-item>新建分类</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="category.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data() {
    return {
      category: {
        name: ""
      }
    };
  },

  computed: {
    ...mapState({
      activePath: state => state.content.activePath
    })
  },

  methods: {
    ...mapMutations('content', {
      setPath: 'setActivePath'
    }),
    save() {
      this.$http.post("categories", this.category)
        .then(r => {
          console.log(r);
          this.$router.push('/categories/list')
          this.$message({
            type: 'success',
            message: '保存成功'
          })
          this.setPath('/categories/list')
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.create {
  .el-form {
    margin-top: 20px;
  }
}
</style>

