import { useState } from 'react';

function Button() {
    const [clicks, setClicks] = useState(0);
    const handleClick = () => {
        setClicks(clicks + 1);
    };
    return (
        <div>
            <p>Clicks: {clicks}</p>
            <button onClick={handleClick}>Click here</button>
        </div>
    );
}

function SearchBox() {
    const [search, setSearch] = useState("");
    const handleChange = (event) => {setSearch(event.target.value);};
    return (
        <div>
            <input type="text"
                value={search}
                onChange={handleChange}
                placeholder="Search..."/>
            <p>You typed: {search}</p>
        </div>
    );
}

export { Button, SearchBox };