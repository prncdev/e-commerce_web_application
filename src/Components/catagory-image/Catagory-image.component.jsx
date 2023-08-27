import './catagory-image.styles.scss';

function CatagoryImage({ image }) {
  {/* In order to have inline css on a JSX element, we can do that with `style` props and double curly brackets. */}
  return <div className='background-image' style={{ backgroundImage: `url(${image})` }} />
}

export default CatagoryImage;