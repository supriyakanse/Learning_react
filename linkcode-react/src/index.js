import ReactDOM from 'react-dom';
import style from './index.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
ReactDOM.render(
  <>
    <Header/><br/>
    <hr/>
   <Main name="Name" value="Supriya Kanse"/>
   <Main name="Language" value="JavaScript"/>
   <Main name="Role" value="React dev"/><br/><hr/>
   <Footer dayCount='1' dayWhen='Today'/>
  </>,
  document.getElementById('root'),
  () => { console.log("done") }
)