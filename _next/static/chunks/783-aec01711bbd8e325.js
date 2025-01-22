"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[783],{1126:function(e,i,t){t.d(i,{T:function(){return a}});var r=t(6829);let a=r.Z.form`
	display: grid;
	grid-template-columns: repeat(12, minmax(0, 1fr));
	gap: 1.25rem;

	.FormHeader-root,
	.FormSectionTitle-root,
	.ActionStack-root,
	.FormSection-alert,
	.FormControl-root {
		grid-column: span 12;
	}

	.FormSectionTitle-root:nth-of-type(n + 1) {
		margin-top: var(--spacing-10);
	}

	.ActionStack-root {
		margin-top: var(--spacing-6);
	}

	.FormControl-id-terms {
		margin-top: var(--spacing-6);
	}
`},8806:function(e,i,t){t.d(i,{p:function(){return s}});var r=t(5893),a=t(6829),n=t(9736),l=t(8303);let o=a.Z.header`
	display: grid;

	.FormHeader-instructions {
		font-style: normal;
		text-align: left;

		border-block-start: solid 2px var(--color-brand-magenta-lighter);

		margin-block-start: var(--spacing-2);
		padding-block-start: var(--spacing-2);
		margin-block-end: var(--spacing-6);

		* > mark {
			display: inline;
		}
	}
`,s=e=>(0,r.jsxs)(o,{className:"FormHeader-root",children:[(0,r.jsx)(n.X,{level:2,className:"FormHeader-title",children:e.title}),(0,r.jsx)("p",{className:"FormHeader-instructions",children:(0,r.jsx)(l.v,{color:"magenta",children:e.instructions})})]})},9029:function(e,i,t){t.d(i,{U:function(){return W}});var r=t(5893),a=t(9784),n=t(7294),l=t(6829),o=t(7406),s=t(7151);let c="1.25rem",d=l.Z.label`
	display: grid;
	grid-template-columns: ${c} 1fr;
	gap: var(--spacing-1-5);
	place-items: start;
	place-content: start;

	font-size: var(--input-font-size-medium);
	font-weight: 400;

	cursor: pointer;

	.CheckboxInput-text {
		display: grid;
		line-height: ${c};
		grid-template-columns: 1fr;

		.CheckboxInput-meta {
			line-height: normal;
			color: var(--color-brand-key-neutral);
		}
	}
`,p=(0,l.Z)("input",{shouldForwardProp:e=>!["inputSize","isTouched","isInvalid","isValid","label"].includes(e)})`
	opacity: 0;
	position: absolute;
	cursor: pointer;

	+ .CheckboxInput-indicator {
		display: flex;
		border-radius: 50%;
		overflow: hidden;
		width: ${c};
		height: ${c};

		.CheckboxInput-icon {
			width: inherit;
			height: inherit;
			color: var(--color-brand-key-neutral);
			display: none;
		}
	}

	&:not(:checked)
		+ .CheckboxInput-indicator
		.CheckboxInput-icon.is-unchecked {
		display: flex;
	}

	&:hover,
	&:focus-visible {
		+ .CheckboxInput-indicator .CheckboxInput-icon {
			color: var(--color-brand-key-darker);
			background-color: var(--color-brand-key-lightest);
		}
	}

	&:checked + .CheckboxInput-indicator .CheckboxInput-icon.is-checked {
		color: var(--color-brand-magenta-main);
		display: flex;
	}
`,u=(0,n.forwardRef)((e,i)=>(0,r.jsxs)(d,{htmlFor:e.id,children:[(0,r.jsx)(p,{ref:i,...e,value:"yes",type:"checkbox"}),(0,r.jsxs)("div",{className:"CheckboxInput-indicator",children:[(0,r.jsx)(o.Z,{className:"CheckboxInput-icon is-checked"}),(0,r.jsx)(s.Z,{className:"CheckboxInput-icon is-unchecked"})]}),(0,r.jsxs)("span",{className:"CheckboxInput-text",children:[(0,r.jsx)("span",{children:e.label}),(0,r.jsx)("small",{className:"CheckboxInput-meta",children:e.meta})]})]}));var h=t(4663);let m=l.Z.div`
	display: grid;
	gap: var(--spacing-1-5);
