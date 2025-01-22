"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{2424:function(e,t,r){r.d(t,{k:function(){return d}});var i=r(5893),n=r(7527),a=r(917),o=r(6010),s=r(8652);let l=(0,n.ZP)("div")(e=>{let{theme:t,align:r}=e;return(0,a.iv)`
	display: grid;
	grid-template-columns: 1fr;
	gap: 0.5rem;
	align-items: center;

	&.is-center {
		justify-content: center;
	}

	&.is-end {
		justify-content: end;
	}

	&.is-start {
		justify-content: start;
	}

	${t.breakpoints.up("sm")} {
		display: flex;
		flex-wrap: nowrap;
	}
`}),d=e=>{let{actions:t,max:r=2,className:n="",children:a,align:d="start",size:c="medium",color:h="tertiary"}=e;return(0,i.jsxs)(l,{className:(0,o.Z)(n,"ActionStack-root",`is-${d}`),children:[a,t?.slice(0,r).map((e,t)=>{let{label:r,...n}=e;return i.jsx(s.z,{size:c,color:h,...n,children:r},t)})]})}},3912:function(e,t,r){r.d(t,{g:function(){return d}});var i=r(5893),n=r(7527),a=r(8794),o=r(6010),s=r(1177);let l=(0,n.ZP)("div",(0,s._e)("hasNoDefaultMargin","color","isRounded","isClipped","isFloating","hasNoHorizontalPadding"))(e=>{let{theme:t,color:r,hasNoDefaultMargin:i,hasNoHorizontalPadding:n,isClipped:o,isRounded:s=!1,isFloating:l}=e,d=r??"default",c="default"===d?"transparent":`var(--color-brand-${d}-lighter)`;return(0,a.iv)`
		--section-padding-block: var(--section-mobile-padding-block);
		--section-padding-inline: var(--section-mobile-padding-inline);
		--section-margin-inline: 0rem;
		--section-border-radius: none;

		${t.breakpoints.up("md")} {
			--section-padding-block: var(--section-tablet-padding-block);
			--section-padding-inline: ${n?"unset":"var(--section-tablet-padding-inline)"};
			--section-margin-inline: var(--section-tablet-margin-inline);
			--section-border-radius: 0.5rem;
		}

		${t.breakpoints.up("xl")} {
			--section-padding-block: var(--section-desktop-padding-block);
			--section-padding-inline: ${n?"unset":"var(--section-tablet-padding-inline)"};
		}

		background-color: transparent;
		border-top: solid 1px ${c};
		border-right: unset;
		border-bottom: solid 1px ${c};
		border-left: unset;
		position: relative;

		padding-block: var(--section-padding-block);
		padding-inline: var(--section-padding-inline);
		margin-inline: ${i?"unset":"var(--section-margin-inline)"};
		border-radius: ${s?"var(--section-border-radius)":"none"};

		overflow: ${o?"hidden":"unset"};

		${t.breakpoints.up("md")} {
			border-top: solid 1px ${c};
			border-right: solid 1px ${c};
			border-bottom: solid 1px ${c};
			border-left: solid 1px ${c};
			box-shadow: ${l?"var(--elevation-4)":"none"};
		}

		${t.breakpoints.up("xl")} {
			border-radius: ${s?"var(--section-border-radius)":"none"};
		}
	`}),d=e=>{let{className:t,children:r,...n}=e;return(0,i.jsx)(l,{...n,className:(0,o.Z)("Block-root",t),children:r})}},8076:function(e,t,r){r.d(t,{o:function(){return o}});var i=r(5893),n=r(6829);let a=n.Z.span`
	position: absolute;
	display: flex;
	flex-direction: row;
	gap: 0.06em;
	left: 0.07em;
	bottom: -0.09em;

	div {
		width: 0.25em;
		height: 0.25em;
		border-radius: 50%;

		&:nth-of-type(1) {
			background: var(--color-brand-cyan-main);
		}

		&:nth-of-type(2) {
			background: var(--color-brand-magenta-main);
		}

		&:nth-of-type(3) {
			background: var(--color-brand-yellow-main);
		}

		&:nth-of-type(4) {
			background: var(--color-brand-key-main);
		}
	}
