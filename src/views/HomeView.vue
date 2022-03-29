<template>
  <div class="home">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(34, 45, 50)">
        <el-menu :default-openeds="['1', '2']">
          <p class="eltitle">Elementui管理后台</p>
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i
              ><span
                ><router-link to="/about">首页</router-link></span
              ></template
            >
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-menu"></i><span>文件管理</span></template
            >
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <i class="el-icon-refresh-left"></i>
                <router-link to="/WenChild">文章列表</router-link></el-menu-item
              >
              <el-menu-item index="2-2">
                <i class="el-icon-refresh-left"></i>
                <router-link to="/DuoChild"
                  >多层级路由示例</router-link
                ></el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container style="height: 100vh">
        <el-header style="font-size: 12px; background: rgb(0, 134, 241)">
          <!-- <el-dropdown>
            <i class="el-icon-menu"></i>
          </el-dropdown>
          <el-dropdown class="right">
            <i class="el-icon-s-tools"></i>
            <i class="el-icon-bell"></i>
            <span class="elname">admin</span>
            <i class="el-icon-arrow-down"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown> -->
          <i class="el-icon-menu" style="margin-right: 15px"></i>
          <el-dropdown style="text-align: right">
            <i class="el-icon-s-tools" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item
                ><a href="/login" style="color: #000">退出</a></el-dropdown-item
              >
            </el-dropdown-menu>
            <span class="elname">admin</span>
          </el-dropdown>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
<style scoped>
.el-aside {
  height: 100vh;
}
.eltitle {
  height: 40px;
  line-height: 40px;
  background: rgb(0, 121, 217);
  color: #fff;
  text-align: center;
  font-size: 14px;
}
.el-submenu {
  background: rgb(34, 45, 50);
}
.el-submenu span {
  color: #fff;
}
.el-menu-item {
  height: 30px;
  line-height: 30px;
  background: rgb(34, 45, 50);
  color: #fff;
  margin-top: -15px;
}
.el-icon-menu {
  font-size: 20px;
  line-height: 60px;
  color: #fff;
}
.right {
  float: right;
}
.el-icon-s-tools {
  font-size: 20px;
  color: #fff;
  line-height: 60px;
  margin-right: 10px;
}
.el-icon-bell {
  font-size: 20px;
  color: #fff;
  line-height: 60px;
  margin-right: 10px;
}
.el-header {
  display: flex;
  justify-content: space-between;
}
.elname {
  font-size: 16px;
  color: #fff;
}
.el-icon-arrow-down {
  font-size: 16px;
  color: #fff;
  margin-right: 10px;
}
</style>
