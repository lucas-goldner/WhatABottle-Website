import { Social } from "./Social";

export type TeamMember = {
  id: string;
  name: string;
  designation: string;
  thumb: string;
  socials: Social[];
};