`,g=(0,n.forwardRef)((e,i)=>{let{label:t,helperText:n,options:l,defaultValue:o,...s}=e,c=(0,a.o)(s.name??"input-name");return(0,r.jsx)(h.N,{isFieldset:!0,label:t,labelFor:c,helperText:n,helperTextId:`${c}-helper-text`,isRequired:s.required,isInvalid:s.isInvalid,isValid:s.isValid,isTouched:s.isTouched,children:(0,r.jsx)(m,{children:l?.map((e,t)=>r.jsx(u,{...s,...e,ref:i,name:e.value,defaultChecked:e.value===o},t))})})});var x=t(6010),f=t(5236),v=t(3376);let b=(0,l.Z)("ul")`
	list-style: none;
	margin: unset;
	width: 100%;
	padding-inline-start: 0;

	.FileDisplayList-title {
		font-size: 0.875rem;
		font-weight: 500;

		& + hr {
			margin-block-start: 0.125rem;
			margin-block-end: 0.5rem;
		}
	}
`,k=e=>(0,r.jsxs)(b,{children:[e.listTitle&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v.x,{className:"FileDisplayList-title",children:e.listTitle}),(0,r.jsx)("hr",{})]}),e.children]}),y=(0,l.Z)("div")`
	display: grid;
	gap: 0.5rem;
	place-content: center;
	place-items: center;
	/* pointer-events: none; */

	.accepts {
		color: var(--color-brand-key-neutral);
	}
`,j=(0,l.Z)("li")`
	display: flex;
	gap: 0.25em;
	place-items: center;
	place-content: start;

	.FileListItem-icon {
		opacity: 0.5;
		font-size: 1.125em;
	}
`;var I=t(2872);let F=(0,l.Z)("div")`
	${I.I};
	cursor: pointer;
	display: inline-grid;
	position: relative;
	background-color: var(--color-brand-key-lightest);
	overflow: hidden;

	min-height: 10rem;
	height: auto;
	padding-block: 1.75rem;
	border-style: dashed;
	place-content: center;
	place-items: center;

	font-size: 1rem;
	font-weight: normal;

	&:hover {
		background-color: var(--color-brand-key-lightest);
	}

	&:active {
		background-color: var(--color-brand-key-lighter);
	}

	&.has-files {
		border-style: solid;
		background-color: var(--color-brand-key-lightest);
	}

	&::before {
		content: "✅ Drop 'em!";
		display: flex;
		position: absolute;
		place-content: center;
		place-items: center;
		inset: 0 0 0 0;
		background-color: var(--color-brand-secondary-lighter);
		letter-spacing: var(--type-body-font-leading-small);
		font-size: var(--type-heading-font-size-large-5);

		transition: all 150ms;
		transform: translateY(0.25rem);
		opacity: 0;
	}

	&.is-drag-active::before {
		transform: translateY(0);
		opacity: 1;
	}
`;var w=t(1177);let T=(0,l.Z)("input",(0,w._e)("isInvalid","isValid","isTouched"))`
	position: absolute;
	inset: 0 0 0 0;
	opacity: 0;
