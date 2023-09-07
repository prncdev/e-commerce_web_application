import './catagory-image.styles.scss';

function CatagoryImage({ image }) {
  return <div className='background-image' style={{ backgroundImage: `url(${image})` }} />
}

export default CatagoryImage;