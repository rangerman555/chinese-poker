import React, {useState} from 'react';

interface Props {
    placeholder: string;    
    sendText: (text: string) => void;
}

const MyForm: React.FC<Props> = props => {
    const [text, setText] = useState<string>('');
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        e.stopPropagation();
        props.sendText(text);
    }

    return <form>
        <input type="text" placeholder={props.placeholder} onChange={e => setText(e.target.value)} />
        <button onClick={onSubmit}>Send</button>
    </form>
}

export default MyForm;