`,S=(0,n.forwardRef)((e,i)=>{let{displayText:t="\uD83C\uDF05 Upload a file",inputSize:a="medium",className:l,...o}=e,[s,c]=(0,n.useState)(null),[d,p]=(0,n.useState)(!1),u=s?(0,r.jsx)(k,{listTitle:"Chosen Files:",children:[...s].map((e,i)=>(0,r.jsxs)(j,{children:[(0,r.jsx)(f.Z,{fontSize:"small",sx:{color:"var(--color-brand-magenta-main)"}}),(0,r.jsx)(v.x,{children:e.name})]},i))}):(0,r.jsxs)(r.Fragment,{children:[t,(0,r.jsxs)("small",{className:"acce",children:["Supported file types:"," ",o.accept?.replaceAll(",",", ")]})]});return(0,r.jsxs)(F,{className:(0,x.Z)("FileInput-root",l,{"has-files":!!s,"is-drag-active":d}),inputSize:a,role:"combobox",tabIndex:0,children:[(0,r.jsx)(y,{children:u}),(0,r.jsx)(T,{...o,ref:i,className:"FileInput-input",type:"file",onChange:e=>{e.currentTarget.files?.length&&c(e.currentTarget.files),o.onChange?.(e)},onDragStart:e=>{p(!0),o.onDragStart?.(e)},onDragEnter:e=>{p(!0),o.onDragEnter?.(e)},onDragLeave:e=>{p(!1),o.onDragLeave?.(e)},onDragEnd:e=>{e.preventDefault(),p(!1),o.onDragEnd?.(e)},onDrop:e=>{p(!1),c(e.dataTransfer.files),o.onDrop?.(e)}})]})}),N=(0,n.forwardRef)((e,i)=>{let{label:t,helperText:n,className:l,...o}=e,s=(0,a.o)(o.name??"input-name");return(0,r.jsx)(h.N,{label:t,labelFor:s,helperText:n,helperTextId:`${s}-helper-text`,className:(0,x.Z)("FileInputField-root",l),isInvalid:o.isInvalid,isValid:o.isValid,isTouched:o.isTouched,children:(0,r.jsx)(S,{...o,ref:i,multiple:!0,type:"file",id:s,name:s})})});var Z=t(2446),R=t(290);let C="1.25rem",z=l.Z.label`
	display: grid;
	grid-template-columns: ${C} 1fr;
	gap: var(--spacing-1-5);
	place-items: start;
	place-content: start;

	font-size: var(--input-font-size-medium);
	font-weight: 400;

	cursor: pointer;

	.RadioInput-text {
		display: grid;
		line-height: ${C};
		grid-template-columns: 1fr;

		.RadioInput-meta {
			line-height: normal;
			color: var(--color-brand-key-neutral);
		}
	}
`,$=(0,l.Z)("input",{shouldForwardProp:e=>!["inputSize","isTouched","isInvalid","isValid"].includes(e)})`
	opacity: 0;
	position: absolute;
	cursor: pointer;

	+ .RadioInput-indicator {
		display: flex;
		border-radius: 50%;
		overflow: hidden;
		width: ${C};
		height: ${C};

		.RadioInput-icon {
			width: inherit;
			height: inherit;
			color: var(--color-brand-key-neutral);
			display: none;
		}
	}

	&:not(:checked) + .RadioInput-indicator .RadioInput-icon.is-unchecked {
		display: flex;
	}

	&:hover,
	&:focus-visible {
		+ .RadioInput-indicator .RadioInput-icon {
			color: var(--color-brand-key-darker);
			background-color: var(--color-brand-key-lightest);
		}
	}

	&:checked + .RadioInput-indicator .RadioInput-icon.is-checked {
		color: var(--color-brand-magenta-main);
		display: flex;
	}
`,D=(0,n.forwardRef)((e,i)=>(0,r.jsxs)(z,{htmlFor:e.id,children:[(0,r.jsx)($,{ref:i,type:"radio",...e}),(0,r.jsxs)("div",{className:"RadioInput-indicator",children:[(0,r.jsx)(R.Z,{className:"RadioInput-icon is-checked"}),(0,r.jsx)(Z.Z,{className:"RadioInput-icon is-unchecked"})]}),(0,r.jsxs)("span",{className:"RadioInput-text",children:[(0,r.jsx)("span",{children:e.label}),(0,r.jsx)("small",{className:"RadioInput-meta",children:e.meta})]})]})),V=(0,n.forwardRef)((e,i)=>{let{label:t,helperText:n,options:l,defaultValue:o,...s}=e,c=(0,a.o)(s.name??"input-name");return(0,r.jsx)(h.N,{isFieldset:!0,label:t,labelFor:c,helperText:n,helperTextId:`${c}-helper-text`,isRequired:s.required,isInvalid:s.isInvalid,isValid:s.isValid,isTouched:s.isTouched,children:(0,r.jsx)(m,{children:l?.map((e,t)=>r.jsx(D,{ref:i,type:"radio",id:e.value,name:c,defaultChecked:e.value===o,...s,...e},t))})})});var q=t(917),E=t(8918);let A=(0,l.Z)("div")(e=>{let{inputSize:i}=e;return(0,q.iv)`
		display: inline-block;
		position: relative;
		width: 100%;

		& svg {
			pointer-events: none;
			position: absolute;
			top: 50%;
			height: var(--input-group-action-size-${i});
			width: var(--input-group-action-size-${i});
			right: var(--input-spacing-gap-${i});
			transform: translateY(-50%);
			opacity: 0.5;
		}
	`}),H=(0,l.Z)("select",{shouldForwardProp:e=>!["inputSize","isTouched","isInvalid","isValid"].includes(e)})(e=>(0,q.iv)`
		${(0,I.I)({inputSize:e.inputSize})};
		width: 100%;
		display: block;

		padding-inline: var(--select-spacing-padding-inline-${e.inputSize});
		appearance: none;
		cursor: pointer;
	`),L=(0,n.forwardRef)((e,i)=>{let{options:t,inputSize:a="medium",className:n,...l}=e;return(0,r.jsxs)(A,{className:(0,x.Z)("Select-root",n),inputSize:a,children:[(0,r.jsx)(H,{...l,ref:i,inputSize:a,children:t?.map((e,i)=>{let{label:t,value:a}=e;return r.jsx("option",{value:a,children:t},i)})}),(0,r.jsx)(E.Z,{})]})}),_=(0,n.forwardRef)((e,i)=>{let{label:t,helperText:n,...l}=e,o=(0,a.o)(l.name??"input-name");return(0,r.jsx)(h.N,{label:t,labelFor:o,helperText:n,helperTextId:`${o}-helper-text`,isRequired:l.required,isInvalid:l.isInvalid,isValid:l.isValid,isTouched:l.isTouched,children:(0,r.jsx)(L,{...l,ref:i,id:o,name:o})})});var P=t(2134),Y=t(4336),U=t(9736);let X=l.Z.div`
	&.has-top-gutter {
		margin-block-start: var(--spacing-6);
	}
