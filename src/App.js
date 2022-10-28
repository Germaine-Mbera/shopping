

import React , {useState} from 'react';
import Navbar from './components/Navbar';
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import './styles/amazon.css';
import './App.css';
import Todo from './components/Popup';
import TodoList from './components/TodoList';

const App = () => {

	const[buttonPopup,setButtonPopup] =useState (false);


	const[todos,setTodos]=useState([]);
  
  
	function addTodo(todo){
	  setTodos([todo,...todos]);
	}



	const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);

	const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart([...cart, item]);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}

  return (
	<>
	<div className='menu'>
      <ul>
        <li >Home</li><br/>
        <li>About us</li><br/>
        <li>Contact</li><br/>
        
        <button onClick={()=>setButtonPopup(true)}>Add new</button>
      <Todo trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Add new product</h3>
        <p>this is a global marketplace where a varius products 
          are posted in order to reach thousands of peaple. you simply cannot wait.
          Add your product right now,not tomorrow.... </p>
		  
          <div className='todo-app'>
        <TodoList/>
        </div>
       
      </Todo>
      
      </ul><br/>
      
    </div>
	<React.Fragment>
		<Navbar size={cart.length} setShow={setShow} />
		{
			show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
		}
		{
			warning && <div className='warning'>Item is already added to your cart</div>
		}
		
	</React.Fragment>
	
	</>
  )
}

export default App
