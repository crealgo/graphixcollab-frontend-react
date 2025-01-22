"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[438],{2126:function(e,t,r){r.d(t,{Z:function(){return m}});var i=r(5893),n=r(6788),a=r(7527),l=r(917),o=r(6010),s=r(9718),c=r(714);let d=new(r.n(c)()),p=(0,a.ZP)("a")(()=>{let e=`${d.bool()?"":"-"}${d.natural({min:2,max:7})}`;return(0,l.iv)`
		cursor: pointer;
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		grid-template-rows: 7.5rem auto;
		gap: 1rem;
		text-align: center;

		img {
			transition: all 200ms;
			width: 100%;
			max-width: 7rem;
			margin-inline: auto;
		}

		.content {
			display: grid;
			align-content: start;
			grid-template-columns: 1fr;
			gap: 0.5rem;

			.ActionStack {
				justify-content: center;
				margin-top: 0.5rem;
				justify-content: start;
			}
		}

		&:hover {
			img {
				transform: translateY(-5px) rotate(${e}deg);
			}
		}
	`}),m=e=>{let{title:t,subtitle:r,description:a,className:l,image:c,...d}=e;return(0,i.jsxs)(p,{className:(0,o.Z)("Card-root",l),...d,children:[(0,i.jsx)(s.E,{...c,fill:"contain"}),(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)(n.Z,{variant:"caption",children:r}),(0,i.jsx)(n.Z,{variant:"h5",children:t}),(0,i.jsx)(n.Z,{variant:"caption",children:a})]})]})}},7161:function(e,t,r){r.d(t,{u:function(){return n}});var i=r(990);let n=(0,r(7527).ZP)(i.Z)(e=>{let{size:t}=e;return{display:"grid",gridTemplateColumns:"1fr",alignContent:"start",gap:({small:"1rem",medium:"2rem",large:"3rem"})[t??"medium"]}});n.defaultProps={className:"ContentGrid-root"}},3904:function(e,t,r){r.d(t,{H:function(){return A}});var i=r(5893),n=r(6829),a=r(1036),l=r(1730),o=r(6788),s=r(6010),c=r(2424),d=r(3912),p=r(1970),m=r(7161),g=r(9736),u=r(8303),h=r(917),x=r(2e3);let f=(0,n.Z)(e=>{let{className:t,icon:r,children:n,color:a,...l}=e;return(0,i.jsx)(x.X,{type:"button",className:(0,s.Z)("TidBit-root",t),startIcon:r,...l,children:n})})(e=>{let{icon:t,color:r="primary"}=e;return(0,h.iv)`
		--background-color: var(--color-white);

		display: inline-flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 10px 20px 10px ${t?"14px":"20px"};
		gap: 4px;

		font-weight: 600;
		letter-spacing: -0.01rem;

		border-radius: 9999px;
		background-color: var(--background-color);
		border: solid 1px var(--color-brand-key-lighter);
		box-shadow: var(--button-shadow-primary);

		.Button-icon {
			color: var(--color-brand-${r}-main);
		}

		.Button-icon {
			display: inline-flex;
			font-size: 24px;
		}
	`});var v=r(2372),y=r(3140),j=r(423),b=r(7527);let w=(0,b.ZP)(e=>{let{className:t,...r}=e;return(0,i.jsx)(y.Z,{...r,classes:{popper:t}})})`
	--tooltip-line-height: 0.9rem;

	.${j.Z.tooltip} {
		background-color: #ffffff;
		border: 1px solid rgba(0, 0, 0, 0.23);
		color: rgba(0, 0, 0, 0.87);
		box-shadow: var(--elevation-2);
		display: inline-flex;
		place-items: center;
		place-content: center;
		gap: 0.25em;

		.Tooltip-text {
			// light theme
			display: inline-flex;
			vertical-align: middle;
			line-height: auto;
		}
		.Tooltip-icon {
			display: inline-flex;
			font-size: var(--tooltip-line-height);
			line-height: auto;
		}
	}
`,Z=(0,b.ZP)("a")`
	all: unset;

	cursor: pointer;
	box-sizing: border-box;

	display: inline-grid;
	grid-template-columns: 1fr;
	place-content: center;
	place-items: center;

	aspect-ratio: 1 / 1;
	width: 100%;
	max-width: 15rem;
	filter: grayscale(100%);
	opacity: 0.5;
	transition: all 100ms ease-in-out;

	&:hover {
		opacity: 1;
		filter: grayscale(0%);
		transform: translateY(-3px);
	}

	${e=>{let{theme:t}=e;return t.breakpoints.up("sm")}} {
		padding: 1.5rem;
	}
`,k=e=>{let{children:t,title:r,...n}=e,a=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"Tooltip-text",children:r}),n.href&&(0,i.jsx)(v.Z,{className:"Tooltip-icon"})]});return(0,i.jsx)(w,{followCursor:!0,title:a,children:(0,i.jsx)(Z,{...n,children:t})})},N=n.Z.figure`
	display: flex;
	height: inherit;
	width: inherit;
	place-items: center;
	place-content: center;
	margin: 0 0.5rem;
