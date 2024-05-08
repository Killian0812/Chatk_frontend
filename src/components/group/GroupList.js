//GroupList.js
import React, { useState } from "react";
import GroupBox from "./GroupBox";

const GroupList = () => {

    var listFake = [
        {
            groupName: "Demo1",
            icon: "https://www.kodingwife.com/demos/ichat/light-version/img/group4.svg",
            id: "1",
            statusDelete: false,
            member: [
                {
                    idUser: "1",
                    nameUser: "A1",
                    iconUser: "https://external-preview.redd.it/VJjeNbJwVx5M3KuBsArppbiwA7EHP4zZSGnjfzwh9m8.jpg?width=1080&crop=smart&auto=webp&s=53e98287cc6f1b801e44e2adbbc7a4be85eab133"
                },
                {
                    idUser: "2",
                    nameUser: "A2",
                    iconUser: "https://external-preview.redd.it/VJjeNbJwVx5M3KuBsArppbiwA7EHP4zZSGnjfzwh9m8.jpg?width=1080&crop=smart&auto=webp&s=53e98287cc6f1b801e44e2adbbc7a4be85eab133"
                }
            ]
        },
        {
            groupName: "Demo2",
            icon: "https://www.kodingwife.com/demos/ichat/light-version/img/group4.svg",
            id: "2",
            statusDelete: false,
            member: [
                {
                    idUser: "1",
                    nameUser: "A1",
                    iconUser: "https://external-preview.redd.it/VJjeNbJwVx5M3KuBsArppbiwA7EHP4zZSGnjfzwh9m8.jpg?width=1080&crop=smart&auto=webp&s=53e98287cc6f1b801e44e2adbbc7a4be85eab133"
                },
                {
                    idUser: "2",
                    nameUser: "A2",
                    iconUser: "https://external-preview.redd.it/VJjeNbJwVx5M3KuBsArppbiwA7EHP4zZSGnjfzwh9m8.jpg?width=1080&crop=smart&auto=webp&s=53e98287cc6f1b801e44e2adbbc7a4be85eab133"
                }
            ]
        },
        {
            groupName: "Demo3",
            icon: "https://www.kodingwife.com/demos/ichat/light-version/img/group4.svg",
            id: "3",
            statusDelete: false,
            member: [
                {
                    idUser: "1",
                    nameUser: "A1",
                    iconUser: "https://external-preview.redd.it/VJjeNbJwVx5M3KuBsArppbiwA7EHP4zZSGnjfzwh9m8.jpg?width=1080&crop=smart&auto=webp&s=53e98287cc6f1b801e44e2adbbc7a4be85eab133"
                },
                {
                    idUser: "2",
                    nameUser: "A2",
                    iconUser: "https://external-preview.redd.it/VJjeNbJwVx5M3KuBsArppbiwA7EHP4zZSGnjfzwh9m8.jpg?width=1080&crop=smart&auto=webp&s=53e98287cc6f1b801e44e2adbbc7a4be85eab133"
                }
            ]
        },

    ]

    const [listGroup, setListGroup] = useState(listFake)

    const handleDeleteGroup = () => {
        const newListGroup = listGroup.filter((l) => l.statusDelete !== true)
        setListGroup(newListGroup)
    } 

    return (
        <div className="py-0 flex flex-col overflow-hidden max-h-[535px]">
            <div className="overflow-auto">
                {
                    listGroup.map(listFakeGroup => (
                        <GroupBox key={listFakeGroup.id} group={listFakeGroup} onDeleteGroup={handleDeleteGroup} />
                    ))
                }
            </div>
        </div>
    );
}

export default GroupList