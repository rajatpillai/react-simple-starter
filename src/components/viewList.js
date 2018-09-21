import React ,{ Component } from "react";
import * as action from "../actions/api";

class ViewList extends Component {

    state={
        searchText: 'mix',
        array: [],
    }

    componentDidMount() {
        this.search();
    }
    
    search = () => {
        // boxer
        // chow
        // mix
        // germanshepherd
        action.API(this.state.searchText) 
        .then((res)=>{
            console.log(res);
            this.setState({
                array: res.data.message
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    renderItems = () => {
       return this.state.array.map((item, index) => {
            console.log(item)
            return (<img key={index} src={item} alt={item}  className="img-responsive" />);
        });
    }

    render() {
        return (
            <div>
                <div className="row mx-0">
                    <div className="col-12 search-barWrapper">
                        <input onChange={(event) => {this.setState({searchText: event.target.value})}} type="text"/>
                        <button onClick={() => this.search()}>search</button>
                    </div>    
                </div>
                <div className="images_wrapper">
                    {this.state.array ? this.renderItems() : ""}
                </div>
            </div>
        );
    }

}

export default ViewList;