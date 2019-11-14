import MasterPage from "../components/Master";
import Precio from "../components/Precio";
import Noticias from "../components/Noticias";
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
  <MasterPage>
    <div className="row">
      <div className="col-12">
        <h2 className="my-4">Precio del Bitcoin</h2>
        <Precio 
          precio={props.precioBitcoin}
        />
      </div>

      <div className="col-md-12">
        <h2 className="my-4">Noticias Sobre Bitcoin</h2>
        <Noticias
          noticias={props.noticias}
        />
      </div>
    </div>
  </MasterPage>
);

Index.getInitialProps = async () => {
  const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');
  const resPrecio = await precio.json();

  const noticias = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=ceaf76c317f7497696a0d6460118f3fc&language=es`);
  const resNoticias = await noticias.json();

  return {
    precioBitcoin: resPrecio.data.quotes.USD,
    noticias: resNoticias.articles
  }
}

export default Index;
