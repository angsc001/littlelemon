import { useEffect, useState } from "react";
//import axios from 'axios';

const FetchTimesAPI = () => {
//     const [functionsData, setFunctionsData] = useState(null);
//     const [error, setError] = useState(null);
//     useEffect(() => {
//       const fetchFunctions = async () => {
//         try {
//           // Fetch the JavaScript file
//           const response = await axios.get('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js');
//           // Extract the functions from the JavaScript file
//           const functions = parseFunctions(response.data);
//           setFunctionsData(functions);
//           setError(null);
//         } catch (error) {
//           console.error('Error fetching functions:', error);
//           setError('Error fetching functions');
//         }
//       };
  
//       fetchFunctions();
//     }, []);
  
//     // Function to parse the JavaScript file and extract functions
//     const parseFunctions = (jsCode) => {
//       // You need to implement your own logic to parse JavaScript code
//       // This is a simplified example assuming functions are defined as arrow functions
//       const functionRegex = /(\w+)\s*=\s*async\s*\(\s*\)\s*=>\s*{[^}]*}/g;
//       const functions = {};
//       let match;
//       while ((match = functionRegex.exec(jsCode)) !== null) {
//         const functionName = match[1];
//         functions[functionName] = eval(`(${match[0]})`);
//       }
//       return functions;
//     };
  
//   function InitializeTimes (){
//       if (functionsData && functionsData.fetchAPI) {
//           try {
//             // Call the function retrieved from the API
//             const result = functionsData.fetchAPI("2024/05/12");
//             console.log('Result:', result);
//           } catch (error) {
//             console.error('Error calling function:', error);
//           }
//         }
//       return (
//            result
//       )
//   }

}


export function InitializeTimes (date){
    switch (date){
        case 0:
            return([
                '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'
            ]);
            break;
        case 1:
            return([
                '11:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'
            ]);
            break;
        case 2:
            return([
                '12:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'
            ]);
                break;
        case 3:
            return([
                '13:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'
            ]);
            break;
        case 4:
            return([
                '14:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'
            ]);
            break;
        case 5:
            return([
                '15:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'
            ]);
                break;
        case 6:
            return([
                '16:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'
            ]);
            break;
    }
    // return (
    //     [
    //     '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'
    //     ]
    // )

   
}

export default FetchTimesAPI;