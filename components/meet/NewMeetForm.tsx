import { Dispatch, FormEvent, SetStateAction, useCallback, useRef } from 'react';
import styles from './NewMeetForm.module.css';

type Props = {
	setData: Dispatch<SetStateAction<any>>;
};
const NewMeetForm: React.VFC<Props> = ({ setData }) => {
	const titleInputRef = useRef<HTMLInputElement>(null);
	const imageInputRef = useRef<HTMLInputElement>(null);
	const addressInputRef = useRef<HTMLInputElement>(null);
	const descriptionInputRef = useRef<HTMLInputElement>(null);

	const createMeet = useCallback(
		(e: FormEvent) => {
			e.preventDefault();

			const newMeet = {
				id: new Date().getMilliseconds().toString(),
				title: titleInputRef.current!.value,
				image: imageInputRef.current!.value,
				description: descriptionInputRef.current!.value,
				address: addressInputRef.current!.value
			};

			/*
        const response = await fetch('/article/fetch/post/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(user)
        });

        if(response.stauts === 'OK'){}
      */

			setData((prev: any) => [newMeet, ...prev]);

			titleInputRef.current!.value = '';
			imageInputRef.current!.value = '';
			descriptionInputRef.current!.value = '';
			addressInputRef.current!.value = '';
		},
		[setData]
	);
	return (
		<form className={styles.form} onSubmit={createMeet} style={{ width: '60%', margin: 'auto' }}>
			<div className={styles.control}>
				<label htmlFor="title">
					Title
					<input type="text" id="title" ref={titleInputRef} />
				</label>
			</div>

			<div className={styles.control}>
				<label htmlFor="image">
					Image
					<input type="url" id="image" ref={imageInputRef} />
				</label>
			</div>

			<div className={styles.control}>
				<label htmlFor="address">
					Address
					<input type="text" id="address" ref={addressInputRef} />
				</label>
			</div>

			<div className={styles.control}>
				<label htmlFor="description">
					Description
					<input type="text" id="description" ref={descriptionInputRef} />
				</label>
			</div>
			<div className={styles.actions}>
				<button>Add Meet</button>
			</div>
		</form>
	);
};

export default NewMeetForm;
