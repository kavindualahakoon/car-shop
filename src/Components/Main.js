// 03:36:40


// const myObj = {
//     name:`${name}`,
//     position:`${position}`,
//     city:'Tangalle'
// };

function Main({name,city,position,image}){
    // console.log(props)
    // const {city} = myObj
   
    return(

        <div>
        {/* This is main component
            <ul>
                
                <li>{name}</li>
                <li>{position}</li>
                
                <li>{city}</li>
                <li>java</li>
                
            </ul> */}
            <img 
                src={
                    image
                    ? `${image}`
                    :"https://cdn.pixabay.com/photo/2020/11/06/19/11/car-5718701_640.jpg"
            } 
                alt="cardImage" />

            <div className="mainBlock_details">
                <h4>{!name?'NO-NAME':`${name}`}</h4>
                <p><span>{city}</span><span>{position}</span></p>
            </div>
            </div>
           
    );
}

export default Main; 