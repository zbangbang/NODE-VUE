<template>
  <div>
    <el-table :data="items" stripe>
      <el-table-column prop="_id" label="ID" width="240"></el-table-column>
      <el-table-column prop="name" label="分类名称"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },

  created() {
    this.fetch()
  },

  methods: {
    async fetch() {
      const res = await this.$http.get('categories')
      console.log(res.data)
      if(res.status === 200) {
        this.items = res.data
      }
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

