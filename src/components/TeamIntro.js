import React, { useState, useEffect } from "react";

function TeamIntro() {
  const [avatarsVisible, setAvatarsVisible] = useState(false);
  const [logoScale, setLogoScale] = useState(false);
  const [flippedAvatars, setFlippedAvatars] = useState(Array(3).fill(false));

  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoScale(true);
    }, 1000);

    const avatarsTimer = setTimeout(() => {
      setAvatarsVisible(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(avatarsTimer);
    };
  }, []);

  const handleAvatarClick = (avatarIndex) => {
    setFlippedAvatars((prev) =>
      prev.map((value, index) => (index === avatarIndex ? !value : value))
    );
  };

  const membersData = [
    {
      id: "2021xxxx",
      name: "Penaldo",
      role: "Developer",
      imageUrl:
        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/03/28/12/cristiano-ronaldo.jpg?quality=75&width=1200&auto=webp",
    },
    {
      id: "2021xxxx",
      name: "Kim Ri Cha",
      role: "Hậu vệ",
      imageUrl:
        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/03/28/12/cristiano-ronaldo.jpg?quality=75&width=1200&auto=webp",
    },
    {
      id: "2021xxxx",
      name: "Bảy Cỏ",
      role: "Võ sư",
      imageUrl:
        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/03/28/12/cristiano-ronaldo.jpg?quality=75&width=1200&auto=webp",
    },
  ];

  return (
    <div className="h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col justify-center items-center gap-10">
      {/* Resize logo */}
      <img
        src="/logo512.png"
        className={`w-[150px] h-[150px] drop-shadow-xl bg-transparent transition-transform transform duration-1000 ${
          logoScale ? "scale-150" : "scale-0"
        }`}
        alt="Logo"
      />
      {/* Avatars */}
      <div
        className={`bg-transparent flex flex-row gap-12 mt-8 transform transition-transform duration-1000 ${
          avatarsVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {membersData.map((avatar, index) => (
          <div
            key={avatar.id}
            className={`avatar flex flex-col items-center justify-center transition-opacity duration-1000 text-white font-bold gap-0 ${
              avatarsVisible ? "opacity-100" : "opacity-0"
            } `}
            onClick={() => handleAvatarClick(index)}
          >
            <div className="hover:-translate-y-1 hover:scale-110 w-24 h-24 rounded-full ring ring-primary ring-offset-2 object-cover [perspective:1000px]">
              <div
                className={`relative w-full h-full transition-transform [transform-style:preserve-3d] ${
                  flippedAvatars[index] ? "[transform:rotateX(180deg)]" : ""
                }`}
              >
                {/* Front side */}
                <div className="absolute w-full h-full [backface-visibility:hidden] rounded-full bg-transparent">
                  <img
                    src={avatar.imageUrl}
                    alt={`Avatar ${avatar.id}`}
                    className="w-full h-full rounded-full"
                  />
                </div>
                {/* Back side */}
                <div
                  className={`  w-full h-full flex items-center justify-center bg-blue-500 text-white text-center    ${
                    flippedAvatars[index] ? "[transform:rotateX(180deg)]" : ""
                  }`}
                >
                  <span className="block">{avatar.role}</span>
                </div>
              </div>
            </div>
            {/* Avatar information */}
            <span className="mt-3">{avatar.name}</span>
            <span>{avatar.id}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamIntro;
