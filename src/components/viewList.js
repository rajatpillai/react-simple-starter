import React ,{ Component } from "react";
import * as action from "../actions/api";

class ViewList extends Component {

    state={
        searchText: '',
    }
    
    search = () => {
        console.log('!!!!!!!!sdsdas!!!!!!!!!', this.state.searchText)
        action.API() 
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{

            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <input onChange={(event) => {this.setState({searchText: event.target.value})}} type="text"/>
                    <button onClick={() => this.search()}>search</button>
                </div>
            </div>
        );
    }

}

export default ViewList;