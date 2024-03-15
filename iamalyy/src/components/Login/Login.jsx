import "./Login.css"

const Login = () => {
    const handleCreateAccountClick = () => {
        // Редірект на іншу сторінку для створення облікового запису
        window.location.href = '/register';
    }
    
    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="login-header">Log in</h1>
                <div className="login-form">
                    <input 
                        type="text" 
                        placeholder="Username" 
                        className="login-input" 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="login-input" 
                    />
                    <button className="login-button">Let's go!</button>
                    <div className="create-account-link" onClick={handleCreateAccountClick}>
                        I don't have a profile...
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Login;
  
  
