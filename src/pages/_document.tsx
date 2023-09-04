/* eslint-disable react/no-danger */

import {Html, Head, Main, NextScript} from 'next/document';

const Document = () => (
	<Html>
		<Head>
			<script
				dangerouslySetInnerHTML={{
					__html: /* js */ `
						(function(c,l,a,r,i,t,y){
							c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
							t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
							y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
						})(window, document, "clarity", "script", "hgccsaitbu");
					`,
				}}
				type='text/javascript'
			/>
			<link rel='preconnect' href='https://fonts.googleapis.com'/>
			<link
				crossOrigin='anonymous'
				rel='preconnect'
				href='https://fonts.gstatic.com'
			/>
			<link
				href='https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
				rel='stylesheet'
			/>
			<link
				href='https://fonts.googleapis.com/css2?&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
				rel='stylesheet'
			/>
		</Head>
		<body>
			<Main/>
			<NextScript/>
		</body>
	</Html>
);

export default Document;
