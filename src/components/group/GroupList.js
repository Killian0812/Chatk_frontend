//GroupList.js
import React from "react";
import GroupBox from "./GroupBox";
import './group.css'

const GroupList = () => {
    const group = {
        groupName: "Demo",
        icon: "https://www.kodingwife.com/demos/ichat/light-version/img/group4.svg",
        id: "1",
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
            },
            {
                idUser: "3",
                nameUser: "A3",
                iconUser: "https://external-preview.redd.it/VJjeNbJwVx5M3KuBsArppbiwA7EHP4zZSGnjfzwh9m8.jpg?width=1080&crop=smart&auto=webp&s=53e98287cc6f1b801e44e2adbbc7a4be85eab133"
            }
        ]
    }

    return (
        <div className="py-0 flex flex-col overflow-hidden max-h-[570px]">
            <div className="overflow-auto">
                <GroupBox group={group} />
                <GroupBox group={group} />
                <GroupBox group={group} />
                <GroupBox group={group} />
                <GroupBox group={group} />
                <GroupBox group={group} />
            </div>
        </div>
    );
}

export default GroupList