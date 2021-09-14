import classes from './Maincontent.module.css'
import Products from './Products/Products';


function Maincontent(props) {
    return (
        <div className={classes.container}>
            {props.children}
            <div> 
                <Products/>
            </div>
        </div>
    )
}
export default Maincontent;



