import { useParams } from "react-router-dom";
import { products } from "../../../ProductsMock";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const item = products.find((product) => product.id === parseInt(id));

  if (!item) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="item-detail-container" style={{ marginTop: "5px", marginLeft: "20px", marginBottom: "100px" }}>



      <div className="warranty">Garantía de por vida</div>

      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Precio: {item.price}</p>

      <div className="rating">
        <span role="img" aria-label="star">
          ⭐⭐⭐⭐☆
        </span>
        <span> (639 votos)</span>
      </div>

      <div className="details">
        <h3>Detalles del producto:</h3>
        <p>Tipo: {item.type}</p>
        <p>Pequeña descripción: {item.description}</p>
      </div>

      <div className="colors">
        <h3>Colores disponibles:</h3>
        <ul>
          {item.colors &&
            item.colors.map((color, index) => <li key={index}>{color}</li>)}
        </ul>
      </div>

      <div className="sizes">
        <h3>Tamaños disponibles:</h3>
        <ul>
          {item.sizes &&
            item.sizes.map((size, index) => <li key={index}>{size}</li>)}
        </ul>
      </div>

      <div className="addons">
        <p>¿Quieres agregar Limpiardor de Mat y paño? +$35.000</p>
      </div>

      <div className="add-to-cart">
        <button>AGREGAR A CARRITO</button>
      </div>

      <div className="shipping-info">
        <p>
          Envío gratis a partir de $75.000 y devolución gratis dentro 30 días
          máximo.
        </p>
      </div>

      <div className="add-all-to-cart">
        <button>Agregar todos los productos al carrito</button>
      </div>

      <div className="additional-sections">
        <h3>Generalidades:</h3>
        <p>Texto de generalidades aquí...</p>
        <h3>Especificaciones:</h3>
        <p>Texto de especificaciones aquí...</p>
        <h3>Usos & Cuidados:</h3>
        <p>Texto de usos y cuidados aquí...</p>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
