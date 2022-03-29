import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './CartWidget.css'
const CartWidget = () => {
    return (
        <div className='cart-widget'>
            <ShoppingBagIcon/>
            <div className="qty-display">0</div>
        </div>
    )
}

export default CartWidget