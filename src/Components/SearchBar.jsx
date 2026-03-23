import { useState } from "react";
export default function SearchBar(props){
    let [searchText,setSearchtext] = useState("");
    let onInputSearch = (event)=>{
        setSearchtext(event.target.value);
    }
    return(
        <div>
            <input placeholder="Enter Github Username..." value={searchText} onChange={onInputSearch}></input>
            <button onClick={()=>props.func(searchText)}>Search</button>
        </div>
    )
}