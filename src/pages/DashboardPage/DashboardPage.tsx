import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { getUser } from "../../store/reducers/user/userActions";
import { AppDispatch, RootState } from "../../store/store";
import BadgeForTree from "./Components/BadgeForTree/BadgeForTree";
import BadgeForUser from "./Components/BadgeForUser/BadgeForUser";
import GridOfBadges from "./Components/GridOfBadges/GridOfBadges";
import { ColorRing } from "react-loader-spinner";
import { loginUser } from "../../store/reducers/auth/actionCreators";
import { useNavigate } from "react-router-dom";


const DashboardPage: React.FC = () => {

    const dispatch: AppDispatch = useDispatch();
    const userData = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getUser());
    }, []);

    if(userData.error) {
        navigate('/error/'+userData.error);
    }

    return (

        <>
            {!userData || userData.isLoading || !userData.data ? (
                <div style={{height:"100vh",display:"flex", alignItems:"center", justifyContent:"center"}}>
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={["#001529", "#25415C", "#76C9DF", "#99CEFF", "#C4DDF5"]}
                />
              </div>
            ) : (
                <div>
                    <HeaderComponent isMainPage={true}/>
                    <div style={{ display: "flex"}}>
                        <BadgeForUser isItMe={true}/>
                        <div style={{margin: "2%"}}>
                            <GridOfBadges/>
                        </div>
                    </div>
                </div>
            )}
        </>

        // <div>
        //     <HeaderComponent username="yana.stradamus" isMainPage={true}/>
        //     {/* <div style={{ display: "flex"}}>
        //         <BadgeForUser isItMe={true}/>
        //         <div style={{margin: "2%"}}>
        //             <GridOfBadges trees={trees}/>
        //         </div>
        //     </div> */}
        // </div>
    )
}

export default DashboardPage;
