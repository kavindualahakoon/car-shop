import { useState } from 'react';
import './App.css';
import Main from './Components/Main';
// import myData from './Data/myData';
// import { myData2 } from './Data/myData';
import { myData } from './Data/myData';    //02:50:00

// const NewBlock = () =>{
//   return (<>
//   {myData2?.map((ele,id)=>{
//   // return <p>{ele.name}</p>;
//   return <Main key={id} name={ele.name} city={ele.city} position={ele.position}   />
// })}
  
//   </>)
// }

// const mainBlock =  myData.map((ele,id)=>{
//   // return <p>{ele.name}</p>;
//   return <Main key={id} name={ele.name} city={ele.city} position={ele.position}   />
// });

// let myVar ='CAR SHOP'

// const [myVar,setMyVar] = useState("KAVINDU");

// const clickHandle =()=>{
//   myVar='KAVINDU'
//   console.log(myVar)
// }


function App() {
  const [myVar,setMyVar] = useState({
    name:'KAVINDU',
    city:'JAFFNA',
    position:'GAME DEVELOPER',});


    const [myDataState,setMyDataState] = useState(myData)


    const clickHandle =()=>{
      setMyVar({
        ...myVar,
        name:"ALAHAKOON",
      });

      setMyDataState([...myDataState,{
        id:1675,
        name:'PAVAN',
        city:'KURUNEGALLA',
        position:'DATA DEVELOPER',
        image: "https://cdn.carbuzz.com/gallery-images/840x560/609000/700/609758.jpg",
      }])

  // const clickHandle =()=>{
  //   setMyVar('WELCOME TO CAR SHOP');
    
  };

  console.log(myDataState);

  const mainBlock =  myDataState.map(({name, city, image, position, id}, index)=>{
    // return <p>{ele.name}</p>;
    return (
    <Main 
    key={id + index}
    name={name} 
    city={city} 
    position={position} 
    image={image}  
    />
  );
});

  return (
    <div className='main_container'>
      <div>
        <h1>{myVar.name}</h1>
        
      </div>
      {/* <Main><h1>Kavindu Alahakoon</h1></Main>
      <Main /> */}
      <div className="mainBlock_container">{mainBlock}</div>
      <br /><br />
      <button style={
        {
          fontSize:'12px',
          border: '1px solid red',
          padding: '7px 12px',
        }}
        onClick={clickHandle}
        >
          Click Me
          </button>
      {/* <NewBlock /> */}

    </div>
  );
} 
export default App;
//03:48:31