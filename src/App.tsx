import React, { useState } from 'react';
import MyButton from './components/MyButton';

export default function App() {
    const [text, setText] = useState('hello')
    const [typing, setTyping] = useState(false);
    const [position, setPosition] = useState(0);

    const typingToggle = () => setTyping(typing ? false : true);

    const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
        // 入力可能のとき
        if (typing) {
            // 入力したキーと現在入力しようとしている文字が一致するとき
            if (e.key === text[position]) {
                // 次の位置へ移動
                setPosition(position + 1);
            }
        }
    };

    return (
        <div className='App' onKeyPress={(e) => handleKey(e)} tabIndex={0}>
            <div id="textbox">
                <span className="typed-letters">{text.slice(0, position)}</span>
                <span className="waiting-letters">{text.slice(position)}</span>
            </div>
            <MyButton onClick={typingToggle}>{typing ? 'OFF' : 'ON'}</MyButton>
        </div>
        
    )
}