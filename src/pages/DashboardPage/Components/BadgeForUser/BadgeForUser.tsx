import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from "../../../../store/store";
import { putUser } from "../../../../store/reducers/user/userActions";
import { Avatar, Button, Card, Input, Upload, Typography, DatePicker} from "antd";
import { UserOutlined, UploadOutlined, EditOutlined, SaveOutlined, DeleteOutlined, LinkOutlined,
    ApartmentOutlined, HeartOutlined, TeamOutlined, CheckOutlined } from "@ant-design/icons"
import Link from "antd/es/typography/Link";
import styles from "./BadgeForUser.module.css";
import FormItem from "antd/es/form/FormItem";
//import LinksDisplay from "./LinksDisplay/LinksDisplay";
import { UploadChangeParam } from "antd/es/upload";
import { IUser } from "../../../../store/reducers/user/types";

const { Text } = Typography;

interface BadgeForUserProps {
    isItMe: boolean;
}

// interface ContactLinksProps {
//     links: MyLink[];
// }

const BadgeForUser: React.FC<BadgeForUserProps> = ({ isItMe }) => {
    const dispatch: AppDispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.data);
    const [editMode, setEditMode] = useState(false);
    const [isFollowed, setIsFollowed] = useState(false);
    // const [externalLinks, setExternalLinks] = useState<MyLink[]>(user.externalLinks);

    // const ContactLinks: React.FC<ContactLinksProps> = ({ links }) => {
    //     return (
    //         <div>
    //             {links.map((link) => (
    //                 link.data && (
    //                 <div>
    //                     <Link key={link.id} href={link.data}>
    //                         <LinkOutlined />
    //                         {link.data}
    //                     </Link>
    //                 </div>
    //                 )
    //             ))}
    //         </div>
    //     )
    // } 

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {
        // dispatch(updateUser({...user, externalLinks: externalLinks}));
        setEditMode(false);
    };

    const handleResetPhoto = () => {
        // dispatch(putUser({...user, avatarUrl: ''}));
    }

    const handlePhotoUpdate = (info: any) => {
        const photoUrl = URL.createObjectURL(info.file.originFileObj);
        //console.log(photoUrl);
        // dispatch(putUser({...user, avatarUrl: photoUrl}));
    }

    // const handlePhotoUpdate = (info: UploadChangeParam) => {
    //     console.log(info.file);
    //     dispatch(updateUser({...user, photo: info.file.response.url}));
    // }

    // const handleFollowClick = () => {
    //     isFollowed ? (
    //         dispatch(putUser({...user, countOfFollowers: user.countOfFollowers - 1}))
    //     ) : (
    //         dispatch(putUser({...user, countOfFollowers: user.countOfFollowers + 1}))
    //     )
    //     setIsFollowed(!isFollowed);
    // }
    
    return (
        <Card className={styles.BadgeForUser}>
            <div className={styles.Photo}>
                {editMode ? (
                    <FormItem>
                        <div>
                            <Upload onChange={handlePhotoUpdate}
                                showUploadList={false}>
                                <Avatar size={128}
                                icon={<UploadOutlined />}
                                src={user?.avatarUrl}/>
                            </Upload>
                        </div>
                        <div>
                            {user?.avatarUrl && (
                                <DeleteOutlined style={{fontSize: 20}} onClick={handleResetPhoto}/>
                            )}
                        </div>
                    </FormItem>
                ) : (
                    <Avatar size={128}
                    icon={<UserOutlined />}
                    src={user?.avatarUrl} /> 
                )}
            </div>

            <div className={styles.Name}>
                {editMode ? (
                    <div>
                        <FormItem>
                            <Input value={user?.firstName} placeholder="First name" />
                        </FormItem>
                        <FormItem>
                            <Input value={user?.lastName} placeholder="Last name"  />
                        </FormItem>
                    </div>
                    ) : (
                    <FormItem>
                        <Text className={styles.Name}>
                            {user?.firstName ? user.firstName : "Name"}
                            {' '}
                            {user?.lastName ? user?.lastName : "Surname"}
                        </Text>
                    </FormItem>
                )}
            </div>

            <FormItem className={styles.Description}>
                {editMode ? (
                    <Input.TextArea value={user?.description} placeholder="Description"  />
                ) : (
                    <Text className={styles.Description}>{user?.description ? user.description : "New user of Metrik!"}</Text>
                )}
            </FormItem>
            
            {/* {!editMode && (
                <hr></hr>
            )} */}
{/* 
            <FormItem>
                {editMode ? (
                    <input 
                        type="date"
                        value={user.birthdate}
                        onChange = {(e) => dispatch(putUser({
                            ...user,
                            birthdate: e.target.value
                        }))}
                    />
                ) : (
                    <Text>
                        {user.birthdate ? user.birthdate : "Day of birth"}
                    </Text>
                )}
            </FormItem> */}

            <div className={styles.Other}>
                {editMode ? (
                    <div>
                        <FormItem>
                            <Input 
                            type="date"
                            value={user?.birthdate}
                        />
                        </FormItem>
                        <FormItem>
                            <Input value={user?.email} placeholder="E-mail" 
                            //     onChange = {(e) => dispatch(putUser({
                            //     ...user,
                            //     email: e.target.value
                            // }))}
                            />
                        </FormItem>
                        <FormItem>
                            <Input value={user?.location} placeholder="Location" />
                        </FormItem>
                        <FormItem>
                            <Input value={user?.occupance} placeholder="Occupance" />
                        </FormItem>
                    </div>
                    ) : (
                    <FormItem>
                    <div>
                        <Text>
                            {user?.birthdate ? user?.birthdate : "Day of birth"}
                        </Text>
                    </div>
                    <div>
                        <Text className={styles.Other}>
                            {user?.email ? user?.email : "E-mail"}
                        </Text>
                    </div>
                    <div>
                        <Text className={styles.Other}>
                            {user?.location ? user?.location : "E-mail"}
                        </Text>
                    </div>
                    <div>
                        <Text className={styles.Other}>
                            {user?.occupance ? user?.occupance : "E-mail"}
                        </Text>
                    </div>
                    </FormItem>
                )}
            </div>

            
            {/* {!editMode && (
                <hr></hr>
            )} */}

            {/* <div className={styles.Link}>
                {editMode ? (
                    <FormItem>
                        <LinksDisplay 
                            setLinks={setExternalLinks}
                            links={externalLinks}
                        ></LinksDisplay>
                    </FormItem>
                ) : (
                    externalLinks.length ? (
                        <ContactLinks links={externalLinks}/>
                    ) : (
                        <Text style={{fontSize: 12}}>You can leave your contacts to get in touch with you</Text>
                    )
                )}
            </div> */}

            <div className={styles.ButtonEditSaveFollow}>
                {editMode ? (
                    <Button type="primary"
                        icon={<SaveOutlined />}
                        onClick={handleSaveClick}>
                        Save
                    </Button>
                ) : (
                    <Button type="primary"
                        icon={<EditOutlined />}
                        onClick={handleEditClick}>
                        Edit
                    </Button>
                )}
            </div>

            {/* <FormItem style={{marginTop:"4vh"}}>
                {isItMe ? (
                    <div className={styles.ButtonEditSaveFollow}>
                        {editMode ? (
                            <Button type="primary"
                                icon={<SaveOutlined />}
                                onClick={handleSaveClick}>
                                Save
                            </Button>
                        ) : (
                            <Button type="primary"
                                icon={<EditOutlined />}
                                onClick={handleEditClick}>
                                Edit
                            </Button>
                        )}
                    </div>
                ) : (
                    <div className={styles.ButtonEditSaveFollow}>
                        <Button type={isFollowed ?
                            "link" : "primary"
                        }
                            onClick={handleFollowClick}>
                            {isFollowed ? (
                                <>
                                    <CheckOutlined />
                                    {' '}
                                    Followed
                                </>
                            ) : (
                                <>
                                    Follow
                                </>
                            )}
                        </Button>
                    </div>
                )}
            </FormItem> */}
        </Card>
    )
}

export default BadgeForUser;