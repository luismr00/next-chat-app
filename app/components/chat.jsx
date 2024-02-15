// import React from 'react'

// const chat = () => {
//     let arr = [];

//     const [messages, setMessages] = React.useState(arr);
//     const [msg, setMsg] = React.useState('');
  
//     function handleMessages() {
//       let a = messages.slice();
//       a.push(msg);
//       setMessages(a);
//     }
  
//     return (
//       // <h1>hello world!</h1>
//       <div>
//         <label>Send a msg</label>
//         <input type="text" id="send" name="send" onChange={(e) => {setMsg(e.target.value)}}></input>
//         <button onClick={handleMessages}>SEND</button>
//         <h1>CHAT BEGINS BELOW THIS LINE OF TEXT</h1>
//         {messages?.map((e) => <div id="message">{e}</div>)}
//       </div>
  
      
//     );
// }

// export default chat