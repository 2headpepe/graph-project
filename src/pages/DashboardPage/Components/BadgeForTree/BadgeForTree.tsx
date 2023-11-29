import React from "react";
import { Card, Button, Typography } from "antd";
import { HeartOutlined, CopyOutlined, EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons"
import styles from "./BadgeForTree.module.css";
import Link from "antd/es/typography/Link";

type BadgeForTreeProps = {
    tree: {
        uid: string;
        name: string,
        description: string,
        public: boolean,
        publicGrades: boolean,
        author: string
    };
};

const BadgeForTree: React.FC<BadgeForTreeProps> = ({ tree }) => {

    const handleCopyClick = () => {
        // copy
    }

    const toTree = '/tree/' + tree.uid;

    return (
        <div className={styles.BadgeForTree}>
            <Card 
                title={tree.name}
                extra={
                    <Link href={toTree} style={{color: 'white'}}>More</Link>
                }
                headStyle={{ 
                    backgroundColor: '#5b83cc', 
                    color: '#ffffff' 
                }}
                bodyStyle={{ 
                    backgroundColor: '#dae5eb',
                    paddingTop: 0,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 20
                }}
            >
                <p>{tree.description}</p>
                <div className={styles.AdditionalData}>
                    {/* <div>
                        <HeartOutlined style={{ marginRight: 8 }} />
                        <Typography.Text strong>{tree.likes}</Typography.Text>
                    </div> */}
                    <div>
                        {(tree.public) ? <EyeOutlined/> : <EyeInvisibleOutlined/>}
                        <Typography.Text strong>{tree.public ? " public" : " private" }</Typography.Text>
                    </div>
                    <Button icon={<CopyOutlined />} onClick={handleCopyClick}></Button>
                </div>
            </Card>
        </div>
    );
};

export default BadgeForTree;