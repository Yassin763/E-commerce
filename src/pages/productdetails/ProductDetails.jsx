import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import formatCurrency from "../../component/slideProducts/formatCurrancy";
import './ProductDetails.css'
function ProductDetails() {
    const { id } = useParams()
    const [loading, setloading] = useState(true)
    const [product, setProduct] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`)
                const data = await res.json()
                setProduct(data)
            } catch (error) {
                console.log(error)
            } finally {
                setloading(false)
            }
        }
        fetchData()
    }, [id])
    if (loading) return <p>loading...</p>
    if (!product) return <p>product not found</p>
    return (
        <> 
        {
            console.log(product)
        }
            <div className="item_details">
                <div className="container">

                    <div className="imgs_item">
                        <div className="big_img">
                            <img src={product.images[0]} alt={product.title} />
                        </div>
                        <div className="small_item">
                            {
                                product.images.map((img, index) => (
                                    <img key={index} src={img} alt={product.title} />
                                ))
                            }
                        </div>
                    </div>


                    <div className="details_item">
                        <h1 className="name">{product.title}</h1>
                        <div className="stars">
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStarHalf />
                        </div>
                        <p className="price"><span>{formatCurrency(product.price)}</span></p>

                        <h5>Availability: <span>{product.availabilityStatus}</span></h5>
                        <h5>Brand: <span>{product.brand}</span></h5>
                        <p className="desc">{product.description}</p>
                        <h5><span>Hurry Up! Only {product.stock} products left in stock.</span></h5>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;