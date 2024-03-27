
import './App.css';

function App() {
  return (
      <div className="App">
        <h3>Products</h3>

        <section>
          <Product name="SunflowerOil" price="156/-" expiry="dec 06 2021"/>
          <Product name="ParachuteOil" price="156/-" expiry="april 06 2023"/>
          <Product name="GingerOil" price="156/-" expiry="sep 06 2024"/>
          <Product name="FlourOil" price="156/-" expiry="aug 06 2022"/>
        </section>





      </div>   
  );
}


function Product(props) {
  return <div className="product">
    <h2>{props.name}</h2>
    <p>{props.price}</p>
    <p>{props.expiry}</p>
  </div>






}

export default App;