`,o=()=>(0,i.jsxs)(a,{children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]})},1970:function(e,t,r){r.d(t,{W:function(){return l}});var i=r(5893),n=r(7527),a=r(8794),o=r(1177),s=r(6010);let l=(0,n.ZP)(e=>{let{className:t="",children:r,ref:n,...a}=e;return(0,i.jsx)("div",{ref:n,className:(0,s.Z)("Container-root",t),...a,children:r})},(0,o._e)("ref","size"))(e=>{let{theme:t,size:r="medium"}=e,i={small:`${t.breakpoints.values.md}`,medium:`${t.breakpoints.values.lg}`,large:`${t.breakpoints.values.xl}`}[r??"medium"];return(0,a.iv)`
		width: 100%;
		margin-inline: auto;
		max-width: ${i}px;
	`})},2828:function(e,t,r){r.d(t,{H:function(){return eU}});var i=r(5893),n=r(1192),a=r(8157),o=r(7527),s=r(1163),l=r(7294);let d=()=>{let e=(0,s.useRouter)(),t={Home:"/",Services:"/services","About Us":"/about",Estimate:"/estimate"};return Object.keys(t).map(r=>({label:r,href:`${e.basePath}${t[r]}`,selected:e.pathname===t[r]}))};var c=()=>{let[e,t]=(0,l.useState)(0);return(0,l.useEffect)(()=>{let e=()=>{t(window.pageYOffset)};return window.addEventListener("scroll",e),e(),()=>{window.removeEventListener("scroll",e)}},[]),e},h=r(2424),p=r(8444),m=r(9736),u=r(3153),g=r(1177);let f=(0,o.ZP)(u.Z,(0,g._e)("endIcon","startIcon","size"))`
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;

	border-radius: 0.25rem;
	height: 2.5rem;
	aspect-ratio: 1;
`,x=(0,l.forwardRef)((e,t)=>{let{children:r,Icon:n,...a}=e;return(0,i.jsx)(f,{...a,ref:t,role:"button",children:r||(n?(0,i.jsx)(n,{}):null)})});x.displayName="IconButtonBase";let v=(0,o.ZP)(x)`
	border-radius: 9999px;
	background-color: var(--color-brand-key-lightest);
	height: 2rem;

	&:hover {
		background-color: var(--color-brand-key-lighter);
	}
`,b=(0,o.ZP)("div")(e=>{let{hasBorder:t}=e;return`
	padding: ${I};

	display: grid;
	grid-template-columns: 1fr auto;
	gap: 1rem;
	align-items: center;
	flex: none;

	${t?"border-bottom: solid 1px var(--color-brand-key-lighter);":""}
`}),y=(0,o.ZP)("div")(e=>{let{theme:t}=e;return`
	width: 100vw;
	height: 100%;
	display: flex;
	flex-direction: column;

	${t.breakpoints.up("sm")} {
		max-width: 25rem;
	}
`});var j=r(6829);let w=j.Z.ul`
	font-size: 2.5rem;

	list-style: none;
	display: grid;
	grid-template-columns: 1fr;
	place-items: start;
	place-content: start;
	gap: 1.25rem;

	margin: unset;
	padding: 2rem 1rem;
	flex: 1;
	border-top: solid 1px var(--color-brand-key-lighter);

	background-color: var(--color-brand-key-lightest);

	&:nth-last-of-type(1) {
		background-color: var(--color-white);
		flex: none;
		font-size: 2rem;
	}
`,k=j.Z.li`
	display: block;
`,$=j.Z.a`
	display: flex;
	font-size: inherit;
	font-weight: 700;
	line-height: 1;

	opacity: 0.5;
	text-decoration: unset;
	color: var(--color-brand-key-main);

	&[aria-current='page'] {
		opacity: 1;
		text-decoration: underline;
		text-underline-offset: 0.125em;

		&:nth-of-type(1) {
			text-decoration-color: var(--color-brand-cyan-main);
		}
		&:nth-of-type(2) {
			text-decoration-color: var(--color-brand-magenta-main);
		}
		&:nth-of-type(3) {
			text-decoration-color: var(--color-brand-yellow-main);
		}
	}
`,Z=e=>{let{navigationItems:t,actions:r,onCloseButtonClick:n}=e,a=(0,s.useRouter)();return console.log({actions:r}),(0,i.jsxs)(y,{children:[(0,i.jsxs)(b,{children:[(0,i.jsx)(m.X,{level:4,children:"Menu"}),(0,i.jsx)(v,{onClick:n,children:(0,i.jsx)(p.Z,{fontSize:"small"})})]}),(0,i.jsx)(w,{children:t?.map((e,t)=>{let{label:r,href:n}=e;return i.jsx(k,{children:i.jsx($,{href:n,"aria-current":a.pathname===n?"page":"false",children:r})},t)})}),(0,i.jsx)(w,{children:r?.map((e,t)=>i.jsx(k,{children:i.jsx($,{href:e.href,children:e.label})},t))})]})},z=(0,o.ZP)(x)`
	grid-area: mobile-menu;

	&:hover {
		background-color: var(--color-brand-key-lighter);
	}
