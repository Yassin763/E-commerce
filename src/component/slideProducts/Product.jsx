import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import formatCurrency from "./formatCurrancy";
import { Link } from "react-router-dom";
function Product({ item }) {
    return (
        <>
        {
            console.log(item)
            
        }
            <div className="product">
                <Link to={`/products/${item.id}`}>
                    <div className="img_product">
                        <img src={item.images[0]} alt="" />
                    </div>
                    <p className="name_product">{item.title}</p>
                    <div className="stars">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStarHalf />
                    </div>
                    <p className="price"><span>{formatCurrency(item.price)}</span></p>
                </Link>
                <div className="icons">
                    <span><FaCartArrowDown /></span>
                    <span><FaRegHeart /></span>
                    <span><FaShare /></span>
                </div>
            </div>
        </>
    );
}

export default Product;