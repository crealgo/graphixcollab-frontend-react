(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5995)}])},2655:function(e,t,r){"use strict";r.d(t,{t:function(){return T}});var i=r(5893),n=r(7527),a=r(3440),l=r(236),o=r(7182),s=r(2424),d=r(8652),c=r(8303),m=r(7844),p=r(1126),u=r(8806),g=r(9029),h=r(4592),x=r(6346),f=r(6829),y=r(230);let v=x.O.filter(e=>"title"!==e.itemType),b=(0,f.Z)(p.T)`
	@media screen and (min-width: 768px) {
		.FormControl-id-name,
		.FormControl-id-email {
			grid-column: span 6;
		}

		.FormControl-id-service,
		.FormControl-id-deadline,
		.FormControl-id-delivery {
			grid-column: span 3;
		}

		.FormControl-id-material {
			grid-column: span 2;
		}

		.FormControl-id-quantity {
			grid-column: span 1;
		}

		.FormControl-id-artwork,
		.FormControl-id-terms {
			grid-column: span 12;
		}
	}
`,k=()=>{let e=(0,m.c)();return(0,i.jsxs)(b,{noValidate:!0,method:"post",action:(0,y.C)("send-message/estimate-request"),encType:"multipart/form-data",id:"estimator-form",onReset:e.handleReset,onSubmit:e.handleSubmit,children:[(0,i.jsx)(u.p,{title:(0,i.jsxs)(i.Fragment,{children:["Get a quick"," ",(0,i.jsx)(c.v,{text:!0,color:"magenta",children:"estimate"}),"!"]}),instructions:"Fill out the form below to get your quick estimate, and a step closer to getting your project started!"}),(0,i.jsx)(g.U,{items:v,formState:e}),e.isSubmitted&&(0,h.z)(e.isSuccessful),(0,i.jsxs)(s.k,{children:[(0,i.jsx)(d.z,{color:"secondary",endIcon:e.isSubmitting?(0,i.jsx)(o.Z,{size:"inherit",thickness:6,sx:{color:"white"}}):(0,i.jsx)(a.Z,{}),type:"submit",children:e.isSubmitting?"Sending...":"Get Estimate"}),(0,i.jsx)(d.z,{color:"text",href:"mailto:graphixcollab@gmail.com",endIcon:(0,i.jsx)(l.Z,{}),children:"Not sure? Contact us"})]})]})};var j=r(3912),w=r(1970);let C=(0,n.ZP)(j.g)`
	padding: 0 !important;
	display: grid;
	grid-template-columns: minmax(0, 1fr);
	grid-template-rows: auto 7rem;

	&::after {
		content: '';
		display: flex;
		background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='70' height='8' patternTransform='scale(3) rotate(115)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(41, 100%, 84%, 1)'/><path d='M-.02 22c8.373 0 11.938-4.695 16.32-9.662C20.785 7.258 25.728 2 35 2c9.272 0 14.215 5.258 18.7 10.338C58.082 17.305 61.647 22 70.02 22M-.02 14.002C8.353 14 11.918 9.306 16.3 4.339 20.785-.742 25.728-6 35-6 44.272-6 49.215-.742 53.7 4.339c4.382 4.967 7.947 9.661 16.32 9.664M70 6.004c-8.373-.001-11.918-4.698-16.3-9.665C49.215-8.742 44.272-14 35-14c-9.272 0-14.215 5.258-18.7 10.339C11.918 1.306 8.353 6-.02 6.002'  stroke-width='2' stroke='hsla(341, 100%, 83%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
		width: 100%;
		height: 100%;
	}

	${e=>{let{theme:t}=e;return t.breakpoints.up("md")}} {
		grid-template-columns: minmax(0, 1fr) 15rem;
		grid-template-rows: auto;
	}
`,T=()=>(0,i.jsx)(w.W,{children:(0,i.jsx)(C,{isClipped:!0,isFloating:!0,isRounded:!0,color:"key",className:"EstimatorBlock-root",children:(0,i.jsx)(j.g,{className:"EstimatorBlock-formWrapper",children:(0,i.jsx)(k,{})})})})},6346:function(e,t,r){"use strict";r.d(t,{O:function(){return c}});var i=r(5893),n=r(3959),a=r(9784);let l=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.map(e=>({label:e,value:(0,a.o)(e)}))},o=l("T-shirt","Hoodie","Sash","Poster","Sticker"),s=l("Embroidery","Print");l("\uD83C\uDF05 Image","\uD83D\uDC64 Name","\uD83C\uDD70 Initials","\uD83D\uDCAC Quote");let d=new Date,c=[{itemType:"title",title:"\uD83D\uDC4B Your Information"},{itemType:"input",inputType:"text",name:"name",placeholder:"John Snow",label:"Full Name",required:!0,span:4},{itemType:"input",inputType:"text",name:"email",placeholder:"johnsnow@gmail.com",label:"Email",required:!0,span:4},{itemType:"title",title:"⚙️ Service Request"},{itemType:"select",name:"service",label:"Service Type",options:s,span:4},{itemType:"select",name:"material",label:"Material Type",options:o,span:4},{itemType:"input",inputType:"number",name:"quantity",defaultValue:10,label:"Quantity",required:!0,min:10,max:9999,span:4},{itemType:"input",inputType:"date",name:"deadline",defaultValue:new Date(Date.now()+2592e6).toISOString().split("T")[0],label:"Deadline",helperText:"By default, we will assume 1 month from now.",required:!0,min:d.toISOString().split("T")[0],span:4},{itemType:"radio",name:"delivery",required:!0,label:"Delivery Method",options:[{value:"pickup",label:"Pick-Up \uD83D\uDCCD",meta:"Pick up your order at our store"},{value:"ship",label:"Ship \uD83D\uDCE6",meta:"We'll ship it to ya!"}],span:3},{itemType:"title",title:"\uD83D\uDCDD Additional Information"},{itemType:"input",inputType:"file",multiple:!0,name:"artwork",label:"Artwork File(s)",displayText:"\uD83C\uDF05 Upload your artwork",accept:".gif,.jpeg,.jpg,.png,.pdf,.svg,.webp",helperText:"Although this step is optional, uploading your artwork helps us come up with a more accurate estimate.",span:8},{itemType:"checkbox",name:"terms",label:"Terms and Conditions",required:!0,options:[{value:"terms",label:(0,i.jsxs)(i.Fragment,{children:["I agree to the"," ",(0,i.jsx)(n.r,{href:"/terms/terms-and-conditions",children:"Terms and Conditions"})," ","and the"," ",(0,i.jsx)(n.r,{href:"/terms/privacy-policy",children:"Privacy Policy"}),"."]})}]}]},5995:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return X},default:function(){return Y}});var i=r(5893),n=r(2655),a=r(3904),l=r(1730),o=r(7527),s=r(917),d=r(6010),c=r(7005),m=r(3912),p=r(1970),u=r(9736),g=r(9718),h=r(3376),x=r(2424),f=r(1769);let y=(0,o.ZP)("div")({display:"flex",alignItems:"center",justifyContent:"center",gap:"0.75rem"}),v=e=>{let{className:t,url:r,text:n,actions:a}=e;return(0,i.jsxs)(y,{className:(0,d.Z)(t,"SocialMediaBlock-root"),children:[(0,i.jsx)(h.x,{children:(0,i.jsx)(f.Z,{variant:"body2",className:(0,d.Z)(t,"SocialMediaBlock-link"),href:r,children:n})}),(0,i.jsx)(x.k,{color:"secondary",actions:a})]})},b=(0,o.ZP)(m.g)(e=>{let{theme:t}=e;return(0,s.iv)`
		/* padding-inline: 0rem; */

		.Container-root {
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.content {
			text-align: center;
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.gallery {
			overflow: hidden;
			margin-top: 2.5rem;
			margin-inline: -1.5rem;
			display: grid;
			gap: 0.5rem;

			.GalleryBlock-image {
				margin-inline: 0.25rem;
				width: 10rem;
			}
			${t.breakpoints.up("md")} {
				margin-inline: 0;

				.GalleryBlock-image {
					width: 18rem;
				}
			}
		}
	`}),k=e=>{let{className:t,title:r,description:n,SocialMediaBlockProps:a,images:o=[]}=e,s=(0,l.Z)(e=>e.breakpoints.up("md"));return(0,i.jsx)(b,{isClipped:!0,className:(0,d.Z)(t,"GalleryBlock-root"),children:(0,i.jsxs)(p.W,{className:"GalleryBlock-container",children:[(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)(u.X,{level:2,children:r}),(0,i.jsx)(p.W,{size:"small",children:(0,i.jsx)(h.x,{size:"large",children:n})}),(0,i.jsx)(v,{...a})]}),(0,i.jsx)("div",{className:"gallery",children:o?.length&&(0,i.jsx)(c.Z,{gradient:s,children:o.map((e,t)=>(0,i.jsx)(g.E,{shape:"square",className:"GalleryBlock-image",fill:"cover",...e},t))})})]})})};var j=r(4869),w=r(7294);let C=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0,[i,n]=(0,w.useState)(t),a=(0,w.useRef)(null),l=()=>{a.current=setInterval(()=>{n(t=>t===e-1?0:t+1)},r?.intervalTime??5e3)},o=()=>{a.current&&(clearInterval(a.current),a.current=null)};return(0,w.useEffect)(()=>{if(r?.startImmediately)return l(),()=>{o()}},[]),[i,{to:e=>{o(),n(e),l()},next:()=>{o(),n(t=>t===e-1?0:t+1),l()},previous:()=>{o(),n(t=>0===t?e-1:t-1),l()},play:l,pause:o,reset:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;n(e??t)}}]};var T=r(1796);let D=(0,o.ZP)("section")`
	--padding-top: calc(var(--header-bar-height-mobile) + var(--section-desktop-padding-block));

	${e=>{let{theme:t}=e;return t.breakpoints.up("md")}} {
		--padding-top: calc(var(--header-bar-height-desktop) + var(--section-desktop-padding-block));
	}

	overflow: hidden;
	box-sizing: border-box;
	display: flex;
	padding-block: var(--padding-top)  var(--section-desktop-padding-block);
	padding-inline: var(--section-desktop-padding-inline);
	background-color: var(--color-background);

	position: relative;
	overflow: hidden;
`,S=(0,o.ZP)("div")(e=>{let{theme:t}=e;return(0,s.iv)`
	position: absolute;
	inset: 0;
	z-index: 0;
	box-shadow: inset 5em 1em gold;

	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-image: radial-gradient(
			circle at 0% 20%,
			${(0,T.Fq)(t.tokens.color.brand.magenta.lightest,1)} 0%,
			${(0,T.Fq)(t.tokens.color.brand.magenta.lighter,.375)} 70%,
			${(0,T.Fq)(t.tokens.color.brand.cyan.lighter,.1)} 100%
		);
	}
`}),Z=(0,o.ZP)(j.q.div)`
	position: absolute;
	inset: 0;

	.Image-root {
		opacity: 0.25;
	}
`,q=(0,o.ZP)("div")`
	display: flex;
	margin-top: 2rem;
	gap: 1rem;
	align-items: left;
	flex-wrap: wrap;
	flex-direction: column;

	${e=>{let{theme:t}=e;return t.breakpoints.up("md")}} {
		flex-direction: row;
	}
`,F=(0,o.ZP)(j.q.button)`
	border: unset;
	padding: unset;

	font-family: var(--type-heading-font-family);
	font-size: var(--type-heading-font-size-large-3);
	font-weight: var(--type-heading-font-weight);

	display: inline-flex;
	height: 2.75rem;
	line-height: 2.75rem;

	background: transparent;
	cursor: pointer;

	color: var(--color-white);
	transform-origin: left center;

	${[1,2,3].map(e=>(0,s.iv)`
		&:nth-of-type(${e}) {
			&:hover {
				color: var(--sequence-color-${e-1}-lighter);
			}
			&[aria-current=true] {
				color: var(--sequence-color-${e-1}-light);
			}
		}
	`)}
`,N=(0,o.ZP)("div")`
	max-width: 38rem; /* TODO: make this a variable */
	display: grid;
	grid-template-columns: 1fr;
	gap: 1.5rem;
	position: relative;
`;(0,o.ZP)("hr")`
	padding: unset;
	margin: unset;
	border: unset;

	visibility: hidden;
	height: 0px;
`;let P=e=>{let{slides:t=[],...r}=e,[n,a]=C(t.length,0,{startImmediately:!1}),[l]=(0,j.bY)(t.length,(e,t)=>{let r=t.get(),i=r.y?r.y:0,a=0;return e!==n&&(a=100*Math.sign(e-n)),{from:{y:i},to:{y:a}}},[n]),[o]=(0,j.bY)(t.length,(e,t)=>{let r={marginRight:"0rem",transform:"scale(1)"},i=t.get(),a=Object.keys(i).length?i:r,l={marginRight:"2rem",transform:"scale(1.125)"};return e!==n&&(l=r),{from:a,to:l}},[n]);return(0,i.jsxs)(D,{className:"root",children:[(0,i.jsx)(S,{children:l.map((e,r)=>(0,i.jsx)(Z,{"data-sequence-index":r,"data-sequence-property":"background-color","data-sequence-shade":"lightest",style:{transform:e.y.to(e=>`translateY(${e}%)`)},children:(0,i.jsx)(g.E,{height:"100%",width:"100%",fill:"cover",src:t[r].src})},r))}),(0,i.jsx)(p.W,{children:(0,i.jsxs)(N,{className:"content",children:[(0,i.jsx)(u.X,{level:1,className:"title",children:r.title}),(0,i.jsx)(h.x,{size:"large",children:r.description}),(0,i.jsx)(x.k,{className:"action-stack",size:"large",actions:r.actions}),(0,i.jsx)(q,{children:o.map((e,r)=>(0,i.jsx)(F,{"aria-current":r===n,type:"button",className:(0,d.Z)("carousel-control-title",`carousel-control-title-${r+1}`),style:e,onClick:()=>{a.to(r)},children:t[r].title},r))})]})})]})};var $=r(236),I=r(6788),z=r(1163),E=r(9808),B=r.n(E);let _=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"background",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return[(0,T.Fq)(B().red[500],r),(0,T.Fq)(B().orange[500],r),(0,T.Fq)(B().green[500],r),(0,T.Fq)(B().blue[500],r),(0,T.Fq)(B().purple[500],r)].reduce((r,i,n)=>`
		${r}
		&:nth-of-type(${n+1}n) ${t} {
			${e}: ${i};
		}
	`,"")};var W=r(8652),O=r(2126),A=r(1259);(0,o.ZP)("div")(e=>{let{theme:t}=e;return(0,s.iv)`
		max-width: ${t.breakpoints.values.sm}px;

		.ActionStack-root {
			margin-top: 1.5rem;
		}

		.Heading-root {
			margin-bottom: 0.5rem;
		}
	`});let G=(0,o.ZP)("div")(e=>{let{theme:t}=e;return(0,s.iv)`
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;

		.Container-root {
			text-align: center;
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;

			.ActionStack-root {
				justify-content: center !important;
			}
		}

		.services {
			display: grid;
			grid-template-columns: 1fr;
			gap: 1.25rem;

			.service {
				${_("background",".image")}
			}
		}

		${t.breakpoints.up("sm")} {
			.services {
				row-gap: 3rem;
				grid-template-columns: repeat(2, 1fr);
			}
		}

		${t.breakpoints.up("md")} {
			.services {
				grid-template-columns: repeat(3, 1fr);
			}
		}

		${t.breakpoints.up("lg")} {
			.services {
				grid-template-columns: repeat(5, 1fr);
			}
		}
	`}),M=e=>{let{title:t,subtitle:r,description:n,services:a}=e,o=(0,l.Z)(e=>e.breakpoints.up("md")),s=(0,z.useRouter)(),d=o?O.Z:A.L;return(0,i.jsx)(m.g,{children:(0,i.jsx)(p.W,{children:(0,i.jsxs)(G,{children:[(0,i.jsxs)(p.W,{size:"small",children:[(0,i.jsx)(I.Z,{variant:"overline",children:r}),(0,i.jsx)(u.X,{level:2,children:t}),(0,i.jsx)(I.Z,{variant:"body2",children:n})]}),(0,i.jsx)("div",{className:"services",children:a?.map(e=>i.jsx(d,{className:"service",title:e.name,description:e.summary,image:e.image,imageColor:e.color},e.id))}),(0,i.jsx)(p.W,{size:"small",children:(0,i.jsx)(x.k,{align:"center",color:"secondary",children:(0,i.jsx)(W.z,{color:"secondary",href:`${s.basePath}/services`,endIcon:(0,i.jsx)($.Z,{}),children:"View All Services"})})})]})})})};var R=r(1775),H=r(2828),U=r(6538),V=r(3378),X=!0,Y=e=>(0,i.jsxs)(H.H,{showYelp:!0,children:[(0,i.jsx)(R.V,{text:"Home"}),(0,i.jsx)(P,{title:(0,i.jsxs)(i.Fragment,{children:["Welcome to ",(0,i.jsx)(U.Z,{})]}),description:"We're your one-stop shop for all your apparel customization needs. We offer a wide range of services, from garment printing to embroidery.",actions:[{label:"Book Appointment",href:"/book-appointment",color:"secondary",endIcon:(0,i.jsx)(V.Z,{})}],slides:[{title:"Sashes",src:"assets/sash-hs-min@1280w.webp",alt:"Sashes"},{title:"Embroidery",src:"assets/embroidery-shirts-min@1280w.webp",alt:"Embroidery"},{title:"T-Shirt",src:"assets/laughing-group-min@1280w.webp",alt:"T-Shirt"}]}),(0,i.jsx)(a.H,{...e.FeaturedInBlockProps}),(0,i.jsx)(M,{...e.ServicesPreviewBlockProps}),(0,i.jsx)(n.t,{}),(0,i.jsx)(k,{...e.GalleryBlockProps})]})}},function(e){e.O(0,[740,958,307,961,85,106,783,438,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);