`;var C=r(899),P=r(5416),N=r(7958);let I="1rem",S=e=>{let{items:t,actions:r,open:n}=e,[a,o]=(0,P.Z)({controlled:n,default:!1,name:"DrawerMenu Open State"}),s=()=>{o(!1)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(z,{size:"small",className:"MenuTrigger-root",onClick:()=>{o(!0)},children:a?(0,i.jsx)(p.Z,{}):(0,i.jsx)(C.Z,{})}),(0,i.jsx)(N.ZP,{anchor:"left",open:a,onClose:s,children:(0,i.jsx)(Z,{navigationItems:t,actions:r,onCloseButtonClick:s})})]})},A=j.Z.div`
	flex-grow: 1;
`,_=()=>(0,i.jsx)(A,{});var T=r(8177);let D="text",q="large",L=(0,o.ZP)("a")`
	text-decoration: unset;
	cursor: pointer;

	display: var(--input-display);
	align-items: var(--input-align-items);

	font-weight: var(--button-font-weight);
	font-size: var(--input-font-size-${q});
	letter-spacing: var(--button-letter-spacing);

	background-color: var(--button-background-color-${D});
	box-shadow: var(--button-shadow-${D});
	color: var(--button-text-color-${D});
	border: var(--button-border-${D});
	border-radius: var(--button-bezel-${q});

	padding-inline: var(--input-spacing-padding-inline-${q});
	line-height: var(--input-height-${q});
	height: var(--input-height-${q});
	white-space: nowrap;

	& svg {
		height: var(--input-group-action-size-${q});
		width: var(--input-group-action-size-${q});
	}

	&:hover,
	&[aria-current='true'] {
		text-decoration: var(--button-text-decoration-${D});
		text-underline-offset: var(--button-text-offset-${D});
		text-decoration-thickness: var(--button-text-thickness-${D});

		&:nth-of-type(1n) {
			text-decoration-color: var(--sequence-color-0-main);
		}
		&:nth-of-type(2n) {
			text-decoration-color: var(--sequence-color-1-main);
		}
		&:nth-of-type(3n) {
			text-decoration-color: var(--sequence-color-2-main);
		}
		&:nth-of-type(4n) {
			text-decoration-color: var(--sequence-color-3-main);
		}
	}
`,M=e=>{let{label:t,children:r,selected:n,icon:a,hasSubmenu:o,...s}=e;return(0,i.jsxs)(L,{"aria-current":n,...s,children:[a,r??t,o&&(0,i.jsx)(T.Z,{})]})};var F=r(1423),B=r(6385),E=r(1529);let H=e=>{let{FlyoutComponent:t,children:r,items:n}=e,[a,o]=(0,l.useState)(void 0),s=!!a,d=()=>{o(void 0)},c={open:s,anchorEl:a,onClose:d,anchorOrigin:{vertical:"bottom",horizontal:"left"},disableScrollLock:!0,disablePortal:!0,transitionDuration:200};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(M,{hasSubmenu:!0,selected:s,"aria-controls":s?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":s?"true":void 0,onClick:e=>{o(e.currentTarget)},children:r}),t?(0,i.jsx)(F.ZP,{...c,children:(0,i.jsx)(t,{})}):(0,i.jsx)(B.Z,{...c,MenuListProps:{"aria-labelledby":"basic-button",sx:{minWidth:"10rem"}},children:n?.map((e,t)=>i.jsx(E.Z,{onClick:()=>{d()},children:e.label},t))})]})};var W=r(917);let G=(0,o.ZP)("nav")(e=>{let{theme:t}=e;return(0,W.iv)`
		gap: 0;
		display: none;

		${t.breakpoints.up("md")} {
			display: flex;
		}
	`}),R=e=>{let{items:t,children:r}=e;return(0,i.jsxs)(G,{className:"NavItems-root",children:[t?.map((e,t)=>{let{label:r,subItems:n,...a}=e;return n?i.jsx(H,{items:n,...a,children:r},t):i.jsx(M,{...a,children:r},t)}),r]})};var O=r(1970);let U=(0,o.ZP)("header",(0,g._e)("isBranded","isScrolled"))(e=>{let{theme:t,isScrolled:r}=e;return(0,W.iv)`
		position: sticky;
		top: 0;
		transition: all 300ms;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		background-color: ${r?"white":"transparent"};
		border-bottom-color: ${r?"var(--color-brand-key-lightest)":"transparent"};
		z-index: 999;

		display: flex;
		align-items: center;
		padding-block: 0.5rem;
		padding-inline: var(--section-mobile-padding-inline) 0.5rem;
		height: var(--header-bar-height-mobile);

		${t.breakpoints.up("md")} {
			padding-inline: var(--section-tablet-padding-inline);
			height: var(--header-bar-height-desktop);
		}

		${t.breakpoints.up("xl")} {
			padding-inline: var(--section-widescreen-padding-inline);
		}
	`}),Y=e=>{let{children:t,...r}=e;return(0,i.jsx)(U,{...r,children:(0,i.jsx)(O.W,{children:t})})},Q=(0,o.ZP)("div")(e=>{let{theme:t}=e;return(0,W.iv)`
		display: flex;
		align-items: center;
		gap: 1rem;

		font-size: 1rem;

		.NavItems-root {
			display: none;
		}

		.ActionStack-root {
			display: none;
		}

		.MenuTrigger-root {
			display: inline-flex;
		}

		${t.breakpoints.up("sm")} {
			border-bottom-color: transparent;

			.ActionStack-root {
				display: flex;
			}
		}

		${t.breakpoints.up("md")} {
			.NavItems-root {
				display: flex;
			}

			.MenuTrigger-root {
				display: none;
			}
		}

		font-size: 1.25rem;
	`});var X=r(6538);let J=e=>{let{actions:t,className:r}=e,n=d(),a=c(),o=(0,l.useMemo)(()=>a>4,[a]);return(0,i.jsx)(Y,{className:r,isScrolled:o,children:(0,i.jsxs)(Q,{children:[(0,i.jsx)(X.Z,{}),(0,i.jsx)(R,{items:n}),(0,i.jsx)(_,{}),(0,i.jsx)(h.k,{actions:t}),(0,i.jsx)(S,{items:n,actions:t})]})})};var K=r(3378),V=r(4982),ee=r(9399),et=r(8099),er=r(4169),ei=r(2857),en=r(6788),ea=r(3912),eo=r(3959),es=r(3376);let el=j.Z.div`
	border-radius: var(--shape-rounding-medium);
	border: var(--input-border-composite);
	overflow: hidden;
	aspect-ratio: 1.5/1;

	iframe {
		border: none;
	}