`,z=n.Z.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`,C=e=>(0,i.jsx)(N,{children:(0,i.jsx)(z,{style:e.styleOverrides,src:e.image,alt:e.name})});var S=r(9008),O=r.n(S);let T=(0,b.ZP)("span")(e=>{let{theme:t,font:r,styleOverrides:i,mobileStyleOverrides:n}=e;return{fontSize:"2rem",whiteSpace:"nowrap",fontFamily:r,...i,[t.breakpoints.down("sm")]:{...n}}}),$=e=>{let t=e.font??"Karla";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(O(),{children:[(0,i.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,i.jsx)("link",{crossOrigin:"anonymous",rel:"preconnect",href:"https://fonts.gstatic.com"}),(0,i.jsx)("link",{href:`https://fonts.googleapis.com/css2?family=${t}&display=swap`,rel:"stylesheet"})]}),(0,i.jsx)(T,{font:t,styleOverrides:e.styleOverrides,mobileStyleOverrides:e.mobileStyleOverrides,children:e.name})]})};var P=r(7005);let F=(0,n.Z)(P.Z)`
	:root {
		--marquee-item-gap: 1rem;
	}

	overflow: hidden;
	gap: var(--marquee-item-gap);

	.marquee {
		gap: var(--marquee-item-gap);
	}

	.overlay {
		pointer-events: none;
	}
`;F.defaultProps={direction:"left",speed:10,pauseOnHover:!0};let _=e=>(0,i.jsx)(o.Z,{marginX:"2rem",variant:"h3",color:"grey.500",sx:{cursor:"pointer","&:hover":{color:"grey.700"},...e.styleOverrides},children:e.name}),H=(0,n.Z)(d.g)`
	padding-top: 4rem !important;
	padding-bottom: 4rem !important;

	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;
`,I=(0,n.Z)(p.W)`
	display: grid;
	gap: 1rem;

	.ActionStack-root {
		margin-top: 1rem;
	}
`,X=(e,t)=>{let r={logo:(0,i.jsx)(C,{...e}),type:(0,i.jsx)($,{...e}),default:(0,i.jsx)(_,{...e})}[e.type??"default"];return(0,i.jsx)(k,{href:e.url,title:e.name,children:r},t)},q=(0,n.Z)("div")`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	column-gap: 1rem;
	row-gap: 0;
	place-items: center;
	place-content: center;
`,A=e=>{let{className:t,companies:r,...n}=e,d=(0,l.Z)(e=>e.breakpoints.down("sm")),p=F,h={gradient:!0};return d&&(p=q,h={}),(0,i.jsxs)(H,{isClipped:!0,className:(0,s.Z)(t,"FeaturedInBlock-root"),children:[(0,i.jsx)(I,{children:(0,i.jsxs)(m.u,{size:"small",textAlign:"center",marginX:"auto",maxWidth:"50rem",children:[(0,i.jsxs)(g.X,{level:4,children:["We work with ",(0,i.jsx)(u.v,{children:"creatives"})," like you."]}),n.description?(0,i.jsx)(o.Z,{variant:"body2",children:n.description}):null]})}),r?.length&&(0,i.jsx)(p,{...h,children:r.map(X)}),(0,i.jsx)(I,{children:(0,i.jsx)(c.k,{align:"center",size:"large",actions:[{label:"Leave a Review",color:"text",endIcon:(0,i.jsx)(a.Z,{}),href:"https://www.yelp.com/writeareview/biz/-e4TSbHSikunICO8i8wr4Q?return_url=%2Fbiz%2F-e4TSbHSikunICO8i8wr4Q&review_origin=biz-details-war-button"}],children:(0,i.jsxs)(f,{href:"https://www.yelp.com/biz/graphix-collab-los-angeles",color:"magenta",icon:(0,i.jsx)("i",{className:"bx bxl-yelp"}),children:["Trusted  on ",(0,i.jsx)(u.v,{color:"magenta",children:"Yelp"})]})})})]})}},1259:function(e,t,r){r.d(t,{L:function(){return m}});var i=r(5893),n=r(6829),a=r(6010),l=r(9736),o=r(3376);let s=n.Z.a`
	cursor: pointer;
	position: relative;
	display: grid;
	place-items: start;
	grid-template-columns: 4.75rem 2fr;
	gap: 0.75rem;

	&:hover::before {
		opacity: 0.5;
	}
`,c=n.Z.figure`
	margin: unset;

	position: relative;
	padding: 0.25rem;
	border-radius: 0.5rem;
	overflow: hidden;
	display: flex;
	width: 100%;
	place-items: center;
	place-content: center;
`,d=n.Z.img`
	position: relative;
	width: 100%;
	height: auto;
	object-fit: contain;
`,p=n.Z.div`
	display: grid;
	align-content: start;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	gap: 0.25rem;

	.ActionStack-root {
		margin-top: 0.25rem;
		justify-content: start;
	}
`,m=e=>{let{title:t,description:r,className:n,image:m,...g}=e;return(0,i.jsxs)(s,{className:(0,a.Z)("HorizontalCard-root",n),...g,children:[(0,i.jsx)(c,{children:(0,i.jsx)(d,{...m})}),(0,i.jsxs)(p,{children:[(0,i.jsx)(l.X,{className:"title",level:5,children:t}),(0,i.jsx)(o.x,{color:"primary",children:r})]})]})}}}]);