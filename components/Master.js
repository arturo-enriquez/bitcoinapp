import Head from 'next/head';
import Navegacion from '../components/Navegacion';

const MasterPage = (props) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <title>Bitcoin App</title>

      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
    </Head>
    <Navegacion/>

    <div className="container my-4">
      {props.children}
    </div>

  </div>
);

export default MasterPage;