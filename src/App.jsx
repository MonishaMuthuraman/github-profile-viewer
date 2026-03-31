import {useState} from 'react';
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import ProfileCard from "./Components/ProfileCard";
import RepoList from './Components/RepoList';
function App() {
  const [fetchedUser,setfetchedUser] = useState(null);
  const [error,setError] = useState("");
  const [repoList,setRepoList] = useState(null);
  function fetchRepoList(repoText){
    fetch(`https://api.github.com/users/${repoText}/repos`).
    then(response=>response.json()).
    then((data)=>{
      setRepoList(data);
      console.log(repoList);
    }).
    catch((error)=>console.log("error:",error));
  }
  function handleOnSearch(searchText){
        // console.log("start searching....")
        fetch(`https://api.github.com/users/${searchText}`).
        then(response=>response.json()).
        then(data=>{
          if(data.message === "Not Found"){
            setfetchedUser("");
            setError("User Not Found");
          }
          else{
            setError("");
            setfetchedUser(data);
            fetchRepoList(data.login);
          }
        }).catch(()=>{
          setfetchedUser("");
          setError("Error While Fetching the Data")
        }
        );
    }
  return (
    <>
      <Header />
      <SearchBar func={handleOnSearch}/>
      {fetchedUser && <ProfileCard data={fetchedUser}/>}
      {error && <p>{error}</p>}
      {repoList && <RepoList repoList={repoList}/>}
    </>

  )
}

export default App
