(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[455],{7794:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact-us",function(){return n(6373)}])},3086:function(e,t,n){"use strict";n.d(t,{G:function(){return b}});var r=n(5893),i=n(7527),o=n(917),a=n(6323),s=n(3912),l=n(1970),d=n(9736),c=n(9718),m=n(8303),u=n(3376);let h=(0,i.ZP)("div")(e=>{let{color:t="magenta"}=e;return(0,o.iv)`
	content: '';
	position: relative;
	z-index: -1;
	background-image: ${(0,a.T)(t,"0.5")};
	display: flex;
	height: 5rem;
	width: 100%;
`}),p=(0,i.ZP)(s.g)(e=>{let{color:t="magenta"}=e;return(0,o.iv)`
	--wrapper-padding-bottom: 6rem;

	@media screen and (min-width: 1123px) {
		--wrapper-padding-bottom: 5rem;
	}

	background-color: var(--color-brand-${t}-lightest);
	border: none !important;

	.Heading-root, .Text-root {
		color: var(--color-brand-tertiary-darker);
	}
`}),g=(0,i.ZP)(l.W)(e=>{let{theme:t}=e;return(0,o.iv)`
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
`}),x=(0,i.ZP)(c.E)(e=>{let{theme:t}=e;return(0,o.iv)`
	width: 100%;
	height: 100%;

	${t.breakpoints.up("md")} {
		position: absolute;
	}
`}),b=e=>{let{title:t,description:n,color:i,ImageProps:o}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{color:i,children:(0,r.jsxs)(g,{children:[(0,r.jsxs)("hgroup",{className:"content",children:[(0,r.jsx)(d.X,{hasMargin:!0,level:1,children:(0,r.jsx)(m.v,{brand:!0,children:t})}),(0,r.jsx)(u.x,{children:n})]}),(0,r.jsx)("div",{className:"image",children:o&&(0,r.jsx)(x,{...o,height:"auto",width:"100%",fill:"contain",shape:"auto"})})]})}),(0,r.jsx)(h,{role:"separator",color:i})]})};b.displayName="PageHeaderBlock"},6373:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return P},default:function(){return N}});var r=n(5893),i=n(3912),o=n(1970),a=n(3086),s=n(1775),l=n(7527),d=n(3440),c=(0,n(3077).Z)((0,r.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"}),"Refresh"),m=n(7182),u=n(2424),h=n(8652),p=n(8303),g=n(7844),x=n(1126),b=n(8806),j=n(9029),f=n(4592),w=n(3959);let v=[{itemType:"input",inputType:"text",label:"Full Name",name:"name",placeholder:"John",required:!0},{itemType:"input",inputType:"email",required:!0,label:"Email",name:"email",helperText:"We'll respond to this email address.",placeholder:"johnsnow@gmail.com"},{itemType:"textarea",name:"message",label:"Message",required:!0,placeholder:'Let us know how we can help you! Something like, "I would like to book an appointment, but I have a few questions first."',rows:5},{itemType:"checkbox",name:"terms",label:"Terms and Conditions",required:!0,options:[{value:"terms",label:(0,r.jsxs)(r.Fragment,{children:["I agree to the"," ",(0,r.jsx)(w.r,{href:"/terms/terms-and-conditions",children:"Terms and Conditions"})," ","and the"," ",(0,r.jsx)(w.r,{href:"/terms/privacy-policy",children:"Privacy Policy"}),"."]})}]}];var k=n(230),y=n(917);let T=(0,l.ZP)(x.T)(e=>{let{theme:t}=e;return(0,y.iv)`
	${t.breakpoints.up("md")} {
		padding-right: 20rem;

		.FormControl-id-name,
		.FormControl-id-email {
			grid-column: span 6;
		}
	}
`}),_=()=>{let e=(0,g.c)();return(0,r.jsxs)(T,{noValidate:!0,method:"post",action:(0,k.C)("send-message/contact"),name:"contact-form",onSubmit:e.handleSubmit,children:[(0,r.jsx)(b.p,{title:(0,r.jsxs)(r.Fragment,{children:["Send us a"," ",(0,r.jsx)(p.v,{text:!0,color:"magenta",children:"message"}),"!"]}),instructions:"Fill out the form below to send us a message, and we'll get back to you as soon as possible!"}),(0,r.jsx)(j.U,{items:v,formState:e}),e.isSubmitted&&(0,f.z)(e.isSuccessful),(0,r.jsxs)(u.k,{children:[(0,r.jsx)(h.z,{size:"large",color:"secondary",endIcon:e.isSubmitting?(0,r.jsx)(m.Z,{size:"inherit",thickness:6,sx:{color:"white"}}):(0,r.jsx)(d.Z,{}),type:"submit",children:e.isSubmitting?"Sending...":"Send Message"}),(0,r.jsx)(h.z,{size:"large",color:"tertiary",endIcon:(0,r.jsx)(c,{}),type:"button",onClick:e.handleReset,children:"Reset"})]})]})};var S=n(2828),P=!0,N=e=>(0,r.jsxs)(S.H,{children:[(0,r.jsx)(s.V,{text:e.pageTitle}),(0,r.jsx)(a.G,{color:"key",title:e.pageTitle,...e.pageHeaderProps}),(0,r.jsx)(i.g,{children:(0,r.jsx)(o.W,{children:(0,r.jsx)(_,{})})})]})}},function(e){e.O(0,[958,307,106,783,888,774,179],function(){return e(e.s=7794)}),_N_E=e.O()}]);