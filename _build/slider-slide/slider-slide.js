!function(e){function t(l){if(n[l])return n[l].exports;var r=n[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=9)}({9:function(e,t){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l,r=wp.components,a=r.Dashicon,o=r.IconButton,c=r.PanelBody,i=(r.RangeControl,r.ToggleControl),m=r.Toolbar,s=r.withNotices,u=wp.element.Fragment,p=wp.blocks,d=(p.createBlock,p.registerBlockType),g=wp.editor,b=g.URLInput,w=g.BlockControls,f=g.InspectorControls,v=g.MediaPlaceholder,h=g.MediaUpload,E=g.AlignmentToolbar,y=g.RichText;d("typecase/slider-slide",(l={title:"Slide",parent:["typecase/slider"],icon:"format-image",description:"A single slide within a Slider block.",attributes:{},category:"common",keywords:[],supports:{html:!1,anchor:!1}},n(l,"attributes",{title:{type:"array",source:"children",selector:"h2"},content:{type:"array",source:"children",selector:"p"},image:{type:"string"},id:{type:"number"},contentAlign:{type:"string",default:"left"},buttonText:{type:"string"},buttonUrl:{type:"string"},textReverse:{type:"boolean",default:!1}}),n(l,"edit",s(function(e){var t=e.attributes,n=e.setAttributes,l=(e.isSelected,e.className),r=e.noticeOperations,s=e.noticeUI,p=t.id,d=t.title,g=t.content,k=t.image,N=t.contentAlign,x=t.buttonText,C=t.buttonUrl,T=t.textReverse,_=function(e){if(!e||!e.url)return void n({image:void 0,id:void 0});n({image:e.url,id:e.id})},A=l;"left"!==N&&(A+=" has-"+N+"-content");var R=wp.element.createElement(w,null,wp.element.createElement(E,{value:N,onChange:function(e){n({contentAlign:e})}}),wp.element.createElement(m,null,wp.element.createElement(h,{onSelect:_,type:"image",value:p,render:function(e){var t=e.open;return wp.element.createElement(o,{className:"components-toolbar__control",label:"Edit image",icon:"edit",onClick:t})}})));if(!k){return A+=" no-image-selected",wp.element.createElement(u,null,R,wp.element.createElement(v,{icon:void 0,className:l,labels:{title:"Background Image",name:"an image"},onSelect:_,accept:"image/*",allowedTypes:["image"],notices:s,onError:r.createErrorNotice}))}return wp.element.createElement(u,null,wp.element.createElement(u,null,R,wp.element.createElement(f,null,wp.element.createElement(c,{title:"Slide Settings"},wp.element.createElement(i,{label:"Reverse Text Color (for dark photos)",checked:!!T,onChange:function(){return n({textReverse:!T})}})))),wp.element.createElement("figure",{className:A},wp.element.createElement("img",{className:"background",src:k}),wp.element.createElement("figcaption",null,wp.element.createElement(y,{tagName:"h2",className:"wp-block-cover-image-title",placeholder:"Write title\u2026",value:d,onChange:function(e){return n({title:e})},inlineToolbar:!0}),wp.element.createElement(y,{tagName:"p",className:"wp-block-cover-image-text",placeholder:"Write text\u2026",value:g,onChange:function(e){return n({content:e})},inlineToolbar:!0}),wp.element.createElement("span",null,wp.element.createElement(y,{tagName:"span",placeholder:"Add text\u2026",value:x,onChange:function(e){return n({buttonText:e})},formattingControls:["bold","italic","strikethrough"],className:"wp-block-slider-slide__link",keepPlaceholderOnFocus:!0}),wp.element.createElement("form",{className:"core-blocks-button__inline-link",onSubmit:function(e){return e.preventDefault()}},wp.element.createElement(a,{icon:"admin-links"}),wp.element.createElement(b,{value:C,onChange:function(e){return n({buttonUrl:e})}}),wp.element.createElement(o,{icon:"editor-break",label:"Apply",type:"submit"}))))))})),n(l,"save",function(e){var t=e.attributes,n=e.className,l=t.image,r=t.title,a=t.content,o=t.contentAlign,c=t.buttonText,i=t.buttonUrl,m=t.textReverse,s=n,u=void 0;return"left"!==o&&(s=s+" has-"+o+"-content"),u=m?"text-color-reverse":"",m&&(s+=" __reverse"),wp.element.createElement("figure",{className:s},wp.element.createElement("img",{className:"background",src:l}),wp.element.createElement("figcaption",{className:u},r&&r.length>0&&wp.element.createElement(y.Content,{tagName:"h2",className:"wp-block-typecase-slider-slide-title",value:r}),a&&a.length>0&&wp.element.createElement(y.Content,{tagName:"p",className:"wp-block-typecase-slider-slide-text",value:a}),i&&i.length>0&&wp.element.createElement(y.Content,{tagName:"a",className:"wp-block-typecase-slider-slide__link button button-primary",href:i,value:c})))}),l))}});