<template>
  <div id="app">
    <EditPanel />
  </div>
</template>

<script>
  import EditPanel from './components/editPanel/editPanel.vue'

  export default {
    name: 'app',
    components: {
      EditPanel
    }
  }
</script>

<style lang="less">
  #app {
    height: 100%;
  }

  ::-webkit-scrollbar-track-piece {
    background-color: #f8f8f8;
  }

  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #595959;
    background-clip: padding-box;
    min-height: 28px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #bbb;
  }
</style>