import { BaseSyntheticEvent, ReactNode } from 'react';
import classes from './styles.module.scss';

interface ButtonProps {
	children: ReactNode;
	onClick: (event: BaseSyntheticEvent) => void;
	variant?: 'success' | 'error';
}

export const Button = ({
	children,
	variant = 'success',
	onClick,
}: ButtonProps) => {
	return (
		<button
			className={`${classes.button} ${classes[variant]}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
