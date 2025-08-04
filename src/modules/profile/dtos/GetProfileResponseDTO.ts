export interface PersonalDetailDTO {
  icon: string;
  ref: string;
  tooltip: string;
}

export interface GetProfileResponseDTO {
  description: string;
  links: PersonalDetailDTO[];
  skills: PersonalDetailDTO[];
}
