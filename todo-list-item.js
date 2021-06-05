import React from 'react';

import './todo-list-item.css';


class TodoListItem extends React.Component {
    state = {
        done: false,
        important: false
    }
   onLabeClick = () => {
       this.setState(
           ({done}) =>
           {
               return {
                   done: !done
               }
           }
        );
    };
    onMarkImportant = () =>{
        this.setState(
            ({important}) =>
            {
                return {
                    important: !important
                }
            }
         );
    }
    render()  {
        const {label, onDeleted}=this.props;
        const {done, important} = this.state;
        let classNames = 'item-list-base';
        if (important){
            classNames+= " important";
        }
        if (done){
            classNames+= " done";
        }

        return (
            <span className={classNames}>
                <span 
                
                onClick={this.onLabeClick}>
                    {label}
                </span>
                <button  type="button"
                className="btn btn-outline-success float-right"
                onClick={this.onMarkImportant}>
                <i className="fa fa-exclamation"/>
                </button>
                
                <button type="button"
                    className="btn btn-outline-danger float-right mr-1"
                    onClick={onDeleted}>
                    <i className="fa fa-trash-o"/>
                </button>
            </span>
        );
    }
}

export default TodoListItem;