`,ed=()=>(0,i.jsx)(el,{children:(0,i.jsx)("iframe",{title:"google-embed",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.641513742608!2d-118.27887552413037!3d34.027411719040686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7e78971cf9b%3A0xd7054efddbfffefe!2sGRAPHIX%20COLLAB!5e0!3m2!1sen!2sus!4v1737502238977!5m2!1sen!2sus",width:"100%",height:"100%",sandbox:"allow-scripts allow-popups",referrerPolicy:"no-referrer-when-downgrade"})}),ec="\uD83D\uDCAC Get a Quote",eh="Need a quote for your printing project? Contact us today to request a quote. We offer competitive pricing and personalized solutions to meet your printing needs.",ep="✉️ Contact Us",em="We're here to help! If you have any questions or inquiries about our printing services, feel free to get in touch with us. You can contact us through the following channels:",eu=[{label:"Phone",displayName:"(323) 379-3436",href:"tel:323-379-3436"},{label:"Email",displayName:"letscollab@graphixcollab.us",href:"mailto:letscollab@graphixcollab.us"},{label:"Address",displayName:"2626 S Figueroa St A, Los Angeles, CA 90007",href:"https://goo.gl/maps/g3bKdJBYSRZvvmpaA"}],eg=["\xa9Copyright 2015-2020, GraphixCollab, USC.","Made with ❤️ by Crealgo, LLC. All rights reserved."],ef=(0,o.ZP)("footer")`
	margin-top: 4rem;
`,ex=(0,o.ZP)("div")`
	display: grid;
	grid-template-columns: 1fr;
	align-content: start;
	gap: 3rem;
`,ev=(0,o.ZP)("div")(e=>{let{theme:t}=e;return(0,W.iv)`
	display: grid;
	row-gap: 3rem;
	column-gap: 1.5rem;
	grid-template-columns: 1fr;

	${t.breakpoints.up("md")} {
		grid-template-columns: 1fr 1.5fr;
	}
`}),eb=(0,o.ZP)(ea.g)(e=>{let{theme:t}=e;return(0,W.iv)`
	background-color: var(--color-brand-key-lightest);
	padding-block: 2rem !important;

	.Container-root {
		display: grid;
		gap: 0.5rem;
		grid-template-columns: 1fr;
		align-items: center;

		.leftContent {
			display: grid;
			grid-template-columns: 1fr;
			gap: 0.25rem;
			justify-items: center;
		}

		${t.breakpoints.up("md")} {
			grid-template-columns: minmax(auto, 1fr) auto;
			flex-direction: row;
			gap: 1.5rem;
		}
	}
`}),ey=()=>(0,i.jsxs)(er.Z,{gap:"0.25rem",direction:"row",children:[(0,i.jsx)(ei.Z,{size:"small",children:(0,i.jsx)(V.Z,{fontSize:"small"})}),(0,i.jsx)(ei.Z,{size:"small",children:(0,i.jsx)(et.Z,{fontSize:"small"})}),(0,i.jsx)(ei.Z,{size:"small",children:(0,i.jsx)(ee.Z,{fontSize:"small"})})]}),ej=(0,o.ZP)("div")`
	display: grid;
	grid-template-columns: 1fr;
	align-content: start;
	gap: 0.25rem;
