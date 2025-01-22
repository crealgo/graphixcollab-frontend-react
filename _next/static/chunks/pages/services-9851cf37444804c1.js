(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54],{7133:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services",function(){return r(1908)}])},7161:function(e,t,r){"use strict";r.d(t,{u:function(){return n}});var i=r(990);let n=(0,r(7527).ZP)(i.Z)(e=>{let{size:t}=e;return{display:"grid",gridTemplateColumns:"1fr",alignContent:"start",gap:({small:"1rem",medium:"2rem",large:"3rem"})[t??"medium"]}});n.defaultProps={className:"ContentGrid-root"}},2655:function(e,t,r){"use strict";r.d(t,{t:function(){return C}});var i=r(5893),n=r(7527),a=r(3440),o=r(236),s=r(7182),l=r(2424),d=r(8652),c=r(8303),m=r(7844),p=r(1126),u=r(8806),g=r(9029),h=r(4592),x=r(6346),f=r(6829),b=r(230);let y=x.O.filter(e=>"title"!==e.itemType),v=(0,f.Z)(p.T)`
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
`,j=()=>{let e=(0,m.c)();return(0,i.jsxs)(v,{noValidate:!0,method:"post",action:(0,b.C)("send-message/estimate-request"),encType:"multipart/form-data",id:"estimator-form",onReset:e.handleReset,onSubmit:e.handleSubmit,children:[(0,i.jsx)(u.p,{title:(0,i.jsxs)(i.Fragment,{children:["Get a quick"," ",(0,i.jsx)(c.v,{text:!0,color:"magenta",children:"estimate"}),"!"]}),instructions:"Fill out the form below to get your quick estimate, and a step closer to getting your project started!"}),(0,i.jsx)(g.U,{items:y,formState:e}),e.isSubmitted&&(0,h.z)(e.isSuccessful),(0,i.jsxs)(l.k,{children:[(0,i.jsx)(d.z,{color:"secondary",endIcon:e.isSubmitting?(0,i.jsx)(s.Z,{size:"inherit",thickness:6,sx:{color:"white"}}):(0,i.jsx)(a.Z,{}),type:"submit",children:e.isSubmitting?"Sending...":"Get Estimate"}),(0,i.jsx)(d.z,{color:"text",href:"mailto:graphixcollab@gmail.com",endIcon:(0,i.jsx)(o.Z,{}),children:"Not sure? Contact us"})]})]})};var w=r(3912),k=r(1970);let T=(0,n.ZP)(w.g)`
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
`,C=()=>(0,i.jsx)(k.W,{children:(0,i.jsx)(T,{isClipped:!0,isFloating:!0,isRounded:!0,color:"key",className:"EstimatorBlock-root",children:(0,i.jsx)(w.g,{className:"EstimatorBlock-formWrapper",children:(0,i.jsx)(j,{})})})})},1259:function(e,t,r){"use strict";r.d(t,{L:function(){return p}});var i=r(5893),n=r(6829),a=r(6010),o=r(9736),s=r(3376);let l=n.Z.a`
	cursor: pointer;
	position: relative;
	display: grid;
	place-items: start;
	grid-template-columns: 4.75rem 2fr;
	gap: 0.75rem;

	&:hover::before {
		opacity: 0.5;
	}
`,d=n.Z.figure`
	margin: unset;

	position: relative;
	padding: 0.25rem;
	border-radius: 0.5rem;
	overflow: hidden;
	display: flex;
	width: 100%;
	place-items: center;
	place-content: center;
`,c=n.Z.img`
	position: relative;
	width: 100%;
	height: auto;
	object-fit: contain;
`,m=n.Z.div`
	display: grid;
	align-content: start;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	gap: 0.25rem;

	.ActionStack-root {
		margin-top: 0.25rem;
		justify-content: start;
	}
`,p=e=>{let{title:t,description:r,className:n,image:p,...u}=e;return(0,i.jsxs)(l,{className:(0,a.Z)("HorizontalCard-root",n),...u,children:[(0,i.jsx)(d,{children:(0,i.jsx)(c,{...p})}),(0,i.jsxs)(m,{children:[(0,i.jsx)(o.X,{className:"title",level:5,children:t}),(0,i.jsx)(s.x,{color:"primary",children:r})]})]})}},3086:function(e,t,r){"use strict";r.d(t,{G:function(){return f}});var i=r(5893),n=r(7527),a=r(917),o=r(6323),s=r(3912),l=r(1970),d=r(9736),c=r(9718),m=r(8303),p=r(3376);let u=(0,n.ZP)("div")(e=>{let{color:t="magenta"}=e;return(0,a.iv)`
	content: '';
	position: relative;
	z-index: -1;
	background-image: ${(0,o.T)(t,"0.5")};
	display: flex;
	height: 5rem;
	width: 100%;
`}),g=(0,n.ZP)(s.g)(e=>{let{color:t="magenta"}=e;return(0,a.iv)`
	--wrapper-padding-bottom: 6rem;

	@media screen and (min-width: 1123px) {
		--wrapper-padding-bottom: 5rem;
	}

	background-color: var(--color-brand-${t}-lightest);
	border: none !important;

	.Heading-root, .Text-root {
		color: var(--color-brand-tertiary-darker);
	}
`}),h=(0,n.ZP)(l.W)(e=>{let{theme:t}=e;return(0,a.iv)`
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
`}),x=(0,n.ZP)(c.E)(e=>{let{theme:t}=e;return(0,a.iv)`
	width: 100%;
	height: 100%;

	${t.breakpoints.up("md")} {
		position: absolute;
	}
`}),f=e=>{let{title:t,description:r,color:n,ImageProps:a}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g,{color:n,children:(0,i.jsxs)(h,{children:[(0,i.jsxs)("hgroup",{className:"content",children:[(0,i.jsx)(d.X,{hasMargin:!0,level:1,children:(0,i.jsx)(m.v,{brand:!0,children:t})}),(0,i.jsx)(p.x,{children:r})]}),(0,i.jsx)("div",{className:"image",children:a&&(0,i.jsx)(x,{...a,height:"auto",width:"100%",fill:"contain",shape:"auto"})})]})}),(0,i.jsx)(u,{role:"separator",color:n})]})};f.displayName="PageHeaderBlock"},6346:function(e,t,r){"use strict";r.d(t,{O:function(){return c}});var i=r(5893),n=r(3959),a=r(9784);let o=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.map(e=>({label:e,value:(0,a.o)(e)}))},s=o("T-shirt","Hoodie","Sash","Poster","Sticker"),l=o("Embroidery","Print");o("\uD83C\uDF05 Image","\uD83D\uDC64 Name","\uD83C\uDD70 Initials","\uD83D\uDCAC Quote");let d=new Date,c=[{itemType:"title",title:"\uD83D\uDC4B Your Information"},{itemType:"input",inputType:"text",name:"name",placeholder:"John Snow",label:"Full Name",required:!0,span:4},{itemType:"input",inputType:"text",name:"email",placeholder:"johnsnow@gmail.com",label:"Email",required:!0,span:4},{itemType:"title",title:"⚙️ Service Request"},{itemType:"select",name:"service",label:"Service Type",options:l,span:4},{itemType:"select",name:"material",label:"Material Type",options:s,span:4},{itemType:"input",inputType:"number",name:"quantity",defaultValue:10,label:"Quantity",required:!0,min:10,max:9999,span:4},{itemType:"input",inputType:"date",name:"deadline",defaultValue:new Date(Date.now()+2592e6).toISOString().split("T")[0],label:"Deadline",helperText:"By default, we will assume 1 month from now.",required:!0,min:d.toISOString().split("T")[0],span:4},{itemType:"radio",name:"delivery",required:!0,label:"Delivery Method",options:[{value:"pickup",label:"Pick-Up \uD83D\uDCCD",meta:"Pick up your order at our store"},{value:"ship",label:"Ship \uD83D\uDCE6",meta:"We'll ship it to ya!"}],span:3},{itemType:"title",title:"\uD83D\uDCDD Additional Information"},{itemType:"input",inputType:"file",multiple:!0,name:"artwork",label:"Artwork File(s)",displayText:"\uD83C\uDF05 Upload your artwork",accept:".gif,.jpeg,.jpg,.png,.pdf,.svg,.webp",helperText:"Although this step is optional, uploading your artwork helps us come up with a more accurate estimate.",span:8},{itemType:"checkbox",name:"terms",label:"Terms and Conditions",required:!0,options:[{value:"terms",label:(0,i.jsxs)(i.Fragment,{children:["I agree to the"," ",(0,i.jsx)(n.r,{href:"/terms/terms-and-conditions",children:"Terms and Conditions"})," ","and the"," ",(0,i.jsx)(n.r,{href:"/terms/privacy-policy",children:"Privacy Policy"}),"."]})}]}]},1908:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return U},default:function(){return R}});var i=r(5893),n=r(8303),a=r(2655),o=r(7527),s=r(3912),l=r(1970),d=r(7161),c=r(2591),m=r(9591),p=r(4022),u=r(9204),g=r(2424);let h="28px",x=(0,o.ZP)(m.Z)`
	padding: 1rem 1rem;
	border-left: none;
	border-right: none;
	border-bottom: none;
	background-color: transparent;

	&:nth-of-type(1) {
		border-top: none;
	}

	.MuiSvgIcon-root {
		padding: 4px;
		height: ${h};
		width: ${h};

		display: block;
		margin-right: 0.25rem;
		opacity: 0.5;

		transition: all 300ms;
		transform: rotate(0deg);
	}

	.MuiAccordionSummary-root {
		display: flex;
		gap: 2rem;
		padding: 0;
		font-size: ${"18px"};
		line-height: ${h};

		font-weight: normal;
	}

	&.Mui-expanded {
		.MuiSvgIcon-root {
			transform: rotate(45deg);
			opacity: 1;
			color: var(--color-brand-primary-main);
		}
	}

	.MuiAccordionDetails-root {
		padding-left: calc(0.25rem + ${h});
	}
`,f=(0,o.ZP)(p.Z)(e=>{let{theme:t}=e;return{...t.typography.body2}}),b=e=>{let{question:t,answer:r,actions:n}=e;return(0,i.jsxs)(x,{variant:"outlined",children:[(0,i.jsxs)(f,{children:[(0,i.jsx)(c.Z,{}),t]}),(0,i.jsxs)(u.Z,{children:[r,n&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(g.k,{size:"small",actions:n})]})]})]})};var y=r(9736);let v=(0,o.ZP)("div")`
	margin-bottom: 2rem;
	justify-content: center;
	text-align: center;
`,j=e=>{let{title:t,faqs:r}=e;return(0,i.jsx)(l.W,{children:(0,i.jsx)(s.g,{isRounded:!0,color:"grey",children:(0,i.jsxs)(d.u,{children:[(0,i.jsx)(l.W,{size:"small",children:(0,i.jsx)(v,{children:(0,i.jsx)(y.X,{level:2,children:t})})}),(0,i.jsx)(l.W,{size:"small",children:r?.map((e,t)=>i.jsx(b,{...e},t))})]})})})};var w=r(3086),k=r(7040),T=r(990),C=r(917),D=r(8652),N=r(1259),P=r(9718),Z=r(3376);(0,o.ZP)("div")(e=>{let{theme:t}=e;return(0,C.iv)`
		max-width: ${t.breakpoints.values.sm}px;

		.ActionStack-root {
			margin-top: 1.5rem;
		}

		.Heading-root {
			margin-bottom: 0.5rem;
		}
	`});let S=(0,o.ZP)(s.g)`
	padding-block: 3rem !important;
`,$=(0,o.ZP)("div")(e=>{let{theme:t}=e;return(0,C.iv)`
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;

		hgroup {
			display: block;

			h2 {
				max-width: 1200px;
			}
			p {
				max-width: 500px;
			}
		}

		.container {
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
			column-gap: 1rem;
			row-gap: 1rem;
		}

		${t.breakpoints.up("sm")} {
			.services {
				column-gap: 3rem;
				row-gap: 4rem;
				grid-template-columns: repeat(2, 1fr);
			}
		}

		${t.breakpoints.up("lg")} {
			.services {
				grid-template-columns: repeat(3, 1fr);
			}
		}
	`}),F=(0,o.ZP)(P.E)(e=>{let{theme:t,imageTranslate:r="60%"}=e;return(0,C.iv)`
	position: absolute;
	max-width: 35rem;
	bottom: 0;
	right: 0;
	transform: translateY(${r??"60%"});
	aspect-ratio: 1/1;
	padding: 5rem;
	display: none;

	/* background: lightgray; */
	/* border-radius: 50%; */


	${t.breakpoints.up("lg")} {
		display: flex;
	}
`}),I=e=>{let{title:t,description:r,services:a,ImageProps:o,imageTranslate:s="60%"}=e;return(0,i.jsx)(S,{children:(0,i.jsxs)(l.W,{children:[(0,i.jsxs)($,{children:[(0,i.jsxs)("hgroup",{children:[(0,i.jsx)(y.X,{hasMargin:!0,level:2,children:(0,i.jsx)(n.v,{brand:!0,children:t})}),(0,i.jsx)(Z.x,{children:r})]}),(0,i.jsx)("div",{className:"services",children:a?.map((e,t)=>i.jsx(N.L,{title:e.name,description:e.summary,image:e.image,imageColor:e.color},t))}),(0,i.jsxs)(g.k,{color:"secondary",children:[(0,i.jsx)(T.Z,{mr:-1,zIndex:1,children:"Looking for something else?"}),(0,i.jsx)(D.z,{color:"text",href:"/contact",endIcon:(0,i.jsx)(k.Z,{}),children:"Contact Us"})]})]}),o?.src&&(0,i.jsx)(F,{...o,imageTranslate:s})]})})};I.displayName="ServicesBlock";var z=r(6829);let q="1.75rem",E="2rem",W=(0,o.ZP)("div")(e=>{let{theme:t}=e;return`
	height: ${q};
	width: ${q};
	border-radius: 0.5rem 0 0.5rem 0;

	position: absolute;
	top: 1rem;
	left: calc(10rem + ${E} / 2);

	display: flex;
	align-items: center;
	justify-content: center;

	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 0.875rem;
	text-align: center;
	letter-spacing: -0.02em;

	color: #111827;

	left: 0;

	${t.breakpoints.up("md")} {
		left: calc(10rem + ${E} / 2);
	}
`}),_=(0,o.ZP)("div")(e=>{let{theme:t}=e;return`
	z-index: -1;
	box-sizing: border-box;
	position: absolute;
	top: 0;

	height: calc(100%);
	width: 0;

	border-left: dotted 0.25rem #cbd5e1;

	left: calc(${q} / 2);

	${t.breakpoints.up("md")} {
		left: calc(10rem + (${E} + ${q}) / 2);
	}
`}),M=(0,o.ZP)(e=>(0,i.jsxs)("li",{id:e.id,className:e.className,children:[(0,i.jsx)(P.E,{height:"10rem",width:"10rem",src:e.image}),(0,i.jsx)(W,{className:"marker",children:e.stepNumber??1}),(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)("div",{className:"title",children:e.title}),(0,i.jsx)("div",{className:"description",children:e.description}),e.children]}),(0,i.jsx)(_,{className:"connector"})]}))(e=>{let{theme:t}=e;return`
	--image-border-radius: 0.5rem;

	list-style: none;

	position: relative;
	z-index: 0;
	display: grid;
	grid-template-columns: 1fr;
	align-content: start;
	max-width: 40rem;
	margin-inline: auto;

	.Image-root {
		margin-top: 1rem;
		width: 100%;
		background-color: var(--image-background-color);
		border-radius: 1rem;
	}

	.content {
		padding-inline: calc(${q} + 0.5rem) 0;
		padding-block: 1rem 3rem;

		.title {
			font-family: Inter;
			font-size: 1.5rem;
			line-height: ${q};
			font-weight: 700;
			letter-spacing: -0.02em;
			text-align: left;

			margin-bottom: 0.5rem;
		}

		.description {
			font-family: Inter;
			font-size: 1.125rem;
			font-weight: 400;
			line-height: 1.75rem;
			letter-spacing: 0em;
			text-align: left;
		}
	}


	${t.breakpoints.up("md")} {
		grid-template-columns: 10rem 1fr;
		gap: calc(${E} + ${q});

		.content {
			padding-inline: 0;
		}
	}

	&:last-of-type {
		margin-bottom: 0;
	}

	/* sequence */
	&:nth-of-type(1n) {
		.marker {
			background-color: var(--color-brand-cyan-main);
			color: var(--color-brand-cyan-contrast);
		}
	}

	&:nth-of-type(2n) {
		.marker {
			background-color: var(--color-brand-magenta-main);
			color: var(--color-brand-magenta-contrast);
		}
	}

	&:nth-of-type(3n) {
		.marker {
			background-color: var(--color-brand-yellow-main);
			color: var(--color-brand-yellow-contrast);
		}
	}

	&:nth-of-type(4n) {
		.marker {
			background-color: var(--color-brand-key-main);
			color: var(--color-brand-key-contrast);
		}
	}
`}),A=(0,o.ZP)("ol")`
	max-width: 63.75rem;
	margin-inline: auto;
	padding-inline: 0;
`,O=(0,z.Z)(l.W)`
	display: grid;
	gap: 1rem;

	.Heading-root {
		text-align: center;
	}
`,H=[{stepNumber:1,title:"Design",image:"assets/process/screen-printing/design-creation-min@512w.webp",description:"The design phase involves working with you to create custom print materials. We collaborate with you to understand your needs, design layouts, choose colors, and/or finalize the printing specifications."},{stepNumber:2,title:"Procurement",image:"assets/process/screen-printing/prepared-screen-min@512w.webp",description:"We gather all the necessary printing materials and equipment. This includes buying ink, t-shirts, sashes, mugs, and other supplies needed for different print jobs."},{stepNumber:3,title:"Product",image:"assets/process/screen-printing/print-machine-min@512w.webp",description:"Here we actually print the materials. We load the designs, set up the materials, and produce the printed products."},{stepNumber:4,title:"Packing",image:"assets/process/screen-printing/screen-preparation-min@512w.webp",description:"Once the printing is done, we might trim, fold, or bind them based on client requirements. And then, finally package the finished prints, ensuring they are protected during transit or for delivery to clients. It's like preparing the printed materials for safe and attractive presentation to the clients or for shipping to their destinations."}],B=()=>(0,i.jsxs)(s.g,{className:"EventBlock-root",children:[(0,i.jsx)(O,{children:(0,i.jsxs)(y.X,{isCentered:!0,level:2,className:"mb-4",children:["Our Trusted ",(0,i.jsx)(n.v,{color:"magenta",children:"Process"})]})}),(0,i.jsx)(A,{children:H.map(e=>(0,i.jsx)(M,{...e},e.stepNumber))})]});var X=r(1775),G=r(2828),U=!0,R=e=>{let{FooterProps:t,serviceBlocks:r,FaqBlockProps:o}=e;return(0,i.jsxs)(G.H,{FooterProps:t,children:[(0,i.jsx)(X.V,{text:"Services"}),(0,i.jsx)(w.G,{color:"magenta",title:(0,i.jsx)(n.v,{brand:!0,children:"Our Services"}),description:"We offer a wide range of screen printing services to meet your needs. Whether you're looking for custom t-shirts, posters, stickers, or other promotional materials, we have you covered. Here are some of our most popular services. With our state-of-the-art printing technology, experienced team, and commitment to quality, we are your trusted partner for all things printing. Explore our comprehensive range of services below",ImageProps:{src:"assets/juicy-team-discussing-the-project-min@512w.webp",alt:"Team Discussing the Project"}}),r.map((e,t)=>(0,i.jsx)(I,{...e},t)),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(B,{}),(0,i.jsx)(a.t,{}),(0,i.jsx)(j,{...o})]})}}},function(e){e.O(0,[958,307,486,106,783,888,774,179],function(){return e(e.s=7133)}),_N_E=e.O()}]);