import React,{useState, useCallback} from 'react'
import Child from './Child'

function Parent() { 

    // const [data, setData] = useState("");
    // console.log("Parent Component !!"); 
    // const handleChangeChild =(data) => {
    //     setData(data);
    // }
  return (
      <>
          {/* <h2>This is  Parent Page</h2> 
          <p>Data : {data}</p>
          
          <Child sendData={ handleChangeChild} />     */}  
          <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true">

			<div class="login">
				<form class="form">
					<label for="chk" aria-hidden="true">Log in</label>
					<input class="input" type="email" name="email" placeholder="Email" required=""/>
					<input class="input" type="password" name="pswd" placeholder="Password" required=""/>
					<button>Log in</button>
				</form>
			</div>

      <div class="register">
				<form class="form">
					<label for="chk" aria-hidden="true">Register</label>
					<input class="input" type="text" name="txt" placeholder="Username" required="">
					<input class="input" type="email" name="email" placeholder="Email" required="">
					<input class="input" type="password" name="pswd" placeholder="Password" required=""/>
					<button>Register</button>
				</form>
			</div>
	</div>
      </>
      
  )
}

export default Parent