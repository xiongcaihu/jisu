<template>
    <div class="editPanel">
        <a-layout>
            <a-layout-sider theme="light" width="270" style="height:100vh;">
                <a-tabs defaultActiveKey="2" :tabBarStyle="{display:'flex',marginBottom:0,justifyContent:'center'}"
                    :tabBarGutter="50">
                    <a-tab-pane tab="页面管理" key="1">
                        <a-tree checkable :treeData="treeData" :defaultExpandedKeys="['0-0-0', '0-0-1']"
                            :defaultSelectedKeys="['0-0-0', '0-0-1']" :defaultCheckedKeys="['0-0-0', '0-0-1']">
                            <span slot="title0010" style="color: #1890ff">sss</span>
                        </a-tree>
                    </a-tab-pane>
                    <a-tab-pane tab="组件库" key="2" forceRender>
                        <draggable class="components" v-model="myArray" :sortable="false"
                            :group="{ name: 'people', pull: 'clone', put: false }" :move="checkMove">
                            <div class="component" v-for="(element,index) in myArray" :key="index">
                                {{element.name}}
                            </div>
                        </draggable>
                    </a-tab-pane>
                </a-tabs>
            </a-layout-sider>
            <a-layout>
                <a-layout-header
                    style="height:44px;background-color:white;border-left:1px solid #dcdcdc;line-height:42px;">
                    顶部
                </a-layout-header>
                <a-layout-content style="overflow:hidden">
                    <a-row style="height:100%;" type="flex" justify="center">
                        <a-col style="height:100%;flex:1;display:flex;justify-content:center;">
                            <div class="panel">
                                <draggable class="mobilePanel" v-model="myArray2"
                                    :group="{ name: 'people', pull: false, put: true }">
                                    <component :is="element.name" v-for="(element,index) in myArray2" :key="index">
                                    </component>
                                </draggable>
                            </div>
                        </a-col>
                        <a-col
                            style="border-left:1px solid #dcdcdc;width:320px;display:flex;justify-content:center;align-items:center">
                            右侧属性操作面板
                        </a-col>
                    </a-row>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>
<script>
    import js from './editPanel.js';
    export default js;
</script>
<style lang="less">
    @import './editPanel.less';
</style>