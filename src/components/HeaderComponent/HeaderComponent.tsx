import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout, Button, Modal, Input, Checkbox } from "antd";
import styles from "./HeaderComponent.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../../store/store";
import FormItem from "antd/es/form/FormItem";
import { postTree } from "../../store/reducers/tree/treeActions";

const { Header } = Layout;

interface HeaderComponentProps {
    isMainPage: boolean;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ isMainPage }) => {
    // const user = useSelector((state: RootState) => state.user.data);
    const dispatch: AppDispatch = useDispatch();
    const username = useSelector((state: RootState) => state.user.data?.username);
    const curTreeId = useSelector((state: RootState) => state.tree2?.currentTree?.tree?.uid)
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [treeName, setTreeName] = useState("");
    const [treeDescription, setTreeDescription] = useState("");
    const [isPublic, setIsPublic] = useState(true);
    const [publicGrades, setPublicGrades] = useState(true)

    const showModal = () => {
        setIsModalOpen(true);
    }

    const clearTreeData = () => {
        setTreeName("");
        setTreeDescription("");
        setIsPublic(true);
        setPublicGrades(true);
    }

    const handleCancel = () => {
        setIsModalOpen(false);
        clearTreeData();
    }

    const handleOk = () => {
        setIsModalOpen(false);
        dispatch(postTree({
            name: treeName,
            description: treeDescription,
            public: isPublic,
            publicGrades: publicGrades
        }))
        clearTreeData();
        navigate('/tree/' + 1);
    };

    const handleTreeNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTreeName(e.target.value);
    }

    const handleTreeDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTreeDescription(e.target.value);
    }

    const handleIsPublicChange = (e: any) => {
        setIsPublic(e.target.checked);
    }

    const handlePublicGradesChange = (e: any) => {
        setPublicGrades(e.target.checked);
    }

    return (
        <Header className={styles.mainHeader}>

            <div className={styles.leftText}>
                <h2 className={styles.mainName}>
                    METRIK
                </h2>
                <p className={styles.communityName}>
                    {username} | Community
                </p>
            </div>

            <div>
                {isMainPage && (
                    <Button type="primary" onClick={showModal}>
                        {/* <Link to="/tree" className={styles.buttonLabel}>Tree</Link> */}
                        <div className={styles.buttonLabel}>Tree</div>
                    </Button>
                    )
                }
            </div>

            <Modal 
                title="Create Tree" 
                open={isModalOpen} 
                onCancel = {handleCancel}
                onOk = {handleOk}
            >
                <FormItem>
                    <Input 
                        placeholder="Name"
                        value={treeName}
                        onChange={handleTreeNameChange}
                    />
                </FormItem>
                <FormItem>
                    <Input 
                        placeholder="Description"
                        value={treeDescription}
                        onChange={handleTreeDescriptionChange}
                    />
                </FormItem>
                <Checkbox
                    checked={isPublic}
                    onChange={handleIsPublicChange}
                >Public</Checkbox>
                <Checkbox
                    checked={publicGrades}
                    onChange={handlePublicGradesChange}
                >Public grades</Checkbox>
            </Modal>
        </Header>
    );
}

export default HeaderComponent;