import { Product } from "../../utils/types";
import OverlayProductControls from "../OverlayProductControls/OverlayProductControls";
import { imgResizer, numberToBRL, discountColor, wineColor } from "../utils";
import { OverlayCardContainer } from "./ProductOverlayCardStyle";

export default function ProductOverlayCard(props: { key: number, dataCard: Product }) {
  const { dataCard } = props;

  return (
    <OverlayCardContainer id={`popup${dataCard.id}`} className="overlay">
      <div className="popup">
        <a className="close" href="#">&times;</a>
        <div className="content">
          <img
            src={imgResizer(dataCard.image, 758)}
            alt={dataCard.name}
            data-testid={`products_img-card-bg-image-${dataCard.id}`}
          />
          <aside className='details-side-area'>
            <span className='product-name' data-testid={`products_element-card-title-${dataCard.id}`}>
              {dataCard.name}
            </span>
            <span className='amount'>{dataCard.size}</span>
            { /* <span className='no-discount-price'>R${numberToBRL(`${(dataCard.price).toFixed(2)}`)} </span>*/}
            <span className='main-value-1' data-testid={`products_element-card-price-${dataCard.id}`}>
              <span className='discount' style={{ backgroundColor: `${discountColor(dataCard.discount)}` }}>{dataCard.discount}%OFF</span>R$
              <span className='main-value-2'>{numberToBRL(`${(dataCard.priceMember).toFixed(2)}`).split(',')[0]}</span>
              ,{numberToBRL(`${(dataCard.priceMember).toFixed(2)}`).split(',')[1]}
            </span>
            <div className='general-price'>
              NÃO SÓCIO R$ {numberToBRL(`${(dataCard.priceNonMember).toFixed(2)}`)}
            </div>
            <div className='type-info'>
              <span className='wine-type'>
                <span className='classification-info'>{dataCard.classification} </span>
                {dataCard.type}
                <span className="demo" style={{ background: wineColor[dataCard.type] }}> </span>
              </span>
              <span className='wine-type'>{dataCard.country} <img className='demo-flag' src={dataCard.flag} alt={`Bandeira de ${dataCard.country}`} /></span>
            </div>
            <div>
              <p className="specialist-comment"><h5 className="comment-title">Comentário do Sommelier</h5>
                <h5 className="comment-title">{dataCard.avaliations === (0 || undefined) ? 'Não Avaliado' : `Nota: 5 / ${dataCard.rating} em ${dataCard.avaliations} avaliações`}</h5>
                {dataCard.sommelierComment}</p>
            </div>
            <OverlayProductControls dataCard={ dataCard }/>
          </aside>
        </div>
      </div>
    </OverlayCardContainer>
  )
}