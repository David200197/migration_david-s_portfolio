import { getService } from "@/modules/core/utils/di-utils";
import { ProfileContainer } from "../components/ProfileContainer";
import { ProfileService } from "../services/profile-service";
import { AstronautAvatar } from "../components/AstronautAvatar";
import { PersonalDetailIcon } from "../../core/components/PersonalDetailIcon";

const profileService = getService(ProfileService);
const profile = profileService.getProfile();

export const PersonalInfo = () => (
  <ProfileContainer>
    <h1 className="text-center text-white text-2xl">About Me</h1>
    <div className="flex flex-col lg:flex-row mt-6 md:mt-3">
      <div className="flex flex-col w-full items-center justify-center">
        <AstronautAvatar className="w-[200px] h-[200px] lg:w-[270px] lg:h-[270px] lg:mt-0" />
        <p className="text-center text-white text-base mt-6">
          {profile.getDescription()}
        </p>
        <div className="grid grid-cols-3 gap-4 lg:flex mt-4">
          {profile.getLinks().map((link) => (
            <PersonalDetailIcon
              key={link.icon}
              personalDetail={link}
              color="#fff"
              fill="#fff"
              style={{ margin: "0 10px" }}
              className="w-[30px] lg:w-[30px]"
              width="30px"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center w-full justify-center mt-15 lg:mt-0">
        <h1 className="text-center text-white text-2xl">Skills</h1>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-8 w-[150px] lg:w-[270px] mt-6 justify-items-center">
          {profile.getSkills().map((skill) => (
            <PersonalDetailIcon
              key={skill.icon}
              personalDetail={skill}
              color="#fff"
              fill="#fff"
              width="30px"
            />
          ))}
        </div>
      </div>
    </div>
  </ProfileContainer>
);