`,ew=(0,o.ZP)("ul")`
	display: grid;
	padding-block: 0.75rem;
	gap: 0.75rem;
	padding: unset;
	list-style: none;

	& *:first-of-type {
		font-weight: bold;
	}
`,ek=(0,o.ZP)(ea.g)`
	background-color: var(--color-gray-100);
`,e$=()=>(0,i.jsxs)(ef,{children:[(0,i.jsx)(ek,{hasNoDefaultMargin:!0,color:"grey",children:(0,i.jsx)(O.W,{children:(0,i.jsxs)(ev,{children:[(0,i.jsxs)(ex,{children:[(0,i.jsxs)(ej,{children:[(0,i.jsx)(en.Z,{gutterBottom:!0,variant:"h3",children:(0,i.jsx)(X.Z,{})}),(0,i.jsx)(es.x,{size:"medium",children:"As a leading printing-service company, we are dedicated to providing high-quality printing solutions to our clients. With a team of experienced professionals and state-of-the-art printing equipment, we deliver exceptional results that meet and exceed our clients' expectations."})]}),(0,i.jsxs)(ej,{children:[(0,i.jsx)(en.Z,{variant:"h5",children:ec}),(0,i.jsx)(es.x,{size:"medium",children:eh}),(0,i.jsx)("br",{}),(0,i.jsx)(h.k,{actions:[{label:"Get a Quote",href:"/estimate",endIcon:(0,i.jsx)(K.Z,{})}]})]}),(0,i.jsxs)(ej,{children:[(0,i.jsx)(en.Z,{variant:"h5",children:"\uD83D\uDD17 Quick Links"}),(0,i.jsxs)(ew,{children:[(0,i.jsx)("li",{children:(0,i.jsx)(eo.r,{href:"/contact-us",children:"Contact Us"})}),(0,i.jsx)("li",{children:(0,i.jsx)(eo.r,{href:"/estimate",children:"Get an Estimate"})}),(0,i.jsx)("li",{children:(0,i.jsx)(eo.r,{href:"/terms/privacy-policy",children:"Privacy Policy"})}),(0,i.jsx)("li",{children:(0,i.jsx)(eo.r,{href:"/terms/terms-and-conditions",children:"Terms and Conditions"})})]})]})]}),(0,i.jsxs)(ex,{children:[(0,i.jsxs)(ej,{children:[(0,i.jsx)(en.Z,{gutterBottom:!0,variant:"h5",children:"\uD83D\uDCCD Stop by our office"}),(0,i.jsx)(ed,{})]}),(0,i.jsxs)(ej,{children:[(0,i.jsx)(en.Z,{gutterBottom:!0,variant:"h5",children:ep}),(0,i.jsx)(es.x,{size:"medium",children:em}),(0,i.jsx)(ew,{children:eu.map((e,t)=>(0,i.jsxs)("li",{children:[(0,i.jsx)(es.x,{children:e.label}),(0,i.jsx)(eo.r,{href:e.href,children:e.displayName})]},t))})]})]})]})})}),(0,i.jsx)(eb,{hasNoDefaultMargin:!0,children:(0,i.jsxs)(O.W,{children:[(0,i.jsx)("div",{className:"leftContent",children:eg.map((e,t)=>(0,i.jsx)(en.Z,{variant:"caption",children:e},t))}),(0,i.jsx)("div",{className:"rightContent",children:(0,i.jsx)(ey,{})})]})})]});var eZ=r(6978),ez=r(1036),eC=JSON.parse('[{"id":"990fe7e0-46b6-41c6-86ff-034f4b32002a","name":"S. D.","image":"https://s3-media0.fl.yelpcdn.com/photo/mYaOnYz_tDWhAK0NFJFMww/60s.jpg","text":"James, Daisy, and Brian\'s customer service is top-tier! The craftsmanship is evident in the work they did for several stoles that I ordered for my students over the last few weeks. Their stitch work is of the highest quality, and their stoles\' quality is very good. I became a repeat customer very quickly!"},{"id":"dfdda05c-f8d4-4838-a4f6-887ce8beb3ae","name":"Anil P.","image":"https://s3-media0.fl.yelpcdn.com/assets/public/default_user_avatar_64x64_v2.yji-19e0a8ff85b15f4bbd79.png","text":"They were extremely fast at making my sash so close to graduation! Thank you so much mark"},{"id":"bf5163d0-812a-41d7-81b7-a4aa2de2df02","name":"Arianna D.","image":"https://s3-media0.fl.yelpcdn.com/assets/public/default_user_avatar_64x64_v2.yji-19e0a8ff85b15f4bbd79.png","text":"Mark and his team did an amazing job with my grad sash! For all USC grads, please use them for your grad sash and save a little $$$."},{"id":"96038803-3929-4fff-91b9-079eec3c2db8","name":"Michael P.","image":"https://s3-media0.fl.yelpcdn.com/photo/wH7-Tx14h0SVdIprAuThvg/60s.jpg","text":"FANTASTIC spot for my custom work!I love how I can quickly get small runs of shirts for prototyping done on their DTG (direct to garment) printers.Lately I\'ve been embroidering a new line of hats with them, and I like how the embroidery machines are in-house.  Mark gave me a super reasonable price for my Spring 2017 hats, and David was super fast with the design work."},{"id":"cc8690e6-32ca-4c21-a6b6-a3093890a33c","name":"Andrea R.","image":"https://s3-media0.fl.yelpcdn.com/photo/NTbemyTV6dbHzLPHXsHaFw/60s.jpg","text":"I walked in & spoke with Allison at the front desk. She was very helpful & answered all my questions. I\'ve been searching for a place to get a digital print T-shirt prototype. I think I found my place. For anyone who has their own custom designs, be sure to use 300 dpi (14\\" width & 16\\" length). This place carries \\"Cotton Heritage\\" brand crew-neck t-shirts for $6.95 each & \\"Next Level\\" brand v-neck shirts for $9.95 each. Digital print on the front of a shirt is $15, and $7.50 on the back."},{"id":"7037f16a-73f1-4856-8b4c-0b00d40a7629","name":"Zohar M.","image":"https://s3-media0.fl.yelpcdn.com/assets/public/default_user_avatar_64x64_v2.yji-19e0a8ff85b15f4bbd79.png","text":"Amazingly fast and stylish custom work! I\'ve been wearing these soft t-shirts every few days since received. Huge thanks to Khem at Graphix for excellent service and a happy outcome!"}]'),eP=r(7451),eN=r(9382);let eI=j.Z.div`
	overflow: hidden;
