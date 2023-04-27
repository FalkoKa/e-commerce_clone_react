import './Item.css';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Item(props) {
  return (
    <div className="item">
      <div className="item-summary">
        <img
          src="https://img01.ztat.net/article/spp-media-p1/d04459c1e3af42859c371ef15953686b/cfd85f61ba184247915f17ea74810936.jpg?imwidth=1800"
          alt="item"
        />
        <div className="item-info">
          <h4>Title</h4>
          <p>
            Description Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Nam quisquam accusamus, voluptate expedita.
          </p>
          <p>Color: red</p>
          <p>Size: 23</p>
          <button>
            <DeleteIcon /> <span>Remove</span>
          </button>
        </div>
      </div>
      <div className="price">
        <select name="quantity" id="quantity">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
        <p>29.99 $</p>
      </div>
    </div>
  );
}
