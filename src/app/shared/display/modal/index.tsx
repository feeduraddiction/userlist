import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import classes from './styles.module.scss';
import { CloseIcon } from '../../../assets/svg';

interface ModalProps {
	onClose: () => void;
	children: ReactNode | ReactNode[];
}

interface ModalOverlayProps {
	children: ReactNode | ReactNode[];
	onClose: () => void;
}

const Backdrop = ({ onClose }: { onClose: () => void }) => {
	const closeHandler = () => {
		console.log('close');
		onClose();
	};
	return <div onClick={closeHandler} className={classes.backdrop} />;
};

const ModalOverlay = ({ children, onClose }: ModalOverlayProps) => {
	return (
		<div className={classes.modal}>
			<div className={classes.modalContent}>
				<button className={classes.closeButton} onClick={onClose} type="button">
					<CloseIcon />
				</button>
				{children}
			</div>
		</div>
	);
};

export const Modal = ({ onClose, children }: ModalProps) => {
	const closeHandler = () => {
		console.log('close');
		onClose();
		document.body.style.overflow = 'auto';
	};
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClose={closeHandler} />,
				document.getElementById('backdrop-root')!
			)}
			{ReactDOM.createPortal(
				<ModalOverlay onClose={closeHandler}>{children}</ModalOverlay>,
				document.getElementById('modal-overlay-root')!
			)}
		</>
	);
};
