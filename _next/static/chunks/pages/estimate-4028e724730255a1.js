(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[929],{33:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/estimate",function(){return i(3114)}])},236:function(e,t,i){"use strict";var r=i(3077),n=i(5893);t.Z=(0,r.Z)((0,n.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward")},3086:function(e,t,i){"use strict";i.d(t,{G:function(){return x}});var r=i(5893),n=i(7527),o=i(917),a=i(6323),l=i(3912),s=i(1970),u=i(9736),m=i(9718),d=i(8303),p=i(3376);let c=(0,n.ZP)("div")(e=>{let{color:t="magenta"}=e;return(0,o.iv)`
	content: '';
	position: relative;
	z-index: -1;
	background-image: ${(0,a.T)(t,"0.5")};
	display: flex;
	height: 5rem;
	width: 100%;
`}),h=(0,n.ZP)(l.g)(e=>{let{color:t="magenta"}=e;return(0,o.iv)`
	--wrapper-padding-bottom: 6rem;

	@media screen and (min-width: 1123px) {
		--wrapper-padding-bottom: 5rem;
	}

	background-color: var(--color-brand-${t}-lightest);
	border: none !important;

	.Heading-root, .Text-root {
		color: var(--color-brand-tertiary-darker);
	}
`}),g=(0,n.ZP)(s.W)(e=>{let{theme:t}=e;return(0,o.iv)`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	column-gap: 2rem;

	.content, .image {
		position: relative;
	}

	.image {
		margin-bottom: -7rem;
	}

	${t.breakpoints.up("md")} {
		grid-template-columns: 35rem 1fr;

		.image {
			margin-bottom: unset;
		}
	}
`}),y=(0,n.ZP)(m.E)(e=>{let{theme:t}=e;return(0,o.iv)`
	width: 100%;
	height: 100%;

	${t.breakpoints.up("md")} {
		position: absolute;
	}
`}),x=e=>{let{title:t,description:i,color:n,ImageProps:o}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{color:n,children:(0,r.jsxs)(g,{children:[(0,r.jsxs)("hgroup",{className:"content",children:[(0,r.jsx)(u.X,{hasMargin:!0,level:1,children:(0,r.jsx)(d.v,{brand:!0,children:t})}),(0,r.jsx)(p.x,{children:i})]}),(0,r.jsx)("div",{className:"image",children:o&&(0,r.jsx)(y,{...o,height:"auto",width:"100%",fill:"contain",shape:"auto"})})]})}),(0,r.jsx)(c,{role:"separator",color:n})]})};x.displayName="PageHeaderBlock"},6346:function(e,t,i){"use strict";i.d(t,{O:function(){return m}});var r=i(5893),n=i(3959),o=i(9784);let a=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.map(e=>({label:e,value:(0,o.o)(e)}))},l=a("T-shirt","Hoodie","Sash","Poster","Sticker"),s=a("Embroidery","Print");a("\uD83C\uDF05 Image","\uD83D\uDC64 Name","\uD83C\uDD70 Initials","\uD83D\uDCAC Quote");let u=new Date,m=[{itemType:"title",title:"\uD83D\uDC4B Your Information"},{itemType:"input",inputType:"text",name:"name",placeholder:"John Snow",label:"Full Name",required:!0,span:4},{itemType:"input",inputType:"text",name:"email",placeholder:"johnsnow@gmail.com",label:"Email",required:!0,span:4},{itemType:"title",title:"⚙️ Service Request"},{itemType:"select",name:"service",label:"Service Type",options:s,span:4},{itemType:"select",name:"material",label:"Material Type",options:l,span:4},{itemType:"input",inputType:"number",name:"quantity",defaultValue:10,label:"Quantity",required:!0,min:10,max:9999,span:4},{itemType:"input",inputType:"date",name:"deadline",defaultValue:new Date(Date.now()+2592e6).toISOString().split("T")[0],label:"Deadline",helperText:"By default, we will assume 1 month from now.",required:!0,min:u.toISOString().split("T")[0],span:4},{itemType:"radio",name:"delivery",required:!0,label:"Delivery Method",options:[{value:"pickup",label:"Pick-Up \uD83D\uDCCD",meta:"Pick up your order at our store"},{value:"ship",label:"Ship \uD83D\uDCE6",meta:"We'll ship it to ya!"}],span:3},{itemType:"title",title:"\uD83D\uDCDD Additional Information"},{itemType:"input",inputType:"file",multiple:!0,name:"artwork",label:"Artwork File(s)",displayText:"\uD83C\uDF05 Upload your artwork",accept:".gif,.jpeg,.jpg,.png,.pdf,.svg,.webp",helperText:"Although this step is optional, uploading your artwork helps us come up with a more accurate estimate.",span:8},{itemType:"checkbox",name:"terms",label:"Terms and Conditions",required:!0,options:[{value:"terms",label:(0,r.jsxs)(r.Fragment,{children:["I agree to the"," ",(0,r.jsx)(n.r,{href:"/terms/terms-and-conditions",children:"Terms and Conditions"})," ","and the"," ",(0,r.jsx)(n.r,{href:"/terms/privacy-policy",children:"Privacy Policy"}),"."]})}]}]},3114:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return C},default:function(){return F}});var r=i(5893),n=i(3912),o=i(1970),a=i(3440),l=i(236),s=i(7527),u=i(917),m=i(7182),d=i(2424),p=i(8652),c=i(8303),h=i(7844),g=i(1126),y=i(8806),x=i(9029),b=i(4592),f=i(6346),w=i(230);let v=(0,s.ZP)(g.T)(e=>{let{theme:t}=e;return(0,u.iv)`
	${t.breakpoints.up("md")} {
		padding-right: 20rem;

		.FormControl-id-name,
		.FormControl-id-email {
			grid-column: span 6;
		}

		.FormControl-id-service,
		.FormControl-id-material,
		.FormControl-id-quantity,
		.FormControl-id-deadline,
		.FormControl-id-delivery {
			grid-column: span 4;
		}

		.FormControl-id-artwork {
			grid-column: span 12;
		}
	}
`}),j=()=>{let e=(0,h.c)();return(0,r.jsxs)(v,{noValidate:!0,method:"post",action:(0,w.C)("send-message/estimate-request"),encType:"multipart/form-data",id:"estimator-form",onReset:e.handleReset,onSubmit:e.handleSubmit,children:[(0,r.jsx)(y.p,{title:(0,r.jsxs)(r.Fragment,{children:["Get an"," ",(0,r.jsx)(c.v,{text:!0,color:"magenta",children:"estimate"}),"!"]}),instructions:"Fill out the form below to get your quick estimate, and a step closer to getting your project started!"}),(0,r.jsx)(x.U,{items:f.O,formState:e}),e.isSubmitted&&(0,b.z)(e.isSuccessful),(0,r.jsxs)(d.k,{children:[(0,r.jsx)(p.z,{color:"secondary",endIcon:e.isSubmitting?(0,r.jsx)(m.Z,{size:"inherit",thickness:6,sx:{color:"white"}}):(0,r.jsx)(a.Z,{}),type:"submit",children:e.isSubmitting?"Sending...":"Get Estimate"}),(0,r.jsx)(p.z,{color:"text",href:"mailto:graphixcollab@gmail.com",endIcon:(0,r.jsx)(l.Z,{}),children:"Not sure? Contact us"})]})]})};var D=i(3086),T=i(1775),k=i(2828),C=!0,F=e=>(0,r.jsxs)(k.H,{FooterProps:e.FooterProps,children:[(0,r.jsx)(T.V,{text:"Estimate"}),(0,r.jsx)(D.G,{title:"Estimate",color:"key",description:"Fill out the required information in the form, including details about the product or service you are interested in, and submit the form. Our team will review your request and provide you with a quote as soon as possible.",ImageProps:{src:"assets/juicy-woman-and-a-man-drink-coffee-min@ogw.webp",alt:"Book an Appointment w/ Graphix Collab"}}),(0,r.jsx)(n.g,{children:(0,r.jsx)(o.W,{children:(0,r.jsx)(j,{})})})]})}},function(e){e.O(0,[958,307,106,783,888,774,179],function(){return e(e.s=33)}),_N_E=e.O()}]);