import {type FC} from 'react';
import styles from './Logo.module.scss';

const Logo: FC = () => {
	return (
		<div className={styles.logotype} role="img" title="Graphix Collab, LLC">
			GraphixCollab
			<div className={styles.dots}>
				<div />
				<div />
				<div />
				<div />
			</div>
		</div>
	);
};

export default Logo;
