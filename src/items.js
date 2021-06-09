import {Component} from 'react';
import deleteIcon from './icons8-delete-64.png';

function ListItem(props) {
    return (
        <li className="list-item">
            <span>{props.value}</span>
            <img src={deleteIcon} alt="delete icon" className="delete" onClick={props.onclick} />
        </li>
    )
}

class Items extends Component {
    state = {
        item: '',
        itemsList: [
            'Iphone 11',
            'Air pods',
            'Laptop',
            'Samsung TV',
            'Microwave',
            'Speakers'
        ]
    }
    render() {
        return (
            <div className="container">
                <div className="content">
                    <div className="add-item">
                        <div className="input-field">
                            <input id="item" type="text" placeholder="type something to add" />
                        </div>
                        <button className="add" onClick={this.add}>add</button>
                    </div>
                    <div className="list-field">
                        <ul className="items-list">
                            {
                                this.state.itemsList.map((itm,idx) => {
                                    return <ListItem key={idx.toString()} value={itm} onclick={(e) => this.deleteItem(itm)} />
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    add = (e) => {
        e.preventDefault();
        const val = document.getElementById('item').value;
        document.getElementById('item').value = '';
        if (val !== '') {
            this.setState((state) => ({
                itemsList: [val].concat(state.itemsList)
            }))
        }
    }
    deleteItem = (itm) => {
        const itemIndx = this.state.itemsList.indexOf(itm);
        this.state.itemsList.splice(itemIndx,1);
        this.setState((state) => ({
            itemsList: state.itemsList
        }));
    }
}

export default Items;