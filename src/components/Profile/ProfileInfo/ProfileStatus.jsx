import React from "react";
import style from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state={
        editMode: false,
        status: this.props.status
    }

    activeEditMode = ()=>{
        console.log(this);
        this.setState({
            editMode: true
        })
    }
    deactiveEditMode=()=>{
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (event)=>{
        this.setState({
            status: event.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div>
                <div>
                    {!this.state.editMode &&
                        <span onClick={this.activeEditMode}>{this.props.status || '-----'}</span>
                    }
                </div>
                <div>
                    {this.state.editMode &&
                        <input autoFocus={true} onChange={this.onStatusChange} onBlur={this.deactiveEditMode} value={this.state.status}/>
                    }
                </div>
            </div>
        )
    }


}

export default ProfileStatus;