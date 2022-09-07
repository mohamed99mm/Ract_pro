import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">

            <h1>The dojo blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    // inline style values 
                    // color: "white",
                    // backgroundColor: '#ef4b7c', 
                    // borderRadius: '8px'
                }}>New Blog</Link>
            </div>
            
            </nav>
    );
}
 
export default Navbar;