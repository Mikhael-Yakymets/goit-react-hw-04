import css from './ImageGallary.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallary = ({ items }) => {
  return (
    <div className={css.container}>
      <ul className={css.gallary}>
        {items.map((item) => (
          <li className={css.gallaryItem} key={item.id}>
            <ImageCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallary;