`,G={title:e=>(0,r.jsxs)(X,{className:(0,x.Z)("FormSectionTitle-root",{"has-top-gutter":e.hasTopGutter}),children:[(0,r.jsx)(U.X,{level:4,children:e.title}),(0,r.jsx)("hr",{})]}),checkbox:g,radio:V,select:_,textarea:P.N},M={text:Y.n,number:Y.n,date:Y.n,email:Y.n,file:N},O=(e,i)=>"input"===e?M[i??"text"]:e in G?G[e]:M.text,W=e=>{let{items:i,formState:t}=e;return(0,r.jsx)(r.Fragment,{children:i.map((e,i)=>{let{itemType:a,inputType:n,...l}=e,o=O(a,n);return(0,r.jsx)(o,{type:n,isInvalid:!!t.errors[e.name],helperText:t.errors[e.name]??e.helperText,...l},i)})})}},7844:function(e,i,t){t.d(i,{c:function(){return a}});var r=t(7294);let a=()=>{let e,i;let[t,a]=(0,r.useState)(!1),[n,l]=(0,r.useState)(!1),[o,s]=(0,r.useState)(!1),[c,d]=(0,r.useState)({}),[p,u]=(0,r.useState)(null),h=()=>{a(!1),l(!1),s(!1),d({}),u(null)},m=async()=>{let t=i.querySelectorAll('input[type="file"]');if(0!==t.length){for await(let i of[...t].map(e=>e.name))if(e.has(i)){let t=0;for await(let r of e.getAll(i))e.append(`${i}[${t}]`,r),t++;e.delete(i)}}},g=async()=>{await m(),console.log(Object.fromEntries(e.entries()));let t=await fetch(i.action,{method:i.method,body:e});u(t),s(t.ok),t.ok||d(await t.json()),a(!1),l(!0)};return{isSubmitting:t,isSubmitted:n,isSuccessful:o,response:p,errors:c,handleReset:h,handleSubmit:t=>{t.preventDefault(),h(),e=new FormData(i=t.currentTarget),a(!0),g()}}}},230:function(e,i,t){t.d(i,{C:function(){return r}});let r=e=>`https://api.crealgo.com/v1/graphixcollab/${e}`},4592:function(e,i,t){t.d(i,{z:function(){return s}});var r=t(5893),a=t(6829),n=t(18),l=t(633);let o=(0,a.Z)(n.Z)`
	font-family: var(--font-family) !important;
	margin-block-start: var(--spacing-2);
	grid-column: span 2;
`,s=e=>{let i="error",t="Request Failed",a="There was an error sending your message. Please try again.";return e&&(i="success",t="Message Sent",a="Your message has been sent. We will get back to you as soon as possible."),(0,r.jsx)("div",{className:"FormSection-alert",children:(0,r.jsxs)(o,{severity:i,children:[(0,r.jsx)(l.Z,{children:t}),a]})})}}}]);