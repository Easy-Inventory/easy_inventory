import { StyledProductCard } from "./style";
import {AiOutlinePlus, AiOutlineMinus, AiTwotoneEdit, AiOutlineEye} from 'react-icons/ai';
import { IProduct } from '../../provides/TypesProduct';
import { useContext } from 'react';
import { ProductsContext } from '../../provides/ProductsContext';

interface IProductCardProps{
    product: IProduct;
}

export const ProductCard = ({product}: IProductCardProps) => {

    const {addProduct, subtractProduct, openProductModalFunction} = useContext(ProductsContext)
    return (
        <StyledProductCard>
            <div className="content">

                <div className="imageContainer">
                    <img src={product.image} alt={`Foto de ${product.name}`}/>
                </div>

                <div className="info">
                    <p>{product.name}</p>
                    <small>{product.category}</small>
                    <div className="removeAdnEdit">
                        <button onClick={()=> openProductModalFunction(product)}>Ver mais</button>
                    </div>
                </div>

            </div>

            <div className="buttonsAndPrice">
                <div className="quatityButtons">
                    <button onClick={()=>subtractProduct(product)}> <AiOutlineMinus /> </button>
                    <small>{product.qtd}</small>
                    <button onClick={()=>addProduct(product)}> <AiOutlinePlus /> </button>
                </div>

                <p className="price">{`R$${Number(product.price).toFixed(2).split('.').join(',')}`}</p>
            </div>


        </StyledProductCard>
    )
}