`,eS=j.Z.div`
	display: flex;
	height: 100%;
`,eA=j.Z.div`
	flex: 0 0 100%;
	min-width: 0;
`;var e_=r(8303);let eT=j.Z.article`
	padding: var(--testimonial-container-padding);
	background-color: var(--testimonial-container-background-color);
	border-radius: var(--testimonial-container-border-radius);
	max-width: var(--testimonial-container-max-width);
	box-shadow: var(--testimonial-container-shadow);
	border: var(--input-border-composite);

	display: grid;
	grid-template-rows: 1fr;
	gap: 1rem;
`,eD=j.Z.q`
	text-overflow: ellipsis;
	overflow: hidden;

	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	white-space: normal;

	font-size: 18px;
	line-height: 1.5;
`,eq=j.Z.div`
	display: grid;
	grid-template-rows: 1fr;
	gap: 0.25rem;
`,eL=j.Z.div`
	display: grid;
	grid-template-columns: 3.5rem 1fr;
	column-gap: 1rem;
	align-items: center;

	.image {
		width: 100%;
		aspect-ratio: 1/1;
		height: var(--testimonial-image-height);
		border-radius: var(--shape-rounding-large);
	}
`,eM=e=>(0,i.jsxs)(eT,{children:[(0,i.jsx)(eD,{children:e.text}),(0,i.jsxs)(eL,{children:[(0,i.jsx)("img",{className:"image",src:e.image??"",alt:`${e.name} Profile Picture`}),(0,i.jsxs)(eq,{children:[(0,i.jsx)("strong",{children:e.name}),(0,i.jsx)("img",{src:"assets/yelp/yelp-star-5-min@200w.webp",width:"90px",alt:""})]})]})]});var eF=r(6323);let eB=(0,o.ZP)("div")`
	display: grid;
	align-content: center;
	justify-items: center;
	gap: 2rem;

	.Heading-root {
		text-align: center;
	}
`,eE=(0,o.ZP)(ea.g)`
	position: relative;
	z-index: 1;
	overflow: hidden;

	display: grid;
	align-content: center;
	justify-items: center;

	gap: 4rem;

	padding-block: 3rem !important;
	background-image: ${(0,eF.T)("yellow")};
`,eH=(0,o.ZP)(e=>{let{onSlideChange:t,className:r,children:n}=e,[a,o]=(0,eN.Z)({loop:!0,containScroll:"keepSnaps"},[(0,eP.Z)()]);return(0,l.useEffect)(()=>{o?.on("slidesChanged",()=>{t?.()})},[o,t]),(0,i.jsx)(eI,{ref:a,className:r,children:(0,i.jsx)(eS,{children:n})})})`
	max-width: 40rem;
	width: 100%;
