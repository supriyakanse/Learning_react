import ReactDOM from 'react-dom';

const mainStyle={
    textAlign: 'center',
}
function Main(props){
    return <p style={mainStyle}>{ `${props.name} : ${props.value}`}</p>;
}
export default Main;

