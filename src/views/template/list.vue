<template>
  <div class="template-list-page">
    <div class="template-list">
      <div class="template-item" v-for="(item, index) in templateList" :key="index" @click="linkDetail">
        <div class="logo">
          <i class="logo-icon el-icon-circle-plus-outline"></i>
          <div class="logo-text">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'

export default {
  name: 'TemplateList',
  components: {

  },
  data() {
    return {
      templateList: [
        {
          type: 'h5',
          path: '/template/h5',
          title: '创建h5'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['styleSize', 'closeOnclickModal'])
  },
  mounted() {

  },
  methods: {
    linkDetail() {

    }
  }
}
</script>

<style lang="scss" scoped>
  .template-list-page{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #f2f5f6;
    overflow: auto;
    .template-list{
      display: flex;
      flex-wrap: wrap;
      .template-item {
        width: 230px;
        height: 328px;
        background: #fff;
        margin: 20px;
        border-radius: 8px;
        cursor: pointer;
        .logo{
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100%;
          height: 100%;
          .logo-icon{
            font-size: 28px;
            margin-bottom: 15px;
            color: #1890ff;
          }
        }
        // box-shadow: 0 0 2px #ccc;
      }
    }
  }
</style>
