jQuery(function(o){"use strict";var e=window.Echart||{};e.dashboardEcharts=function(){if(o("#platform_type_dates_donut").length){echarts.init(document.getElementById("platform_type_dates_donut")).setOption({timeline:{show:!0,data:["06-16","05-16","04-16"],label:{formatter:function(e){return e?e.slice(0,5):null}},x:10,y:null,x2:10,y2:0,width:250,height:50,backgroundColor:"rgba(0,0,0,0)",borderColor:"#eaeaea",borderWidth:0,padding:5,controlPosition:"left",autoPlay:!0,loop:!0,playInterval:2e3,lineStyle:{width:1,color:"#bdbdbd",type:""}},options:[{color:["#dddddd","#0a0c17","#414b4f","#ee4b82","#45bbe0"],title:{text:"",subtext:""},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{show:!1,x:"left",orient:"vertical",padding:0,data:["نفقات","أقساط","اعمال البناء","الفواتير","خدمات"]},toolbox:{show:!0,color:["#bdbdbd","#bdbdbd","#bdbdbd","#bdbdbd"],feature:{mark:{show:!1},dataView:{show:!1,readOnly:!0},magicType:{show:!0,type:["pie","funnel"],option:{funnel:{x:"10%",width:"80%",funnelAlign:"center",max:50},pie:{roseType:"none"}}},restore:{show:!1},saveAsImage:{show:!0}}},series:[{name:"06-16",type:"pie",radius:[20,"80%"],roseType:"none",center:["50%","45%"],width:"50%",itemStyle:{normal:{label:{show:!0},labelLine:{show:!0}},emphasis:{label:{show:!1},labelLine:{show:!1}}},data:[{value:35,name:"نفقات"},{value:16,name:"أقساط"},{value:27,name:"اعمال البناء"},{value:29,name:"الفواتير"},{value:12,name:"خدمات"}]}]},{series:[{name:"05-16",type:"pie",data:[{value:42,name:"نفقات"},{value:51,name:"أقساط"},{value:39,name:"اعمال البناء"},{value:25,name:"الفواتير"},{value:9,name:"خدمات"}]}]},{series:[{name:"04-16",type:"pie",data:[{value:29,name:"نفقات"},{value:16,name:"أقساط"},{value:24,name:"اعمال البناء"},{value:19,name:"الفواتير"},{value:5,name:"خدمات"}]}]}]})}if(o("#user_type_bar").length){var e={grid:{zlevel:0,x:50,x2:50,y:20,y2:20,borderWidth:0,backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)"},tooltip:{trigger:"axis",axisPointer:{type:"shadow",lineStyle:{color:"rgba(0,0,0,.5)",width:1},shadowStyle:{color:"rgba(0,0,0,.1)"}}},legend:{data:[]},toolbox:{orient:"vertical",show:!0,showTitle:!0,color:["#bdbdbd","#bdbdbd","#bdbdbd","#bdbdbd"],feature:{mark:{show:!1},dataZoom:{show:!0,title:{dataZoom:"Data Zoom",dataZoomReset:"Reset Zoom"}},dataView:{show:!1,readOnly:!0},magicType:{show:!0,title:{bar:"Bar",line:"Area",stack:"Stacked Bar",tiled:"Tiled Bar"},type:["bar","line","stack","tiled"]},restore:{show:!1},saveAsImage:{show:!0,title:"Save as Image"}}},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,data:["2016-06-01","2016-05-01","2016-04-01","2016-03-01","2016-02-01","2016-01-01","2015-12-01","2015-11-01","2015-10-01","2015-09-01"],axisLine:{show:!0,onZero:!0,lineStyle:{color:"#98a6ad",type:"solid",width:"2",shadowColor:"rgba(0,0,0,0)",shadowBlur:5,shadowOffsetX:3,shadowOffsetY:3}},axisTick:{show:!1},axisLabel:{color:"#98a6ad"},splitLine:{show:!1,lineStyle:{color:"#fff",type:"solid",width:0,shadowColor:"rgba(0,0,0,0)"}}}],yAxis:[{type:"value",splitLine:{show:!1,lineStyle:{color:"fff",type:"solid",width:0,shadowColor:"rgba(0,0,0,0)"}},axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!1,onZero:!0,lineStyle:{color:"#98a6ad",type:"solid",width:"0",shadowColor:"rgba(0,0,0,0)",shadowBlur:5,shadowOffsetX:3,shadowOffsetY:3}}}],series:[{name:"Registered Users",type:"bar",smooth:!0,symbol:"none",symbolSize:2,showAllSymbol:!0,barWidth:10,barGap:"10%",itemStyle:{normal:{color:"#0a0c17",borderWidth:2,borderColor:"#0a0c17",areaStyle:{color:"#0a0c17",type:"default"}}},data:[2323,2144,4534,1989,3232,2323,2144,4534,1989,3232,2323,2144,4534,1989,3232,2323,2144,4534,1989,3232,2323,2144,4534,1989,3232,2323,2144,4534,1989,3232]},{name:"Guest Visitors",type:"bar",smooth:!0,symbol:"none",symbolSize:2,showAllSymbol:!0,barWidth:10,barGap:"10%",itemStyle:{normal:{color:"#dddddd",borderWidth:2,borderColor:"#dddddd",areaStyle:{color:"#dddddd",type:"default"}}},data:[5656,6567,7675,3423,4343,5656,6567,7675,3423,4343,5656,6567,7675,3423,4343,5656,6567,7675,3423,4343,5656,6567,7675,3423,4343,5656,6567,7675,3423,4343]}]};echarts.init(document.getElementById("user_type_bar")).setOption(e)}if(o("#page_views_today").length){e={grid:{zlevel:0,x:20,x2:20,y:20,y2:20,borderWidth:0,backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)"},tooltip:{trigger:"axis",axisPointer:{type:"shadow",lineStyle:{color:"rgba(0,0,0,.5)",width:1},shadowStyle:{color:"rgba(0,0,0,.1)"}}},legend:{data:[]},toolbox:{orient:"vertical",show:!0,showTitle:!0,color:["#bdbdbd","#bdbdbd","#bdbdbd","#bdbdbd"],feature:{mark:{show:!1},dataZoom:{show:!0,title:{dataZoom:"Data Zoom",dataZoomReset:"Reset Zoom"}},dataView:{show:!1,readOnly:!0},magicType:{show:!0,title:{line:"Line",bar:"Bar"},type:["line","bar"],option:{}},restore:{show:!1},saveAsImage:{show:!0,title:"Save as Image"}}},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,data:["0h-2h","2h-4h","4h-6h","6h-8h","8h-10h","10h-12h","12h-14h","14h-16h","16h-18h","18h-20h","20h-22h","22h-24h"],axisLine:{show:!0,onZero:!0,lineStyle:{color:"#98a6ad",type:"solid",width:"1",shadowColor:"rgba(0,0,0,0)",shadowBlur:5,shadowOffsetX:3,shadowOffsetY:3}},axisTick:{show:!1},splitLine:{show:!1,lineStyle:{color:"#fff",type:"solid",width:0,shadowColor:"rgba(0,0,0,0)"}}}],yAxis:[{type:"value",splitLine:{show:!1,lineStyle:{color:"fff",type:"solid",width:0,shadowColor:"rgba(0,0,0,0)"}},axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!1,onZero:!0,lineStyle:{color:"#ff0000",type:"solid",width:"0",shadowColor:"rgba(0,0,0,0)",shadowBlur:5,shadowOffsetX:3,shadowOffsetY:3}}}],series:[{name:"Page Views",type:"line",smooth:!0,symbol:"none",symbolSize:2,showAllSymbol:!0,barWidth:10,itemStyle:{normal:{color:"#0a0c17",borderWidth:2,borderColor:"#0a0c17",areaStyle:{color:"rgba(100,197,177,0)",type:"default"}}},data:[1545,1343,1445,2675,2878,1789,1745,2343,2445,1675,1878,2789,1545,1343,1445,2675,2878,1789,1745,2343,2445,1675,1878,2789]},{name:"Page Views",type:"line",smooth:!0,symbol:"none",symbolSize:2,showAllSymbol:!0,barWidth:10,itemStyle:{normal:{color:"#dddddd",borderWidth:2,borderColor:"#dddddd)",areaStyle:{color:"rgba(221,221,221,0)",type:"default"}}},data:[5656,6567,7675,3423,4343,5656,6567,7675,3423,4343,5656,6567,7675,3423,4343,5656,6567,7675,3423,4343,5656,6567,7675,3423,4343,5656,6567,7675,3423,4343]}]};echarts.init(document.getElementById("page_views_today")).setOption(e)}if(o("#scatter_chart_inside").length){e={color:["#4489e4","#0a0c17"],title:{},grid:{zlevel:0,x:20,x2:20,y:20,y2:20,borderWidth:0,backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)"},tooltip:{trigger:"axis",showDelay:0,formatter:function(e){return 1<e.value.length?e.seriesName+"<br/>"+e.value[0]+" : Social Media<br/>"+e.value[1]+" : Advertisement":e.seriesName+" :<br/>"+e.name+" : "+e.value+"Advertisement"},axisPointer:{show:!1,type:"none",lineStyle:{type:"dashed",width:0}}},legend:{data:["2017","2016"]},toolbox:{show:!0,feature:{mark:{show:!1},dataZoom:{show:!0},dataView:{show:!1,readOnly:!1},restore:{show:!1},saveAsImage:{show:!0}}},xAxis:[{type:"value",axisLine:{show:!0,onZero:!0,lineStyle:{color:"#4489e4",type:"solid",width:"2",shadowColor:"rgba(0,0,0,0)",shadowBlur:5,shadowOffsetX:3,shadowOffsetY:3}},axisTick:{show:!1},splitLine:{show:!1,lineStyle:{color:"#fff",type:"solid",width:0,shadowColor:"rgba(0,0,0,0)"}},scale:!0,axisLabel:{color:"#98a6ad",formatter:"{value}"}}],yAxis:[{show:!1,type:"value",axisLine:{show:!0,onZero:!0,lineStyle:{color:"#4489e4",type:"solid",width:"2",shadowColor:"rgba(0,0,0,0)",shadowBlur:5,shadowOffsetX:3,shadowOffsetY:3}},axisTick:{show:!1},splitLine:{show:!1,lineStyle:{color:"#fff",type:"solid",width:0,shadowColor:"rgba(0,0,0,0)"}},scale:!0,axisLabel:{formatter:"{value}"}}],series:[{name:"2017",type:"scatter",data:[[161.2,51.6],[167.5,59],[159.5,49.2],[157,63],[155.8,53.6],[170,59],[159.1,47.6],[166,69.8],[176.2,66.8],[160.2,75.2],[172.5,55.2],[170.9,54.2],[172.9,62.5],[153.4,42],[160,50],[147.2,49.8],[168.2,49.2],[175,73.2],[157,47.8],[167.6,68.8],[159.5,50.6],[175,82.5],[166.8,57.2],[176.5,87.8],[170.2,72.8],[174,54.5],[173,59.8],[179.9,67.3],[170.5,67.8],[160,47],[154.4,46.2],[162,55],[176.5,83],[160,54.4],[152,45.8],[162.1,53.6],[170,73.2],[160.2,52.1],[161.3,67.9],[166.4,56.6],[168.9,62.3],[163.8,58.5],[167.6,54.5],[160,50.2],[161.3,60.3],[167.6,58.3],[165.1,56.2],[160,50.2],[170,72.9],[157.5,59.8],[167.6,61],[160.7,69.1],[163.2,55.9],[152.4,46.5],[157.5,54.3],[168.3,54.8],[180.3,60.7],[165.5,60],[165,62],[164.5,60.3],[156,52.7],[160,74.3],[163,62],[165.7,73.1],[161,80],[162,54.7],[166,53.2],[174,75.7],[172.7,61.1],[167.6,55.7],[151.1,48.7],[164.5,52.3],[163.5,50],[152,59.3],[169,62.5],[164,55.7],[161.2,54.8],[155,45.9],[170,70.6],[176.2,67.2],[170,69.4],[162.5,58.2],[170.3,64.8],[164.1,71.6],[169.5,52.8],[163.2,59.8],[154.5,49],[159.8,50],[173.2,69.2],[170,55.9],[161.4,63.4],[169,58.2],[166.2,58.6],[159.4,45.7],[162.5,52.2],[159,48.6],[162.8,57.8],[159,55.6],[179.8,66.8],[162.9,59.4],[161,53.6],[151.1,73.2],[168.2,53.4],[168.9,69],[173.2,58.4],[171.8,56.2],[178,70.6],[164.3,59.8],[163,72],[168.5,65.2],[166.8,56.6],[172.7,105.2],[163.5,51.8],[169.4,63.4],[167.8,59],[159.5,47.6],[167.6,63],[161.2,55.2],[160,45],[163.2,54],[162.2,50.2],[161.3,60.2],[149.5,44.8],[157.5,58.8],[163.2,56.4],[172.7,62],[155,49.2],[156.5,67.2],[164,53.8],[160.9,54.4],[162.8,58],[167,59.8],[160,54.8],[160,43.2],[168.9,60.5],[158.2,46.4],[156,64.4],[160,48.8],[167.1,62.2],[158,55.5],[167.6,57.8],[156,54.6],[162.1,59.2],[173.4,52.7],[159.8,53.2],[170.5,64.5],[159.2,51.8],[157.5,56],[161.3,63.6],[162.6,63.2],[160,59.5],[168.9,56.8],[165.1,64.1],[162.6,50],[165.1,72.3],[166.4,55],[160,55.9],[152.4,60.4],[170.2,69.1],[162.6,84.5],[170.2,55.9],[158.8,55.5],[172.7,69.5],[167.6,76.4],[162.6,61.4],[167.6,65.9],[156.2,58.6],[175.2,66.8],[172.1,56.6],[162.6,58.6],[160,55.9],[165.1,59.1],[182.9,81.8],[166.4,70.7],[165.1,56.8],[177.8,60],[165.1,58.2],[175.3,72.7],[154.9,54.1],[158.8,49.1],[172.7,75.9],[168.9,55],[161.3,57.3],[167.6,55],[165.1,65.5],[175.3,65.5],[157.5,48.6],[163.8,58.6],[167.6,63.6],[165.1,55.2],[165.1,62.7],[168.9,56.6],[162.6,53.9],[164.5,63.2],[176.5,73.6],[168.9,62],[175.3,63.6],[159.4,53.2],[160,53.4],[170.2,55],[162.6,70.5],[167.6,54.5],[162.6,54.5],[160.7,55.9],[160,59],[157.5,63.6],[162.6,54.5],[152.4,47.3],[170.2,67.7],[165.1,80.9],[172.7,70.5],[165.1,60.9],[170.2,63.6],[170.2,54.5],[170.2,59.1],[161.3,70.5],[167.6,52.7],[167.6,62.7],[165.1,86.3],[162.6,66.4],[152.4,67.3],[168.9,63],[170.2,73.6],[175.2,62.3],[175.2,57.7],[160,55.4],[165.1,104.1],[174,55.5],[170.2,77.3],[160,80.5],[167.6,64.5],[167.6,72.3],[167.6,61.4],[154.9,58.2],[162.6,81.8],[175.3,63.6],[171.4,53.4],[157.5,54.5],[165.1,53.6],[160,60],[174,73.6],[162.6,61.4],[174,55.5],[162.6,63.6],[161.3,60.9],[156.2,60],[149.9,46.8],[169.5,57.3],[160,64.1],[175.3,63.6],[169.5,67.3],[160,75.5],[172.7,68.2],[162.6,61.4],[157.5,76.8],[176.5,71.8],[164.4,55.5],[160.7,48.6],[174,66.4],[163.8,67.3]],markPoint:{show:!1,data:[{type:"max",name:""},{type:"min",name:""}]}},{name:"2016",type:"scatter",data:[[174,65.6],[175.3,71.8],[193.5,80.7],[186.5,72.6],[187.2,78.8],[181.5,74.8],[184,86.4],[184.5,78.4],[175,62],[184,81.6],[180,76.6],[177.8,83.6],[192,90],[176,74.6],[174,71],[184,79.6],[192.7,93.8],[171.5,70],[173,72.4],[176,85.9],[176,78.8],[180.5,77.8],[172.7,66.2],[176,86.4],[173.5,81.8],[178,89.6],[180.3,82.8],[180.3,76.4],[164.5,63.2],[173,60.9],[183.5,74.8],[175.5,70],[188,72.4],[189.2,84.1],[172.8,69.1],[170,59.5],[182,67.2],[170,61.3],[177.8,68.6],[184.2,80.1],[186.7,87.8],[171.4,84.7],[172.7,73.4],[175.3,72.1],[180.3,82.6],[182.9,88.7],[188,84.1],[177.2,94.1],[172.1,74.9],[167,59.1],[169.5,75.6],[174,86.2],[172.7,75.3],[182.2,87.1],[164.1,55.2],[163,57],[171.5,61.4],[184.2,76.8],[174,86.8],[174,72.2],[177,71.6],[186,84.8],[167,68.2],[171.8,66.1],[182,72],[167,64.6],[177.8,74.8],[164.5,70],[192,101.6],[175.5,63.2],[171.2,79.1],[181.6,78.9],[167.4,67.7],[181.1,66],[177,68.2],[174.5,63.9],[177.5,72],[170.5,56.8],[182.4,74.5],[197.1,90.9],[180.1,93],[175.5,80.9],[180.6,72.7],[184.4,68],[175.5,70.9],[180.6,72.5],[177,72.5],[177.1,83.4],[181.6,75.5],[176.5,73],[175,70.2],[174,73.4],[165.1,70.5],[177,68.9],[192,102.3],[176.5,68.4],[169.4,65.9],[182.1,75.7],[179.8,84.5],[175.3,87.7],[184.9,86.4],[177.3,73.2],[167.4,53.9],[178.1,72],[168.9,55.5],[157.2,58.4],[180.3,83.2],[170.2,72.7],[177.8,64.1],[172.7,72.3],[165.1,65],[186.7,86.4],[165.1,65],[174,88.6],[175.3,84.1],[185.4,66.8],[177.8,75.5],[180.3,93.2],[180.3,82.7],[177.8,58],[177.8,79.5],[177.8,78.6],[177.8,71.8],[177.8,116.4],[163.8,72.2],[188,83.6],[198.1,85.5],[175.3,90.9],[166.4,85.9],[190.5,89.1],[166.4,75],[177.8,77.7],[179.7,86.4],[172.7,90.9],[190.5,73.6],[185.4,76.4],[168.9,69.1],[167.6,84.5],[175.3,64.5],[170.2,69.1],[190.5,108.6],[177.8,86.4],[190.5,80.9],[177.8,87.7],[184.2,94.5],[176.5,80.2],[177.8,72],[180.3,71.4],[171.4,72.7],[172.7,84.1],[172.7,76.8],[177.8,63.6],[177.8,80.9],[182.9,80.9],[170.2,85.5],[167.6,68.6],[175.3,67.7],[165.1,66.4],[185.4,102.3],[181.6,70.5],[172.7,95.9],[190.5,84.1],[179.1,87.3],[175.3,71.8],[170.2,65.9],[193,95.9],[171.4,91.4],[177.8,81.8],[177.8,96.8],[167.6,69.1],[167.6,82.7],[180.3,75.5],[182.9,79.5],[176.5,73.6],[186.7,91.8],[188,84.1],[188,85.9],[177.8,81.8],[174,82.5],[177.8,80.5],[171.4,70],[185.4,81.8],[185.4,84.1],[188,90.5],[188,91.4],[182.9,89.1],[176.5,85],[175.3,69.1],[175.3,73.6],[188,80.5],[188,82.7],[175.3,86.4],[170.5,67.7],[179.1,92.7],[177.8,93.6],[175.3,70.9],[182.9,75],[170.8,93.2],[188,93.2],[180.3,77.7],[177.8,61.4],[185.4,94.1],[168.9,75],[185.4,83.6],[180.3,85.5],[174,73.9],[167.6,66.8],[182.9,87.3],[160,72.3],[180.3,88.6],[167.6,75.5],[186.7,101.4],[175.3,91.1],[175.3,67.3],[175.9,77.7],[175.3,81.8],[179.1,75.5],[181.6,84.5],[177.8,76.6],[182.9,85],[177.8,102.5],[184.2,77.3],[179.1,71.8],[176.5,87.9],[188,94.3],[174,70.9],[167.6,64.5],[170.2,77.3],[167.6,72.3],[188,87.3],[174,80],[176.5,82.3],[180.3,73.6],[167.6,74.1],[188,85.9],[180.3,73.2],[167.6,76.3],[183,65.9],[183,90.9],[179.1,89.1],[170.2,62.3],[177.8,82.7],[179.1,79.1],[190.5,98.2],[177.8,84.1],[180.3,83.2],[180.3,83.2]],markPoint:{show:!1,data:[{type:"max",name:""},{type:"min",name:""}]}}]};echarts.init(document.getElementById("scatter_chart_inside")).setOption(e)}if(o("#gauge_chart").length)echarts.init(document.getElementById("gauge_chart")),e={tooltip:{formatter:"{b} : {c}%"},toolbox:{show:!1,feature:{mark:{show:!1},restore:{show:!1},saveAsImage:{show:!0}}},series:[{name:"Server Load",type:"gauge",center:["50%","50%"],radius:["0%","100%"],axisLine:{show:!0,lineStyle:{color:[[.2,"#0a0c17"],[.8,"#4489e4"],[1,"#e52b4c"]],width:10}},title:{show:!1,offsetCenter:[0,"120%"],textStyle:{color:"#333",fontSize:15}},detail:{show:!0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0,borderColor:"#ccc",width:100,height:40,offsetCenter:[0,"40%"],formatter:"{value}%",textStyle:{color:"auto",fontSize:20}},data:[{value:50,name:"Server Load (MB)"}]}]};if(o("#gauge_chart_filled").length)echarts.init(document.getElementById("gauge_chart_filled")),e={tooltip:{formatter:"{a} <br/>{b} : {c}%"},toolbox:{show:!0,feature:{mark:{show:!0},restore:{show:!0},saveAsImage:{show:!0}}},series:[{name:"",type:"gauge",startAngle:180,endAngle:0,center:["50%","90%"],radius:200,axisLine:{show:!0,lineStyle:{color:[[.2,"#0a0c17"],[.8,"#4489e4"],[1,"#e52b4c"]],width:150}},axisTick:{splitNumber:10,length:12},axisLabel:{formatter:function(e){switch(e+""){case"10":return"Low";case"50":return"Medium";case"90":return"High";default:return""}},textStyle:{color:"#fff",fontSize:15,fontWeight:"bolder"}},pointer:{width:50,length:"90%",color:"rgba(255, 255, 255, 0.8)"},title:{show:!0,offsetCenter:[0,"-60%"],textStyle:{color:"#fff",fontSize:30}},detail:{show:!0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0,borderColor:"#ccc",width:100,height:40,offsetCenter:[0,-40],formatter:"{value}%",textStyle:{fontSize:30}},data:[{value:50,name:""}]}]}},o(document).ready(function(){e.dashboardEcharts()}),o(window).on("load",function(){})});