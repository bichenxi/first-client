<template>
    <div class="ces-table-page">
        // 表格操作按钮
        <div class="ces-handle" v-if="isHandle">
            <el-button
                v-for="(item, index) in tableHandles"
                :key="index"
                :size="item.size || size"
                :type="item.type"
                :icon="item.icon"
                @click="item.handle()"
                >{{ item.label }}</el-button
            >
        </div>
        // 数据表格
        <div class="ces-table">
            <el-table
                :data="tableData"
                :size="size"
                :id="id"
                :height="height"
                :border="isBorder"
                :header-cell-style="
                    isHeaderStyle
                        ? isHeaderStyle
                        : { background: '#eef1f6', color: '#3b85f0' }
                "
                :row-class-name="tableRowClassName"
                highlight-current-row
                @select="select"
                @sort-change="sorts"
                @select-all="selectAll"
                v-loading="loading"
                @cell-click="cellClick"
                :defaultSelections="defaultSelections"
                width="100%"
                ref="cesTable"
            >
                <el-table-column
                    v-if="isSelection"
                    width="50px"
                    type="selection"
                    align="center"
                ></el-table-column>
                <el-table-column
                    v-if="isIndex"
                    width="100"
                    type="index"
                    :index="indexMethod"
                    :label="indexLabel"
                    align="center"
                ></el-table-column>
                // 数据栏
                <el-table-column
                    v-for="item in tableClos"
                    :key="item.id"
                    :prop="item.prop"
                    :fixed="item.fixed"
                    :sortable="sortable"
                    :formatter="formatter"
                    show-overflow-tooltip
                    :label="item.label"
                    :width="item.width"
                    align="center"
                    :render-header="item.require ? renderHeader : null"
                >
                    <template slot-scope="scope">
                        <span
                            v-if="item.type === 'Html'"
                            v-html="item.html(scope.row)"
                        ></span>
                        <!-- 直接传入死按钮 -->
                        <span v-if="item.type === 'Button'">
                            <el-button
                                v-for="(btn, index) in item.formatter ||
                                item.btnList"
                                :key="index"
                                :disabled="
                                    btn.isDisabled && btn.isDisabled(scope.row)
                                "
                                :size="btn.size || size"
                                :type="btn.type"
                                :icon="btn.icon"
                                @click="btn.handle(scope.row)"
                                >{{ btn.label }}</el-button
                            ></span
                        >
                        <!-- 根据状态显示不同按钮 -->
                        <span v-if="item.type === 'button'">
                            <el-button
                                v-for="(btn, index) in item.formatter ||
                                item.btnList"
                                :key="index"
                                :size="btn.size || size"
                                :type="btn.type"
                                :icon="btn.icon"
                                @click="btn.handle(scope.row)"
                                >{{ btn.label }}</el-button
                            ></span
                        >
                        <!-- 输入框 -->
                        <el-input
                            v-if="item.type === 'Input'"
                            v-model="scope.row[item.prop]"
                            :disabled="
                                item.formatter && item.formatter(scope.row)
                            "
                            @focus="item.focus && item.focus(scope.row)"
                            @blur="item.blur && item.blur(scope.row)"
                            :size="size"
                        ></el-input>
                        <!-- 下拉框 -->
                        <el-select
                            v-if="item.type === 'Select'"
                            v-model="scope.row[item.prop]"
                            @change="item.change && item.change(scope.row)"
                            :size="size"
                        >
                            <el-option
                                v-for="op in item.options"
                                :label="op[item.prop.label]"
                                :value="op[item.prop.value]"
                                :key="op[item.prop.value]"
                            ></el-option
                        ></el-select>
                        <!-- 单选 -->
                        <el-radio-group
                            v-if="item.type === 'Radio'"
                            v-model="scope.row[item.prop]"
                            @change="item.change && item.change(scope.row)"
                        >
                            <el-radio
                                v-for="(ra, index) in item.radios"
                                :key="index"
                                :label="ra.label"
                                >{{ ra.label }}</el-radio
                            ></el-radio-group
                        >
                        <!-- 复选框 -->
                        <el-checkbox-group
                            v-if="item.type === 'Checkbox'"
                            v-model="scope.row[item.prop]"
                            @change="item.change && item.change(scope.row)"
                        >
                            <el-checkbox
                                v-for="(ra, index) in item.checkboxs"
                                :key="index"
                                :label="ra.label"
                                >{{ ra.label }}</el-checkbox
                            ></el-checkbox-group
                        >
                        <!-- 评价 -->
                        <el-rate
                            v-if="item.type === 'Rate'"
                            v-model="scope.row[item.prop]"
                            @change="item.change && item.change(scope.row)"
                        >
                        </el-rate>
                        <!-- 开关 -->
                        <el-switch
                            v-if="item.type === 'Switch'"
                            v-model="scope.row[item.prop]"
                            @change="item.change && item.change(scope.row)"
                        >
                        </el-switch>
                        <!-- 图像 -->
                        <img
                            v-if="item.type === 'Image'"
                            :src="scope.row[item.prop]"
                            @change="item.change && item.change(scope.row)"
                        />
                        <!-- 滑块 -->
                        <el-silder
                            v-if="item.type === 'Silder'"
                            v-model="scope.row[item.prop]"
                            @change="item.change && item.change(scope.row)"
                        >
                        </el-silder>
                        <!-- 默认 -->
                        <span
                            v-if="!item.type"
                            :style="item.itemStyle && item.itemStyle(scope.row)"
                            :class="item.itemClass && item.itemClass(scope.row)"
                            >{{
                                (item.formatter && item.formatter(scope.row)) ||
                                scope.row[item.prop]
                            }}
                        </span>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        // 分页
        <div class="ces-pagination" v-if="isPagination">
            <div style="flex: 1; linheight: 30px"></div>
            <el-pagination
                background
                :layout="layout"
                @current-change="handleCurrentChange"
                :page-size="pagination.pageSize"
                @size-change="handleSizeChange"
                :current-page.sync="pagination.pageNum"
                :page-sizes="pageSizeList"
                :total="pagination.total"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        //表头样式
        isHeaderStyle: { type: Object, default: () => {} },
        //表格类型 mini ,medium ,small
        isSingle: { type: Boolean, default: false },
        isSingelCheck: { type: Boolean, default: false },
        height: { type: String, default: '' },
        sortable: { type: [String, Boolean], default: 'custom' },
        size: { type: String, default: 'medium' },
        id: { type: String, default: false },
        isBorder: { type: Boolean, default: false },
        loading: { type: Boolean, default: false },
        //表格操作
        isHandle: { type: Boolean, default: false },
        tableHandles: { type: Array, default: () => [] },
        //表格数据
        tableData: { type: Array, default: () => [] },
        //表格配置列
        tableClos: { type: Array, default: () => [] },
        //是否显示表格复选框
        isSelection: { type: Boolean, default: false },
        //设置选中行
        defaultSelections: { type: [Array, Object], default: () => null },
        //是否显示表格索引
        isIndex: { type: Boolean, default: false },
        indexLabel: { type: String, default: '序号' },
        //是否显示分页
        isPagination: { type: Boolean, default: true },
        tableRowClassName: { type: Function, default: null },
        //分页数据
        pagination: {
            type: Object,
            default: () => ({ pageSize: 10, pageNum: 1, total: 0 }),
        },
        searchData: {
            type: Object,
            default: () => ({ sort: '', sortKey: '' }),
        },
        pageSizeList: {
            type: Array,
            default: () => [10, 15, 20, 25, 30, 50, 100, 500],
        },
        layout: { type: String, default: 'total,size,prev,pager,next ,jumper' },
    },
    data() {
        return {
            Height: this.height,
        }
    },
    watch: {
        defaultSelections(val) {
            this.$nextTick(function () {
                if (Array.isArray(val)) {
                    val.forEach((row) => {
                        this.$refs.cesTable.toggleRowSelection(row)
                    })
                } else {
                    this.$refs.cesTable.toggleRowSelection(val)
                }
            })
        },
    },
    methods: {
        indexMethod(index) {
            index =
                index +
                1 +
                (this.pagination.pageNum - 1) * this.pagination.pageSize
            return index
        },
        //表格勾选
        select(rows, row) {
            if (this.isSingle) {
                this.$refs.cesTable.claerSelection()
                this.$refs.cesTable.toggleRowSelection(row)
                this.$emit('select', row)
            } else {
                this.$emit('select', rows)
            }
        },
        //全选
        selectAll(rows) {
            if (this.isSingle) {
                this.$refs.cesTable.claerSelection()
                this.$message({ type: 'error', message: '只支持单选' })
            } else {
                this.$emit('select', rows)
            }
        },
        //行点击事件
        cellClick(row, column, cell, event) {
            this.$emit('cellClick', row, column, cell, event)
        },
        //获取选中行索引
        tableRowClassName({ row, rowIndex }) {
            row.index = rowIndex
            if (this.tableRowClassNames) {
                return this.tableRowClassNames(row)
            }
        },
        sort({ column, prop, order }) {
            if (order == 'ascending') {
                this.searchData.sort = 'asc'
            } else if (order == 'descending') {
                this.searchData.sort = 'desc'
            } else {
                this.searchData.sort = ''
            }
            this.searchData.sortKey = prop
            this.$emit('refresh', true)
        },
        handleCurrentChange(val) {
            this.pagination.pageNum = val
            this.$emit('refresh', true)
        },
        handleSizeChange(val) {
            this.pagination.pageSize = val
            this.$emit('refresh', true)
        },
        renderHeader(h, obj) {
            return h('span', { class: 'ces-table-require' }, obj.column.label)
        },
    },
}
</script>
<style scoped lang="less" rel="stylesheet/less">
.ces-pagination {
    margin-top: 5px;
    display: flex;
}
.ces-handle {
    text-align: right;
    margin-bottom: 8px;
}
.ces-table {
    border-radius: 5px;
    border: 1px solid #eee;
}
.ces-table-require::before {
    content: '*';
    color: red;
}
.el-table .success-row {
    background: #f0f9eb;
}
/deep/ .el-table .warning-row {
    color: red;
}
/deep/ .el-table .warning-cell {
    color: blue;
}
</style>
