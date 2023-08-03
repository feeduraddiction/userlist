import { BaseSyntheticEvent } from 'react';
import classes from './styles.module.scss';

interface InputControlledProps {
	onChange: (event: BaseSyntheticEvent) => void;
	value?: string;
	placeholder?: string;
}

export const InputControlled = ({
	onChange,
	value,
	placeholder,
}: InputControlledProps) => {
	return (
		<input
			className={classes.input}
			type="text"
			onChange={onChange}
			value={value}
			placeholder={placeholder}
		/>
	);
};
