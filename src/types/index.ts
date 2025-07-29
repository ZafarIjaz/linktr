export interface Link {
  id: number;
  title: string;
  url: string;
  icon: string;
  color: string;
}

export interface Profile {
  name: string;
  username: string;
  location: string;
  status: string;
  avatar: string;
}

export interface SocialShareOption {
  label: string;
  icon: string;
  bgColor: string;
}

export interface SocialMediaIcon {
  name: string;
  icon: string;
  url: string;
}

export interface LinktreeData {
  profile: Profile;
  links: Link[];
  socialMediaIcons: SocialMediaIcon[];
  socialShareOptions: SocialShareOption[];
}
