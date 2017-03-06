"use strict";function liquidFillGaugeDefaultSettings(){return{minValue:0,maxValue:100,circleThickness:.05,circleFillGap:.05,circleColor:"#178BCA",waveHeight:.05,waveCount:1,waveRiseTime:1e3,waveAnimateTime:18e3,waveRise:!0,waveHeightScaling:!0,waveAnimate:!0,waveColor:"#178BCA",waveOffset:0,textVertPosition:.5,textSize:1,valueCountUp:!0,displayPercent:!0,textColor:"#045681",waveTextColor:"#A4DBf8"}}function loadLiquidFillGauge(e,a,i){function t(){L.attr("transform","translate("+y(L.attr("T"))+",0)"),L.transition().duration(i.waveAnimateTime*(1-L.attr("T"))).ease("linear").attr("transform","translate("+y(1)+",0)").attr("T",1).each("end",function(){L.attr("T",0),t(i.waveAnimateTime)})}function n(){this.update=function(e){var a=parseFloat(e).toFixed(2),n=function(e){return Math.round(e)};parseFloat(a)!=parseFloat(n(a))&&(n=function(e){return parseFloat(e).toFixed(1)}),parseFloat(a)!=parseFloat(n(a))&&(n=function(e){return parseFloat(e).toFixed(2)});var r=function(){var a=d3.interpolate(this.textContent,parseFloat(e).toFixed(2));return function(e){this.textContent=n(a(e))+d}};O.transition().duration(i.waveRiseTime).tween("text",r),B.transition().duration(i.waveRiseTime).tween("text",r);var l,c=Math.max(i.minValue,Math.min(i.maxValue,e))/i.maxValue,g=p*o(100*c),f=d3.scale.linear().range([h+2*p+g,h-g]).domain([0,1]),s=f(c),u=d3.scale.linear().range([0,F]).domain([0,1]),v=d3.scale.linear().range([0,g]).domain([0,1]);l=i.waveHeightScaling?d3.svg.area().x(function(e){return u(e.x)}).y0(function(e){return v(Math.sin(2*Math.PI*i.waveOffset*-1+2*Math.PI*(1-i.waveCount)+2*e.y*Math.PI))}).y1(function(e){return 2*p+g}):b;var w=i.waveAnimate?y(1):0;L.transition().duration(0).transition().duration(i.waveAnimate?i.waveAnimateTime*(1-L.attr("T")):i.waveRiseTime).ease("linear").attr("d",l).attr("transform","translate("+w+",0)").attr("T","1").each("end",function(){i.waveAnimate&&(L.attr("transform","translate("+y(0)+",0)"),t(i.waveAnimateTime))}),k.transition().duration(i.waveRiseTime).attr("transform","translate("+W+","+s+")")}}null==i&&(i=liquidFillGaugeDefaultSettings());var o,r=d3.select("#"+e),l=Math.min(parseInt(r.style("width")),parseInt(r.style("height")))/2,c=parseInt(r.style("width"))/2-l,g=parseInt(r.style("height"))/2-l,f=Math.max(i.minValue,Math.min(i.maxValue,a))/i.maxValue;o=i.waveHeightScaling?d3.scale.linear().range([0,i.waveHeight,0]).domain([0,50,100]):d3.scale.linear().range([i.waveHeight,i.waveHeight]).domain([0,100]);var s=i.textSize*l/2,u=parseFloat(a).toFixed(2),v=i.valueCountUp?i.minValue:u,d=i.displayPercent?"%":"",w=i.circleThickness*l,m=i.circleFillGap*l,h=w+m,p=l-h,x=p*o(100*f),C=2*p/i.waveCount,T=1+i.waveCount,F=C*T,A=function(e){return Math.round(e)};parseFloat(u)!=parseFloat(A(u))&&(A=function(e){return parseFloat(e).toFixed(1)}),parseFloat(u)!=parseFloat(A(u))&&(A=function(e){return parseFloat(e).toFixed(2)});for(var G=[],H=0;H<=40*T;H++)G.push({x:H/(40*T),y:H/40});var S=d3.scale.linear().range([0,2*Math.PI]).domain([0,1]),q=d3.scale.linear().range([0,l]).domain([0,l]),P=d3.scale.linear().range([0,F]).domain([0,1]),R=d3.scale.linear().range([0,x]).domain([0,1]),V=d3.scale.linear().range([h+2*p+x,h-x]).domain([0,1]),y=d3.scale.linear().range([0,F-2*p]).domain([0,1]),M=d3.scale.linear().range([h+2*p,h+.7*s]).domain([0,1]),D=r.append("g").attr("transform","translate("+c+","+g+")"),I=d3.svg.arc().startAngle(S(0)).endAngle(S(1)).outerRadius(q(l)).innerRadius(q(l-w));D.append("path").attr("d",I).style("fill",i.circleColor).attr("transform","translate("+l+","+l+")");var O=D.append("text").text(A(v)+d).attr("class","liquidFillGaugeText").attr("text-anchor","middle").attr("font-size",s+"px").style("fill",i.textColor).attr("transform","translate("+l+","+M(i.textVertPosition)+")"),b=d3.svg.area().x(function(e){return P(e.x)}).y0(function(e){return R(Math.sin(2*Math.PI*i.waveOffset*-1+2*Math.PI*(1-i.waveCount)+2*e.y*Math.PI))}).y1(function(e){return 2*p+x}),k=D.append("defs").append("clipPath").attr("id","clipWave"+e),L=k.append("path").datum(G).attr("d",b).attr("T",0),z=D.append("g").attr("clip-path","url(#clipWave"+e+")");z.append("circle").attr("cx",l).attr("cy",l).attr("r",p).style("fill",i.waveColor);var B=z.append("text").text(A(v)+d).attr("class","liquidFillGaugeText").attr("text-anchor","middle").attr("font-size",s+"px").style("fill",i.waveTextColor).attr("transform","translate("+l+","+M(i.textVertPosition)+")");if(i.valueCountUp){var U=function(){var e=d3.interpolate(this.textContent,u);return function(a){this.textContent=A(e(a))+d}};O.transition().duration(i.waveRiseTime).tween("text",U),B.transition().duration(i.waveRiseTime).tween("text",U)}var W=h+2*p-F;return i.waveRise?k.attr("transform","translate("+W+","+V(0)+")").transition().duration(i.waveRiseTime).attr("transform","translate("+W+","+V(f)+")").each("start",function(){L.attr("transform","translate(1,0)")}):k.attr("transform","translate("+W+","+V(f)+")"),i.waveAnimate&&t(),new n}var gauge1=loadLiquidFillGauge("fillgauge1",85),config1=liquidFillGaugeDefaultSettings();config1.circleColor="#f53240",config1.textColor="#f53240",config1.waveTextColor="#fca1a8",config1.waveColor="#f53240",config1.circleThickness=.06,config1.textVertPosition=.5,config1.waveAnimateTime=1e3,config1.waveHeight=.05,config1.waveAnimate=!0,config1.waveRise=!1,config1.waveHeightScaling=!1,config1.waveOffset=.25,config1.waveCount=2;var gauge2=loadLiquidFillGauge("fillgauge2",50,config1),config2=liquidFillGaugeDefaultSettings();config2.circleColor="#a4d555",config2.textColor="#a4d555",config2.waveTextColor="#defcae",config2.waveColor="#a4d555",config2.circleThickness=.06,config2.textVertPosition=.5,config2.waveAnimateTime=1e3,config2.waveHeight=.05,config2.waveAnimate=!0,config2.waveRise=!1,config2.waveHeightScaling=!1,config2.waveOffset=.25,config2.waveCount=2;var gauge3=loadLiquidFillGauge("fillgauge3",40,config2),config3=liquidFillGaugeDefaultSettings();config3.circleColor="#f9be02",config3.textColor="#f9be02",config3.waveTextColor="#fae49f",config3.waveColor="#f9be02",config3.circleThickness=.06,config3.textVertPosition=.5,config3.waveAnimateTime=1e3,config3.waveHeight=.05,config3.waveAnimate=!0,config3.waveRise=!1,config3.waveHeightScaling=!1,config3.waveOffset=.25,config3.waveCount=2;var gauge4=loadLiquidFillGauge("fillgauge4",95,config3),config4=liquidFillGaugeDefaultSettings();config4.circleColor="#f53240",config4.textColor="#f53240",config4.waveTextColor="#fba6ac",config4.waveColor="#f53240",config4.circleThickness=.06,config4.textVertPosition=.5,config4.waveAnimateTime=1e3,config4.waveHeight=.05,config4.waveAnimate=!0,config4.waveRise=!1,config4.waveHeightScaling=!1,config4.waveOffset=.25,config4.waveCount=2;var gauge5=loadLiquidFillGauge("fillgauge5",95,config4),config5=liquidFillGaugeDefaultSettings();config5.circleColor="#a4d555",config5.textColor="#a4d555",config5.waveTextColor="#d8f8a4",config5.waveColor="#a4d555",config5.circleThickness=.06,config5.textVertPosition=.5,config5.waveAnimateTime=1e3,config5.waveHeight=.05,config5.waveAnimate=!0,config5.waveRise=!1,config5.waveHeightScaling=!1,config5.waveOffset=.25,config5.waveCount=2;var gauge6=loadLiquidFillGauge("fillgauge6",75,config5),config6=liquidFillGaugeDefaultSettings();config6.circleColor="#6c6488",config6.textColor="#6c6488",config6.waveTextColor="#d5cafb",config6.waveColor="#6c6488",config6.circleThickness=.06,config6.textVertPosition=.5,config6.waveAnimateTime=1e3,config6.waveHeight=.05,config6.waveAnimate=!0,config6.waveRise=!1,config6.waveHeightScaling=!1,config6.waveOffset=.25,config6.waveCount=2;var gauge7=loadLiquidFillGauge("fillgauge7",40,config6),config7=liquidFillGaugeDefaultSettings();config7.circleColor="#f7882f",config7.textColor="#f7882f",config7.waveTextColor="#fed2af",config7.waveColor="#f7882f",config7.circleThickness=.06,config7.textVertPosition=.5,config7.waveAnimateTime=1e3,config7.waveHeight=.05,config7.waveAnimate=!0,config7.waveRise=!1,config7.waveHeightScaling=!1,config7.waveOffset=.25,config7.waveCount=2;var gauge8=loadLiquidFillGauge("fillgauge8",40,config7),config8=liquidFillGaugeDefaultSettings();config8.circleColor="#02c8a7",config8.textColor="#02c8a7",config8.waveTextColor="#bcf5ec",config8.waveColor="#02c8a7",config8.circleThickness=.06,config8.textVertPosition=.5,config8.waveAnimateTime=1e3,config8.waveHeight=.05,config8.waveAnimate=!0,config8.waveRise=!1,config8.waveHeightScaling=!1,config8.waveOffset=.25,config8.waveCount=2;var deleteLog=!1;$(document).ready(function(){$("#pagepiling").pagepiling({menu:"#menu",anchors:["page1","page7","page2","page5","page3","page6","page4"],sectionsColor:["#f53240","#f53240","#7cdbd5","#7cdbd5","#f9be02","#f9be02","#a4d555"],loopTop:!0,loopBottom:!0})});