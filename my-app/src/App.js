import './App.css';
import {useState,useEffect} from 'react'


function WishList(){
  const [text,setText] = useState('');
  const [wishList,setWishList] = useState([]);
  const [wishSaved, setWishSaved] = useState(-1);

  useEffect(() => {
    
    localStorage.setItem('wishList',JSON.stringify(wishList))
    setWishSaved((wishSaved)=>wishSaved + 1)
    
  }, [wishList])


 const wishHandler=()=>{

setWishList((wishList)=>wishList.concat(text));
setText('')

}
 

  return(
    <div>
      <h1 style={{color:'grey'}}>WishList</h1>
      <input
        onChange={(e)=>setText(e.target.value)}
        type="text"
        value={text}
        placeholder="Enter a wish"
      />
      <button onClick={wishHandler}>ADD</button>
      {wishList.map((wish)=>(
          <div>
            <li>{wish}</li>
          </div>
        )
      )}
      <h5>wishes Saved:{wishSaved}</h5>

      </div>
    )
}

function App() {

return (
    <div className="App">
    <WishList/>
    </div>
  );
}

export default App;
