import './Item.css'

const Item =(props)=>{
    return <li className='item'>{`Meal: ${props.meal} Price: ${props.price}`}</li>
}

export default Item;