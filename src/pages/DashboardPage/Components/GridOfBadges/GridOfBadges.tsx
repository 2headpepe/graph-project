import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import BadgeForTree from "../BadgeForTree/BadgeForTree";
import { Row, Col } from "antd";
import { AppDispatch, RootState } from "../../../../store/store";
import { getTree } from "../../../../store/reducers/tree/treeActions";
import { ColorRing } from "react-loader-spinner";

interface tree {
    id: number;
    name: string;
    description: string;
    likes: number;
    is_public: boolean;
};

interface GridOfBadgesProps {
    trees: tree[];
}

const GridOfBadges: React.FC = () => {

    const dispatch: AppDispatch = useDispatch();
    const trees = useSelector((state: RootState) => state.tree2.trees);
    const author_id = useSelector((state: RootState) => state?.user?.data?.uid)

    useEffect(() => {
        dispatch(getTree({
            page: 1,
            per_page: 9,
            author: author_id??''
        }))
    }, []);

    return (
        <>
            {!trees || trees.isLoading || !trees.trees ? (
                <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <div style={{marginLeft: "32vw", marginTop: "33vh"}}>
                        <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{position: "relative"}}
                            wrapperClass="blocks-wrapper"
                            colors={["#001529", "#25415C", "#76C9DF", "#99CEFF", "#C4DDF5"]}
                        />
                    </div>
                </div>
            ) : (
                <div style={{width: "70vw"}}>
                    <Row gutter={[32, 32]}>
                        {trees.trees?.map((tree:any) => (
                        <Col span={8} key={tree.uid}>
                            <BadgeForTree tree={tree}/>
                        </Col>
                        ))}
                    </Row>
                </div>
            )
            }
        </>
    )
}

export default GridOfBadges;