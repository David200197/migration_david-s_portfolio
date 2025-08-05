import { getService } from "@/modules/core/utils/di-utils";
import { ProfileContainer } from "../components/ProfileContainer";
import { ProfileService } from "../services/profile-service";
import { AstronautAvatar } from "../components/AstronautAvatar";
import { PersonalDetailIcon } from "../components/PersonalDetailIcon";

const profileService = getService(ProfileService);
const profile = profileService.getProfile();

export const PersonalInfo = () => (
  <ProfileContainer>
    <h1 className="text-center text-white text-2xl">About Me</h1>
    <div className="flex mt-3">
      <div className="flex flex-col w-full items-center justify-center">
        <AstronautAvatar />
        <p className="text-center text-white text-base mt-6">
          {profile.getDescription()}
        </p>
        <div className="flex mt-4">
          {profile.getLinks().map((link) => (
            <PersonalDetailIcon
              key={link.icon}
              personalDetail={link}
              svgProps={{
                color: "#fff",
                fill: "#fff",
                style: { margin: "0 10px" },
                width: "30px",
              }}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center w-full justify-center">
        <h1 className="text-center text-white text-2xl">Skills</h1>
        <div className="grid grid-cols-4 gap-8 w-[270px] mt-6 justify-items-center">
          {profile.getSkills().map((skill) => (
            <PersonalDetailIcon
              key={skill.icon}
              personalDetail={skill}
              svgProps={{
                color: "#fff",
                fill: "#fff",
                width: "30px",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  </ProfileContainer>
);
