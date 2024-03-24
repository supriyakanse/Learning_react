import {Link} from "react-router-dom";
function Home(){
    return (
<>
<ul>
<Link to="/">
<li>Home</li>
</Link>

<Link to="/login">
<li>Login</li>
</Link>

<Link to="/optLogin">
<li>Opt Login</li>
</Link>

<Link to="/NavBar">
<li>Portfolio</li>
</Link>

<Link to="/contact">
<li>Contact</li>
</Link>

<Link to="/read">
<li>Read</li>
</Link>

<Link to="/aboutus">
<li>Aboutus</li>
</Link>

</ul>



</>
    );
}
export default Home;