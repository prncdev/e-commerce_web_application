import './Catagory-item.styles.scss';
import CatagoryImage from '../catagory-image/Catagory-image.component';

const CatagoryItem = function ({catagory}) {
  const {title, imageUrl} = catagory;
  return (
    <section className='category-container'>
      <CatagoryImage image={imageUrl}/>
      <section className='category-body-container'>
        <h2 className='product-title'>{title}</h2>
        <p>Shop Now</p>
      </section>
    </section>
  );
}

export default CatagoryItem;