`,eW=(0,o.ZP)(eA)`
	padding-inline: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
`,eG=(0,o.ZP)(h.k)`
	& > * {
		justify-content: center;
	}
`,eR=()=>(0,i.jsx)(O.W,{children:(0,i.jsxs)(eE,{isClipped:!0,isFloating:!0,isRounded:!0,color:"grey",children:[(0,i.jsxs)(eB,{children:[(0,i.jsxs)(m.X,{isCentered:!0,level:2,children:["We've helped ",(0,i.jsx)(e_.v,{color:"magenta",children:"161"})," happy customers!"]}),(0,i.jsx)(eH,{children:eC.slice(0,10).map(e=>(0,i.jsx)(eW,{children:(0,i.jsx)(eM,{...e})},e.id))})]}),(0,i.jsx)(eG,{actions:[{label:"Read more reviews",href:"https://www.yelp.com/biz/graphix-collab-los-angeles",size:"large",color:"secondary",endIcon:(0,i.jsx)(eZ.Z,{})},{label:"Leave a review",href:"https://www.yelp.com/writeareview/biz/jwwmdpxLoyxhqT2NrQ36eA?return_url=%2Fbiz%2FjwwmdpxLoyxhqT2NrQ36eA&review_origin=biz-details-war-button",size:"large",color:"text",endIcon:(0,i.jsx)(ez.Z,{})}]})]})}),eO=(0,o.ZP)("main")`
	display: grid;
	grid-template-columns: minmax(0, 1fr);
	margin-top: calc(-1 * var(--header-bar-height-mobile));

	${e=>{let{theme:t}=e;return t.breakpoints.up("md")}} {
		margin-top: calc(-1 * var(--header-bar-height-desktop));
	}
`,eU=e=>{let{children:t,...r}=e,o=(0,s.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(J,{actions:[{color:"text",href:`${o.basePath}/contact-us`,label:"Contact Us",endIcon:(0,i.jsx)(a.Z,{})},{color:"primary",href:`${o.basePath}/book-appointment`,label:"Book a time",endIcon:(0,i.jsx)(n.Z,{})}]}),(0,i.jsxs)(eO,{id:"main-content",children:[t,r.showYelp&&(0,i.jsx)(eR,{})]}),(0,i.jsx)(e$,{})]})}},9736:function(e,t,r){r.d(t,{X:function(){return l}});var i=r(5893),n=r(917),a=r(6829),o=r(6010);let s=a.Z.span(e=>(0,n.iv)`
	--type-heading-font-size: var(--type-heading-font-size-small-${e.level});

	@media screen and (min-width: 425px) {
		--type-heading-font-size: var(--type-heading-font-size-medium-${e.level});
	}

	@media screen and (min-width: 768px) {
		--type-heading-font-size: var(--type-heading-font-size-large-${e.level});
	}

	margin: unset;
	font-family: var(--type-heading-font-family);
	font-weight: var(--type-heading-font-weight);
	line-height: var(--type-heading-font-leading);
	color: var(--color-text-primary);
	font-size: var(--type-heading-font-size);

	&.is-centered {
		text-align: center;
	}

	&.is-contrast {
		color: var(--color-text-contrast);
	}

	&.is-spaced {
		margin-block: var(--type-heading-font-margin-top) var(--type-heading-font-margin-bottom);
	}

	/* &.is-level-1 { */
	/* } */
`),l=e=>{let t=e.level??6,r=`h${t}`;return(0,i.jsx)(s,{as:r,level:t,className:(0,o.Z)(e.className,`is-level-${t}`,{"is-spaced":e.hasMargin,"is-centered":e.isCentered,"is-contrast":e.isContrast}),children:e.children})}},9718:function(e,t,r){r.d(t,{E:function(){return l}});var i=r(5893),n=r(7527),a=r(917),o=r(6010),s=r(1177);let l=(0,n.ZP)(e=>{let{className:t,onLoad:r,onError:n,caption:a,...s}=e;return(0,i.jsxs)("figure",{className:(0,o.Z)("Image-root",t),children:[(0,i.jsx)("img",{className:"Image-element",onLoad:e=>{console.log("loaded"),r?.(e)},onError:e=>{console.log("loaded"),n?.(e)},...s}),a&&(0,i.jsx)("figcaption",{className:"Image-caption",children:a})]})},(0,s._e)("imageTranslate"))(e=>{let{shape:t="auto",fill:r="cover",height:i,width:n}=e;return(0,a.iv)`
		margin: unset;
		padding: unset;
		border: unset;
		outline: unset;

		height: ${i??"auto"};
		width: ${n??"100%"};

		.Image-element {
			outline: unset;
			height: 100%;
			width: 100%;

			display: flex;
			object-fit: ${r??"cover"};
			border-radius: 0.25rem;
			aspect-ratio: ${({square:"1 / 1",portrait:"3 / 4",landscape:"4 / 3",auto:"auto"})[t??"square"]};
		}
	`})},3959:function(e,t,r){r.d(t,{r:function(){return o}});var i=r(6829),n=r(1664),a=r.n(n);let o=(0,i.Z)(a())`
	font-size: inherit;
	line-height: inherit;
	cursor: pointer;
	color: var(--color-brand-magenta-main);

	&:hover {
		text-decoration: underline;
	}
