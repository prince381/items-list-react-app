import {Component} from 'react';

class Clock extends Component {
    render() {
        return (
            <div className="date">
                <p>{ this.props.date.toDateString()}</p>
                <p>{ this.props.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Clock;
