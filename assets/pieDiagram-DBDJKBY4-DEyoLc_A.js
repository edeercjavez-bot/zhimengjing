import{p as U}from"./chunk-ANTBXLJU-CFAAQxJu.js";import{g as q,s as K,a as V,b as Z,t as j,q as H,_ as s,l as w,c as J,F as Q,K as X,M as Y,N as G,e as ee,z as te,O as ae,G as re}from"./mermaid.core-CzJ7OAnV.js";import{p as ie}from"./treemap-KMMF4GRG-D3daDn2s.js";import{o as se}from"./d3-scale-4DPf7zan.js";import"./index-Cw7hQFt8.js";import"./react-mk9W79-O.js";import"./min-cQ1mxr0B.js";import"./_baseUniq-CNfeNBCs.js";var oe=re.pie,D={sections:new Map,showData:!1},g=D.sections,C=D.showData,le=structuredClone(oe),ne=s(()=>structuredClone(le),"getConfig"),ce=s(()=>{g=new Map,C=D.showData,te()},"clear"),pe=s(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);g.has(e)||(g.set(e,a),w.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),de=s(()=>g,"getSections"),ge=s(e=>{C=e},"setShowData"),ue=s(()=>C,"getShowData"),M={getConfig:ne,clear:ce,setDiagramTitle:H,getDiagramTitle:j,setAccTitle:Z,getAccTitle:V,setAccDescription:K,getAccDescription:q,addSection:pe,getSections:de,setShowData:ge,getShowData:ue},fe=s((e,a)=>{U(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),he={parse:s(async e=>{const a=await ie("pie",e);w.debug(a),fe(a,M)},"parse")},me=s(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),ve=me,Se=s(e=>{const a=[...e.values()].reduce((r,o)=>r+o,0),$=[...e.entries()].map(([r,o])=>({label:r,value:o})).filter(r=>r.value/a*100>=1).sort((r,o)=>o.value-r.value);return ae().value(r=>r.value)($)},"createPieArcs"),xe=s((e,a,$,y)=>{w.debug(`rendering pie chart
`+e);const r=y.db,o=J(),T=Q(r.getConfig(),o.pie),A=40,l=18,p=4,c=450,u=c,f=X(a),n=f.append("g");n.attr("transform","translate("+u/2+","+c/2+")");const{themeVariables:i}=o;let[b]=Y(i.pieOuterStrokeWidth);b??=2;const _=T.textPosition,d=Math.min(u,c)/2-A,O=G().innerRadius(0).outerRadius(d),W=G().innerRadius(d*_).outerRadius(d*_);n.append("circle").attr("cx",0).attr("cy",0).attr("r",d+b/2).attr("class","pieOuterCircle");const h=r.getSections(),N=Se(h),P=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let m=0;h.forEach(t=>{m+=t});const E=N.filter(t=>(t.data.value/m*100).toFixed(0)!=="0"),v=se(P);n.selectAll("mySlices").data(E).enter().append("path").attr("d",O).attr("fill",t=>v(t.data.label)).attr("class","pieCircle"),n.selectAll("mySlices").data(E).enter().append("text").text(t=>(t.data.value/m*100).toFixed(0)+"%").attr("transform",t=>"translate("+W.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),n.append("text").text(r.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const k=[...h.entries()].map(([t,x])=>({label:t,value:x})),S=n.selectAll(".legend").data(k).enter().append("g").attr("class","legend").attr("transform",(t,x)=>{const F=l+p,I=F*k.length/2,L=12*l,B=x*F-I;return"translate("+L+","+B+")"});S.append("rect").attr("width",l).attr("height",l).style("fill",t=>v(t.label)).style("stroke",t=>v(t.label)),S.append("text").attr("x",l+p).attr("y",l-p).text(t=>r.getShowData()?`${t.label} [${t.value}]`:t.label);const R=Math.max(...S.selectAll("text").nodes().map(t=>t?.getBoundingClientRect().width??0)),z=u+A+l+p+R;f.attr("viewBox",`0 0 ${z} ${c}`),ee(f,c,z,T.useMaxWidth)},"draw"),we={draw:xe},Ee={parser:he,db:M,renderer:we,styles:ve};export{Ee as diagram};
