import './App.css';
import {useState} from 'react'


function WishList(){
  const [text,setText] = useState('');
  const [wishList,setWishList] = useState([]);


 const wishHandler=()=>{

setWishList(wishList.concat(text));
setText('')

}
 

  return(
    <div>
      <h1>WishList</h1>
      <input
        onChange={(e)=>setText(e.target.value)}
        type="text"
        value={text}
      />
      <button onClick={wishHandler}>ADD</button>
      {wishList.map((wish)=>(
          <div>
            <li>{wish}</li>
          </div>
        )
      )}
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
