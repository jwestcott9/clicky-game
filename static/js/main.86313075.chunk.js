(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){},19:function(e,a,t){e.exports=t(27)},2:function(e){e.exports=[{id:1,name:"A thing",image:"http://mdocs.skidmore.edu/crandallparktrees/wp-content/uploads/2017/04/Euonymous_alatus.jpg"},{id:2,name:"Bush",image:"https://cdn.thetreecenter.com/c/uploads/dwarf-euonymous-burning-bush-2.jpg"},{id:3,name:"A thing",image:"https://cdn.thetreecenter.com/c/uploads/miss-molly-butterfly-bush-2.jpg"},{id:4,name:"Bush",image:"https://media.mnn.com/assets/images/2018/04/sunset_through_oak_tree.jpg.653x0_q80_crop-smart.jpg"},{id:5,name:"A thing",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH47M-Alg_pHSTKukF_xGkdLPyOFH52kukaWNsDS35YpJsVJ6C"},{id:6,name:"Bush",image:"https://www.muralsyourway.com/media/catalog/product/cache/1/base/1200x/040ec09b1e35df139433887a97daa66f/9/8/9808e02910594079a3ba2b5e3f709a35.jpeg"},{id:7,name:"A thing",image:"https://www.hcn.org/issues/50.18/books-enter-the-grandeur-of-the-redwood-forest/webwood6-jpg/image"},{id:8,name:"Bush",image:"https://seetheworld.travelforkids.com/wp-content/uploads/2018/10/california-coast-redwood-big-basin-redwoods-state-park-715.jpg"},{id:9,name:"A thing",image:"https://cdn.vox-cdn.com/thumbor/HAi-knMFIVquNSI8H53rm9s4uTA=/0x0:4256x2832/1200x900/filters:focal(1788x1076:2468x1756)/cdn.vox-cdn.com/uploads/chorus_image/image/59131249/shutterstock_110911466.0.jpg"},{id:10,name:"Bush",image:"https://static.mfah.com/app/images/e7ffdcf3-c085-4045-a315-ff8f20c8ab3a.jpg?maxWidth=1600&maxHeight=1600&format=jpg&quality=90"},{id:11,name:"A thing",image:"https://media.cntraveler.com/photos/596ceda1f9e37f55cb0bfaf4/master/pass/chicago-botantic-garden-GettyImages-95607462.jpg"},{id:12,name:"Bush",image:"http://1.bp.blogspot.com/-aho3PWUKRto/VbNB2VA16VI/AAAAAAAAABI/7Ptqi80OpRQ/s1600/lettuce-coral-nicklen_18444_600x450.jpg"},{id:13,name:"A thing",image:"https://pixfeeds.com/images/travel/1280-577319778-nepal-jungle.jpg"},{id:14,name:"Bush",image:"https://www.bradtguides.com/media/wysiwyg/destinations/africa/madagascar/baobabs_madagascar_daniel_austin_1.jpg"},{id:15,name:"A thing",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8_6uSZELlWYJq8x2fZWUdg4I_KlyZpp_c8ECXhQS_qceCucQmAg"},{id:16,name:"Bush",image:"https://www.activewild.com/wp-content/uploads/2015/12/Tropical-Rainforest-Plants-List-Pitcher-Plants.jpg"}]},27:function(e,a,t){"use strict";t.r(a);var r=t(0),s=t.n(r),i=t(12),c=t.n(i),n=(t(24),t(5)),o=t(6),m=t(10),l=t(7),d=t(11),g=t(28),h=t(2),u=t(29),f={background:"lightblue"},p=function(e){function a(){return Object(n.a)(this,a),Object(m.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement(g.a,{style:f},s.a.createElement(u.a,{md:"2"}," "),s.a.createElement(u.a,{className:"btn",color:"primary"},"Clicky Games"),s.a.createElement(u.a,null),s.a.createElement(u.a,null,"High Score: ",this.props.highScore,"           Your Score: ",this.props.score),s.a.createElement(u.a,{md:"1"}))}}]),a}(s.a.Component),b=(t(16),function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(g.a,{className:"banner"},s.a.createElement("div",{className:"floatingTitle"}," Dont Click the Same Picture Twice!!!!")))}),w={background:"grey",width:"100%",margin:"0 auto"},E=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(m.a)(this,Object(l.a)(a).call(this,e))).state={orderArray:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],images:[h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],h[8],h[9],h[10],h[11],h[12],h[13],h[14],h[15]],idLog:[],score:0,highScore:0},t.lose=function(){console.log("you lose"),t.setState({score:0,idLog:[]}),alert("You Lost!!!!")},t.win=function(){alert("You win!!!"),t.setState({score:0,idLog:[]})},t.shuffle=function(e){console.log(e.target),t.placeholder=[];var a=t.state.idLog;console.log(t.state.idLog),console.log(t.state.idLog.indexOf(e.target.id)),-1===t.state.idLog.indexOf(e.target.id)?(t.setState({score:t.state.score+1},function(){t.state.score>t.state.highScore&&t.setState({highScore:t.state.score}),16===t.state.score&&t.win()}),a.push(e.target.id),t.setState({idLog:a},function(){console.log(t.state.idLog);for(var e=t.state.orderArray.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),r=[t.state.orderArray[a],t.state.orderArray[e]];t.state.orderArray[e]=r[0],t.state.orderArray[a]=r[1]}for(var s=0;s<t.state.orderArray.length;s++)t.placeholder.push(h[t.state.orderArray[s]]);t.setState({images:t.placeholder})})):t.lose()},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(p,this.state," "),s.a.createElement(b,null),s.a.createElement("div",{className:"gridStyle"},s.a.createElement(g.a,{style:w},s.a.createElement("img",{alt:"character Card",className:"character-card",onClick:function(a){return e.shuffle(a)},id:this.state.images[0].id,src:this.state.images[0].image}),s.a.createElement("img",{alt:"character Card",className:"character-card",onClick:function(a){return e.shuffle(a)},id:this.state.images[1].id,src:this.state.images[1].image}),s.a.createElement("img",{alt:"character Card",className:"character-card",onClick:function(a){return e.shuffle(a)},id:this.state.images[2].id,src:this.state.images[2].image}),s.a.createElement("img",{alt:"character Card",className:"character-card",onClick:function(a){return e.shuffle(a)},id:this.state.images[3].id,src:this.state.images[3].image})),s.a.createElement(g.a,{style:w},s.a.createElement("img",{alt:"character Card",className:"character-card",onClick:function(a){return e.shuffle(a)},id:this.state.images[4].id,src:this.state.images[4].image}),s.a.createElement("img",{alt:"character Card",className:"character-card",onClick:function(a){return e.shuffle(a)},id:this.state.images[5].id,src:this.state.images[5].image}),s.a.createElement("img",{alt:"character Card",className:"character-card",onClick:function(a){return e.shuffle(a)},id:this.state.images[6].id,src:this.state.images[6].image}),s.a.createElement("img",{alt:"character Card",className:"character-card",onClick:function(a){return e.shuffle(a)},id:this.state.images[7].id,src:this.state.images[7].image})),s.a.createElement(g.a,{style:w},s.a.createElement("img",{alt:"character Card",className:"character-card",onClick:function(a){return e.shuffle(a)},id:this.state.images[8].id,src:this.state.images[8].image}),s.a.createElement("img",{alt:"character Card",className:"character-card",onClick:function(a){return e.shuffle(a)},id:this.state.images[9].id,src:this.state.images[9].image}),s.a.createElement("img",{alt:"character Card",className:"character-card",onClick:function(a){return e.shuffle(a)},id:this.state.images[10].id,src:this.state.images[10].image}),s.a.createElement("img",{alt:"character Card",className:"character-card",onClick:function(a){return e.shuffle(a)},id:this.state.images[11].id,src:this.state.images[11].image})),s.a.createElement(g.a,{style:w},s.a.createElement("img",{alt:"character Card",className:"character-card",onClick:function(a){return e.shuffle(a)},id:this.state.images[12].id,src:this.state.images[12].image}),s.a.createElement("img",{alt:"character Card",className:"character-card",onClick:function(a){return e.shuffle(a)},id:this.state.images[13].id,src:this.state.images[13].image}),s.a.createElement("img",{alt:"character Card",className:"character-card",onClick:function(a){return e.shuffle(a)},id:this.state.images[14].id,src:this.state.images[14].image}),s.a.createElement("img",{alt:"character Card",className:"character-card",onClick:function(a){return e.shuffle(a)},id:this.state.images[15].id,src:this.state.images[15].image}))))}}]),a}(s.a.Component);var k=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.86313075.chunk.js.map