import { connect } from "react-redux";
import { Avatar } from "@material-ui/core";

import { NavOptionsdata } from "../../data/NavOptionsData";
import NavOption from "../NavOption/NavOption";
import styles from "./navOptions.module.css";

const NavOptions = (props)=>{
    const t1 = props.fullName ? "Hello " + props.fullName : "Hello ";
    
    const lnk = props.isAuth ? "/signout": "/auth";

    return (
        <div className={styles.container}>
            {NavOptionsdata.map((item,index)=>(
                <NavOption
                    key={index}
                    title={item.title}
                    Icon={item.Icon}
                    link={item.link}
                />
            ))}
            <NavOption
                title={t1}
                Icon= {Avatar}
                link=   {lnk}
            />
        </div>
    )
}

const mapStateToProps = (state)=> {
    return {
        isAuth: state.auth.isAuth,
        fullName: state.auth.fullName
    };
};
export default connect(mapStateToProps)(NavOptions);
// export default (NavOptions);