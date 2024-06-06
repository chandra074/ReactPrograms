import React from "react"
class AddContact extends React.Component{
    state = {
        name:'',
        email:''
    }
    addPerson = (e)=>{
        e.preventDefault();

        if(this.state.name===''||this.state.email===''){
            alert('please fill in the blank')
        }
        console.log(this.state)
        this.props.setProp(this.state)
        this.setState({name:'',email:''})
    }
    render(){
        return(
        
            <div className="ui main" style={{marginTop:"50px"}}>
                <form className="ui form" onSubmit={this.addPerson}>
                    <div className="field">
                      <label>Name :</label>
                      <input type="text" placeholder="Enter Given Name"
                      value={this.state.name}
                      onChange={(e)=>this.setState({name:e.target.value})}

                      ></input>
                    </div>
                    <div className="field">
                        <label>Email :</label>
                        <input type="email" placeholder="Enter Given Email"

                        value={this.state.email}
                        onChange={(e)=> this.setState({email:e.target.value})}
                        
                        
                        ></input>
                    </div>
                    <button className="ui button blue" >submit</button>
                </form>
            </div>


        )
    }
}
export default AddContact