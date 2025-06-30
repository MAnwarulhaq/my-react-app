// import React, { useTransition } from 'react'

// const UseTransition = () => {

//     // lengthy code using state
//     // const [pending,setPending]=React.useState(false)

//     // const disabledBtn= async()=>{
//     //     setPending(true)
//     //     await new Promise(res=>setTimeout(res,2000 ))
//     //     setPending(false)
//     // }
//     // 
//      const [pending,startTransition]=useTransition()
//     const disabledBtn=()=>{
//         startTransition(async()=>{
//             await new Promise(res=>setTimeout(res,5000))
//         })
       
        
//     }

//   return (
//     <div style={{alignItems:"center"}}>
//         <h1>useTransition</h1>
//         {/* <button disabled={pending} onClick={disabledBtn}>Click me</button> */}
//         {
//             pending?
//             <img style={{width:"200px",height:"200px"}} src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F29400941%2FLoading-gif&psig=AOvVaw2El1qMW9vv1UdGPW0wDmK_&ust=1751187835912000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJC6ipvhk44DFQAAAAAdAAAAABAThttps://www.google.com/url?sa=i&url=https%3A%2F%2Fflutterawesome.com%2Fa-collection-of-high-fidelity-loading-animations-in-gif-format-with-flutter%2F&psig=AOvVaw2El1qMW9vv1UdGPW0wDmK_&ust=1751187835912000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJC6ipvhk44DFQAAAAAdAAAAABAK" alt="" />
//             :null
//         }
//         <button disabled={pending} onClick={disabledBtn}>Click Me</button>
//     </div>
//   )
// }

// export default UseTransition