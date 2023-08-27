import './categories-container.styles.scss';
import CatagoryItem from "../catagory-items/Catagory-item.component.";

const CatagoriesContainer = function({ catagories }) {
  return (
    <section className="categories-container">
      {catagories.map((catagory) => (
        <CatagoryItem key={catagory.id} catagory={catagory} />
      ))}
    </section>
  )
}

export default CatagoriesContainer;