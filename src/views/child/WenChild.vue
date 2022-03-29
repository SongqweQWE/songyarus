<template>
  <div class="wenzhang">
    <div class="header">
      <h5>文章列表</h5>
      <div class="head-con">
        <el-button type="primary">编辑添加，字段各种规则验证示例</el-button>
        <el-button type="primary">本地导出表格</el-button>
        <el-input
          placeholder="请输入文本标题"
          style="width: 150px; height: 20px; margin-left: 100px"
        ></el-input>
        <el-select
          placeholder="请输入数据类型"
          style="margin-left: 20px; margin-right: 20px"
        >
          <el-option>招聘信息</el-option>
          <el-option>技术交流</el-option>
        </el-select>
        <el-button type="success">查询</el-button>
        <el-button type="warning">重置</el-button>
      </div>
    </div>
    <el-table :data="arr" style="width: 100%" border="boolean">
      <el-table-column label="文章标题" width="300" prop="title">
      </el-table-column>
      <el-table-column label="作者" width="200" prop="name"> </el-table-column>
      <el-table-column label="游览器" width="200" prop="you"> </el-table-column>
      <el-table-column label="回复" width="200" prop="hui"> </el-table-column>
      <el-table-column label="操作" width="111">
        <el-button size="mini" type="info" @click="dialogFormVisible = true"
          >添加</el-button
        >
      </el-table-column>
      <el-table-column label="操作" width="111">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </el-table-column>
    </el-table>

    <!-- 弹窗 -->
    <el-dialog title="编辑页面" :visible.sync="dialogFormVisible">
      <el-form :model="forms">
        <el-form-item label="文章标题" :label-width="formLabelWidth">
          <el-input
            v-model="forms.title"
            autocomplete="off"
            placeholder="文章标题"
          ></el-input>
        </el-form-item>
        <el-form-item label="作者" :label-width="formLabelWidth">
          <el-input placeholder="作者" v-model="forms.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import instance from "@/api/index";
export default {
  name: "WenChild",
  data() {
    return {
      forms: {
        title: "后台管理系统",
        name: "seec3宋亚茹",
      },
      arr: null,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    handleDelete() {
      this.deleteTable();
    },
    // 获取
    async getTable() {
      let { data } = await instance.get("/WenChild");
      console.log(data);
      this.arr = data;
    },

    // 删除
    async deleteTable(index) {
      let { data } = await instance.delete("/WenChild/" + index);
      console.log(data);
      this.getTable();
    },
  },
  mounted() {},
  created() {
    this.getTable();
  },
};
</script>

<style scoped>
.header h5 {
  color: #000;
  margin-bottom: 10px;
}
.header .head-con {
  margin-bottom: 20px;
}
</style>