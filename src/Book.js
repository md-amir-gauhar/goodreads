import "./styles.css";

const Book = ({ name, image, rating }) => {
  return (
    <div className="books">
      <img src={image} alt={name} className="book-img" />
      <div className="book-info">
        <h3 className="book-name">{name}</h3>
        <p className="book-rating">{rating}/5</p>
      </div>
    </div>
  );
};

export default Book;
