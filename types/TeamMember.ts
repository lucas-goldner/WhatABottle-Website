type Social = {
  id: string;
  username: string;
  media: string;
};

export type TeamMember = {
  id: string;
  name: string;
  designation: string;
  thumb: string;
  socials: Social[];
};