`},6538:function(e,t,r){var i=r(5893),n=r(6829),a=r(8076);let o=(0,n.Z)("a")`
	text-decoration: none;
	display: inline-grid;

	color: var(--color-brand-key-main);
	font-family: var(--type-heading-font-family);
	display: inline-flex;
	font-weight: 700;
	font-size: 1em;
	line-height: inherit;
	position: relative;

	&:hover {
		color: var(--color-brand-key-light);
	}

	&:active {
		color: var(--color-brand-key-main);
	}
`;t.Z=()=>(0,i.jsxs)(o,{href:"/",role:"img",title:"Graphix Collab, LLC",children:[(0,i.jsx)("span",{className:"Graphix",children:"Graphix"}),(0,i.jsx)("span",{className:"Logo-collab",children:"Collab"}),(0,i.jsx)(a.o,{})]})},8303:function(e,t,r){r.d(t,{v:function(){return l}});var i=r(5893),n=r(917),a=r(6829),o=r(8076);let s=(0,a.Z)("mark")(e=>{let{text:t,brand:r,color:i="cyan"}=e,a=(0,n.iv)`
			background: unset;
			/* display: inline-flex; */
		`;return r?(0,n.iv)`
				${a}
				position: relative;
			`:t?(0,n.iv)`
				${a}
				color: var(--color-brand-${i}-main);
			`:(0,n.iv)`
			${a}
			background: var(--color-brand-${i}-lightest);
		`}),l=e=>{let{children:t,...r}=e;return(0,i.jsxs)(s,{...r,children:[t,r.brand?(0,i.jsx)(o.o,{}):null]})}},3376:function(e,t,r){r.d(t,{x:function(){return l}});var i=r(5893),n=r(917),a=r(6829),o=r(1177);let s=(0,a.Z)("p",(0,o._e)("color"))(e=>{let{size:t="medium",color:r="primary"}=e;return(0,n.iv)`
	margin: unset;
	color: var(--color-text-${r});
	font-family: var(--type-body-font-family);
	font-weight: var(--type-body-font-weight);
	line-height: 175%;
	font-size: var(--type-body-font-size-${t});
`}),l=e=>{let{children:t,...r}=e;return(0,i.jsx)(s,{...r,children:t})}},6323:function(e,t,r){r.d(t,{T:function(){return a}});let i={cyan:["hsla(195, 93%, 64%, %%alpha%%)","hsla(41, 100%, 84%,  %%alpha%%)"],magenta:["hsla(341, 100%, 83%,  %%alpha%%)","hsla(41, 100%, 84%,  %%alpha%%)"],yellow:["hsla(41, 100%, 84%,  %%alpha%%)","hsla(341, 100%, 83%,  %%alpha%%)"],key:["hsla(22, 24%, 91%,  %%alpha%%)","hsla(195, 93%, 64%, %%alpha%%)"]},n=e=>{let t=e[0].replace("%%alpha%%","1"),r=e[1].replace("%%alpha%%","1");return`"data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='70' height='8' patternTransform='scale(3) rotate(135)'><rect x='0' y='0' width='100%' height='100%' fill='${t}'/><path d='M-.02 22c8.373 0 11.938-4.695 16.32-9.662C20.785 7.258 25.728 2 35 2c9.272 0 14.215 5.258 18.7 10.338C58.082 17.305 61.647 22 70.02 22M-.02 14.002C8.353 14 11.918 9.306 16.3 4.339 20.785-.742 25.728-6 35-6 44.272-6 49.215-.742 53.7 4.339c4.382 4.967 7.947 9.661 16.32 9.664M70 6.004c-8.373-.001-11.918-4.698-16.3-9.665C49.215-8.742 44.272-14 35-14c-9.272 0-14.215 5.258-18.7 10.339C11.918 1.306 8.353 6-.02 6.002'  stroke-width='2' stroke='${r}' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>"`},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.675",r=i[e],a=r[0].replace("%%alpha%%",t),o=r[1].replace("%%alpha%%",t),s=`radial-gradient(circle at 0% 0%, ${a}, ${o})`,l=n(i[e]);return`${s}, url(${l})`}}}]);