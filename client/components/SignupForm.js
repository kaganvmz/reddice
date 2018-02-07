import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            passwordConfirm: "",
            password: "",
            email: ""
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join to our community!</h1>
                <div className="form-group">
                    <label className="control-label" htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="username" 
                        placeholder="Username"
                        value={this.state.username} 
                        onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        name="email" 
                        placeholder="Email"
                        value={this.state.email} 
                        onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        name="password" 
                        placeholder="Password"
                        value={this.state.password} 
                        onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="passwordConfirm">Password Confirmation</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        name="passwordConfirm" 
                        placeholder="Password Confirmation"
                        value={this.state.passwordConfirm} 
                        onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>
            </form>
        );
    }
}

export default SignupForm;