import { useEffect, useState } from 'react';
import stringify from 'json-stringify-safe';
import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js'

figlet.parseFont('Standard', standard);

function Figlet({ text, font = 'Standard', ...props }) {
    const [ascii, setAscii] = useState('');

    useEffect(() => {
        figlet.text(text, { font }, (err, data) => {
            if (err) return console.error(err);
            setAscii(data);
        })
    }, [text, font, stringify(props)]);

    return (
        <div className="w-full overflow-x-auto">
            <pre className="w-2xl">{ascii}</pre>
        </div>
    );
}

export default Figlet;