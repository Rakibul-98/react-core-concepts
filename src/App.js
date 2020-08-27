import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var players =['Tamim','Sakib','Mushfiq','Nasir','Sabbir','Taskin']

  var books=[
    {name:'Bangla',price:'$300'},
    {name:'English',price:'$200'},
    {name:'Math',price:'$150'},
    {name:'Science',price:'$220'},
    {name:'Religion',price:'$550'}
  ]
  var products =[
    {name:'HP Laptop',price:'$1200'},
    {name:'Huawei Y9',price:'$700'},
    {name:'Oppo A57',price:'$700'},
    {name:'Oppo Reno2',price:'$1000'}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Counter></Counter>

        <p >My first react exploring start....</p>
        <User></User>
        <ul>
           {
             players.map(player => <li>{player}</li>)
           }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        {
          books.map(book => <Book book={book}></Book>)
        }

        <Person name='Sadiya' pro='Businesswoman'></Person>
        <Person name='Rupom' pro='Learner'></Person>
        <Person name='Sabbir' pro='Student'></Person>
        <Person name='Sabiha' pro='Housewife'></Person>

      </header>
    </div>
  );
}
function Person(props){
  var styleMain={
    border:'5px solid White',
    margin:"10px",
    width:'400px',
    display:'flex'
  }
  const styleName={
    color:'red'
  }
  return(
    <div style={styleMain}>
       <h1>Name : <span style={styleName}>{props.name}</span></h1>
       <h3>Profession : <span style={{color:'skyblue'}}>{props.pro}</span></h3>
    </div>
  )
}
function Product(props){
  const boxStyle={
    border:'2px solid gray',
    margin:'10px',
    backgroundColor:'skyblue',
    height:'200px',
    width:'200px'
  }
  const {name, price} = props.product
  return(
    <div style={boxStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
function Book(props){
  const boxStyle={
    border:'2px solid gray',
    margin:'10px',
    backgroundColor:'violet',
    height:'200px',
    width:'200px'
  }
  const {name,price} = props.book
  return(
     <div style={boxStyle}>
        <h3>{name}</h3>
        <h5>{price}</h5>
        <button>Buy Now</button>
     </div>
  )
}
function Counter(){
  const [count,setCount] = useState(10);
  const handleIncrease = () => setCount(count+1); 
  const handleDecrease = () => setCount(count-1);
  return(
      <div>
        <h1>Count : {count}</h1>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleIncrease}>Increase</button>
      </div>
  )
}
function User(){
  const[users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setUsers(data))
  }, [])
  return(
    <div>
      <h1>Dynamic User :{users.length}</h1>
        <ol>
          {
            users.map(user => <li>{user.name} : ({user.phone})</li>)
          }
        </ol>
    </div>
  )
}
export default App;
