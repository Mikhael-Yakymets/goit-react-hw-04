import css from './ImageCard.module.css';

const ImageCard = ({ item }) => {
  return (
    <div>
      <img
        className={css.gallaryImg}
        src={item.urls.small}
        alt={item.alt_description}
      />
    </div>
  );
};

export default ImageCard;
