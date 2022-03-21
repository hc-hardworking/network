<template>
  <div>
    <el-form :inline="true" class="demo-form-inline" :model="form_data">
      <el-form-item label="work_unit">
        <el-select
          placeholder="请选择所需查询的工作单位"
          v-model="form_data.work_unit"
        >
          <el-option
            v-for="item in formInline"
            :key="item.work_unit"
            :label="item.work_unit"
            :value="item.work_unit"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Limit">
        <el-input placeholder="limit" v-model="form_data.limit"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">Query</el-button>
      </el-form-item>
    </el-form>
	<div id="myEcharts" ref="myEcharts" style="width: 100%; height: 800px"></div>
  </div>

  
</template>

<script>
import * as echarts from "echarts";
// import {onMounted} from "vue";
import axios from "axios";
import { reactive } from "vue";

export default {
  setup() {
    let formInline = [
      {
        work_unit:
          "\u5e1d\u68ee\u514b\u7f57\u5fb7\u96c6\u56e2\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u4e07\u76db\u7535\u5b50\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u4e09\u4e00\u52a8\u529b\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u4e4b\u5bcc\u58eb\u673a\u68b0\u5236\u9020\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u4e94\u6d32\u52a0\u665f\u670d\u9970\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u4f73\u5408\u7eb8\u5236\u54c1\u79d1\u6280\u80a1\u4efd\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u4fe1\u6770\u6c7d\u8f66\u90e8\u4ef6\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u5143\u8302\u7535\u5b50\u79d1\u6280\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u5143\u8bda\u7535\u5b50\u6750\u6599\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u5174\u5b9d\u5851\u6599\u5236\u54c1\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u5174\u80fd\u80fd\u6e90\u79d1\u6280\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u529b\u6cf0\u7ea4\u7ef4\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u534e\u6052\u710a\u63a5\u80a1\u4efd\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u534e\u9633\u65b0\u6750\u6599\u80a1\u4efd\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u535a\u745e\u601d\u7279\u7535\u5b50\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u539a\u58f0\u7535\u5b50\u5de5\u4e1a\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u54c1\u5fd7\u91d1\u5c5e\u6750\u6599\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u5584\u601d\u5149\u7535\u79d1\u6280\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u56fd\u529b\u7535\u5b50\u79d1\u6280\u80a1\u4efd\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u56fd\u663e\u5149\u7535\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u57c3\u7ef4\u5965\u7535\u673a\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u591a\u5bbe\u9648\u5217\u5c55\u793a\u80a1\u4efd\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u5927\u4f1f\u5370\u5237\u79d1\u6280\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u5927\u5ddd\u5851\u80f6\u5de5\u4e1a\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u5927\u5e9a\u6c7d\u8f66\u914d\u4ef6\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u5b89\u6cf0\u7f8e\u79d1\u91d1\u5c5e\u6750\u6599\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u5c1a\u4e3a\u65b0\u6750\u6599\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u5cf0\u5b9e\u7535\u5b50\u5916\u89c2\u5e94\u7528\u79d1\u6280\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u5e02\u6c38\u6cf0\u673a\u68b0\u5de5\u8d38\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u5e02\u7814\u901a\u6a21\u5177\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u5e7f\u5174\u7535\u5b50\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u5eb7\u8d1d\u65af\u65b0\u80fd\u6e90\u79d1\u6280\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u6052\u745e\u8bda\u5de5\u4e1a\u79d1\u6280\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u6069\u7535\u5f00\u901a\u4fe1\u8bbe\u5907\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u6069\u90fd\u7167\u660e\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u6210\u529f\u73af\u4fdd\u79d1\u6280\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u6765\u8fd0\u673a\u68b0\u8bbe\u5907\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u6b63\u5927\u65b0\u6210\u7cbe\u5bc6\u953b\u9020\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u6b63\u901a\u94ed\u91d1\u5c5e\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u6c38\u6cf0\u7cbe\u7ec6\u5316\u5de5\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u6c38\u7acb\u5305\u88c5\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u6e56\u534e\u91d1\u5c5e\u5236\u54c1\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u7409\u660e\u5149\u7535\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u745e\u666e\u7535\u6c14\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u79d1\u68ee\u79d1\u6280\u80a1\u4efd\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u7cbe\u8baf\u7535\u5b50\u6280\u672f\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u7f8e\u666e\u68ee\u5305\u88c5\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u8000\u90a6\u91d1\u5c5e\u5de5\u4e1a\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u8f89\u6d77\u6a21\u5177\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u8fd0\u57ce\u5851\u4e1a\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u957f\u8fd0\u7535\u5b50\u5de5\u4e1a\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u96c5\u68ee\u7535\u5b50\u6750\u6599\u79d1\u6280\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u9a8f\u9f0e\u8fbe\u7535\u5b50\u79d1\u6280\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u9f99\u706f\u745e\u8fea\u5236\u836f\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u9f99\u817e\u5149\u7535\u80a1\u4efd\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u9f99\u98de\u5149\u7535\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6c5f\u82cf\u521b\u901a\u7535\u5b50\u80a1\u4efd\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6c5f\u82cf\u534e\u7535\u6606\u5c71\u70ed\u7535\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6c5f\u82cf\u5408\u6da6\u6c7d\u8f66\u8f66\u8eab\u6a21\u5177\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6c5f\u82cf\u6bc5\u660c\u79d1\u6280\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6c5f\u82cf\u798f\u4e8b\u7279\u6db2\u538b\u6280\u672f\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6c5f\u82cf\u8054\u5764\u7535\u5b50\u79d1\u6280\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6c5f\u82cf\u8054\u946b\u7535\u5b50\u5de5\u4e1a\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6c5f\u82cf\u8bbe\u8ba1\u8c37\u79d1\u6280\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6c5f\u82cf\u91d1\u53d1\u79d1\u6280\u65b0\u6750\u6599\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6c5f\u82cf\u9f99\u706f\u5316\u5b66\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6c5f\u82cf\u9f99\u706f\u535a\u58eb\u6469\u5305\u88c5\u6750\u6599\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u82cf\u5dde\u57c3\u535a\u65af\u7535\u6c14\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u82cf\u5dde\u5fb7\u6c83\u667a\u80fd\u7cfb\u7edf\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u82cf\u5dde\u6c49\u626c\u7cbe\u5bc6\u7535\u5b50\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u82cf\u5dde\u7cbe\u521b\u5149\u5b66\u4eea\u5668\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u82cf\u5dde\u9a6c\u57f9\u5fb7\u529e\u516c\u7528\u54c1\u5236\u9020\u6709\u9650\u516c\u53f8",
      },
      {
        work_unit:
          "\u6606\u5c71\u83b1\u5fb7\u51c0\u5316\u8bbe\u5907\u6709\u9650\u516c\u53f8",
      },
    ];

    let form_data = reactive({
      work_unit: "",
      limit: "",
    });

    function submit() {
      let chartDom = document.getElementById("myEcharts");
      let myChart = echarts.init(chartDom);
      let option = {
        tooltip: {},
        legend: [{}],
        color: [],
        series: [
          {
            name: "Les Miserables",
            type: "graph",
            layout: "force",
            // data: graph.nodes,
            // links: graph.links,
            // categories: graph.categories,
            roam: true,
            draggable: true,
            // symbolSize: 40,
            legendHoverLink: true,
            // focusNodeAdjacency: true,
            emphasis: { focus: "adjacency" },
            force: {
              // 力引导图基本配置
              // initLayout: , // 力引导的初始化布局，默认使用xy轴的标点
              repulsion: 200, // 节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
              gravity: 0.02, // 节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
              edgeLength: 200, // 边的两个节点之间的距离，这个距离也会受 repulsion影响 。值越大则长度越长
              layoutAnimation: true, // 因为力引导布局会在多次迭代后才会稳定，这个参数决定是否显示布局的迭代动画
              // 在浏览器端节点数据较多（>100）的时候不建议关闭，布局过程会造成浏览器假死。
            },
            // edgeSymbol: ["circle", "arrow"], //边两端的标记类型
            edgeSymbol: ["circle"],
            edgeSymbolSize: [4, 8], //边两端的标记大小

            label: {
              show: true,
              position: "right",
              formatter: "{b}",
            },
            labelLayout: {
              hideOverlap: true,
            },
            scaleLimit: {
              min: 0.4,
              max: 2,
            },
            lineStyle: {
              color: "source",
              curveness: Math.random() / 3,
            },
          },
        ],
      };
      let categories = [];
      let colors = [];
      let nodes = [];
      let color_category_map = {};

      axios
        .get("http://39.100.224.138:5000/graph", {
          params: form_data,
        })
        .then((res) => {
          console.log(res.data.elements.nodes[0]["lpa"]);
          myChart.hideLoading();
          //此处修改了work_unit
          let data_tmp = [];
          for (var i = 0; i < res.data.elements.nodes.length; i++) {
            if (!data_tmp.includes(res.data.elements.nodes[i]["lpa"])) {
              data_tmp.push(res.data.elements.nodes[i]["lpa"]);
            }
          }
          console.log("打印种类");
          console.log(data_tmp);
          let tmp = {};
          for (var a = 0; a < data_tmp.length; a++) {
            tmp["name"] = data_tmp[a];
            categories.push(tmp);
            tmp = {};
          }
          console.log(categories);
          // 建立类别与颜色的映射关系

          for (var j = 0; j < categories.length; j++) {
            let data = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
            let data1 = categories[j]["name"];
            color_category_map[data1] = j;
            console.log("打印映射表。。。");
            // console.log(color_category_map);
            colors.push(data);
            option.color.push(data);
          }
          console.log("==============");
          // console.log(color_category_map)
          // console.log(color_category_map['三一矿机有限公司'])

          // console.log(colors);
          for (var b = 0; b < res.data.elements.nodes.length; b++) {
            let node_data = res.data.elements.nodes[b];
            let node_name = node_data["lpa"];
            let sym = node_data["degree1"];
            // console.log(node_name);
            // var itemStyle = {

            //     color: color_category_map[node_name],

            // };

            // node_data["itemStyle"]=itemStyle
            console.log(color_category_map[node_name]);
            node_data["category"] = color_category_map[node_name];
            // console.log(nodes)
            node_data["symbolSize"] = sym;

            nodes.push(node_data);
          }

          //
          // //=========================================

          option.series[0]["categories"] = categories;
          option.legend[0]["data"] = categories.map(function (a) {
            console.log("打印legend");
            console.log(a.length);
            return a.name;
          });
          console.log(nodes);
          option.series[0]["data"] = nodes;
          option.series[0]["links"] = res.data.elements.edges;
          myChart.setOption(option, false);
        });
      option && myChart.setOption(option, false);
    }
      return {
      formInline,
      submit,
      form_data,
    };
  },
  
};
</script>
