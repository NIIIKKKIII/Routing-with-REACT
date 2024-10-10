
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from './Components/Dashboard';
import { Landing } from './Components/Landing';
function App(){
  return ( <div>
    <div style={{backgroundColor: "black", color: "white"}}>this div is there no matter what the route is</div> 
      <button onClick={()=>{window.location.href="/"}}>Landing page </button> 
      <button onClick={()=>{window.location.href= "/Dashboard"}}>Dashboard</button>
      <BrowserRouter>
    <Routes>
      <Route path="/Dashboard" element={<Dashboard/>}></Route>
      <Route path='/' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
  
  )
}


export default App;



{/*  // PROBLEMS WITH THIS KIND OF ROUTING 
    
    In the code above we have used window.location.href here which gets the data and renders it again on the screen but this is wrong as this hampers client side routing and makes our website slow as it gets data again and again
  We have to make sure that we do not refetch the pages again and again on every click */



 /*// Now to resolve this we have a hook caled useNavigate();

//- Helps to keep the same client bundle on the website
//- does not do the hard reload of the page to get the data 
//- It simply changes the page while keeping the same client bundle or data, just because the route has been changed.





















// most probabily people have done routing via a const array vairiable  
{/*
  
  const router = [{
  route: "/",
  components: Landing
  }]
  

  and they just iterate the array to get to the routes in the code 
  
  
  */

















// Notice in the code below that we have written, there is no hard reload and the app stores the client side bundle and renders it 


// THIS IS THE CORRECT WAY TO DO THE CLIENT SIDE RENDERING 
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Dashboard } from './Components/Dashboard';
import { Landing } from './Components/Landing';

function App(){

  return ( <div>
   
      <BrowserRouter>
      <Appbar/>
    <Routes>
      <Route path="/Dashboard" element={<Dashboard/>}></Route>
      <Route path='/' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
  
  )
}

function Appbar(){
  const navigate = useNavigate();
  return <div>
     <div style={{backgroundColor: "black", color: "white"}}>this div is there no matter what the route is</div> 
      <button onClick={()=>{navigate("/")}}>Landing page </button> 
      <button onClick={()=>{navigate("/Dashboard")}}>Dashboard</button>
  </div>
  
}

export default App;


// please keep in mind that useNavigate hook is always used in the BrowserRouter and not outside it