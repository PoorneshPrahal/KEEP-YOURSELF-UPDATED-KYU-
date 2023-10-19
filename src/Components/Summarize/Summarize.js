// import React, { useEffect, useState } from 'react';
// import { Configuration, OpenAIApi } from "openai/dist/index";




// function Summarize() {
//   const [text, setText] = useState("The Supreme Court will today deliver its much-anticipated judgment on petitions seeking legal recognition for same-sex marriage...");
//   const [summar, setSummar] = useState('');

  
//   const configuration = new Configuration({
//     apiKey: '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', // Replace with your OpenAI API key
//   });

//   const openai = new OpenAIApi(configuration);  


//   const summarizeText = async () => {
//     try {
//       const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: `Summarize the following text: ${text}`,
//         max_tokens: 150,
//       });
//       setSummar(response?.data?.choices[0]?.text);
//     } catch (error) {
//       console.error('Error summarizing text:', error);
//     }
//   };
//   useEffect(() => {
//    summarizeText()
   
//   },[]);

//   function generatePrompt(text) {
//     return `Summarize this ${text}. and break them into separate lines`;
//   }

//   return (
//     <div className='modal container'>
//       <div className='row modal-main'>
//         <div className='col'>
//           <div className='row'>
//             <h1>Madras HC to hear special plea on screening of Vijay-starrer 'Leo' today</h1>
//           </div>
//           <div className='row'>{summar}</div>
//           <button className='btn-sum'>Close</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Summarize;
