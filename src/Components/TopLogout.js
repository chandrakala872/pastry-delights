// import React, { useState } from 'react';
// import './TopLogout.css'; 

// function TopLogout() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [usernameError, setUsernameError] = useState('');
//     const [passwordError, setPasswordError] = useState('');

//     const validateForm = () => {
//         let valid = true;

    
//         setUsernameError('');
//         setPasswordError('');

        
//         if (!username) {
//             setUsernameError('Username is required');
//             valid = false;
//         }

        
//         if (!password) {
//             setPasswordError('Password is required');
//             valid = false;
//         }

//         return valid;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validateForm()) {
            
//             console.log("Logging out...");
//         }
//     };

//     return (
//         <div className="logout-form-container">
//             <h2>Logout </h2>
//             <form onSubmit={handleSubmit} className="logout-form">
//                 <div className="form-group">
//                     <label htmlFor="username">Username:</label>
//                     <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
//                     <span className="error">{usernameError}</span>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password:</label>
//                     <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                     <span className="error">{passwordError}</span>
//                 </div>
//                 <button type="submit">Logout</button>
//             </form>
//         </div>
//     );
// }

// export default TopLogout;

