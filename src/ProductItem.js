import React, { Component } from 'react';

class ProductItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false
        };

        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete() {
        const { onDelete , name } = this.props;

        onDelete(name);
    }

    onEdit() {
        this.setState({
            isEdit: true
        });
    }

    onEditSubmit(event) {
        event.preventDefault();

        this.props.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.name, this.props.price);
        
        this.setState({
            isEdit: false
        });
    }

    render() {
        const { name, onDelete, price } = this.props;
    
    return (
        <div>
            {
                this.state.isEdit
                ? (
                    <form onSubmit={this.onEditSubmit}>
                        <input placeholder="Name" ref={nameInput => this.nameInput = nameInput} defaultValue={name} />
                        <input placeholder="Price" ref={priceInput => this.priceInput = priceInput} defaultValue={price} />
                        <button>Save</button>
                    </form>
                )
                : (
                    <div>
                        <span>{name}</span> 
                        { ' | ' }
                        <span>{price}</span> 
                        { ' | ' }
                        <button onClick={this.onEdit}>Edit</button>
                        { ' | ' }
                        <button onClick={this.onDelete}>Delete</button>
                    </div>
                )
            }
        </div>
    );
  }
}

export default ProductItem;